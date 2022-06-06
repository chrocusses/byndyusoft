function getSumMins(array) {
    let pureArray = []
    let min1
    let min2
    let i

    if (array.length < 2 || array.length > 50) {
        return 'Массив должен содержать от 2 до 50 элементов!'  //  Ставим границу максимальной длины массива (например, 50)
    }

    let isNum = function isNum(el) {
        return typeof Number(el) === 'number' && isFinite(el)  //  Функция для очистки массива от "мусора"
    }

    for (i = 0; i < array.length; i++) {
        if (isNum(array[i])) {
            pureArray.push(Number(array[i]))  //  Формируем новый массив !!! только из чисел !!!
        }
    }

    if (pureArray.length === 0) {  //  Проверка на содержание чисел в новом массиве
        return 'В массиве нет чисел!'
    } else if (pureArray.length < 2) {
        return 'В массиве недостаточно чисел!'
    }

    min1 = pureArray[0]  //  Присваиваем первый элемент переменной min1

    for (i = 1; i < pureArray.length; i++) {  
        if (pureArray[i] <= min1) {  //  Ищем минимальные значения в массиве
            min2 = min1
            min1 = pureArray[i]
        }
    }
    if (min2 === undefined) {  //  Если на прошлом этапе min1 был наименьшим, то min2 === undefined. Поэтому присвоим min2 элемент массива под 1 номером
        min2 = pureArray[1]
    }
    for (i = 0; i < pureArray.length; i++) {
        if (pureArray[i] > min1 && pureArray[i] < min2) {  // Ищем второе минимальное значение - min2
            min2 = pureArray[i]
        }
    }

    return Number(min1) + Number(min2)  // Возврат суммы двух минимальных значений массива
}

export default getSumMins
