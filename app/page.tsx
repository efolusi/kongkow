import type { Metadata } from "next"
import { LandingPage } from "@/components/features/landing/landing-page"

const TITLE = "Kongkow · write once, publish everywhere"
const DESCRIPTION =
  "A community feed with direct messages and groups, plus a publishing hub that sends one post to your social accounts as connectors go live. Free to use."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kongkow",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/landing/og.png", width: 1200, height: 630, alt: "The Kongkow feed" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/landing/og.png"],
  },
}

export default function HomePage() {
  return <LandingPage />
}
