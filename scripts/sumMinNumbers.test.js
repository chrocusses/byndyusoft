import { sumMinNumbers } from "./sumMinNumbers.js";

describe("sumMinNumbers function", () => {
  describe("Done", () => {
    test("only positive numbers array", () => {
      const actual = sumMinNumbers([4, 0, 3, 19, 492, 10, 1]);
      const expected = 1;

      expect(actual).toBe(expected);
    });

    test("only negative numbers array", () => {
      const actual = sumMinNumbers([-4, -3, -19, -492, -10, -1]);
      const expected = -511;

      expect(actual).toBe(expected);
    });

    test("mixed numbers array", () => {
      const actual = sumMinNumbers([4, 3, -19, 492, -10, -1]);
      const expected = -29;

      expect(actual).toBe(expected);
    });

    test("numbers and strings array", () => {
      const actual = sumMinNumbers([
        "ab4",
        4,
        3,
        "Z1",
        -19,
        492,
        "QWERTY",
        -10,
        -1,
      ]);
      const expected = -29;

      expect(actual).toBe(expected);
    });
  });

  describe("Errors", () => {
    test("filled array", () => {
      const actual = () => {
        sumMinNumbers(new Array(51));
      };

      expect(actual).toThrow(
        new Error("Массив должен содержать от 2 до 50 элементов!"),
      );
    });

    test("empty array", () => {
      const actual = () => {
        sumMinNumbers([]);
      };

      expect(actual).toThrow(
        new Error("Массив должен содержать от 2 до 50 элементов!"),
      );
    });
  });
});
