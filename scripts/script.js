import sumMinNumbers from '../modules/sumMinNumbers.mjs'


document.querySelector('.sumMinNumbers').addEventListener('click', calc)

function calc() {
    const data = document.querySelector('.inputData').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + sumMinNumbers(dataArray)
}







