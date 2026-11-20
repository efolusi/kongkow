import { afterEach, describe, expect, it } from "vitest"
import robots from "../app/robots"
import sitemap from "../app/sitemap"
import { PRODUCTION_HOST, isProductionHost, siteOrigin } from "../lib/seo/hosts"

afterEach(() => {
  delete process.env.NEXT_PUBLIC_SITE_URL
  delete process.env.NEXT_PUBLIC_APP_URL
})

describe("the site's own origin", () => {
  it("is kongkow.efolusi.com by default", () => {
    expect(PRODUCTION_HOST).toBe("kongkow.efolusi.com")
    expect(siteOrigin()).toBe("https://kongkow.efolusi.com")
    expect(isProductionHost()).toBe(true)
  })

  it("does not follow the app's host", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.test"
    expect(siteOrigin()).toBe("https://kongkow.efolusi.com")
    expect(isProductionHost()).toBe(true)
  })

  it("puts robots and the sitemap on the site origin", () => {
    const r = robots()
    expect(r.host).toBe("https://kongkow.efolusi.com")
    expect(r.sitemap).toBe("https://kongkow.efolusi.com/sitemap.xml")
    expect(sitemap().every((e) => e.url.startsWith("https://kongkow.efolusi.com/"))).toBe(true)
  })

  it("keeps a preview out of search engines", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.example.test"
    expect(isProductionHost()).toBe(false)
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" })
    expect(sitemap()).toEqual([])
  })
})
