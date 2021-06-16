import { alternateArrays, cutToSameLength, shuffleArray } from './array.utils';

describe('Array Utils', () => {
  describe('test alternateArrays', () => {
    it('should alternate two arrays with same length', () => {
      const arrayA = [1, 2, 3];
      const arrayB = ['A', 'B', 'C'];

      expect(alternateArrays(arrayA, arrayB)).toEqual([1, 'A', 2, 'B', 3, 'C']);
    });

    it('should alternate two arrays with different lengths', () => {
      const arrayA = [1, 2, 3];
      const arrayB = ['A', 'B', 'C', 'D'];
      const arrayC = [1, 2, 3, 4, 5];

      expect(alternateArrays(arrayA, arrayB)).toEqual([
        1,
        'A',
        2,
        'B',
        3,
        'C',
        'D',
      ]);

      expect(alternateArrays(arrayB, arrayC)).toEqual([
        'A',
        1,
        'B',
        2,
        'C',
        3,
        'D',
        4,
        5,
      ]);
    });
  });

  describe('test cutToSameLength', () => {
    it('should cut arrays with different lengths based on the largest', () => {
      expect(cutToSameLength([1, 2, 3], [1, 2])).toEqual([
        [1, 2],
        [1, 2],
      ]);

      expect(cutToSameLength([1, 2], [1, 2, 3])).toEqual([
        [1, 2],
        [1, 2],
      ]);
    });

    it('should cut arrays with same length', () => {
      expect(cutToSameLength([1, 2], [1, 2])).toEqual([
        [1, 2],
        [1, 2],
      ]);
    });
  });

  describe('test shuffleArray', () => {
    it('should shuffle array', () => {
      expect(shuffleArray([1, 2, 3])).not.toEqual([[1, 2, 3]]);
    });
  });
});
