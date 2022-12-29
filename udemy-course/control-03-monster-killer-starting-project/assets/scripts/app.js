const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEALTH_VALUE = 20;

const enteredValue = prompt('Maximum bloot for you and the monster.', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPalyerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  //use bonus to increase player health and remove bonus element
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPalyerHealth;
    alert('You would be dead but the bonus life saved you !');
    setPlayerHealth(initialPalyerHealth);
  }

  //check lost or win
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won !');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost !');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw !');
  }

  //reset game
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0 ) {
    reset(chosenMaxLife);
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;

  endRound();
}

//normal attack
function attackHandler() {
  attackMonster('ATTACK');
}

//strong attack
function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

//health
function healthHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEALTH_VALUE) {
    alert('You can not health to more than your max initial health.');
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEALTH_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healthHandler);
