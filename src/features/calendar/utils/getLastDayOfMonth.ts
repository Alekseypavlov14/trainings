import type { Date } from '@features/calendar/types/Date'
import type { Month } from '@features/calendar/types/Month'
import { getDaysAmountFromMonth } from './getDaysAmountFromMonth'
import { parseDate } from './parseDate'

export function getLastDayOfMonth(month: Month): Date {
  const daysAmountOfMonth = getDaysAmountFromMonth(month)
  const lastDayOfMonth = new Date(month.year, month.number, daysAmountOfMonth)
  const date = parseDate(lastDayOfMonth.getTime())
  return date
}