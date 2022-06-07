import { sumMinNumbers } from "./sumMinNumbers.js";

describe("sumMinNumbers function", () => {
  describe("correct results", () => {
    test("only positive numbers", () => {
      const actual = sumMinNumbers([4, 0, 3, 19, 492, 10, 1]);
      const expected = 1;

      expect(actual).toEqual(expected);
    });

    test("only negative numbers", () => {
      const actual = sumMinNumbers([-4, -3, -19, -492, -10, -1]);
      const expected = -511;

      expect(actual).toEqual(expected);
    });

    test("mixed numbers", () => {
      const actual = sumMinNumbers([4, 3, -19, 492, -10, -1]);
      const expected = -29;

      expect(actual).toEqual(expected);
    });

    test("numbers and strings", () => {
        const actual = sumMinNumbers(['ab4', 4, 3, 'Z1', -19, 492, 'QWERTY', -10, -1]);
        const expected = -29;
  
        expect(actual).toEqual(expected);
      });
  });

  describe("exceptions", () => {
    test("lesser than required", () => {
      const actual = sumMinNumbers([]);
      const expected = 'Массив должен содержать от 2 до 50 элементов!';

      expect(actual).toEqual(expected);
    });
  });
});
