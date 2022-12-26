export function getMillisecondsFromDate(date: string) {
  const [year, month, day] = date.split('-').map(_ => Number(_))
  const parsedDate = new Date(year, month - 1, day)
  return parsedDate.getTime()
}