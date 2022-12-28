//define variable
const defaultResult = 0; //assign value to variable

let currentResult = defaultResult;

//define fucntion
function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult);
}

addBtn.addEventListener('click', add); //use add -> excute later when the button click


