import isNum from "./isNum.mjs"

function sumMins(array) {
    let min1
    let min2
    let numbers

    if (array.length < 2 || array.length > 50) {
        return 'Массив должен содержать от 2 до 50 элементов!'
    }

    numbers = array.filter(isNum)

    if (numbers.length === 0) {
        return 'В массиве нет чисел!'
    } else if (numbers.length < 2) {
        return 'В массиве недостаточно чисел!'
    }

    numbers.sort((a, b) => a - b)
    min1 = numbers[0]
    min2 = numbers[1]

    return Number(min1) + Number(min2)
}

export default sumMins
