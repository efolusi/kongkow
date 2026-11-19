import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, LegalDocument, LegalList, LegalSection } from "@/components/features/legal/legal-document"
import { LEGAL_ADDRESS, LEGAL_CONTACT_EMAIL, LEGAL_ENTITY, PLATFORM_PRIVACY_URL } from "@/lib/legal/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What Kongkow stores, what it does with connected social accounts, how long data is kept and how to delete it.",
  alternates: { canonical: "/privacy" },
}

const inlineLink = "font-medium text-foreground underline underline-offset-2"

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      intro={
        <p>
          {LEGAL_ENTITY} runs Kongkow and is responsible for the personal data it handles. The{" "}
          <ExternalLink href={PLATFORM_PRIVACY_URL}>Efolusi privacy policy</ExternalLink> covers every Efolusi product,
          including your rights and how to reach us. This page adds what is specific to Kongkow. We do not sell your
          data.
        </p>
      }
    >
      <LegalSection title="What Kongkow stores">
        <LegalList>
          <li>
            <strong>Account:</strong> when you sign in with your Efolusi account, Kongkow receives your account id, email
            address and name. It keeps a Kongkow profile with your username, display name and whatever you add: bio,
            photo, banner, location and website.
          </li>
          <li>
            <strong>What you create:</strong> posts (including scheduled ones), comments, likes, bookmarks, follows,
            direct messages, group messages, stories, and the files you upload with them. Uploaded files are kept in
            storage on servers we operate.
          </li>
          <li>
            <strong>Cross-posting records:</strong> for each post you send to a connected account, the platform, the
            send status, the id or link the platform returned, and any error.
          </li>
          <li>
            <strong>Technical data:</strong> sign-in cookies, and server logs (such as IP address and browser type) used
            to run and protect the service. Pages are delivered through Cloudflare, which handles the same request data
            to protect the site and adds its cookie-free Web Analytics script to count page views.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Connected social accounts">
        <p>
          Today you can connect Telegram channels. Other platforms shown in the publishing hub are marked as coming soon
          and cannot be connected yet. When one opens, it will use that platform&apos;s official sign-in, and this page
          will be updated before it does.
        </p>
        <LegalList>
          <li>
            <strong>What you give us:</strong> the channel id, your bot&apos;s id and its bot token. Before saving, Kongkow
            asks Telegram to confirm that the bot exists and is allowed to post in that channel.
          </li>
          <li>
            <strong>How tokens are stored:</strong> bot tokens are encrypted with AES-256-GCM before they are written to
            our database and are only decrypted on our server at the moment a post is sent. They are never shown back
            to you, never included in your data export, and never sent anywhere except Telegram.
          </li>
          <li>
            <strong>Permissions:</strong> the only permission Kongkow uses is posting messages to that channel. Apart
            from the check above, it does not read the channel, its messages or members, or your other chats.
          </li>
          <li>
            <strong>What is posted, and when:</strong> only the posts you choose to cross-post, to the accounts you pick
            for each post. Kongkow sends the post text and its photo or video when the post goes live: straight away, or
            at the time you scheduled. A newly connected channel starts as pending, and Kongkow does not post to it until
            the connection is confirmed.
          </li>
          <li>
            <strong>Disconnecting:</strong> when you disconnect a channel, its token is erased right away and any
            cross-posts still waiting for it are cancelled. Messages Telegram already published stay in the channel
            until you delete them there.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Who else sees your data">
        <LegalList>
          <li>Public posts and your profile can be seen by anyone, including people who are not signed in.</li>
          <li>The platforms you connect receive the posts you send to them, under their own privacy policies.</li>
          <li>
            When you use Enhance or Explain, the text you submit goes through Relay, Efolusi&apos;s AI gateway, to an AI
            model provider to produce the suggestion.
          </li>
          <li>Efolusi&apos;s account service handles your sign-in, as described in the Efolusi privacy policy.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Cookies and local storage">
        <p>
          Kongkow sets a session cookie to keep you signed in, a short-lived cookie during sign-in, and a referral cookie
          for 7 days when you arrive through an invite link. Your browser also remembers a few display choices, such as
          your feed mode, in local storage on your device. Kongkow uses no advertising or tracking cookies.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep data">
        <LegalList>
          <li>Your profile and content are kept while your account exists, unless you delete them sooner.</li>
          <li>Stories stop being shown 24 hours after you post them.</li>
          <li>Connected account tokens are kept until you disconnect the account or delete your Kongkow account.</li>
          <li>
            Scheduled posts that are more than 24 hours overdue are not published and stay on your Scheduled page, marked
            as missed, until you delete them.
          </li>
          <li>Deleted data may remain in server backups until those backups are replaced.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Getting a copy and deleting your data">
        <p>
          In <strong>Settings → Your data</strong> you can download a JSON copy of your Kongkow data (tokens are never
          included) and delete your Kongkow account. Deleting your account removes your profile, posts, comments, likes,
          follows, messages you sent, stories, uploaded files and connected accounts with their tokens. Details and other
          ways to ask are on the{" "}
          <Link href="/data-deletion" className={inlineLink}>data deletion</Link> page.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          {LEGAL_ENTITY}, {LEGAL_ADDRESS}. For privacy questions or to exercise your rights, email{" "}
          <ExternalLink href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</ExternalLink>. When this policy
          changes, we update this page and its effective date.
        </p>
      </LegalSection>
    </LegalDocument>
  )
}
