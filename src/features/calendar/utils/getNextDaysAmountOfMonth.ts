import type { Month } from "@features/calendar/types/Month"
import { getWeekDayFromDate } from './getWeekDayFromDate'
import { getLastDayOfMonth } from "./getLastDayOfMonth"

export function getNextDaysAmountOfMonth(month: Month): number {
  const lastDayOfMonth = getLastDayOfMonth(month)
  const weekDayOfLastDay = getWeekDayFromDate(lastDayOfMonth)
  const nextDays = weekDayOfLastDay - 1
  return nextDays
}