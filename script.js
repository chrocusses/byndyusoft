import f1 from './sumMins.mjs'
import f2 from './getSumMins.mjs'
import f3 from './sumLowerEl.mjs'
import isNum from './isNum.mjs'

document.querySelector('.method1').addEventListener('click', calculate1)
document.querySelector('.method2').addEventListener('click', calculate2)
document.querySelector('.method3').addEventListener('click', calculate3)

function calculate1() {
    const data = document.querySelector('.i-1').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + f1(dataArray)
}

function calculate2() {
    const data = document.querySelector('.i-1').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + f2(dataArray)
}

function calculate3() {
    const data = document.querySelector('.i-1').value
    const dataArray = data.split(",")
    document.querySelector('.result').innerHTML = 'Result: ' + f3(dataArray)
}






