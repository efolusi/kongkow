import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BrandMark } from "@/components/shared/brand-mark"
import { LandingThemeToggle } from "@/components/features/landing/landing-theme-toggle"

import "./landing.css"

/**
 * Public landing page, shown at "/" to signed-out visitors only. Signed-in
 * users continue straight to the feed (see app/page.tsx).
 *
 * POSITIONING (2026-09): Kongkow is a social publishing hub — write a post once
 * and broadcast it to every social network you connect — with a real community
 * feed, DMs and groups underneath.
 *
 * COPY RULE: every claim here must be true of the code running in production.
 * Cross-posting connectors (X, LinkedIn, Facebook/Instagram, YouTube, …) are
 * still being built and each needs an official developer app, so they are
 * labelled "in development" — never advertised as live. The community feed, DMs,
 * groups, stories, scheduling and moderation ARE shipped and may be stated
 * plainly. The old Solana wallet/tipping/creator-coin endpoints were retired
 * behind app/api/_lib/pay-boundary.ts (HTTP 410) and must not appear here.
 *
 * DESIGN: follows the Efolusi flagship landing standard (landing.css, scoped to
 * `.kl`): 1200/24 container, 64px header, 52/40/36 control heights, Meridian
 * tokens only, sentence-case copy with no hype.
 */

const FEATURES: Array<{ title: string; body: string }> = [
  {
    title: "Newest-first feed",
    body: "No ranking model decides what you see. Switch between everyone on Kongkow and only the people you follow.",
  },
  {
    title: "Posts with attachments",
    body: "Up to 10 images, 3 videos and 8 files per post, with hashtags, mentions, location and a 15-minute edit window.",
  },
  {
    title: "Threaded comments",
    body: "Replies nest under replies and each one can be liked, so long discussions stay readable.",
  },
  {
    title: "24-hour stories",
    body: "Stories disappear after a day, and you can see the full viewer list while they are up.",
  },
  {
    title: "Direct messages",
    body: "Send images, video and files with quote-replies and read receipts. Attachments are served through an authenticated proxy.",
  },
  {
    title: "Groups with channels",
    body: "Organise a community into channels and categories, assign roles, invite by link and track unread per channel.",
  },
  {
    title: "Collections and bookmarks",
    body: "Save a post for later or file it into a named collection that only you can see.",
  },
  {
    title: "Scheduled and private posts",
    body: "Write now and publish later, or post privately so it stays out of every feed and search.",
  },
  {
    title: "Explore and search",
    body: "Search posts, people, hashtags and places, or browse what is trending from one Explore page.",
  },
  {
    title: "Live notifications",
    body: "Likes, comments, follows and mentions arrive over a WebSocket, so the badge updates while you watch.",
  },
  {
    title: "Reports and moderation",
    body: "Anyone can report a post or comment, and administrators work the queue with a record of each action.",
  },
  {
    title: "Draft help from Relay",
    body: "Ask Kongkow to tighten, shorten or expand a draft before you post it, through Efolusi's AI gateway.",
  },
]

// The platforms the publishing hub connects to. Every one needs an official
// developer app + review, so all are honestly labelled as in development until
// their credentials go live. Keep this in sync with lib/publishing/platforms.ts.
const CONNECTORS: string[] = [
  "X (Twitter)",
  "LinkedIn",
  "Facebook Pages",
  "Instagram",
  "YouTube",
  "Threads",
  "TikTok",
  "Telegram Channel",
]

const STEPS: Array<{ title: string; body: string }> = [
  {
    title: "Sign in with Efolusi",
    body: "Use the account you already have for other Efolusi products. There is no separate Kongkow password, and two-factor is managed in one place.",
  },
  {
    title: "Find your people",
    body: "Follow accounts from Explore or your sidebar suggestions, or join a group by invite link.",
  },
  {
    title: "Post, reply, message",
    body: "Share a thought in the feed, continue it in a thread, or move it to a direct message with files attached.",
  },
]

const USE_CASES: Array<{ who: string; body: string }> = [
  {
    who: "Communities past a group chat",
    body: "Channels, a searchable feed and threaded replies give conversations somewhere to live longer than a scroll-back.",
  },
  {
    who: "Creators who want a home base",
    body: "Post the long version, share the offcuts as stories, keep your best work in a collection and answer people in DMs.",
  },
  {
    who: "Small teams on Efolusi",
    body: "One sign-in across Efolusi products, private posts for unfinished work and scheduled posts for what is ready.",
  },
]

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: "Can I post to X, LinkedIn or Instagram from Kongkow today?",
    a: "Not yet. Each platform requires an official, reviewed developer app before we can connect it, so every connector is listed as in development until it is genuinely live. When one ships, it will only post through that platform's official API, using an account you have explicitly authorised.",
  },
  {
    q: "Do I need to create a new account?",
    a: "No. Kongkow uses your Efolusi account through single sign-on. Password changes and two-factor authentication are handled at my.efolusi.com and apply everywhere.",
  },
  {
    q: "Is there an algorithm deciding what I see?",
    a: "No. Both feeds are strictly newest-first. The only choice is whether you see everyone on Kongkow or only the accounts you follow.",
  },
  {
    q: "What happened to tipping, wallets and creator coins?",
    a: "They have been retired. Those endpoints now return an explicit 410 while payments move to Efolusi Pay. Nothing on Kongkow takes money today.",
  },
  {
    q: "Are direct messages end-to-end encrypted?",
    a: "No. Only the people in a conversation can read it, and attachments are served through short-lived signed links, but the server can read message text. If you need end-to-end secrecy, do not use Kongkow for it.",
  },
  {
    q: "Is there a paid plan?",
    a: "Not today. There is no pricing page and no checkout. If Kongkow ever charges for anything, it will bill through Efolusi Pay and we will announce it first.",
  },
  {
    q: "Is there a mobile app?",
    a: "There is no native iOS or Android app. Kongkow is a web app that works down to a 375-pixel-wide phone screen, and you can add it to your home screen.",
  },
  {
    q: "What languages does Kongkow support?",
    a: "English only, for now. There is no translation layer in the product yet.",
  },
  {
    q: "Who can see a private post?",
    a: "Only you. Private posts are excluded from every feed, from search and from your public profile.",
  },
]

function Shot({ name, alt, priority = false }: { name: string; alt: string; priority?: boolean }) {
  return (
    <>
      <Image
        src={`/landing/${name}-light.png`}
        alt={alt}
        width={1440}
        height={900}
        priority={priority}
        className="kl-theme-light"
        sizes="(max-width: 1088px) 100vw, 1024px"
      />
      <Image
        src={`/landing/${name}-dark.png`}
        alt={alt}
        width={1440}
        height={900}
        className="kl-theme-dark"
        sizes="(max-width: 1088px) 100vw, 1024px"
      />
    </>
  )
}

export function LandingPage() {
  return (
    <div className="kl">
      <header className="kl-header">
        <div className="kl-wrap kl-header__row">
          <Link href="/" className="kl-brand" aria-label="Kongkow home">
            <BrandMark size={24} />
            <span className="kl-brand__word">Kongkow</span>
          </Link>
          <nav className="kl-nav" aria-label="Page sections">
            <a href="#publishing">Publishing</a>
            <a href="#community">Community</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="kl-actions">
            <LandingThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        {/* Hero */}
        <section className="kl-hero">
          <div className="kl-wrap">
            <span className="kl-eyebrow">Feed · Messages · Cross-posting</span>
            <h1>
              Write it once.
              <br />
              Publish it <span className="kl-italic">everywhere</span>.
            </h1>
            <p className="kl-hero__sub">
              Compose posts, talk in threads, messages and groups, and send the same post to your
              social accounts as each connector goes live.
            </p>
            <div className="kl-hero__ctas">
              <a href="#publishing" className="kl-textlink">
                See what&apos;s live
                <ArrowRight aria-hidden />
              </a>
            </div>
            <p className="kl-proof">
              <span className="kl-dot" aria-hidden />
              <span>
                Feed, messages and groups are live · cross-posting connectors are rolling out
              </span>
            </p>
            <figure className="kl-figure">
              <div className="kl-shot">
                <Shot
                  name="feed"
                  priority
                  alt="The Kongkow feed: a composer, stories, and posts in reverse-chronological order"
                />
              </div>
              <figcaption className="kl-shot__caption">
                The Kongkow feed, captured from the running product.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Publishing hub */}
        <section id="publishing" className="kl-sec kl-sec--rule" style={{ scrollMarginTop: 64 }}>
          <div className="kl-wrap">
            <div className="kl-head">
              <span className="kl-eyebrow">Rolling out</span>
              <h2>One composer, every timeline.</h2>
              <p className="kl-lede">
                Pick the accounts a post should reach and publish or schedule it in one move. Each
                destination reports its own status and a link to the live post.
              </p>
            </div>
            <ul className="kl-connectors">
              {CONNECTORS.map((name) => (
                <li key={name} className="kl-connector">
                  <span className="kl-connector__name">{name}</span>
                  <span className="kl-tag">
                    <span className="kl-dot kl-dot--warn" aria-hidden />
                    In development
                  </span>
                </li>
              ))}
            </ul>
            <p className="kl-note">
              We connect only through each platform&apos;s official API, so a connector goes live
              once its developer app is reviewed. Until then it stays labelled here.
            </p>
          </div>
        </section>

        {/* Community features */}
        <section id="community" className="kl-sec kl-sec--rule" style={{ scrollMarginTop: 64 }}>
          <div className="kl-wrap">
            <div className="kl-head">
              <span className="kl-eyebrow">Live today</span>
              <h2>A real community underneath.</h2>
              <p className="kl-lede">
                Everything in this section is in the product today. Anything not shipped is not on
                this page.
              </p>
            </div>
            <div className="kl-grid kl-grid--3">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="kl-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="kl-sec kl-sec--rule" style={{ scrollMarginTop: 64 }}>
          <div className="kl-wrap">
            <div className="kl-head">
              <h2>Three steps to get going.</h2>
            </div>
            <ol className="kl-grid kl-grid--3" style={{ padding: 0, listStyle: "none" }}>
              {STEPS.map((step, index) => (
                <li key={step.title} className="kl-card kl-card--lg">
                  <span className="kl-step__n" aria-hidden>
                    {index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Product preview */}
        <section className="kl-sec kl-sec--rule">
          <div className="kl-wrap">
            <div className="kl-head">
              <h2>The real app, running today.</h2>
              <p className="kl-lede">
                Captured from the running app by our end-to-end test account. Light and dark follow
                your system setting.
              </p>
            </div>
            <div className="kl-grid kl-grid--2">
              <figure className="kl-figure">
                <div className="kl-shot">
                  <Shot name="profile" alt="A Kongkow profile page with posts, media, reshares and likes tabs" />
                </div>
                <figcaption>A profile with posts, media, reshares and likes.</figcaption>
              </figure>
              <figure className="kl-figure">
                <div className="kl-shot">
                  <Shot name="thread" alt="A Kongkow post permalink showing a threaded discussion" />
                </div>
                <figcaption>A post permalink with its discussion threaded underneath.</figcaption>
              </figure>
            </div>
            <figure className="kl-card kl-card--lg kl-mobile" style={{ margin: "24px 0 0" }}>
              <Image
                src="/landing/feed-mobile.png"
                alt="The Kongkow feed on a 375-pixel-wide phone screen"
                width={375}
                height={812}
                sizes="220px"
              />
              <figcaption>
                <h3>It fits in a hand.</h3>
                <p>
                  The same app, laid out down to a 375-pixel-wide screen. There is no native iOS or
                  Android app; add Kongkow to your home screen instead.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Use cases */}
        <section className="kl-sec kl-sec--rule">
          <div className="kl-wrap">
            <div className="kl-head">
              <h2>Who it is for.</h2>
            </div>
            <div className="kl-grid kl-grid--3">
              {USE_CASES.map((useCase) => (
                <div key={useCase.who} className="kl-card kl-card--lg">
                  <h3>{useCase.who}</h3>
                  <p>{useCase.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="kl-sec kl-sec--rule" style={{ scrollMarginTop: 64 }}>
          <div className="kl-wrap">
            <div className="kl-head">
              <h2>Straight answers.</h2>
            </div>
            <dl className="kl-faq">
              {FAQ.map((item) => (
                <div key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Closing band */}
        <section className="kl-sec kl-band">
          <div className="kl-wrap">
            <h2>
              Start with your <span className="kl-italic">community</span>.
            </h2>
            <p>
              Sign-in opens with the Kongkow app. There is nothing to pay, and publishing
              connectors arrive as they are approved.
            </p>
            <div className="kl-hero__ctas">
              <a href="mailto:hi@efolusi.com" className="kl-textlink">
                Email us first
                <ArrowRight aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="kl-footer">
        <div className="kl-wrap">
          <div className="kl-footer__top">
            <div className="kl-footer__brand">
              <span className="kl-brand">
                <BrandMark size={20} />
                <span className="kl-brand__word">Kongkow</span>
              </span>
              <p className="kl-footer__tag">A social publishing hub with a community underneath, built and run by Efolusi.</p>
            </div>
            <div>
              <h3>Product</h3>
              <ul>
                <li><a className="kl-flink" href="#publishing">Publishing</a></li>
                <li><a className="kl-flink" href="#community">Community</a></li>
                <li><a className="kl-flink" href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3>Account</h3>
              <ul>
                <li><a className="kl-flink" href="https://my.efolusi.com">Manage your account</a></li>
                <li><a className="kl-flink" href="https://efolusi.com">All Efolusi products</a></li>
                <li><a className="kl-flink" href="mailto:hi@efolusi.com">hi@efolusi.com</a></li>
              </ul>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li><Link className="kl-flink" href="/terms">Terms of service</Link></li>
                <li><Link className="kl-flink" href="/privacy">Privacy policy</Link></li>
                <li><Link className="kl-flink" href="/data-deletion">Data deletion</Link></li>
              </ul>
            </div>
          </div>
          <div className="kl-footer__bottom">
            <p>&copy; {new Date().getFullYear()} PT Efolusi Dunia Teknologi. All rights reserved.</p>
            <p>Made in Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
