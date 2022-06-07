import sumMins from '../modules/sumMins.mjs'
import getSumMins from '../modules/getSumMins.mjs'
import minSum from '../modules/minSum.mjs'

document.querySelector('.sumMins').addEventListener('click', calc1)
document.querySelector('.getSumMins').addEventListener('click', calc2)
document.querySelector('.minSum').addEventListener('click', calc3)

function calc1() {
    const data = document.querySelector('.inputData').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + sumMins(dataArray)
}

function calc2() {
    const data = document.querySelector('.inputData').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + getSumMins(dataArray)
}

function calc3() {
    const data = document.querySelector('.inputData').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + minSum(dataArray)
}






