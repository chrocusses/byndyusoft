function sumLowerEl(array) {
    let min1
    let min2
    let newArray

    if (array.length < 2 || array.length > 50) {
        return 'Массив должен содержать от 2 до 50 элементов!'  //  Ставим границу максимальной длины массива (например, 50)
    }

    let isNum = function isNum(el) {
        return typeof Number(el) === 'number' && isFinite(el)  //  Функция для очистки массива от "мусора"
    }

    newArray = array.filter(isNum)  //  Формируем новый массив !!! только из чисел !!!

    if (newArray.length === 0) {  //  Проверка на содержание чисел в новом массиве
        return 'В массиве нет чисел!'
    } else if (newArray.length < 2) {
        return 'В массиве недостаточно чисел!'
    }

    min1 = newArray[0]  //  Присваиваем первый элемент нового массива min1

    newArray.forEach(el => {  // Ищем первое минимальное значение
        if (Number(el) < min1) {
            min1 = el
        }
    })
    
    newArray.splice(newArray.findIndex(el => el === min1), 1)  //  Удаляем из массива min1
    
    min2 = newArray[0]  //  Присваиваем переменной min2 минимальное значение (отличное от min1)

    newArray.forEach(el => {  //  Ищем второе минимальное значение
        if(Number(el) < min2) {
            min2 = el
        }
    })

    return +min1 + +min2  //  Возвращаем сумму двух минимальных чисел в массиве
}

export default sumLowerEl

