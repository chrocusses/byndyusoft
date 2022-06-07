import { sumMinNumbers } from '../modules/sumMinNumbers.js'

document.querySelector('.getSumMinNumbers').addEventListener('click', calculateSumOfMinNumbers)

function calculateSumOfMinNumbers() {
    const inputString = document.querySelector('.inputData').value
    const numbersArray = inputString.split(",").map(Number)

    document.querySelector('.result').innerHTML = 'Result: ' + sumMinNumbers(numbersArray)
}







