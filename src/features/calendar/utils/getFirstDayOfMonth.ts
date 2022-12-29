import type { Date } from "@features/calendar/types/Date"
import type { Month } from "@features/calendar/types/Month"
import { parseDate } from "./parseDate"

export function getFirstDayOfMonth(month: Month): Date {
  const firstDayOfMonth = new Date(month.year, month.number, 1)
  const date = parseDate(firstDayOfMonth.getTime())
  return date
}