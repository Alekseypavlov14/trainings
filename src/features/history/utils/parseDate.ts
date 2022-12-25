export function parseDate(time: number) {
  const date = new Date(time)

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return ({
    day,
    month,
    year
  })
}