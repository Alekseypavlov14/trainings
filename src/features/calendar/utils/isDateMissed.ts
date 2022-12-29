import type { Date } from "@features/calendar/types/Date"
import { parseDate } from "./parseDate"

export function isDateMissed(date: Date) {
  const today = parseDate(Date.now())

  if (date.year > today.year) return false
  if (date.year < today.year) return true

  if (date.month > today.month) return false
  if (date.month < today.month) return true

  if (date.day >= today.day) return false
  if (date.day < today.day) return true

  return false
} 