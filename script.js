let firstNumber;
let secondNumber;
let operator;
let displayValue = document.querySelector("h1.result").innerHTML;
const addSign = "+";
const substractSign = "-";
const multiplySign = "*";
const divideSign = "/";
const numberButtons = document.querySelectorAll("button.number");
const operationButtons = document.querySelectorAll("button.operation");
const otherButtons = document.querySelectorAll("button.other");
const clearButton = document.querySelector("button.clear");

const add = (first, second) => first + second;
const substract = (first, second) => first - second;
const multiply = (first, second) => first * second;
const divide = (first, second) => first / second;

function operate(first, second, sign){
    if (sign == addSign){
        return add(first,second);
    } else if (sign == substractSign){
        return substract(first,second);
    } else if (sign == multiplySign){
        return multiply(first,second);
    } else if (sign == divideSign){
        return divide(first,second);
    }
}

clearButton.addEventListener("click", clear());

function clear(){ 
    displayValue = "";
}

function display(number){
    if (displayValue == undefined){
        displayValue = number;
        document.querySelector("h1.result").innerHTML = displayValue;
    } else 
    displayValue = number + displayValue.toString();
    document.querySelector("h1.result").innerHTML = displayValue;
}

numberButtons.forEach((button) =>{
    const value = button.value;
    button.addEventListener("click", display(value));
})



