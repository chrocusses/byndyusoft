function getSumMins(array) {
    let pureArray = []
    let min1
    let min2
    let i

    if (array.length < 2 || array.length > 50) {
        return 'Массив должен содержать от 2 до 50 элементов!'
    }

    let isNum = function isNum(el) {
        return typeof Number(el) === 'number' && isFinite(el)
    }

    for (i = 0; i < array.length; i++) {
        if (isNum(array[i])) {
            pureArray.push(Number(array[i]))
        }
    }

    if (pureArray.length === 0) {
        return 'В массиве нет чисел!'
    } else if (pureArray.length < 2) {
        return 'В массиве недостаточно чисел!'
    }

    min1 = pureArray[0]

    for (i = 1; i < pureArray.length; i++) {  
        if (pureArray[i] <= min1) {
            min2 = min1
            min1 = pureArray[i]
        }
    }
    if (min2 === undefined) {
        min2 = pureArray[1]
    }
    for (i = 0; i < pureArray.length; i++) {
        if (pureArray[i] > min1 && pureArray[i] < min2) {
            min2 = pureArray[i]
        }
    }

    return Number(min1) + Number(min2)
}

export default getSumMins
