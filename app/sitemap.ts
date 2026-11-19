import type { MetadataRoute } from "next"
import { PRODUCTION_HOST, isProductionHost } from "@/lib/seo/hosts"

/**
 * Every page a signed-out visitor can read.
 *
 * Deliberately short. Profiles and posts are public reads, but they are user
 * content that changes constantly and enumerating them would mean a database
 * query on every crawl; everything else Kongkow serves is behind a session and
 * is already disallowed in robots.ts. Listing a disallowed URL only burns crawl
 * budget.
 */
export const PUBLIC_PATHS = ["/", "/terms", "/privacy", "/data-deletion"]

export default function sitemap(): MetadataRoute.Sitemap {
  // Non-production hosts answer Disallow: / in robots.txt, so there is nothing
  // to advertise: an empty urlset rather than a list of preview URLs.
  if (!isProductionHost()) return []
  return PUBLIC_PATHS.map((path) => ({
    url: `https://${PRODUCTION_HOST}${path}`,
    changeFrequency: path === "/" ? ("daily" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.3,
  }))
}
