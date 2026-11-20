import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"

// The app has no host yet (lib/app-host.ts), so nothing the site renders may
// link to one: a live page must not show dead links.
const ROOTS = ["app", "components", "content", "middleware.ts"]

function files(path: string): string[] {
  if (statSync(path).isFile()) return [path]
  return readdirSync(path).flatMap((name) => files(join(path, name)))
}

describe("links to the app", () => {
  it("no page, component or middleware links to app.kongkow.xyz or calls appOrigin()", () => {
    const hits = ROOTS.flatMap(files)
      .filter((f) => /\.(tsx?|md|mdx)$/.test(f))
      .filter((f) => /app\.kongkow\.xyz|appOrigin\(/.test(readFileSync(f, "utf8")))
    expect(hits).toEqual([])
  })
})
