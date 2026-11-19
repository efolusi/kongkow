import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export const metadata: Metadata = {
  title: "Security Challenge Rules | Bug Bounty",
  description: "Full rules, scoring, rewards, and submission details for the Kongkow bug bounty and security challenge.",
}

export default function SecurityChallengeRulesPage() {
  let content: string
  try {
    const filePath = path.join(process.cwd(), "content", "security-bug-bounty.md")
    content = fs.readFileSync(filePath, "utf-8")
  } catch {
    content = "Rules could not be loaded. See repository `docs/security-bug-bounty.md`."
  }

  return (
    <div className="min-h-screen bg-background min-w-0">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur safe-area-inset-top">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4">
          <Link
            href="/security-challenge"
            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 -my-2 min-h-[44px] min-w-[44px] inline-flex items-center"
          >
            ← Back to challenge
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 -my-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-end"
          >
            Kongkow
          </Link>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="outline-none mx-auto w-full max-w-3xl min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="prose prose-neutral dark:prose-invert max-w-none break-words">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-4 break-words">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mt-8 mb-3 break-words">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base sm:text-lg font-semibold text-foreground mt-6 mb-2 break-words">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground mb-4 text-[15px] leading-relaxed break-words">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside pl-6 text-muted-foreground mb-4 space-y-2 text-[15px] leading-relaxed">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside pl-6 text-muted-foreground mb-4 space-y-2 text-[15px] leading-relaxed">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="break-words pl-1 [&>p]:mb-1 [&>ul]:mt-2 [&>ul]:pl-5 [&>ol]:mt-2 [&>ol]:pl-5">
                  {children}
                </li>
              ),
              table: ({ children }) => (
                <div className="my-6 overflow-x-auto -mx-2 sm:mx-0">
                  <table className="w-full min-w-[280px] border-collapse border border-border text-sm">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-border bg-muted/50 px-3 py-2.5 text-left font-medium text-foreground text-[15px] break-words">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-border px-3 py-2.5 text-muted-foreground text-[15px] break-words align-top">
                  {children}
                </td>
              ),
              tr: ({ children }) => <tr>{children}</tr>,
              thead: ({ children }) => <thead>{children}</thead>,
              tbody: ({ children }) => <tbody>{children}</tbody>,
              a: ({ href, children }) => (
                <a
                  href={href ?? "#"}
                  className="text-primary hover:underline break-all"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">{children}</strong>
              ),
              code: ({ children }) => (
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground break-all">
                  {children}
                </code>
              ),
              hr: () => <hr className="my-8 border-border" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  )
}
