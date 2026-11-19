/**
 * Which host this deployment serves, for the crawler-facing routes.
 *
 * Shared by robots.ts and sitemap.ts so the two cannot drift: the sitemap must
 * be empty on exactly the hosts whose robots.txt says Disallow: /. dev hosts,
 * localhost and previews are copies of the site and must never be indexed next
 * to it.
 */
export const PRODUCTION_HOST = "kongkow.xyz"

export function isProductionHost(env: NodeJS.ProcessEnv = process.env): boolean {
  const base = env.NEXT_PUBLIC_APP_URL || `https://${PRODUCTION_HOST}`
  try {
    return new URL(base).hostname.toLowerCase() === PRODUCTION_HOST
  } catch {
    return false
  }
}
