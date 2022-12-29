import { Month } from "../types/Month"
import { getPrevDaysAmountOfMonth } from "./getPrevDaysAmountOfMonth"
import { getRangeFromNumber } from "./getRangeFromNumber"

export function getPrevDaysRange(month: Month) {
  const prevDaysAmount = getPrevDaysAmountOfMonth(month)
  const prevDaysRange = getRangeFromNumber(prevDaysAmount)
  return prevDaysRange
}