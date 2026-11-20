/**
 * Which host this deployment serves, for the crawler-facing routes.
 *
 * Shared by robots.ts and sitemap.ts so the two cannot drift: the sitemap must
 * be empty on exactly the hosts whose robots.txt says Disallow: /. dev hosts,
 * localhost and previews are copies of the site and must never be indexed next
 * to it.
 */
export const PRODUCTION_HOST = "kongkow.efolusi.com"

/** The site's own origin. It never follows the app's host (NEXT_PUBLIC_APP_URL). */
export function siteOrigin(env: NodeJS.ProcessEnv = process.env): string {
  try {
    return new URL(env.NEXT_PUBLIC_SITE_URL || `https://${PRODUCTION_HOST}`).origin
  } catch {
    return `https://${PRODUCTION_HOST}`
  }
}

export function isProductionHost(env: NodeJS.ProcessEnv = process.env): boolean {
  try {
    return new URL(siteOrigin(env)).hostname.toLowerCase() === PRODUCTION_HOST
  } catch {
    return false
  }
}
