export const parsingCounterNumber = (
  s: string,
  startIndex: number,
  length: number,
): number => {
  const lastNumber = s.substring(s.length - 3)
  return parseInt(lastNumber) + 1
}
