// ===============================
//        Imports & Exports
// ===============================

import {
  attackHandler,
  isGameOver,
  specialCooldownHandler,
  specialCooldownCounter,
} from "./app.js";

export {
  setPaladinStats,
  paladinHolySmite,
  setRogueStats,
  setPriestessStats,
  playerMaxHealth,
};

// ===============================
//        Hero Variables
// ===============================
let baseAttack = 0;
let baseHealth = 1;
// export let playerMaxHealth = 100;

// Strength
let baseStrength = 2; //add strength to bonus damage after random number
let strengthBonusHealth = baseStrength * 10;
let playerMaxHealth = baseHealth + strengthBonusHealth;

// Dexterity
let baseDexterity; // add deterity to guard protection after random number
let dexterityCritIncrease = 0.3 * baseDexterity;
let baseCritChance = 1.5 + dexterityCritIncrease;

// Faith
let baseFaith = 0; // add faith to flee function after random number
let findItemChance = 0; // use when items are finished

// Special & Abilities
let specialAbility = null;
let passiveAbility = null;

// ===============================
//        Hero: Paladin
// ===============================
let holySmiteTracker = 0;
let radiantAuraTracker = 0;
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
  console.log(baseAttack);
  console.log(baseHealth);
  console.log(baseStrength);
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
  console.log("test");
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
}

function rogueShadowStrike() {}
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


