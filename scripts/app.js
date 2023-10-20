// Variables
let monsterMaxHealth = 100;
let currentMonsterHealth = monsterMaxHealth;
const monsterAttackValue = 10;

let playerMaxHealth = 100;
let currentPlayerHealth = playerMaxHealth;
const playerAttackValue = 10;

// Functions
adjustPlayerHealthBar(playerMaxHealth);
adjustMonsterHealthBar(monsterMaxHealth);

// Attack & Damage
function attackHandler(bonus = 1) {
  // MONSTER Health
  const playerToMonsterDamage = dealMonsterDamage(playerAttackValue);
  monsterHealthBar.value =
    +monsterHealthBar.value - bonus * playerToMonsterDamage;
  currentMonsterHealth -= playerToMonsterDamage * bonus;
  // console.log(playerToMonsterDamage);
  // console.log(currentMonsterHealth);
  // console.log(monsterHealthBar.value);

  // PLAYER Health
  const monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);
  playerHealthBar.value = +playerHealthBar.value - monsterToPlayerDamage;
  currentPlayerHealth -= monsterToPlayerDamage;
  // console.log(monsterToPlayerDamage);
  // console.log(currentPlayerHealth);
  // console.log(playerHealthBar.value);

  // RESULT
  if (currentPlayerHealth <= 0) {
    alert("You died!");
  } else if (currentMonsterHealth <= 0) {
    alert("You won!");
  }
  specialCooldownHandler();
}

// Guard
function guardHandler() {
  const monsterToGuardDamage = dealPlayerDamage(monsterAttackValue);
  const damageBlocked = Math.round(Math.random() * monsterToGuardDamage);
  playerHealthBar.value = +playerHealthBar.value - monsterToGuardDamage;
  currentPlayerHealth -= monsterToGuardDamage - damageBlocked;
  if (currentPlayerHealth <= 0) {
    alert("You died!");
  } else if (currentMonsterHealth <= 0) {
    alert("You won!");
  }
  specialCooldownHandler();
}

// Special
let specialCooldownCounter = 0;
document.getElementById("specialCount").textContent = `Special`;

// document.getElementById('specialCount').textContent = ` x ${specialCooldownCounter}`;

function specialCooldownHandler() {
  const special = document.getElementById("specialCount");
  if (specialCooldownCounter > 0) {
    specialCooldownCounter--;
    specialBtn.disabled = true;
    special.textContent = `Cooldown: ${specialCooldownCounter}`;
  }

  if (specialCooldownCounter <= 0) {
    specialBtn.disabled = false;
    special.textContent = `Special`;
  }
}

function specialHandler() {
  attackHandler(2);
  console.log(currentMonsterHealth);
  console.log(monsterHealthBar.value);

  // if (currentPlayerHealth <= 0) {
  //   alert("You died!");
  // } else if (currentMonsterHealth <= 0) {
  //   alert("You won!");
  // }
  specialCooldownCounter = 4;
  specialCooldownHandler();
}

// Heal
let potionCounter = 3;
document.getElementById("potionCount").textContent = ` x ${potionCounter}`;

function potionCounterHandler() {
  const potions = document.getElementById("potionCount");
  if (potionCounter > 0) {
    potionCounter--;
  }

  if (potionCounter <= 0) {
    healBtn.disabled = true;
  }

  potions.textContent = ` x ${potionCounter}`;
}

function healHandler() {
  playerHealthBar.value += 20;
  currentPlayerHealth += 20;

  const monsterToPlayerSpecialDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= monsterToPlayerSpecialDamage;

  if (currentPlayerHealth <= 0) {
    alert("You died!");
  } else if (currentMonsterHealth <= 0) {
    alert("You won!");
  }
  specialCooldownHandler();
  potionCounterHandler();
}

// Event Listeners
attackBtn.addEventListener("click", function() {
  attackHandler(1);
});
guardBtn.addEventListener("click", guardHandler);
specialBtn.addEventListener("click", specialHandler);
healBtn.addEventListener("click", healHandler);
// fleeBtn.addEventListener('click', );
