import type { MetadataRoute } from "next"
import { PRODUCTION_HOST, isProductionHost } from "@/lib/seo/hosts"

// Only the production host is indexable; every other host (local, previews)
// answers Disallow so it never competes with production.
export default function robots(): MetadataRoute.Robots {
  if (!isProductionHost()) {
    // No Sitemap line here: pointing a crawler at a preview's URL list is the
    // opposite of what this Disallow is for.
    return { rules: { userAgent: "*", disallow: "/" } }
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `https://${PRODUCTION_HOST}/sitemap.xml`,
    host: `https://${PRODUCTION_HOST}`,
  }
}
