const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEALTH_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1

const LOG_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_PLAYER_HEALTH = 'PLAYER_HEALTH';
const LOG_GAME_OVER = 'GAME_OVER';

let battleLog = [];

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
  writeLog(LOG_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

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
    writeLog(LOG_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost !');
    writeLog(LOG_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw !');
    writeLog(LOG_GAME_OVER, 'A DRAW', currentMonsterHealth, currentPlayerHealth);
  }

  //reset game
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset(chosenMaxLife);
  }
}

function attackMonster(mode) {
  let maxDamage;
  let logEvent;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_PLAYER_STRONG_ATTACK;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;

  writeLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

  endRound();
}

//normal attack
function attackHandler() {
  attackMonster(MODE_ATTACK);
}

//strong attack
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
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

  writeLog(LOG_PLAYER_HEALTH, healValue, currentMonsterHealth, currentPlayerHealth);

  endRound();
}

//log
function writeLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  if (ev === LOG_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (ev === LOG_PLAYER_STRONG_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (ev === LOG_MONSTER_ATTACK) {
    logEntry.target = 'PLAYER';
  } else if (ev === LOG_PLAYER_HEALTH) {
    logEntry.target = 'PLAYER';
  } else if (ev === LOG_GAME_OVER) {
    logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
  }
  battleLog.push(logEntry);
}

function printLogHandler() {
    console.log(battleLog);
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healthHandler);
logBtn.addEventListener('click', printLogHandler)
