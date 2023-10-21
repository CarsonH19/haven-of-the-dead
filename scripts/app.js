// // ===============================
// //        Imports & Exports
// // ===============================
// import { playerMaxHealth, setPaladinStats, setPriestessStats, setRogueStats } from "./heroes.js";

// export {
//   attackHandler,
//   specialCooldownHandler,
//   specialCooldownCounter,
//   attackBtn,
//   guardBtn,
//   fleeBtn,
//   specialBtn,
//   potionBtn,
// };

// ===============================
//        GeneralVariables
// ===============================

const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");

const attackBtn = document.getElementById("attack-btn");
const guardBtn = document.getElementById("guard-btn");
const specialBtn = document.getElementById("special-btn");
const potionBtn = document.getElementById("potion-btn");
const fleeBtn = document.getElementById("flee-btn");

let monsterMaxHealth = 100;
let currentMonsterHealth = monsterMaxHealth;
let monsterAttackValue = 10;

let currentPlayerHealth;
let playerAttackValue = 10;

// ===============================
//        Hero Variables
// ===============================
let heroChoice;
let baseAttack;
let baseHealth;
let specialCooldownCounter = 0;

// Strength
let baseStrength; 
let strengthBonusHealth;
let playerMaxHealth = baseHealth + strengthBonusHealth;

// Dexterity
let baseDexterity; // add dexterity to guard protection after random number
let dexterityCritIncrease = 0.3 * baseDexterity;
let baseCritChance = 1.5 + dexterityCritIncrease;

// Faith
let baseFaith; // add faith to flee function after random number
let findItemChance; // use when items are finished

// Special & Abilities
let specialAbility;
let passiveAbility;


// ===============================
//             Health
// ===============================

function calculateStrengthBonusHealth() {
  return baseStrength * 10
}

function calculatePlayerMaxHealth() {
  return baseHealth + strengthBonusHealth;
}

function setPlayerHealthBar(maxLife) {
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
  currentPlayerHealth = maxLife;
}

function adjustMonsterHealth(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}


// ===============================
//            Attack
// ===============================

function attackHandler(bonus = 1) {
  // Player to Monster
  const playerToMonsterDamage = dealMonsterDamage(playerAttackValue) + baseStrength;
  monsterHealthBar.value =
    +monsterHealthBar.value - bonus * playerToMonsterDamage;
  currentMonsterHealth -= bonus * playerToMonsterDamage;
  console.log(playerToMonsterDamage);
  console.log(currentMonsterHealth);
  console.log(monsterHealthBar.value);

  // Monster to Player
  const monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);
  playerHealthBar.value = +playerHealthBar.value - monsterToPlayerDamage;
  currentPlayerHealth -= monsterToPlayerDamage;
  // console.log(monsterToPlayerDamage);
  // console.log(currentPlayerHealth);
  // console.log(playerHealthBar.value);

  if (heroChoice === 'paladin') {
    paladinRadiantAura();
  }

  isGameOver();
  specialCooldownHandler();
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.round(Math.random() * damage);
  return dealtDamage;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.round(Math.random() * damage);
  return dealtDamage;
}

// ===============================
//            Special
// ===============================

document.getElementById("specialCount").textContent = `Special`;

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

// ===============================
//            Guard
// ===============================

function guardHandler() {
  const monsterToGuardDamage = calculateMonsterDamage();
  const damageBlocked = Math.round(Math.random() * monsterToGuardDamage);
  const damageTaken = monsterToGuardDamage - damageBlocked

  // Updating Player Health 
  playerHealthBar.value = +playerHealthBar.value - damageTaken;
  currentPlayerHealth -= damageTaken;

  // console.log(`Damage Received: ${monsterToGuardDamage}`);
  // console.log(`Damage Blocked: ${damageBlocked}`);
  // console.log(`Current Player Health ${currentPlayerHealth}`);
  // console.log(`Current Player Health Bar Value ${playerHealthBar.value}`);

  isGameOver();
  specialCooldownHandler();
}

function calculateMonsterDamage() {
  let damage = dealPlayerDamage(monsterAttackValue);
  if (baseDexterity >= damage) {
    return 0;
  } else {
    return damage - baseDexterity;
  }
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

// ===============================
//          Is Game Over?
// ===============================

function isGameOver() {
  if (currentPlayerHealth <= 0) {
    alert("You died!");
  }

  if (currentMonsterHealth <= 0) {
    alert("You won!");
  }

  return;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

// ===============================
//        Hero: Paladin
// ===============================

let holySmiteTracker = 0;
let radiantAuraTracker = 7;
let paladin = {
  name: "Holy Warrior Siggurd",
  level: 1,
  attack: 10,
  health: 120,
  strength: 2,
  dexterity: 0,
  faith: 1,
  special: paladinHolySmite,
  passive: paladinRadiantAura,
};

function setPaladinStats() {
  baseAttack = paladin.attack;
  baseHealth = paladin.health;
  baseStrength = paladin.strength;
  baseDexterity = paladin.dexterity;
  baseFaith = paladin.faith;
  specialAbility = paladin.special;
  passiveAbility = paladin.passive;

  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
  setPlayerHealthBar(playerMaxHealth);
}

function paladinHolySmite() {
  attackHandler(2);
  //   console.log(currentMonsterHealth);
  //   console.log(monsterHealthBar.value);

  isGameOver();
  specialCooldownCounter = 4;
  specialCooldownHandler();
}

function paladinRadiantAura() {
  if (currentMonsterHealth <= radiantAuraTracker) {
    currentMonsterHealth = 0;
    console.log('Face your judgement!');
  }
}

// ===============================
//        Hero: Rogue
// ===============================

let shadowStrikeTracker = 0;
let evasionTracker = 0;
let rogue = {
  name: "Shadowcloak Riven",
  level: 1,
  attack: 12,
  health: 100,
  strength: 1,
  dexterity: 2,
  faith: 0,
  special: rogueShadowStrike,
  passive: rogueEvasion,
};

function setRogueStats() {
  baseAttack = rogue.attack;
  baseHealth = rogue.health;
  baseStrength = rogue.strength;
  baseDexterity = rogue.dexterity;
  baseFaith = rogue.faith;
  specialAbility = rogue.special;
  passiveAbility = rogue.passive;

  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
  setPlayerHealthBar(playerMaxHealth);
}

function rogueShadowStrike() {
  guardHandler();
  monsterHealthBar.value = +monsterHealthBar.value - playerAttackValue;
  currentMonsterHealth -= playerAttackValue;
  console.log(currentMonsterHealth);
  
  isGameOver();
  specialCooldownCounter = 3;
  specialCooldownHandler();
}
function rogueEvasion() {}

// ===============================
//        Hero: Priestess
// ===============================

let greaterPrayerTracker = 0;
let guidingLightTracker = 0;
let priestess = {
  name: "Priestess Liheth",
  level: 1,
  attack: 8,
  health: 90,
  strength: 0,
  dexterity: 1,
  faith: 2,
  special: priestessGreaterPrayer,
  passive: priestessGuidingLight,
};

function setPriestessStats() {
  baseAttack = priestess.attack;
  baseHealth = priestess.health;
  baseStrength = priestess.strength;
  baseDexterity = priestess.dexterity;
  baseFaith = priestess.faith;
  specialAbility = priestess.special;
  passiveAbility = priestess.passive;
  
}

function priestessGreaterPrayer() {}
function priestessGuidingLight() {}

// ===============================
//        Boons & Leveling
// ===============================

let availableBoons = [];

// randomly choose a boon
// discard chosen boon from list
// apply boon to hero

// ===============================
//       Choose Hero Modal
// ===============================

function openChooseHeroModal() {
  document.getElementById("heroChoiceModal").style.display = "block";
}

openChooseHeroModal();

window.addEventListener("click", function (event) {
  const siggurd = document.getElementById("siggurd");
  const riven = document.getElementById("riven");
  const liheth = document.getElementById("liheth");

  if (
    event.target === siggurd ||
    event.target === riven ||
    event.target === liheth
  ) {
    document.getElementById("heroChoiceModal").style.display = "none";

    if (event.target === siggurd) {
      heroChoice = 'paladin';
      setPaladinStats();
    } else if (event.target === riven) {
      heroChoice = 'rogue';
      setRogueStats();
    } else if (event.target === liheth) {
      heroChoice = 'priestess';
      setPriestessStats();
    }
  }
});

adjustMonsterHealth(monsterMaxHealth);


// ===============================
//       Event Listeners
// ===============================

attackBtn.addEventListener("click", function () {
  attackHandler(1);
});
guardBtn.addEventListener("click", guardHandler);
specialBtn.addEventListener("click", () => {
  if (heroChoice === 'paladin') {
    paladinHolySmite();
  } else if (heroChoice === 'rogue') {
    rogueShadowStrike();
  } else if (heroChoice === 'priestess') {
    priestessGreaterPrayer();
  }
});
// later create a new function that handles
// the special ability checking which hero with an if statement,
potionBtn.addEventListener("click", potionHandler);
// fleeBtn.addEventListener('click', );
