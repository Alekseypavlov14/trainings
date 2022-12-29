import type { Date } from "@features/calendar/types/Date"

export function areDatesEqual(date1: Date, date2: Date): boolean {
  return (
    date1.day === date2.day &&
    date1.month === date2.month &&
    date1.year === date2.year
  )
}