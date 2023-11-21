// // ===============================
// //        General Variables
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

const gameWindow = document.querySelector(".game-window");
const bottomContent = document.querySelector(".bottom-content");
const playerContainer = document.querySelector(".player-container");
const roomsCleared = document.getElementById("roomsCleared");
const narrativeText = document.getElementById("narrativeText");

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

const eventModal = document.getElementById("eventModal");
const eventButtonOne = document.getElementById("eventButtonOne");
const eventButtonTwo = document.getElementById("eventButtonTwo");

// ===============================
//        Choose Hero Modal
// ===============================

const heroChoiceModal = document.getElementById("heroChoiceModal");

// ===============================
//        Log Variables
// ===============================

const log = document.getElementById("log");
const logContainer = document.getElementById("logContainer");
const logModal = document.getElementById("logModal");
const logModalList = document.getElementById("logModalList");

const LOG_EVENT_MONSTER_ATTACK = "MONSTER ATTACK";
const LOG_EVENT_MONSTER_MISS = "MONSTER MISS";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_MISS = "PLAYER MISS";
const LOG_EVENT_PLAYER_CRITICAL = "PLAYER CRITICAL ATTACK";
const LOG_EVENT_GUARD = "GUARD";
const LOG_EVENT_GUARD_FAIL = "GAURD FAIL";
const LOG_EVENT_POTION = "POTION";
const LOG_EVENT_FLEE = "FLEE";
const LOG_EVENT_LEVEL = "LEVEL UP";
const LOG_EVENT_ROOM = "ROOM";

const LOG_EVENT_TRAP_DESCRIPTION = "TRAP DESCRIPTION";
const LOG_EVENT_NPC_DESCRIPTION = "NPC DESCRIPTION";
const LOG_EVENT_MISC_DESCRIPTION = "MISC DESCRIPTION";
const LOG_EVENT_SAFE_ROOM = "SAFE ROOM";

const LOG_EVENT_NPC_OPTION_ONE = "NPC OPTION ONE";
const LOG_EVENT_NPC_OPTION_TWO = "NPC OPTION TWO";
const LOG_EVENT_MISC_OPTION_ONE = "MISC OPTION ONE";
const LOG_EVENT_MISC_OPTION_TWO = "MISC OPTION TWO";
const LOG_EVENT_TRAP_PASS = "TRAP PASS";
const LOG_EVENT_TRAP_FAIL = "TRAP FAIL";

const LOG_EVENT_SMITE = "SMITE";
const LOG_EVENT_SMITE_CRITICAL = "CRITICAL SMITE";
const LOG_EVENT_RADIANT_AURA = "RADIANT AURA";

const LOG_EVENT_SHADOW_STRIKE = "SHADOW STRIKE";
const LOG_EVENT_EVASION = "EVASION";

const LOG_EVENT_GREATER_PRAYER = "GREATER PRAYER";
const LOG_EVENT_BURNING_DEVOTION = "BURNING RADIANCE";

const LOG_EVENT_ITEM = "ITEM";

// ===============================
//        Hero Variables
// ===============================

let heroChoice;
let baseAttack;
let baseHealth;
let potionHealValue = 20;
let specialCooldownCounter = 0;
let criticalHitChance;

// Strength
let baseStrength;
let strengthBonusHealth = calculateStrengthBonusHealth();
let playerMaxHealth = baseHealth + calculateStrengthBonusHealth();

function calculateStrengthBonusHealth() {
  return baseStrength * 10;
}

function calculatePlayerMaxHealth() {
  let strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = baseHealth + strengthBonusHealth;
  let maxHealthWithItems = playerMaxHealth + isItemAttuned(BONEMAIL, 0); // ITEM: +20 Max HP

  return maxHealthWithItems;
}

let strengthCritIncrease = calculateStrCritIncrease();
let baseCritModifier = 1.5 + calculateBaseCritModifier();
let criticalDamage;

function calculateStrCritIncrease() {
  return 0.3 * baseStrength;
}

function calculateBaseCritModifier() {
  return 1.5 + strengthCritIncrease;
}

function calculateCritDamage() {
  strengthCritIncrease = calculateStrCritIncrease();
  baseCritModifier = calculateBaseCritModifier();
  // console.log("baseAttack:", baseAttack);
  // console.log("dexterityCritIncrease:", dexterityCritIncrease);
  // console.log("baseCritModifier:", baseCritModifier);
  // console.log(Math.round(baseAttack * baseCritModifier));
  return Math.round(baseAttack * baseCritModifier);
}

// Dexterity
let baseDexterity;

// Faith
let baseFaith;

// Paladin
let holySmiteTracker = 2.0;
let radiantAuraTracker = 5;

// ===============================
//   Boons & Leveling Variables
// ===============================

let experiencePoints = 0;
let previousExperience;
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

const heroStatsModal = document.getElementById("heroStatsModal");

// ===============================
//       Catacomb Variables
// ===============================

const roomNameElement = document.getElementById("catacombRoomName");
let roomIndex; // DELETE?!
let roomCounter = 0;

const catacombEntrance = {
  roomName: "Catacomb Entrance",
  backgroundImage: "styles/images/catacomb-entrance.png",
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

// ===============================
//        Item Variables
// ===============================

// Soulreaver
let attackCounter = 0;

// Wisps
let guidingLightTracker;
let rowdyWispTracker;
let unholyWispTracker;
let restlessWispTracker;

// Candles
let wardingCandleTracker;
let soothingCandleTracker;
let flickeringCandleTracker;
let blazingCandleTracker;
let soulflameCandleTracker;

// Misc.
let blackheartBrewTracker;

// ===============================
//       Event Trackers
// ===============================

let bloodSacrificed = 0;

// ===============================
//     Status Effects
// ===============================

const LEGIONS_GRACE = {
  name: "Legion's Grace",
  description: "The more soldiers laid to rest the greater this boon becomes.",
  status: `Base Attack increased by 1. The more soldiers laid to rest the greater the legion's grace becomes.`,
  duration: null,
  function: () => {
    let legionTracker = 27;
    let attackBoost = 1;
    LEGIONS_GRACE.duration = `0 soldiers put to rest`;
    setInterval(() => {
      LEGIONS_GRACE.duration = `${legionTracker} soldiers put to rest`;
      LEGIONS_GRACE.status = `Base Attack increased by ${attackBoost}. The more soldiers laid to rest, the greater the legion's grace becomes.`
      if (legionTracker % 30 === 0 ) {
        statusEffectHandler(LEGIONS_GRACE);
        attackBoost++;
      } 
    }, 5000);

    statusEffectHandler(LEGIONS_GRACE);
    renderStatusEffects(LEGIONS_GRACE);
  },
};

const BLOOD_PACT = {
  name: "Blood Pact",
  description: "",
  status: "Your base attack is increased by 5, but your faith is reduced by 2.",
  duration: null,
  function: () => {
    let statusDuration = roomCounter + 15;
    BLOOD_PACT.duration = "Duration: 15 Rooms";
    let bloodPactInterval = setInterval(() => {
      if (statusDuration - roomCounter > 1) {
        BLOOD_PACT.duration = `Duration: ${statusDuration - roomCounter} Rooms`;
      } else {
        BLOOD_PACT.duration = `Duration: ${statusDuration - roomCounter} Room`;
      }

      if (roomCounter >= statusDuration) {
        BLOOD_PACT.duration = null;
        baseAttack -= 5;
        baseFaith += 2;
        clearInterval(bloodPactInterval);
      }
    }, 15000);

    statusEffectHandler(BLOOD_PACT);
    renderStatusEffects(BLOOD_PACT);
  },
};

const POISONED = {
  name: "Poisoned",
  description: "",
  effect: "Your Strength & Dexterity are 0 while poisoned.",
  status: "You are poisoned.",
  duration: null,
  function: () => {
    let statusDuration = roomCounter + 3;
    POISONED.duration = "5 Rooms";
    
    // ITEM: Plagueward Charm - Poison Immunity
    const immune = isItemAttuned(PLAGUEWARD_CHARM, null);

    if (!immune) {
      let poisonedInterval = setInterval(() => {
        POISONED.duration = `Duration: ${statusDuration - roomCounter} Rooms`;
        if (roomCounter >= statusDuration) {
          POISONED.duration = null;
          baseDexterity += 2;
          baseStrength += 2;
          clearInterval(poisonedInterval);
        }
      }, 15000);
  
      statusEffectHandler(POISONED);
      renderStatusEffects(POISONED);
    }
  },
};

const HAUNTED = {
  name: "Haunted",
  description: "",
  effect: "Evil spirits are following you.",
  status: "You are haunted.",
  duration: null,
  function: () => {
    let statusDuration = roomCounter + 3;
    HAUNTED.duration = `Duration: ?`;
    
    // ITEM: Plagueward Charm - Poison Immunity
    // const immune = isItemAttuned(PLAGUEWARD_CHARM, null);

    // if (!immune) {
      let hauntedInterval = setInterval(() => {
        if (roomCounter >= statusDuration) {
          HAUNTED.duration = null;
          clearInterval(hauntedInterval);
        }
      }, 15000);
  
      statusEffectHandler(HAUNTED);
      renderStatusEffects(HAUNTED);
    }
  } //,
// };