import type { Month } from "@features/calendar/types/Month"
import { daysAmountInMonths } from "@features/calendar/constants/daysAmountInMonths"

export function getDaysAmountFromMonth(month: Month): number {
  return daysAmountInMonths[month.number]
}