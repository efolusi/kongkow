import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCompactNumber(
  value: number | string | null | undefined,
  options?: {
    maximumFractionDigits?: number
  },
) {
  const n = typeof value === "number" ? value : typeof value === "string" ? Number(value) : 0
  if (!Number.isFinite(n)) return "0"

  const maximumFractionDigits =
    typeof options?.maximumFractionDigits === "number" ? options.maximumFractionDigits : n >= 1000 ? 1 : 0

  try {
    const formatted = new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits,
    }).format(n)
    return formatted.replace(/\s+/g, "")
  } catch {
    const abs = Math.abs(n)
    const sign = n < 0 ? "-" : ""
    if (abs >= 1_000_000_000) return `${sign}${Math.round((abs / 1_000_000_000) * 10) / 10}B`
    if (abs >= 1_000_000) return `${sign}${Math.round((abs / 1_000_000) * 10) / 10}M`
    if (abs >= 1_000) return `${sign}${Math.round((abs / 1_000) * 10) / 10}K`
    return `${n}`
  }

  return "0"
}

export function isValidUuid(value: string | null | undefined): boolean {
  if (!value) return false
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
}
