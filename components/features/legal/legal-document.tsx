import type React from "react"
import Link from "next/link"
import { BrandMark } from "@/components/shared/brand-mark"
import { LEGAL_EFFECTIVE_DATE, LEGAL_ENTITY } from "@/lib/legal/constants"

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/data-deletion", label: "Data deletion" },
] as const

/** Shared shell for Kongkow's public legal pages. Server component, no session needed. */
export function LegalDocument({
  title,
  intro,
  showEffectiveDate = true,
  children,
}: {
  title: string
  intro?: React.ReactNode
  showEffectiveDate?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background min-w-0">
      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        <header className="space-y-4">
          <Link href="/" className="inline-flex rounded-lg focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Kongkow home">
            <BrandMark size={36} />
          </Link>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{title}</h1>
            {showEffectiveDate ? (
              <p className="text-sm text-muted-foreground">
                {LEGAL_ENTITY} · Effective {LEGAL_EFFECTIVE_DATE}
              </p>
            ) : null}
          </div>
          {intro ? <div className="text-base leading-relaxed text-foreground/90">{intro}</div> : null}
        </header>

        <main id="main" tabIndex={-1} className="mt-8 outline-none space-y-8 text-[0.95rem] leading-relaxed text-foreground/90">{children}</main>

        <footer className="mt-12 border-t border-border pt-6">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-medium text-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="text-muted-foreground hover:underline">Back to Kongkow</Link>
              </li>
            </ul>
          </nav>
          <p className="mt-4 text-xs text-muted-foreground">&copy; {new Date().getFullYear()} {LEGAL_ENTITY}</p>
        </footer>
      </div>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  )
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-medium text-foreground underline underline-offset-2" rel="noreferrer">
      {children}
    </a>
  )
}
