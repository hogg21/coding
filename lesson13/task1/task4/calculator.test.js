import { calc } from './calculator';

it('should return sum "1 + 1 = 2"', () => {
    const result = calc("1 + 1");

    expect(result).toEqual("1 + 1 = 2");
});

it('should return sum "20 + 12 = 32"', () => {
    const result = calc("20 + 12");

    expect(result).toEqual("20 + 12 = 32");
});

it('should return null if isnt string', () => {
    const result = calc(2);

    expect(result).toBe(null);
})