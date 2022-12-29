import type { Month } from "./../types/Month"
import { getWeekDayFromDate } from './getWeekDayFromDate'
import { getFirstDayOfMonth } from "./getFirstDayOfMonth"

export function getPrevDaysAmountOfMonth(month: Month): number {
  const firstDayOfMonth = getFirstDayOfMonth(month)
  const weekDayOfFirstDay = getWeekDayFromDate(firstDayOfMonth)
  const prevDays = weekDayOfFirstDay - 1
  return prevDays
}