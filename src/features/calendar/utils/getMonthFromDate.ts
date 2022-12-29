import type { Date } from "./../types/Date"
import type { Month } from "./../types/Month"

export function getMonthFromDate(date: Date): Month {
  const currentDate = new Date(date.year, date.month, date.day)

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  return ({
    number: currentMonth,
    year: currentYear
  })
}