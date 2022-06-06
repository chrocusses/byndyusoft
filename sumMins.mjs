function sumMins(array) {
    let min1
    let min2
    let filteredArray

    if (array.length < 2 || array.length > 50) {
        return 'Массив должен содержать от 2 до 50 элементов!'
    }

    let isNum = function isNum(el) {
        return typeof Number(el) === 'number' && isFinite(el)
    }

    filteredArray = array.filter(isNum)

    if (filteredArray.length === 0) {
        return 'В массиве нет чисел!'
    } else if (filteredArray.length < 2) {
        return 'В массиве недостаточно чисел!'
    }

    filteredArray.sort((a, b) => a - b)
    min1 = filteredArray[0]
    min2 = filteredArray[1]

    return Number(min1) + Number(min2)
}

export default sumMins
