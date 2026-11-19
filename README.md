# Kongkow site

The website of Kongkow: the landing page, privacy, terms, data deletion and the security challenge.
It is a Next.js site built with OpenNext and served by the Cloudflare Worker `kongkow` (`wrangler.jsonc`).

The app (publishing, schedule, settings, sign-in) lives on its own host (`NEXT_PUBLIC_APP_URL`, default
`https://app.kongkow.xyz`). Old links to app routes on this site get a 308 to the same path there
(`middleware.ts`), including the Meta data-deletion receipt at `/data-deletion/status`.

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
