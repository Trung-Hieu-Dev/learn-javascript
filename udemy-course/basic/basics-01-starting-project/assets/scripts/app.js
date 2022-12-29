//define variable
const defaultResult = 1; //assign value to variable

let currentResult = defaultResult;

function getUserInput() {
    return parseInt(usrInput.value);
}

function writeResultOutput(operator, enteredNumber) {
    const calcDescription =  `${enteredNumber} ${operator} ${currentResult}`;

    if (operator === '+') {
        currentResult = enteredNumber + currentResult;
    } else if (operator === '-') {
        currentResult = enteredNumber - currentResult;
    } else if (operator === '*') {
        currentResult = enteredNumber * currentResult;
    } if (operator === '/') {
        currentResult = enteredNumber / currentResult;
    }

    outputResult(currentResult, calcDescription);
    
}

//define fucntion
function add() {
    const enteredNumber = getUserInput();
    writeResultOutput('+', enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInput();
    writeResultOutput('-', enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    writeResultOutput('*', enteredNumber);
}

function devide() {
    const enteredNumber = getUserInput();
    writeResultOutput('/', enteredNumber);
}

addBtn.addEventListener('click', add); //use add -> excute later when the button click

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', devide);


