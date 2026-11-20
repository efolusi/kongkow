import { NextResponse, type NextRequest } from "next/server"

/**
 * The site holds only the landing and legal pages. The app (publishing,
 * schedule, settings and the old social pages) will live on its own host, which
 * is not decided yet; until then an old link to an app route lands on the site
 * home. The Meta data-deletion status page (/data-deletion/status) stays on the
 * site until the app and its Meta callback exist.
 */
export const APP_PREFIXES = [
  "/publishing",
  "/scheduled",
  "/settings",
  "/explore",
  "/notifications",
  "/messages",
  "/groups",
  "/bookmarks",
  "/search",
  "/wallet",
  "/admin",
  "/login",
  "/signup",
  "/reset-password",
  "/auth",
] as const

export function isAppPath(pathname: string): boolean {
  return APP_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!isAppPath(pathname)) return NextResponse.next()
  // The app has no host yet (lib/app-host.ts), so its old routes land on the
  // site home. 307: temporary, until the app is live and they move there.
  return NextResponse.redirect(new URL("/", request.url), 307)
}

export const config = {
  // Next reads the matcher statically, so it is a literal; a test keeps it equal to APP_PREFIXES.
  matcher: [
    "/publishing",
    "/publishing/:path*",
    "/scheduled",
    "/scheduled/:path*",
    "/settings",
    "/settings/:path*",
    "/explore",
    "/explore/:path*",
    "/notifications",
    "/notifications/:path*",
    "/messages",
    "/messages/:path*",
    "/groups",
    "/groups/:path*",
    "/bookmarks",
    "/bookmarks/:path*",
    "/search",
    "/search/:path*",
    "/wallet",
    "/wallet/:path*",
    "/admin",
    "/admin/:path*",
    "/login",
    "/login/:path*",
    "/signup",
    "/signup/:path*",
    "/reset-password",
    "/reset-password/:path*",
    "/auth",
    "/auth/:path*",
  ],
}
