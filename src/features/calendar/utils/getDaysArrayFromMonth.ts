import type { Month } from "@features/calendar/types/Month"
import type { Date } from '@features/calendar/types/Date'
import { getDaysAmountFromMonth } from './getDaysAmountFromMonth'
import { getRangeFromNumber } from './getRangeFromNumber'
import { parseDate } from './parseDate'

export function getDaysArrayFromMonth(month: Month): Date[] {
  let daysAmount = getDaysAmountFromMonth(month)

  if (
    month.number === 1 && // February
    month.year % 4 === 0 // Leap year
  ) {
    daysAmount += 1
  }
  
  return getRangeFromNumber(daysAmount).map(e => {
    // Range starts with 0, days - with 1
    const date = new Date(month.year, month.number, e + 1)
    
    return parseDate(date.getTime())
  })
}