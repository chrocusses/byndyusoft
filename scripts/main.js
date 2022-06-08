import { sumMinNumbers } from './sumMinNumbers.js'

document.querySelector('form').addEventListener('submit', calculateSumOfMinNumbers)

let result = document.querySelector('.result')

function calculateSumOfMinNumbers(event) {
    event.preventDefault()
    const inputString = document.querySelector('input').value
    const numbersArray = inputString.split(",").map(Number)
    result.innerHTML = 'Result: ' + sumMinNumbers(numbersArray)
}






