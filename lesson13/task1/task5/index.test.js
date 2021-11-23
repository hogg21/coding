import { withdraw,  reverseArray, getAdults } from './index';

it('should reverse this array', () => {
    const result = reverseArray([1, 2, 3, 4]);

    expect(result).toEqual([4, 3, 2, 1])
})
it('should reverse this array', () => {
    const result = reverseArray([1, 10, 22]);

    expect(result).toEqual([22, 10, 1])
})
it('should reverse this array', () => {
    const result = reverseArray([5, 2, 3]);

    expect(result).toEqual([3, 2, 5])
})
it("should return -1 if amount is less than number in array", () => {
    const result = withdraw(['Denis', 'Andrey', 'Vitalik'], [1000, 50, 200], "Andrey", 10);

    expect(result).toEqual(40);
})
it("should return -1 if amount is less than number in array", () => {
    const result = withdraw(['Denis', 'Andrey', 'Vitalik'], [1000, 50, 200], "Denis", 1500);

    expect(result).toEqual(-1);
})
it("should return -1 if amount is less than number in array", () => {
    const result = withdraw(['Denis', 'Andrey', 'Vitalik'], [1000, 50, 200], "Vitalik", 150);

    expect(result).toEqual(50);
})
it("should return object with key+value where value >=18", () => {
    const result = getAdults({Denis: 12, Ivan: 26, Zhenya: 16});

    expect(result).toEqual({Ivan: 26})
})
it("should return object with key+value where value >=18", () => {
    const result = getAdults({Andrey: 22, Ivan: 16, Boris: 18});

    expect(result).toEqual({Andrey: 22, Boris: 18})
})
it("should return object with key+value where value >=18", () => {
    const result = getAdults({Hogg: 19, Ivan: 11, Sergey: 50});

    expect(result).toEqual({Hogg: 19, Sergey: 50})
})