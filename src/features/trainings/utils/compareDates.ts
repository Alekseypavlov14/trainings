export function compareDates(date1: number, date2: number): boolean {
  const moment1 = new Date(date1)
  const moment2 = new Date(date2)

  return (
    moment1.getDate() === moment2.getDate() &&
    moment1.getMonth() === moment2.getMonth() &&
    moment1.getFullYear() === moment2.getFullYear()
  )
}