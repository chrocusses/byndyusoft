import f1 from './sumMins.mjs'
import f2 from './getSumMins.mjs'
import f3 from './minSum.mjs'

document.querySelector('.method1').addEventListener('click', calc1)
document.querySelector('.method2').addEventListener('click', calc2)
document.querySelector('.method3').addEventListener('click', calc3)

function calc1() {
    const data = document.querySelector('.i-1').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + f1(dataArray)
}

function calc2() {
    const data = document.querySelector('.i-1').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + f2(dataArray)
}

function calc3() {
    const data = document.querySelector('.i-1').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + f3(dataArray)
}






