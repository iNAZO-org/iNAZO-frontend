export const uniqueArray = <T extends any[]>(arr: T): T[] => {
  return Array.from(new Set(arr))
}
