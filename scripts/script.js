import { sumMinNumbers } from './sumMinNumbers.js'

document.querySelector('form').addEventListener('submit', calculateSumOfMinNumbers)


function calculateSumOfMinNumbers(event) {
    event.preventDefault()
    const inputString = document.querySelector('input').value
    const numbersArray = inputString.split(",").map(Number)

    document.querySelector('.result').innerHTML = 'Result: ' + sumMinNumbers(numbersArray)
}






