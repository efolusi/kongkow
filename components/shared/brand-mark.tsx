import type React from "react"

/**
 * Canonical Kongkow mark (megaphone). Single source of truth for the geometry
 * used in-app; app/icon.svg and app/opengraph-image.tsx mirror the same path.
 * Renders bare (no tile) inked in var(--logo-mark), which follows the theme
 * (brand-800 light / brand-300 dark, see app/globals.css). Decorative: the
 * wordmark text carries the name, so this is aria-hidden.
 */
export const KONGKOW_MARK_VIEWBOX = "-6.14 -6.14 621.28 626.28"
export const KONGKOW_MARK_PATH =
  "M 96 405 L 95 407 L 99 424 L 101 428 L 114 478 L 124 510 L 132 542 L 135 549 L 145 589 L 150 598 L 155 604 L 164 610 L 177 614 L 220 614 L 229 612 L 237 608 L 245 601 L 251 591 L 254 579 L 253 567 L 196 405 Z M 29 204 L 19 214 L 9 229 L 4 241 L 0 260 L 0 311 L 1 312 L 1 318 L 7 336 L 14 348 L 19 354 L 37 369 L 50 375 L 67 379 L 175 379 L 175 185 L 74 185 L 73 186 L 62 187 L 50 191 L 37 198 Z M 507 61 L 270 163 L 235 176 L 206 184 L 206 381 L 221 384 L 250 394 L 253 396 L 267 400 L 276 405 L 285 408 L 352 439 L 388 454 L 399 460 L 406 462 L 417 468 L 426 471 L 507 507 Z M 575 0 L 562 1 L 549 7 L 540 16 L 537 21 L 533 36 L 533 531 L 535 541 L 538 547 L 545 556 L 556 563 L 570 566 L 583 564 L 594 558 L 604 547 L 608 537 L 608 532 L 609 531 L 609 35 L 607 26 L 601 15 L 590 5 Z"

/** Tight bbox of KONGKOW_MARK_PATH (no padding): 609 wide x 614 tall. */
export const KONGKOW_MARK_TIGHT_VIEWBOX = "0 0 609 614"
/** Canonical width/height ratio of the tight mark (matches efolusi landing products.js). */
export const KONGKOW_MARK_RATIO = 609 / 614
// Legacy tile geometry (kept for the `tile` prop; no in-app caller uses it).
const TILE_MARK_RATIO = 0.62 * 0.9

export function BrandMark({
  size = 32,
  tile = false,
  className,
  style,
}: {
  /**
   * Mark box B in px: the side of a square with the same area as the rendered
   * mark (width = B*sqrt(R), height = B/sqrt(R)). Standard: 24 nav, 20 footer, 40 auth.
   */
  size?: number
  tile?: boolean
  className?: string
  style?: React.CSSProperties
}) {
  const box = tile ? Math.round(size * TILE_MARK_RATIO) : size
  const sqrtR = Math.sqrt(KONGKOW_MARK_RATIO)
  const svg = (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={KONGKOW_MARK_TIGHT_VIEWBOX}
      width={box * sqrtR}
      height={box / sqrtR}
      fill="currentColor"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path d={KONGKOW_MARK_PATH} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  )
  if (!tile) {
    return (
      <span aria-hidden="true" className={className} style={{ display: "inline-flex", color: "var(--logo-mark)", ...style }}>
        {svg}
      </span>
    )
  }
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: Math.round(size * 0.3),
        background: "#ffffff",
        color: "var(--brand-800)",
        boxShadow: "var(--shadow-sm)",
        ...style,
      }}
    >
      {svg}
    </span>
  )
}
