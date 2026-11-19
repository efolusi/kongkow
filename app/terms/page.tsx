import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, LegalDocument, LegalList, LegalSection } from "@/components/features/legal/legal-document"
import {
  LEGAL_ADDRESS,
  LEGAL_CONTACT_EMAIL,
  LEGAL_ENTITY,
  PLATFORM_PRIVACY_URL,
  PLATFORM_TERMS_URL,
} from "@/lib/legal/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using Kongkow, the social network and publishing hub operated by PT Efolusi Dunia Teknologi.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      intro={
        <p>
          Kongkow is operated by {LEGAL_ENTITY}. Using Kongkow means you accept the{" "}
          <ExternalLink href={PLATFORM_TERMS_URL}>Efolusi platform terms</ExternalLink>, which apply to every Efolusi
          product, together with this page, which covers what is specific to Kongkow. Where the two differ on a
          Kongkow matter, this page applies.
        </p>
      }
    >
      <LegalSection title="What Kongkow is">
        <p>
          Kongkow is a social network where you post, comment, message people and join groups. It is also a publishing
          hub: you can write a post once on Kongkow and have it sent to channels you connect on other platforms, now or
          at a time you schedule.
        </p>
      </LegalSection>

      <LegalSection title="Your account">
        <p>
          You sign in with your Efolusi account. Your email, password and two-factor settings live there and are managed
          at my.efolusi.com. You are responsible for what happens under your account, so keep your sign-in safe and tell
          us at {LEGAL_CONTACT_EMAIL} if you think someone else got in.
        </p>
      </LegalSection>

      <LegalSection title="Your content">
        <p>
          You keep ownership of what you post. You give us permission to store it, show it to the people your privacy
          setting allows, and send it to the accounts you connect when you ask us to. That permission ends when you
          delete the content or your account, except for copies other people already shared or that a connected platform
          already published.
        </p>
        <p>You must not post anything that:</p>
        <LegalList>
          <li>breaks the law, or infringes someone else&apos;s rights, including copyright and privacy;</li>
          <li>harasses, threatens or abuses people, or attacks them for who they are;</li>
          <li>is spam, a scam, malware, or impersonates another person or organisation;</li>
          <li>sexually exploits anyone, or shows sexual content involving minors.</li>
        </LegalList>
        <p>We may remove content or suspend accounts that break these rules, and we act on valid legal requests.</p>
      </LegalSection>

      <LegalSection title="Connected accounts and cross-posting">
        <LegalList>
          <li>
            Only connect accounts and channels you control or are allowed to post to. Each platform has its own rules,
            and you are responsible for following them for what you publish there.
          </li>
          <li>
            Kongkow only sends the posts you choose, to the accounts you pick for that post. It never posts anything on
            its own. What we store and how is set out in the{" "}
            <Link href="/privacy" className="font-medium text-foreground underline underline-offset-2">Kongkow privacy policy</Link>.
          </li>
          <li>
            Once a platform has published a post, deleting it on Kongkow or disconnecting the account does not remove it
            from that platform. Delete it there if you need to.
          </li>
          <li>
            Platforms change their rules and can refuse or limit posts. When a send fails, Kongkow tries again a few
            times at most and then records the failure instead of retrying forever.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Scheduled posts">
        <p>
          Kongkow checks for due scheduled posts every minute and publishes them, along with their cross-posts. If a
          post is more than 24 hours past its scheduled time when Kongkow gets to it (for example after an outage), it is
          not published. It is marked as missed on your Scheduled page so you can decide whether to post it again.
        </p>
      </LegalSection>

      <LegalSection title="AI writing help">
        <p>
          The Enhance and Explain features send the text you give them to an AI model and show you a suggestion. Check
          suggestions before you post them; you are responsible for what you publish.
        </p>
      </LegalSection>

      <LegalSection title="Ending your account">
        <p>
          You can delete your Kongkow account at any time in Settings. What that removes is described on the{" "}
          <Link href="/data-deletion" className="font-medium text-foreground underline underline-offset-2">data deletion</Link>{" "}
          page. We may suspend or close an account that breaks these terms. Kongkow is provided as is, within the limits
          set out in the Efolusi platform terms.
        </p>
      </LegalSection>

      <LegalSection title="Changes and contact">
        <p>
          When these terms change, we update this page and its effective date. Kongkow is operated by {LEGAL_ENTITY},{" "}
          {LEGAL_ADDRESS}. These terms are governed by the law of the Republic of Indonesia. Questions go to{" "}
          <ExternalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</ExternalLink>. See also the{" "}
          <ExternalLink href={PLATFORM_PRIVACY_URL}>Efolusi privacy policy</ExternalLink>.
        </p>
      </LegalSection>
    </LegalDocument>
  )
}
