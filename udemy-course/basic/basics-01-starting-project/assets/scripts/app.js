//define variable
const defaultResult = 0; //assign value to variable

let currentResult = defaultResult;

function getUserInput() {
    return parseInt(usrInput.value)
}

//define fucntion
function add() {

    const enteredNumber = getUserInput();

    const calcDescription =  `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;

    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add); //use add -> excute later when the button click


