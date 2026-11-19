"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/shared/theme-provider"

/**
 * Light/dark switch for the signed-out landing header. Reuses the app's own
 * ThemeProvider, so an anonymous visitor still gets the system preference by
 * default and their explicit choice carries into the product after sign-in.
 */
export function LandingThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="kl-iconbtn"
    >
      <Sun className="size-4 dark:hidden" aria-hidden />
      <Moon className="hidden size-4 dark:block" aria-hidden />
    </button>
  )
}
