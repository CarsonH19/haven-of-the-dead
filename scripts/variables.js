// // ===============================
// //        GeneralVariables
// // ===============================

const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");

const monsterContainer = document.getElementById('monsterContainer');
monsterContainer.style.display = "none";


const attackBtn = document.getElementById("attack-btn");
const guardBtn = document.getElementById("guard-btn");
const specialBtn = document.getElementById("special-btn");
const potionBtn = document.getElementById("potion-btn");
const fleeBtn = document.getElementById("flee-btn");

let monsterMaxHealth = 100;
let currentMonsterHealth = monsterMaxHealth;
let monsterAttackValue = 10;

let currentPlayerHealth;

// ===============================
//         Game Window
// ===============================

const bottomContent = document.querySelector(".bottom-content");
const playerContainer = document.querySelector(".player-container");

// ===============================
//     Catacomb Entrance Modal
// ===============================

const catacombEntranceModal = document.getElementById("catacombEntranceModal");
const greatCatacombsBtn = document.getElementById("greatCatacombsBtn");

// ===============================
//      Continue Button Modal
// ===============================

const continueButtonModal = document.getElementById("continueButtonModal");
const continueButton = document.getElementById("continueButton");

// ===============================
//        Choose Hero Modal
// ===============================

const heroChoiceModal = document.getElementById("heroChoiceModal");

// ===============================
//            Special
// ===============================

const specialText = document.getElementById("specialCount");

// ===============================
//        Log Variables
// ===============================

const LOG_EVENT_MONSTER_ATTACK = 'MONSTER ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_CRITICAL = 'PLAYER CRITICAL ATTACK';
const LOG_EVENT_SMITE = 'SMITE';
const LOG_EVENT_SMITE_CRITICAL = 'SMITE';
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

function calculateStrengthBonusHealth() {
  return baseStrength * 10;
}

function calculatePlayerMaxHealth() {
  return baseHealth + strengthBonusHealth;
}

// Dexterity
let baseDexterity;
let dexterityCritIncrease = calculateDexCritIncrease();
let baseCritModifier = 1.5 + calculateBaseCritModifier();
let criticalDamage;

function calculateDexCritIncrease() {
  return 0.3 * baseDexterity;
}

function calculateBaseCritModifier() {
  return 1.5 + dexterityCritIncrease;
}

function calculateCritDamage() {
  dexterityCritIncrease = calculateDexCritIncrease();
  baseCritModifier = calculateBaseCritModifier();
  // console.log("baseAttack:", baseAttack);
  // console.log("dexterityCritIncrease:", dexterityCritIncrease);
  // console.log("baseCritModifier:", baseCritModifier);
  // console.log(Math.round(baseAttack * baseCritModifier));
  return Math.round(baseAttack * baseCritModifier);
}

// Faith
let baseFaith; // add faith to flee function after random number
let findItemChance; // use when items are finished
