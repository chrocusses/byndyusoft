function sumMins(array) {
    let min1
    let min2
    let filteredArray

    if (array.length < 2 || array.length > 50) {
        return 'Массив должен содержать от 2 до 50 элементов!'  //  Ставим границы массива
    }

    let isNum = function isNum(el) {
        return typeof Number(el) === 'number' && isFinite(el)  //  Функция для очистки массива от "мусора"
    }

    filteredArray = array.filter(isNum)  //  Создаем новый "фильтрованный" массив

    if (filteredArray.length === 0) {  //  Проверка на содержание чисел в новом массиве
        return 'В массиве нет чисел!'
    } else if (filteredArray.length < 2) {
        return 'В массиве недостаточно чисел!'
    }

    filteredArray.sort((a, b) => a - b)  // Сортируем массив по убыванию и задаем минимальные значения от индексов 0 и 1
    min1 = filteredArray[0]
    min2 = filteredArray[1]

    return Number(min1) + Number(min2)  // Возврат суммы двух минимальных значений массива
}

export default sumMins
