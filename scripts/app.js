// ===============================
//            Variables
// ===============================
let monsterMaxHealth = 100;
let currentMonsterHealth = monsterMaxHealth;
const monsterAttackValue = 10;

// let playerMaxHealth = 100;
let currentPlayerHealth = playerMaxHealth;
const playerAttackValue = 10;

adjustPlayerHealthBar(playerMaxHealth);
adjustMonsterHealthBar(monsterMaxHealth);

// ===============================
//            Attack
// ===============================
function attackHandler(bonus = 1) {
  // Player to Monster 
  const playerToMonsterDamage = dealMonsterDamage(playerAttackValue);
  monsterHealthBar.value =
    +monsterHealthBar.value - bonus * playerToMonsterDamage;
  currentMonsterHealth -= playerToMonsterDamage * bonus;
  // console.log(playerToMonsterDamage);
  // console.log(currentMonsterHealth);
  // console.log(monsterHealthBar.value);

  // Monster to Player 
  const monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);
  playerHealthBar.value = +playerHealthBar.value - monsterToPlayerDamage;
  currentPlayerHealth -= monsterToPlayerDamage;
  // console.log(monsterToPlayerDamage);
  // console.log(currentPlayerHealth);
  // console.log(playerHealthBar.value);

  isGameOver();
  specialCooldownHandler();
}

// ===============================
//            Guard
// ===============================
function guardHandler() {
  const monsterToGuardDamage = dealPlayerDamage(monsterAttackValue);
  const damageBlocked = Math.round(Math.random() * monsterToGuardDamage);
  playerHealthBar.value = +playerHealthBar.value - monsterToGuardDamage;
  currentPlayerHealth -= monsterToGuardDamage - damageBlocked;

  isGameOver();
  specialCooldownHandler();
}

// ===============================
//            Potion
// ===============================
let potionCounter = 3;
document.getElementById("potionCount").textContent = ` x ${potionCounter}`;

function potionCounterHandler() {
  const potions = document.getElementById("potionCount");
  if (potionCounter > 0) {
    potionCounter--;
  }

  if (potionCounter <= 0) {
    potionBtn.disabled = true;
  }

  potions.textContent = ` x ${potionCounter}`;
}

function potionHandler() {
  playerHealthBar.value += 20;
  currentPlayerHealth += 20;

  const monsterToPlayerSpecialDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= monsterToPlayerSpecialDamage;

  isGameOver();
  specialCooldownHandler();
  potionCounterHandler();
}

function isGameOver() {
  if (currentPlayerHealth <= 0) {
    alert("You died!");
  }

  if (currentMonsterHealth <= 0) {
    alert("You won!");
  }

  return;
}

// Event Listeners & Imports
// import {paladinHolySmite} from "./heroes";

attackBtn.addEventListener("click", function() {
  attackHandler(1);
});
guardBtn.addEventListener("click", guardHandler);
specialBtn.addEventListener("click", paladinHolySmite); 
// later create a new function that handles
// the special ability checking which hero with an if statement,
potionBtn.addEventListener("click", potionHandler);
// fleeBtn.addEventListener('click', );
