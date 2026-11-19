import { ImageResponse } from "next/og"
import { KONGKOW_MARK_PATH, KONGKOW_MARK_VIEWBOX } from "@/components/shared/brand-mark"

export const runtime = "nodejs"
export const alt = "Kongkow"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          background: "#2C1709",
          color: "#F8F4E6",
        }}
      >
        <svg viewBox={KONGKOW_MARK_VIEWBOX} width={220} height={220} fill="#F8F4E6">
          <path d={KONGKOW_MARK_PATH} fillRule="evenodd" clipRule="evenodd" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Kongkow</div>
          <div style={{ fontSize: 40, opacity: 0.8 }}>Connect, share, and discover with your community</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
