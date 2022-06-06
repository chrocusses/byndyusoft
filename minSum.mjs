import isNum from "./isNum.mjs"

function minSum(array) {
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

    min1 = numbers[0]

    numbers.forEach(el => {
        if (Number(el) < min1) {
            min1 = el
        }
    })
    
    numbers.splice(numbers.findIndex(el => el === min1), 1)
    
    min2 = numbers[0]

    numbers.forEach(el => {
        if(Number(el) < min2) {
            min2 = el
        }
    })

    return +min1 + +min2
}

export default minSum

