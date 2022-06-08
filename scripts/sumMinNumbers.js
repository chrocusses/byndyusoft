import { isNum } from "./isNum.js";

function sumMinNumbers(array) {
  let numbers = [];
  let min1;
  let min2;
  let i;

  if (array.length < 2 || array.length > 50) {
    return "Массив должен содержать от 2 до 50 элементов!";
  }

  for (i = 0; i < array.length; i++) {
    if (isNum(array[i])) {
      numbers.push(Number(array[i]));
    }
  }

  if (numbers.length === 0) {
    return "В массиве нет чисел!";
  } else if (numbers.length < 2) {
    return "В массиве недостаточно чисел!";
  }

  min1 = numbers[0];

  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] <= min1) {
      min2 = min1;
      min1 = numbers[i];
    }
  }

  if (min2 === undefined) {
    min2 = numbers[1];
  }

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > min1 && numbers[i] < min2) {
      min2 = numbers[i];
    }
  }

  return min1 + min2;
}

export { sumMinNumbers };
