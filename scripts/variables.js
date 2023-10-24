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
//           Trap Modal
// ===============================

const trapModal = document.getElementById('trapModal');
const trapButtonOne = document.getElementById('trapButtonOne');
const trapButtonTwo = document.getElementById('trapButtonTwo');

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

const log = document.getElementById("log");

const LOG_EVENT_MONSTER_ATTACK = 'MONSTER ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_CRITICAL = 'PLAYER CRITICAL ATTACK';
const LOG_EVENT_GUARD = 'GUARD';
const LOG_EVENT_POTION = 'POTION';
const LOG_EVENT_FLEE = 'FLEE'
const LOG_EVENT_LEVEL = 'LEVEL UP'
const LOG_EVENT_NEW_ROOM = 'NEW ROOM';

const LOG_EVENT_TRAP_DESCRIPTION = 'TRAP DESCRIPTION';
const LOG_EVENT_TRAP_PASS = 'TRAP PASS';
const LOG_EVENT_TRAP_FAIL = 'TRAP FAIL';


const LOG_EVENT_SMITE = 'SMITE';
const LOG_EVENT_SMITE_CRITICAL = 'CRITICAL SMITE';
const LOG_EVENT_RADIANT_AURA = 'RADIANT AURA';

const LOG_EVENT_SHADOW_STRIKE = 'SHADOW STRIKE';
const LOG_EVENT_EVASION = 'EVASION';

const LOG_EVENT_GREATER_PRAYER = 'GREATER PRAYER';
const LOG_EVENT_BURNING_RADIANCE = 'BURNING RADIANCE'



// ===============================
//        Hero Variables
// ===============================
let heroChoice;
let baseAttack;
let baseHealth;
let potionHealValue = 20;
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
