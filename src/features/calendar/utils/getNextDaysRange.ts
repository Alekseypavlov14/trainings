import { Month } from "../types/Month"
import { getNextDaysAmountOfMonth } from "./getNextDaysAmountOfMonth"
import { getRangeFromNumber } from "./getRangeFromNumber"

export function getNextDaysRange(month: Month) {
  const nextDaysAmount = getNextDaysAmountOfMonth(month)
  const nextDaysRange = getRangeFromNumber(nextDaysAmount)
  return nextDaysRange
}