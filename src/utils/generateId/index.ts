export function generateId(ids: number[]) {
  const max = Math.max(...ids)
  let newId = max + 1
  if (newId === -Infinity) return 1
  return newId
}