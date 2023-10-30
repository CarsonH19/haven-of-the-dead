// // ===============================
// //        GeneralVariables
// // ===============================

const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");

const monsterContainer = document.getElementById("monsterContainer");
monsterContainer.style.display = "none";

const attackBtn = document.getElementById("attack-btn");
const guardBtn = document.getElementById("guard-btn");
const specialBtn = document.getElementById("special-btn");
const potionBtn = document.getElementById("potion-btn");
const fleeBtn = document.getElementById("flee-btn");

let monsterMaxHealth = 100;
let currentMonsterHealth = monsterMaxHealth;
let monsterAttackValue = 10;

let currentPlayerHealth = null;

// ===============================
//         Game Window
// ===============================

const bottomContent = document.querySelector(".bottom-content");
const playerContainer = document.querySelector(".player-container");
const roomsCleared = document.getElementById("roomsCleared");
let roomCounter = 0;

// ===============================
//     Catacomb Entrance Modal
// ===============================

const catacombEntranceModal = document.getElementById("catacombEntranceModal");
const greatCatacombsBtn = document.getElementById("greatCatacombsBtn");

// ===============================
//      Room Summary Modal
// ===============================

let roomSummaryInformation;

// ===============================
//      Continue Button Modal
// ===============================

const continueButtonModal = document.getElementById("continueButtonModal");
const continueButton = document.getElementById("continueButton");

// ===============================
//           Event Modal
// ===============================

const eventModal = document.getElementById('eventModal');
const eventButtonOne = document.getElementById('eventButtonOne');
const eventButtonTwo = document.getElementById('eventButtonTwo');

// ===============================
//        Choose Hero Modal
// ===============================

const heroChoiceModal = document.getElementById("heroChoiceModal");

// ===============================
//        Log Variables
// ===============================

const log = document.getElementById("log");
const logContainer = document.getElementById('logContainer');
const logModal = document.getElementById('logModal');
const logModalList = document.getElementById('logModalList');


const LOG_EVENT_MONSTER_ATTACK = "MONSTER ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_CRITICAL = "PLAYER CRITICAL ATTACK";
const LOG_EVENT_GUARD = "GUARD";
const LOG_EVENT_POTION = "POTION";
const LOG_EVENT_FLEE = "FLEE";
const LOG_EVENT_LEVEL = "LEVEL UP";
const LOG_EVENT_NEW_ROOM = "NEW ROOM";

const LOG_EVENT_TRAP_DESCRIPTION = "TRAP DESCRIPTION";
const LOG_EVENT_TRAP_PASS = "TRAP PASS";
const LOG_EVENT_TRAP_FAIL = "TRAP FAIL";

const LOG_EVENT_SMITE = "SMITE";
const LOG_EVENT_SMITE_CRITICAL = "CRITICAL SMITE";
const LOG_EVENT_RADIANT_AURA = "RADIANT AURA";

const LOG_EVENT_SHADOW_STRIKE = "SHADOW STRIKE";
const LOG_EVENT_EVASION = "EVASION";

const LOG_EVENT_GREATER_PRAYER = "GREATER PRAYER";
const LOG_EVENT_BURNING_RADIANCE = "BURNING RADIANCE";

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
let baseFaith;

// ===============================
//   Boons & Leveling Variables
// ===============================

let experiencePoints = 0;
let levelCounter = 1;

const levelUpModal = document.getElementById("levelUpModal");
// const strengthContainer = document.getElementById("strengthContainer");
// const strengthText = document.getElementById("strengthText");
const strengthRank = document.getElementById("strengthRank");
// const dexterityContainer = document.getElementById("dexterityContainer");
// const dexterityText = document.getElementById("dexterityText");
const dexterityRank = document.getElementById("dexterityRank");
// const faithContainer = document.getElementById("faithContainer");
// const faithText = document.getElementById("faithText");
const faithRank = document.getElementById("faithRank");
// const specialContainer = document.getElementById("specialContainer");
const specialText = document.getElementById("specialText");
const specialRank = document.getElementById("specialRank");
// const passiveContainer = document.getElementById("passiveContainer");
const passiveText = document.getElementById("passiveText");
const passiveRank = document.getElementById("passiveRank");

let strengthBoonRank = 1;
let dexterityBoonRank = 1;
let faithBoonRank = 1;
let specialAbilityBoonRank = 1;
let passiveAbilityBoonRank = 1;

// ===============================
//    Hero Stats Modal Variables
// ===============================

const heroStatsModal = document.getElementById('heroStatsModal');

// ===============================
//       Catacomb Variables
// ===============================

const roomNameElement = document.getElementById("catacombRoomName");
let roomIndex;

const catacombEntrance = {
  roomName: "Catacomb Entrance",
  backgroundImage: null,
  music: null,
  contents: {
    monsters: [],
    NPCs: null,
    items: [],
    consumables: [],
    traps: null,
  },
};

let currentRoom = catacombEntrance;

// ===============================
//      Inventory Variables
// ===============================

const inventoryButton = document.getElementById("inventoryBtn");
const inventoryModal = document.getElementById("inventoryModal");
const closeInventoryButton = document.getElementById("closeInventoryBtn");