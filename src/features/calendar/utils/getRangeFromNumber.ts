export function getRangeFromNumber(number: number): number[] {
  return new Array(number).fill(0).map((_, index) => index)
}