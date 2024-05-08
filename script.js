let firstNumber = "";
let secondNumber = "";
let firstOperator = "";
let secondOperator = "";
let result = 0;
let displayValue = "";      
const numberButtons = document.querySelectorAll("button.number");
const operationButtons = document.querySelectorAll("button.operation");
const clearButton = document.querySelector("button.clear");
const equalButton  = document.querySelector("button.equal");
const percentageButton = document.querySelector("button.percentage");
const signButton = document.querySelector("button.sign");
const pointButton = document.querySelector("button.point");

function operate(first, second, sign){
    if (sign == "+"){
        return first + second;
    } else if (sign == "-"){
        return first - second;
    } else if (sign == "*"){
        return first * second;
    } else if (sign == "/"){
        if (second == "0"){
            return 'Error';
        } else return (first / second).toFixed(5);
    }
}

function clearDisplay(){
    displayValue = "";
    firstNumber =  "";
    secondNumber =  "";
    result = "";
    firstOperator = "";
    secondOperator = "";
    updateDisplay();
}

function updateDisplay(){
    const display = document.querySelector("div.display");
    display.innerHTML = displayValue;
}  

updateDisplay();

clearButton.addEventListener("click", () => clearDisplay());

equalButton.addEventListener("click", () => {
    if (firstOperator != ""){
        secondNumber = parseFloat(displayValue);
        result = operate(firstNumber,secondNumber,firstOperator);
        displayValue = result;
        updateDisplay();
        secondNumber = "";
        firstOperator = "";
        firstNumber = displayValue;
        displayValue = "";
    } else if (secondOperator != ""){
        secondNumber = parseFloat(displayValue);
        result = operate(firstNumber,secondNumber,secondOperator);
        displayValue = result;
        updateDisplay();
        secondNumber = "";
        secondOperator = "";
        firstNumber = displayValue;
        displayValue = "";
    } else{
        displayValue = 'Error';
        updateDisplay()
    }
})

numberButtons.forEach((button) =>{
    button.addEventListener("click", function(e) {
        if (displayValue == 'Error'){
            displayValue = e.target.value;
            updateDisplay();
        } else if (result != ""){
            firstNumber = result;
            secondNumber = e.target.value;
            firstOperator = "";
            displayValue = secondNumber;
            updateDisplay();
        } else {
            displayValue += e.target.value;
            updateDisplay();
        }
    } )
})

operationButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        if (displayValue != ""){
            if (firstOperator == ""){
                firstNumber = parseFloat(displayValue);
                firstOperator = e.target.value;
                displayValue = "";
                updateDisplay();
            } else {
                secondNumber = parseFloat(displayValue);
                secondOperator = e.target.value;
                result = operate(firstNumber,secondNumber,firstOperator);
                displayValue = result;
                updateDisplay();
            }
        }
    })
})

signButton.addEventListener("click", () => {
    displayValue = -displayValue;
    updateDisplay();
})

percentageButton.addEventListener("click", () => {
    if (displayValue != 0 ) {
        displayValue = displayValue / 100;
        updateDisplay();
    }
})

pointButton.addEventListener("click", () => {
    displayValue += ".";
    updateDisplay();
})










