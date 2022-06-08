import { isNum } from "./isNum.js";

function sumMinNumbers(inputArray) {
  const numbersArray = inputArray.filter(isNum);
  let min1 = Infinity;
  let min2 = Infinity;

  if (numbersArray.length < 2 || numbersArray.length > 50) {
    throw new Error("Массив должен содержать от 2 до 50 элементов!");
  }

  for (const number of inputArray) {
    if (number < min1) {
      if (min1 < min2) {
        min2 = min1;
      }
      min1 = number;
    } else if (number < min2) {
      min2 = number;
    }
  }

  return min1 + min2;
}

export { sumMinNumbers };
