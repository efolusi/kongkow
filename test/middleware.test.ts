import { NextRequest } from "next/server"
import { afterEach, describe, expect, it } from "vitest"
import { APP_PREFIXES, config, middleware } from "../middleware"

afterEach(() => {
  delete process.env.NEXT_PUBLIC_APP_URL
})

const run = (path: string) => middleware(new NextRequest(`https://kongkow.efolusi.com${path}`))

describe("app routes while the app has no host", () => {
  it.each(["/publishing", "/scheduled/next", "/settings", "/login", "/signup"])(
    "sends %s to the site home",
    (path) => {
      const res = run(`${path}?a=1`)
      expect(res.status).toBe(307)
      expect(res.headers.get("location")).toBe("https://kongkow.efolusi.com/")
    },
  )

  it("never leaves the site, even for a //host path", () => {
    expect(new URL(run("/login//evil.example/x").headers.get("location") ?? "").host).toBe("kongkow.efolusi.com")
  })

  it("leaves site pages and look-alikes alone", () => {
    for (const path of ["/", "/privacy", "/terms", "/data-deletion", "/data-deletion/status", "/security-challenge", "/settingsx"]) {
      expect(run(path).headers.get("location"), path).toBeNull()
    }
  })

  it("matches exactly the app prefixes", () => {
    expect(config.matcher).toEqual(APP_PREFIXES.flatMap((p) => [p, `${p}/:path*`]))
  })
})
