import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, LegalDocument, LegalSection } from "@/components/features/legal/legal-document"
import { LEGAL_CONTACT_EMAIL } from "@/lib/legal/constants"

/*
 * The status URL a Meta data-deletion callback hands out, with its confirmation
 * code in ?id=. Kongkow cannot be connected to Facebook, Instagram or Threads
 * yet, so it holds no data from them; the page says so and needs no secret.
 * When the app and its Meta callback go live, this page moves to the app.
 */
export const metadata: Metadata = {
  title: "Data deletion status",
  robots: { index: false },
}

const inlineLink = "font-medium text-foreground underline underline-offset-2"

/** A code is echoed only when it is a plain token; anything else is dropped. */
export function confirmationCode(raw: unknown): string | null {
  return typeof raw === "string" && /^[A-Za-z0-9_-]{1,64}$/.test(raw) ? raw : null
}

export default async function DataDeletionStatusPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string | string[] }>
}) {
  const code = confirmationCode((await searchParams).id)
  return (
    <LegalDocument
      title="Your data deletion request"
      intro={
        code ? (
          <p>
            Confirmation code: <code className="font-mono text-foreground">{code}</code>
          </p>
        ) : (
          <p>This page shows the status of a data deletion request sent from Facebook, Instagram or Threads.</p>
        )
      }
    >
      <LegalSection title="Status">
        <p>
          Kongkow holds no data from Facebook, Instagram or Threads: those accounts cannot be connected to Kongkow yet.
          There is nothing from them to delete, so your request is complete.
        </p>
      </LegalSection>
      <LegalSection title="Delete your Kongkow account">
        <p>
          To delete your Kongkow account and everything in it, follow the steps on{" "}
          <Link href="/data-deletion" className={inlineLink}>data deletion</Link>, or email{" "}
          <ExternalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</ExternalLink>
          {code ? <> with the code above</> : null}.
        </p>
      </LegalSection>
    </LegalDocument>
  )
}
