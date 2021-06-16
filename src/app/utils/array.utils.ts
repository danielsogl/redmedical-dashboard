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

/**
 * Takes two arrays and returns them alternated into one
 *
 * @example
 * ```ts
 * cutToSameLength([1, 2, 3], [1, 2, 3, 4]);
 * // output
 * [1, 2, 3] // [1, 2, 3]
 * ```
 */
export const cutToSameLength = <T, K>(a: T[], b: K[]) => {
  const lengthA = a.length;
  const lengthB = b.length;
  if (lengthA > lengthB) {
    return [a.splice(0, lengthB), b];
  } else if (lengthB > lengthA) {
    return [a, b.splice(0, lengthA)];
  }
  return [a, b];
};

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
