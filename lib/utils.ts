/**
 * Range from 0 to n exclusive
 * @param n array size
 * @returns array of indices
 */
export function range(n: number) {
  return Array.from(Array(n).keys())
}
