import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, LegalDocument, LegalList, LegalSection } from "@/components/features/legal/legal-document"
import { EFOLUSI_ACCOUNT_URL, LEGAL_CONTACT_EMAIL } from "@/lib/legal/constants"

export const metadata: Metadata = {
  title: "Data Deletion",
  description: "How to delete your Kongkow account and data yourself in Settings, or by asking us by email.",
  alternates: { canonical: "/data-deletion" },
}

const inlineLink = "font-medium text-foreground underline underline-offset-2"

export default function DataDeletionPage() {
  return (
    <LegalDocument
      title="Delete your Kongkow data"
      intro={<p>You can delete your Kongkow account and data yourself, at any time, without contacting us.</p>}
    >
      <LegalSection title="Delete your account in Settings">
        <LegalList>
          <li>Sign in to Kongkow and open <strong>Settings</strong>.</li>
          <li>Under <strong>Your data</strong>, choose <strong>Download my data</strong> first if you want a copy.</li>
          <li>Type your username to confirm and choose <strong>Delete my account</strong>.</li>
        </LegalList>
        <p>
          Deletion happens straight away. It removes your Kongkow profile, posts, comments, likes, bookmarks, follows,
          direct and group messages you sent, stories, the files you uploaded, and every connected social account
          together with its stored tokens. You are signed out of Kongkow on every device.
        </p>
        <p>
          It does not delete your Efolusi account, which you may use for other Efolusi products; manage that at{" "}
          <ExternalLink href={EFOLUSI_ACCOUNT_URL}>my.efolusi.com</ExternalLink>. Posts that a connected platform already
          published stay on that platform until you delete them there. Groups you created stay available to their other
          members. Deleted data may remain in server backups until those backups are replaced.
        </p>
        <p>
          If your account still has a Kongkow wallet from the retired wallet feature, self-serve deletion is paused so
          that no funds are lost. Email us and we will help you first.
        </p>
      </LegalSection>

      <LegalSection title="Disconnect a single account">
        <p>
          To stop Kongkow posting to one channel without deleting your account, disconnect it in the publishing hub. Its
          token is erased immediately and posts still waiting for it are cancelled.
        </p>
      </LegalSection>

      <LegalSection title="Facebook, Instagram and Threads">
        <p>
          Facebook, Instagram and Threads cannot be connected to Kongkow yet, so Kongkow holds no data from those
          accounts. If that changes, this page will explain how deletion works for them before you can connect one.
        </p>
      </LegalSection>

      <LegalSection title="Ask us instead">
        <p>
          If you cannot sign in, email <ExternalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</ExternalLink>{" "}
          from the address on your Efolusi account with the subject &quot;Kongkow data deletion&quot;. We may ask you to
          confirm that the account is yours. See the <Link href="/privacy" className={inlineLink}>privacy policy</Link>{" "}
          for what Kongkow stores.
        </p>
      </LegalSection>
    </LegalDocument>
  )
}
