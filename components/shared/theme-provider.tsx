"use client"

import * as React from "react"

type Theme = "light" | "dark"

const STORAGE_KEY = "kongkow_theme"

const prefersDark = () =>
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false

function storedTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === "light" || value === "dark" ? value : null
  } catch {
    return null
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  // `.dark` drives Tailwind's `dark:` variants; `data-theme` is the gate Meridian
  // tokens flip through ([data-theme="dark"]). Set BOTH so the shadcn palette and
  // the Meridian design system switch together.
  root.classList.toggle("dark", theme === "dark")
  root.setAttribute("data-theme", theme)
  root.style.colorScheme = theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start from "light" so the server and the first client render agree;
  // the real theme is applied in an effect (avoids hydration mismatch #418).
  const [theme, setTheme] = React.useState<Theme>("light")
  // True once the theme comes from an explicit choice (stored locally or on the
  // account) rather than from the OS setting.
  const explicit = React.useRef(false)

  React.useEffect(() => {
    const saved = storedTheme()
    if (saved) {
      explicit.current = true
      setTheme(saved)
      applyTheme(saved)
      return
    }
    const system: Theme = prefersDark() ? "dark" : "light"
    setTheme(system)
    applyTheme(system)
  }, [])

  // Follow the OS while the viewer has not chosen a theme themselves.
  React.useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return
    const query = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (event: MediaQueryListEvent) => {
      if (explicit.current) return
      const next: Theme = event.matches ? "dark" : "light"
      setTheme(next)
      applyTheme(next)
    }
    query.addEventListener?.("change", onChange)
    return () => query.removeEventListener?.("change", onChange)
  }, [])

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light"
    explicit.current = true
    setTheme(newTheme)
    applyTheme(newTheme)
    try {
      window.localStorage.setItem(STORAGE_KEY, newTheme)
    } catch {
      // storage can be unavailable (private mode); the in-memory theme still applies
    }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

const ThemeContext = React.createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: "light",
  toggleTheme: () => { },
})

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
