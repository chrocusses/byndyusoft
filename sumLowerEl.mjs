function sumLowerEl(array) {
    let min1
    let min2
    let newArray

    if (array.length < 2 || array.length > 50) {
        return 'Массив должен содержать от 2 до 50 элементов!'
    }

    let isNum = function isNum(el) {
        return typeof Number(el) === 'number' && isFinite(el)
    }

    newArray = array.filter(isNum)

    if (newArray.length === 0) {
        return 'В массиве нет чисел!'
    } else if (newArray.length < 2) {
        return 'В массиве недостаточно чисел!'
    }

    min1 = newArray[0]

    newArray.forEach(el => {
        if (Number(el) < min1) {
            min1 = el
        }
    })
    
    newArray.splice(newArray.findIndex(el => el === min1), 1)
    
    min2 = newArray[0]

    newArray.forEach(el => {
        if(Number(el) < min2) {
            min2 = el
        }
    })

    return +min1 + +min2
}

export default sumLowerEl

