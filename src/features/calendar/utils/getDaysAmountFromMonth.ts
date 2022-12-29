import type { Month } from "./../types/Month"
import { daysAmountInMonths } from "./../constants/daysAmountInMonths"

export function getDaysAmountFromMonth(month: Month): number {
  return daysAmountInMonths[month.number]
}