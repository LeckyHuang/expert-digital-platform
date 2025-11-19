import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatToWan(n: number): string {
  if (n >= 10000) {
    const val = (n / 10000).toFixed(n % 10000 === 0 ? 0 : 1)
    return `${val}W+`
  }
  return `${n}`
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K+`
  return `${n}`
}
