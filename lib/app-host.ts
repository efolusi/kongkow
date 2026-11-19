/** The Kongkow app (publishing, schedule, settings, sign-in) on its own host. */
export function appOrigin(): string {
  return new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://app.kongkow.xyz").origin
}
