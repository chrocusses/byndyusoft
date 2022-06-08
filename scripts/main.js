import { sumMinNumbers } from "./sumMinNumbers.js";

document.querySelector("form").addEventListener("submit", formSubmitHandler);

const result = document.querySelector(".result");

function formSubmitHandler(event) {
event.preventDefault();

const inputValue = event.target.querySelector("input").value;

try {
    const numbersArray = inputValue.split(",").map(Number);
    result.innerHTML = `Result: ${sumMinNumbers(numbersArray)}`;
  } catch (exception){
    result.innerHTML = 'Enter from 2 to 50 numbers separated by commas';
  }
}
