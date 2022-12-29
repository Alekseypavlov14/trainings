import type { Date } from "./../types/Date"

export function getWeekDayFromDate(date: Date) {
  const nativeDate = new Date(date.year, date.month, date.day)
  let weekDay = nativeDate.getDay()
  if (weekDay === 0) weekDay = 7 // Sunday is 7th, not 0th
  return weekDay
}