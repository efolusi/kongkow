import type { Metadata } from "next"
import Link from "next/link"
import { BrandMark } from "@/components/shared/brand-mark"

export const metadata: Metadata = {
  title: "Security Challenge: Bug Bounty",
  description:
    "Report security vulnerabilities in Kongkow. We score findings by severity and reward valid ones. General scope: platform, APIs, auth and user data.",
}

const SEVERITY_ROWS = [
  { severity: "Critical", points: 100 },
  { severity: "High", points: 50 },
  { severity: "Medium", points: 20 },
  { severity: "Low", points: 5 },
  { severity: "Informational", points: 1 },
] as const

export default function SecurityChallengePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background min-w-0">
      <main id="main" tabIndex={-1} className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 outline-none">
        <div className="w-full max-w-lg min-w-0 space-y-6 sm:space-y-8">
          <div className="flex justify-center">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-ring rounded-lg">
              <BrandMark size={40} />
            </Link>
          </div>

          <div className="text-center space-y-3">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight break-words">
              Security Challenge: Bug Bounty
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words px-1">
              Report security vulnerabilities in Kongkow. We score each finding by severity and reward valid findings. First valid report per issue wins.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4 sm:p-5 space-y-4">
            <h2 className="font-semibold text-foreground text-base sm:text-lg">
              Scoring & rewards
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We assign a severity tier and points. The reward is decided per finding from its final severity and agreed with you before it is paid.
            </p>
            <div className="overflow-x-auto -mx-1 sm:mx-0">
              <table className="w-full min-w-[260px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-3 font-medium text-foreground">Severity</th>
                    <th className="text-left py-2 font-medium text-foreground">Points</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {SEVERITY_ROWS.map((row) => (
                    <tr key={row.severity} className="border-b border-border/60">
                      <td className="py-2.5 pr-3 font-medium text-foreground">{row.severity}</td>
                      <td className="py-2.5">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-4 sm:p-5 space-y-3">
            <h2 className="font-semibold text-foreground text-base sm:text-lg">
              In scope
            </h2>
            <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-outside pl-5 leading-relaxed">
              <li>Kongkow production (kongkow.efolusi.com) and its APIs</li>
              <li>Auth, publishing accounts and user data</li>
              <li>Any vulnerability affecting confidentiality, integrity, or availability of user data</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link
              href="/security-challenge/rules"
              className="ef-btn ef-btn--primary ef-btn--md"
            >
              Full rules & scope
            </Link>
            <Link
              href="/"
              className="ef-btn ef-btn--secondary ef-btn--md"
            >
              Back to Kongkow
            </Link>
          </div>

          <p className="text-center text-xs text-muted-foreground leading-relaxed break-words px-2">
            Email hi@efolusi.com. Subject:{" "}
            <span className="font-mono text-foreground">[Bug Bounty]</span> + description. Include steps to reproduce and the impact. See{" "}
            <Link href="/security-challenge/rules" className="font-medium text-foreground hover:underline">
              full rules
            </Link>{" "}
            for details.
          </p>
        </div>
      </main>
    </div>
  )
}
