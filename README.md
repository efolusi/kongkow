# Kongkow site

The website of Kongkow: the landing page, privacy, terms, data deletion and the security challenge.
It is a Next.js site built with OpenNext and served by the Cloudflare Worker `kongkow` (`wrangler.jsonc`).

The site's own origin is `https://kongkow.efolusi.com` (`NEXT_PUBLIC_SITE_URL`, `lib/seo/hosts.ts`).

The app (publishing, schedule, settings, sign-in) will live on its own host, which is not decided yet
(`lib/app-host.ts`). Until then the site links nowhere into the app, and old links to app routes get a
307 to the site home (`middleware.ts`). The Meta data-deletion status page, `/data-deletion/status?id=<code>`,
stays on the site: Kongkow holds no Facebook, Instagram or Threads data yet.

- `app/`: the pages.
- `content/security-bug-bounty.md`: the security challenge rules.

## Develop

Node 26.13.1 and pnpm 11.24.0 (`npm install -g pnpm@11.24.0`).

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm test
pnpm preview    # builds with OpenNext and serves it with wrangler, the way Cloudflare runs it
```

## Deploy

`.github/workflows/deploy.yml` deploys from a `v*` tag on `main`, with the `CLOUDFLARE_API_TOKEN` secret and the
`CLOUDFLARE_ACCOUNT_ID` variable of the `production` environment. Every change reaches `main` through a pull request.

## License

Efolusi Reference License, see [LICENSE](LICENSE). You may read this site and run it locally as a sample of Meridian. You may not copy it into another product. The product name and logo are not part of that grant. Meridian itself remains Apache-2.0.
