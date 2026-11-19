/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  // Remove X-Powered-By to avoid server fingerprinting (ZAP 10037)
  poweredByHeader: false,
  // Security headers (ZAP 10021, 10035, 10038, 10063, 90004). See docs/README.md.
  // On Vercel, vercel.json adds same headers for /robots.txt and /_next/static/*. With nginx, set headers only in nginx to avoid duplicates (10020, 10035).
  async headers() {
    const securityHeaders = [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-XSS-Protection", value: "1; mode=block" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(self), payment=(), usb=()",
      },
      // Enforcing CSP (ZAP 10038). If critical violations appear, switch to Content-Security-Policy-Report-Only to log only. Optional: add report-uri / report-to for server-side violation reporting.
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          // static.cloudflareinsights.com: Cloudflare auto-injects its Web
          // Analytics beacon into proxied HTML, so the host must be allowed
          // or the console fills with CSP violations.
          "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "media-src 'self' blob: https:",
          "connect-src 'self' https: wss:",
          "font-src 'self'",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; "),
      },
      // Site isolation (ZAP 90004). COEP omitted to avoid breaking third-party embeds.
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    ];
    // HSTS (ZAP 10035) — production only; nginx may also set it to avoid duplicate.
    if (process.env.NODE_ENV === "production") {
      securityHeaders.push({
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
      });
    }
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
if (process.env.NODE_ENV === "development") initOpenNextCloudflareForDev();
