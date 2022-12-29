import { months } from "../constants/months"
import { Month } from "../types/Month"

export function getPrevMonth(month: Month): Month {
  let newMonthNumber = month.number - 1
  let newMonthYear = month.year

  if (newMonthNumber < 0) {
    newMonthNumber = months.length - 1
    newMonthYear -= 1
  }

  return ({
    year: newMonthYear,
    number: newMonthNumber
  })
}