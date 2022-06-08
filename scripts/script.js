import { sumMinNumbers } from '../modules/sumMinNumbers.js'

document.querySelector('form').addEventListener('submit', calculateSumOfMinNumbers)


function calculateSumOfMinNumbers(a) {
    a.preventDefault()
    const inputString = document.querySelector('input').value
    const numbersArray = inputString.split(",").map(Number)

    document.querySelector('.result').innerHTML = 'Result: ' + sumMinNumbers(numbersArray)
}






