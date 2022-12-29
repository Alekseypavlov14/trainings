import type { Date } from "./../types/Date"
import type { Month } from "./../types/Month"
import { parseDate } from "./parseDate"

export function getFirstDayOfMonth(month: Month): Date {
  const firstDayOfMonth = new Date(month.year, month.number, 1)
  const date = parseDate(firstDayOfMonth.getTime())
  return date
}