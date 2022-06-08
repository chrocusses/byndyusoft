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
    test("empty array", () => {
      const actual = sumMinNumbers([4, 3, -19, 492, -10, -1, 2, 8, 13, 77, -100, -12, -3, 4, 18, 23, 7, 3, 0, -1, 11, 45, -22, 24, 25, 4, 3, -19, 492, -10, -1, 2, 8, 13, 77, -100, -12, -3, 4, 18, 23, 7, 3, 0, -1, 11, 45, -22, 24, 25, 51]);
      const expected = 'Массив должен содержать от 2 до 50 элементов!';

      expect(actual).toEqual(expected);
    });

    test("filled array", () => {
      const actual = sumMinNumbers([]);
      const expected = 'Массив должен содержать от 2 до 50 элементов!';

      expect(actual).toEqual(expected);
    });

    test("only 1 number in array", () => {
      const actual = sumMinNumbers(['z0', 'speq', 5]);
      const expected = 'В массиве недостаточно чисел!';

      expect(actual).toEqual(expected);
    });

    test("no numbers array", () => {
      const actual = sumMinNumbers(['queue', 'fas', '---', '!']);
      const expected = 'В массиве нет чисел!';

      expect(actual).toEqual(expected);
    });
  });
});
