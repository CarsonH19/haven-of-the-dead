// ===============================
//        GeneralVariables
// ===============================

// const monsterHealthBar = document.getElementById("monster-health");
// const playerHealthBar = document.getElementById("player-health");

// const attackBtn = document.getElementById("attack-btn");
// const guardBtn = document.getElementById("guard-btn");
// const specialBtn = document.getElementById("special-btn");
// const potionBtn = document.getElementById("potion-btn");
// const fleeBtn = document.getElementById("flee-btn");

// let monsterMaxHealth = 100;
// let currentMonsterHealth = monsterMaxHealth;
// let monsterAttackValue = 10;

// let currentPlayerHealth;

// // ===============================
// //        Hero Variables
// // ===============================
// let heroChoice;
// let baseAttack;
// let baseHealth;
// let specialCooldownCounter = 0;

// // Strength
// let baseStrength;
// let strengthBonusHealth;
// let playerMaxHealth = baseHealth + strengthBonusHealth;

// function calculateStrengthBonusHealth() {
//   return baseStrength * 10;
// }

// function calculatePlayerMaxHealth() {
//   return baseHealth + strengthBonusHealth;
// }

// // Dexterity
// let baseDexterity;
// let dexterityCritIncrease = calculateDexCritIncrease();
// let baseCritModifier = 1.5 + calculateBaseCritModifier();
// let criticalDamage;

// function calculateDexCritIncrease() {
//   return 0.3 * baseDexterity;
// }

// function calculateBaseCritModifier() {
//   return 1.5 + dexterityCritIncrease;
// }

// function calculateCritDamage() {
//   dexterityCritIncrease = calculateDexCritIncrease();
//   baseCritModifier = calculateBaseCritModifier();
//   console.log("baseAttack:", baseAttack);
//   console.log("dexterityCritIncrease:", dexterityCritIncrease);
//   console.log("baseCritModifier:", baseCritModifier);
//   console.log(Math.round(baseAttack * baseCritModifier));
//   return Math.round(baseAttack * baseCritModifier);
// }

// // Faith
// let baseFaith; // add faith to flee function after random number
// let findItemChance; // use when items are finished

// Special & Abilities

// ===============================
//             Health
// ===============================

function setPlayerHealthBar(maxLife) {
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
  currentPlayerHealth = maxLife;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

// ===============================
//            Attack
// ===============================

function playerAttackHandler(smite = 1) {
  const playerToMonsterDamage = dealMonsterDamage(baseAttack) + baseStrength;
  const totalDamage = smite * playerToMonsterDamage;
  monsterHealthBar.value = +monsterHealthBar.value - totalDamage;
  currentMonsterHealth -= totalDamage;
  // console.log(playerToMonsterDamage);
  // console.log(currentMonsterHealth);
  // console.log(monsterHealthBar.value);

  // Paladin Passive Ability Checker
  if (heroChoice === "paladin") {
    paladinRadiantAura();
  }

  isGameOver();
  specialCooldownHandler();
}

function monsterAttackHandler() {
  let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);
  // Rogue Passive Ability Checker
  if (heroChoice === "rogue" && evasionTracker >= monsterToPlayerDamage) {
    monsterToPlayerDamage = 0;
  }

  playerHealthBar.value = +playerHealthBar.value - monsterToPlayerDamage;
  currentPlayerHealth -= monsterToPlayerDamage;

  // console.log(monsterToPlayerDamage);
  // console.log(currentPlayerHealth);
  // console.log(playerHealthBar.value);
}

function dealMonsterDamage(damage) {
  let dealtDamage = Math.round(Math.random() * damage);

  if (heroChoice === "priestess" && dealtDamage < burningDevotionTracker) {
    dealtDamage = burningDevotionTracker;
    console.log(dealtDamage);
    console.log("Burn Baby Burn!");
  }

  return dealtDamage;
}

function dealPlayerDamage(damage) {
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
  const damageTaken = monsterToGuardDamage - damageBlocked;

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

  monsterAttackHandler();
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

let holySmiteTracker = 2.0;
let radiantAuraTracker = 5;
let paladin = {
  name: "Holy Warrior Siggurd",
  level: 1,
  attack: 10,
  health: 120,
  strength: 2,
  dexterity: 0,
  faith: 1,
  special: paladinHolySmite,
};

function setPaladinStats() {
  baseAttack = paladin.attack;
  baseHealth = paladin.health;
  baseStrength = paladin.strength;
  baseDexterity = paladin.dexterity;
  baseFaith = paladin.faith;
  specialAbility = paladin.special;

  criticalDamage = calculateCritDamage();
  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
  setPlayerHealthBar(playerMaxHealth);
}

function paladinHolySmite() {
  playerAttackHandler(holySmiteTracker);
  //   console.log(currentMonsterHealth);
  //   console.log(monsterHealthBar.value);

  isGameOver();
  specialCooldownCounter = 4;
  specialCooldownHandler();
}

function paladinRadiantAura() {
  if (currentMonsterHealth <= radiantAuraTracker) {
    currentMonsterHealth = 0;
    monsterHealthBar.value = 0;
    console.log("Face your judgement!");
  }
}

// ===============================
//        Hero: Rogue
// ===============================

let shadowStrikeTracker = 0;
let evasionTracker = 2;
let rogue = {
  name: "Shadowcloak Riven",
  level: 1,
  attack: 8,
  health: 100,
  strength: 1,
  dexterity: 2,
  faith: 0,
  special: rogueShadowStrike,
};

function setRogueStats() {
  baseAttack = rogue.attack;
  baseHealth = rogue.health;
  baseStrength = rogue.strength;
  baseDexterity = rogue.dexterity;
  baseFaith = rogue.faith;
  specialAbility = rogue.special;

  criticalDamage = calculateCritDamage();
  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
  setPlayerHealthBar(playerMaxHealth);
}

function rogueShadowStrike() {
  guardHandler();

  monsterHealthBar.value = +monsterHealthBar.value - criticalDamage;
  currentMonsterHealth -= criticalDamage;

  isGameOver();
  specialCooldownCounter = 3;
  specialCooldownHandler();
}

// See monsterAttackHandler for Rouge Passive Ability

// ===============================
//        Hero: Priestess
// ===============================

let greaterPrayerTracker = 40;
let burningDevotionTracker = 3;
let priestess = {
  name: "Priestess Liheth",
  level: 1,
  attack: 12,
  health: 90,
  strength: 0,
  dexterity: 1,
  faith: 2,
  special: priestessGreaterPrayer,
};

function setPriestessStats() {
  baseAttack = priestess.attack;
  baseHealth = priestess.health;
  baseStrength = priestess.strength;
  baseDexterity = priestess.dexterity;
  baseFaith = priestess.faith;
  specialAbility = priestess.special;

  criticalDamage = calculateCritDamage();
  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
  setPlayerHealthBar(playerMaxHealth);
}

function priestessGreaterPrayer() {
  playerHealthBar.value += greaterPrayerTracker;
  currentPlayerHealth += greaterPrayerTracker;

  isGameOver();
  specialCooldownCounter = 8;
  specialCooldownHandler();
}

// See dealPlayerDamage for Priestess Passive Ability

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

document.getElementById("heroChoiceModal").style.display = "block";

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
      heroChoice = "paladin";
      setPaladinStats();
      getRandomRoom(catacombRooms);
    } else if (event.target === riven) {
      heroChoice = "rogue";
      setRogueStats();
      getRandomRoom(catacombRooms);
    } else if (event.target === liheth) {
      heroChoice = "priestess";
      setPriestessStats();
      getRandomRoom(catacombRooms);
    }
  }
});


// ===============================
//       Event Listeners
// ===============================

attackBtn.addEventListener("click", function () {
  playerAttackHandler();
  monsterAttackHandler();
});

guardBtn.addEventListener("click", () => {
  guardHandler();
  monsterAttackHandler();
});

specialBtn.addEventListener("click", () => {
  if (heroChoice === "paladin") {
    paladinHolySmite();
  } else if (heroChoice === "rogue") {
    rogueShadowStrike();
  } else if (heroChoice === "priestess") {
    priestessGreaterPrayer();
  }
});

// later create a new function that handles
// the special ability checking which hero with an if statement,
potionBtn.addEventListener("click", () => {
  potionHandler();
  monsterAttackHandler();
});
// fleeBtn.addEventListener('click', );
