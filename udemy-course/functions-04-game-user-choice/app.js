const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

//get player choice
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

//get computer choice
const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }

}

//get the winner
const getWinner = (cChoice, pChoice) => {
  if (cChoice == pChoice) {
    return RESULT_DRAW;
  } else if ( 
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
}

startGameBtn.addEventListener('click', () => {
  if(gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game running...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  const winner = getWinner(computerSelection, playerSelection);
  console.log(winner);

});
