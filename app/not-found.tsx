import type { Metadata } from "next"
import Link from "next/link"
import { BrandMark } from "@/components/shared/brand-mark"
import { NOT_FOUND_TITLE } from "@/lib/seo/not-found"

import "@/components/features/landing/landing.css"

// Also the <title> of the document Next sends when a page calls notFound() during
// a dynamic render (an unknown profile): that document's body is painted on the
// client, so the title is what crawlers and no-JS readers see.

export const metadata: Metadata = {
  title: { absolute: NOT_FOUND_TITLE },
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="kl">
      <header className="kl-header">
        <div className="kl-wrap kl-header__row">
          <Link href="/" className="kl-brand" aria-label="Kongkow home">
            <BrandMark size={30} />
            <span className="kl-brand__word">Kongkow</span>
          </Link>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="kl-sec outline-none">
        <div className="kl-wrap kl-head">
          <span className="kl-eyebrow">Error 404</span>
          <h2>This page is not here.</h2>
          <p className="kl-lede">
            The link may be old, or the post or profile may have been removed.
          </p>
          <div className="kl-hero__ctas">
            <Link href="/" className="kl-btn kl-btn--primary">
              Go to Kongkow
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
