import { NextResponse, type NextRequest } from "next/server"

import { appOrigin } from "@/lib/app-host"

/**
 * The site holds only the landing and legal pages. The app (publishing,
 * schedule, settings and the old social pages) lives on its own host, so an old
 * link to an app route follows it there with the same path and query. The
 * Meta data-deletion receipt (/data-deletion/status) is checked by the app, which
 * holds the Meta app secret.
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
  "/data-deletion/status",
] as const

export function isAppPath(pathname: string): boolean {
  return APP_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  if (!isAppPath(pathname)) return NextResponse.next()
  // Joined as text, so the path cannot name another host.
  return NextResponse.redirect(new URL(`${appOrigin()}${pathname}${search}`), 308)
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
    "/data-deletion/status",
    "/data-deletion/status/:path*",
  ],
}
