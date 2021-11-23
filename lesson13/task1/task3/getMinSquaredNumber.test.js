
import { minSquaredNumber } from './getMinSquaredNumber';

it('should return infinity', () => {
    const result = minSquaredNumber([]);

    expect(result).toBe(Infinity);
})
it('return null if if array is not array', () => {
    const result = minSquaredNumber('asdasa');

    expect(result).toBe(null);
})

it('should return smallest squared number of array', () => {
    const result = minSquaredNumber([2, 10, 8, 14, 1])

    expect(result).toEqual(1);
})