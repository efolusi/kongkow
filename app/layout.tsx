import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { AppProviders } from "@/components/shared/app-providers"
import { SkipLink } from "@/components/shared/skip-link"
import { siteOrigin } from "@/lib/seo/hosts"

// Fonts (Figtree body / Bricolage display / JetBrains mono) ship as @font-face
// and CSS tokens from @efolusi/meridian, imported via globals.css. No next/font.

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: "Kongkow",
    template: "%s | Kongkow",
  },
  description: "Connect, share, and discover with your community",
  icons: {
    icon: "/icon.svg?v=20260917b",
    // Setting `icons` replaces the file-convention tags, so app/apple-icon.png
    // has to be listed here or iOS never sees it.
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kongkow",
    title: "Kongkow",
    description: "Connect, share, and discover with your community",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kongkow",
    description: "Connect, share, and discover with your community",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#191512" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="font-sans antialiased">
        <SkipLink />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
