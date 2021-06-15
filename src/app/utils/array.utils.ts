/**
 * Takes two arrays and returns them alternated into one
 *
 * @example
 * ```ts
 * alternateArrays([1, 2, 3], ['A', 'B', 'C']);
 * // output
 * [1, 'A', 2, 'B', 3, 'C']
 * ```
 */
export const alternateArrays = <T, K>(a: T[], b: K[]): (T | K)[] => {
  const alternatedArray = [];
  let i,
    l = Math.min(a.length, b.length);
  for (i = 0; i < l; i++) {
    alternatedArray.push(a[i], b[i]);
  }
  alternatedArray.push(...a.slice(l), ...b.slice(l));
  return alternatedArray;
};
