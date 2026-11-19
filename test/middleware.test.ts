import { NextRequest } from "next/server"
import { afterEach, describe, expect, it } from "vitest"

import { APP_PREFIXES, config, middleware } from "../middleware"

afterEach(() => {
  delete process.env.NEXT_PUBLIC_APP_URL
})

const run = (path: string) => middleware(new NextRequest(new URL(path, "https://kongkow.xyz")))

describe("app routes moved to the app host", () => {
  it.each(["/publishing", "/scheduled/next", "/settings", "/login", "/signup", "/data-deletion/status"])(
    "sends %s to the same path on the app host",
    (path) => {
      const res = run(`${path}?a=1`)
      expect(res.status).toBe(308)
      expect(res.headers.get("location")).toBe(`https://app.kongkow.xyz${path}?a=1`)
    },
  )

  it("uses the configured app origin", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://dev-app.kongkow.xyz/ignored"
    expect(run("/settings").headers.get("location")).toBe("https://dev-app.kongkow.xyz/settings")
  })

  it("never leaves the app host", () => {
    expect(new URL(run("/login//evil.example/x").headers.get("location") ?? "").host).toBe("app.kongkow.xyz")
  })

  it("leaves site pages and look-alikes alone", () => {
    for (const path of ["/", "/privacy", "/terms", "/data-deletion", "/security-challenge", "/settingsx"]) {
      expect(run(path).headers.get("location"), path).toBeNull()
    }
  })

  it("matches exactly the app prefixes", () => {
    expect(config.matcher).toEqual(APP_PREFIXES.flatMap((p) => [p, `${p}/:path*`]))
  })
})
