const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEALTH_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentplayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentplayerHealth -= playerDamage;

    if (currentMonsterHealth <= 0  && currentplayerHealth > 0) {
        alert('You won !');
    } else if(currentplayerHealth <= 0  && currentMonsterHealth > 0) {
        alert('You lost !');
    } else if(currentMonsterHealth <= 0 && currentplayerHealth <= 0) {
        alert('You have a draw !')
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
    if (currentplayerHealth >= chosenMaxLife - HEALTH_VALUE) {
        alert('You can not health to more than your max initial health.');
        healValue = chosenMaxLife - currentplayerHealth;
    } else {
        healValue = HEALTH_VALUE;
    }
    increasePlayerHealth(healValue);
    currentplayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healthHandler);
