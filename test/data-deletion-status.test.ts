import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import DataDeletionStatusPage, { confirmationCode } from "../app/data-deletion/status/page"

const render = async (id?: string) =>
  renderToStaticMarkup(await DataDeletionStatusPage({ searchParams: Promise.resolve(id === undefined ? {} : { id }) }))

describe("the Meta data-deletion status page", () => {
  it("shows a well-formed confirmation code", async () => {
    expect(confirmationCode("abc-123_XYZ")).toBe("abc-123_XYZ")
    expect(await render("abc-123_XYZ")).toContain("abc-123_XYZ")
  })

  it("never echoes a malformed code", async () => {
    for (const bad of ["<script>x</script>", "a".repeat(65), "", "../x"]) {
      expect(confirmationCode(bad), bad).toBeNull()
    }
    expect(await render("<script>x</script>")).not.toContain("<script>x")
  })

  it("says what Kongkow holds and where to ask", async () => {
    const html = await render()
    expect(html).toContain("holds no data from Facebook, Instagram or Threads")
    expect(html).toContain("hi@efolusi.com")
  })
})
