import { months } from "@features/calendar/constants/months"
import { Month } from "@features/calendar/types/Month"

export function getNextMonth(month: Month): Month {
  let newMonthNumber = month.number + 1
  let newMonthYear = month.year

  if (newMonthNumber >= months.length) {
    newMonthNumber = 0
    newMonthYear += 1
  }

  return ({
    year: newMonthYear,
    number: newMonthNumber
  })
}