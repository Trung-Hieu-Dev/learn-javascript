const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentplayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

//normal attack
function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;

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

//strong attack
function strongAttackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;

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

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)

