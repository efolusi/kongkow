/**
 * First focusable element on every page: one Tab and Enter moves a keyboard
 * user past the header and navigation into the page content.
 *
 * Mirrors Meridian's SkipLink (added in @efolusi/meridian 1.21.9). Kongkow is
 * locked to 1.21.7, so this keeps the same contract locally; swap it for the
 * Meridian component once the dependency is bumped.
 *
 * The target is `<main id="main" tabIndex={-1}>` on every surface. Without
 * tabIndex={-1} Safari and Firefox scroll to the landmark but leave focus in the
 * header, so the next Tab walks back into the navigation the user skipped.
 *
 * Clipped with sr-only rather than display:none: a hidden skip link that leaves
 * the focus order is worse than none.
 */
export const MAIN_CONTENT_ID = "main"

export function SkipLink({ children = "Skip to content" }: { children?: React.ReactNode }) {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-4 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
    >
      {children}
    </a>
  )
}
