// // ===============================
// //        Player Variables
// // ===============================

const playerHealthBar = document.getElementById("player-health");

const attackBtn = document.getElementById("attack-btn");
const guardBtn = document.getElementById("guard-btn");
const specialBtn = document.getElementById("special-btn");
const potionBtn = document.getElementById("potion-btn");
const fleeBtn = document.getElementById("flee-btn");

let currentPlayerHealth = null;

let potionCounter = 3;
const potions = document.getElementById("potionCount");
potions.textContent = ` x ${potionCounter}`;

let criticalHit;
let actionCounter = 0;

// ===============================
//         Monster Variables
// ===============================
const monsterHealthBar = document.getElementById("monster-health");

let monsterMaxHealth = null;
let currentMonsterHealth = monsterMaxHealth;
let monsterAttackValue = null;

// Used for Undead Siggurd Monster Ability
let undeadSiggurdSmite;

// ===============================
//         Game Window
// ===============================

const gameWindow = document.querySelector(".game-window");
const roomImage = document.getElementById("backgroundImage");
const bottomContent = document.querySelector(".bottom-content");
const playerContainer = document.querySelector(".player-container");
const controlsContainer = document.querySelector(".controls-container");
const roomsCleared = document.getElementById("roomsCleared");
const narrativeText = document.getElementById("narrativeText");

const npcImageCard = document.getElementById("npcImageCard");
const monsterContainer = document.getElementById("monsterContainer");
monsterContainer.style.display = "none";

const monsterImage = document.getElementById("monsterImage");
monsterImage.style.display = "none";

// ===============================
//     Catacomb Entrance Modal
// ===============================

const catacombEntranceModal = document.getElementById("catacombEntranceModal");
const catacombEntranceBtn = document.getElementById("catacombEntranceBtn");

// ===============================
//      Start Game Modal
// ===============================

const startGameModal = document.getElementById("startGameModal");
const startBtn = document.getElementById("startBtn");

// ===============================
//      Room Summary Modal
// ===============================

let roomSummaryInformation;

// Used to prevent duplicate renders
let roomSummaryModalTracker;

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

const tradeModal = document.getElementById("tradeModal");
const closeTradeBtn = document.getElementById("closeTradeBtn");

// ===============================
//        Choose Hero Modal
// ===============================

const heroChoiceModal = document.getElementById("heroChoiceModal");

// ===============================
//        Game Over Modal
// ===============================

const restartGameBtn = document.getElementById("restartGameBtn");

// ===============================
//        Hero Variables
// ===============================

let heroChoice;
let potionHealValue = 30;
let specialCooldownCounter = 0;

// Paladin
let holySmiteTracker = 1.5;
let radiantAuraTracker = 5;

// Rogue
let umbralAssaultTracker = 2;
let darkenedReprisalTracker = 2;

// Priestess
let cleansingFlameTracker = 10;
let burningDevotionTracker = 3;

// ===============================
//   Boons & Leveling Variables
// ===============================

let experiencePoints = 0;
let previousExperience;
let levelCounter = 1;

const levelUpModal = document.getElementById("levelUpModal");
const strengthRank = document.getElementById("strengthRank");
const dexterityRank = document.getElementById("dexterityRank");
const faithRank = document.getElementById("faithRank");
const specialText = document.getElementById("specialText");
const specialRank = document.getElementById("specialRank");
const passiveText = document.getElementById("passiveText");
const passiveRank = document.getElementById("passiveRank");

let strengthBoonRank = 1;
let dexterityBoonRank = 1;
let faithBoonRank = 1;
let specialAbilityBoonRank = 1;
let passiveAbilityBoonRank = 1;

// ===============================
//           STRENGTH
// ===============================

let baseStrength;
let totalStrength = baseStrength;

// Max Health // +10 per Str
let baseHealth;
let playerMaxHealth;

function calculatePlayerMaxHealth() {
  let strengthBonusHealth = totalStrength * 10;
  playerMaxHealth = baseHealth + strengthBonusHealth;
  playerMaxHealth += crimsonCovenantBoon;

  // Checks for Diseased Condition
  if (DISEASED.duration !== null) {
    playerMaxHealth = Math.round(playerMaxHealth * 0.8);
  }
  // Prevents Healing Above Max
  if (currentPlayerHealth > playerMaxHealth) {
    currentPlayerHealth = playerMaxHealth;
    playerHealthBar.value = playerMaxHealth;
    playerHealthBar.max = playerMaxHealth;
  }
  // Sets Max Health at the Start
  if (currentRoom === catacombEntrance) {
    playerHealthBar.max = playerMaxHealth;
    playerHealthBar.value = playerMaxHealth;
    currentPlayerHealth = playerMaxHealth;
  } else {
    playerHealthBar.max = playerMaxHealth;
  }

  return playerMaxHealth;
}

// Critical Hit Damage // x0.3 per Str
let critDamageModifier;

function calculateCritDamageModifier() {
  critDamageModifier = 1.5 + totalStrength * 0.15;
  return critDamageModifier;
}

// ===============================
//           DEXTERITY
// ===============================
let baseDexterity;
let totalDexterity = baseDexterity;

// Crit Hit Chance // +5% per Dex
let critHitChance;

function calculateCritHitChance() {
  // 5% Base Chance
  critHitChance = totalDexterity + 1;
  return critHitChance;
}

// Guard Bonus // +1 Damage Avoided Per Dex
let guardBonus;
let guardReady = "YES";

function calculateGuardBonus() {
  guardBonus = totalDexterity;

  // ITEM - Tombguard: +3 Guard Bonus
  guardBonus += isItemAttuned(TOMBGUARD, 0);

  return guardBonus;
}

// Flee Chance // +5% per Dex
let fleeChance;

function calculateFleeChance() {
  // 10% Base Chance
  fleeChance = totalDexterity + 1;
  return Math.round(fleeChance);
}

// ===============================
//            FAITH
// ===============================
let baseFaith;
let totalFaith = baseFaith;

// Item Find Chance
let itemFindChance;

function calculateItemFindChance() {
  itemFindChance = totalFaith * 5;
  itemFindChance += isItemAttuned(GRAVEROBBERS_SPADE, 0);
  return Math.round(itemFindChance);
}

// Experience Modifier
let experienceModifier;
function calculateExperienceModifier() {
  experienceModifier = totalFaith * 0.2 + 1;
  return experienceModifier;
}

// ===============================
//            ATTACK
// ===============================

let baseAttack;
let totalAttack;

// ===============================
//            STATS
// ===============================

let attunedItems = [];

let statChanges = [];

function addStatChange(object) {
  statChanges.push(object);
  updateTotalStats();
}

function removeStatChange(object) {
  const index = statChanges.indexOf(object);
  statChanges.splice(index, 1);
  updateTotalStats();
}

function updateTotalStats() {
  totalStrength = 0;
  totalDexterity = 0;
  totalFaith = 0;
  totalAttack = 0;

  for (const item of statChanges) {
    if (item.stats) {
      totalStrength += item.stats.strength || 0;
      totalDexterity += item.stats.dexterity || 0;
      totalFaith += item.stats.faith || 0;
      totalAttack += item.stats.attack || 0;
    }
  }
  // Strength
  totalStrength += baseStrength;
  if (totalStrength < 0) totalStrength = 0;

  playerMaxHealth = calculatePlayerMaxHealth();
  critDamageModifier = calculateCritDamageModifier();

  // Dexterity
  // Check for rogue passive ability
  if (heroChoice === "ROGUE" && DARKENED_REPRISAL.active === "YES") {
    let roguePassiveBonus = baseDexterity;
    roguePassiveBonus = Math.floor(
      (roguePassiveBonus *= darkenedReprisalTracker)
    );
    totalDexterity += roguePassiveBonus;
  } else {
    totalDexterity += baseDexterity;
  }

  if (totalDexterity < 0) totalDexterity = 0;

  critHitChance = calculateCritHitChance();
  guardBonus = calculateGuardBonus();
  fleeChance = calculateFleeChance();

  //Faith
  totalFaith += baseFaith;
  if (totalFaith < 0) totalFaith = 0;

  findItemChance = calculateItemFindChance();
  experienceModifier = calculateExperienceModifier();

  // Attack
  totalAttack += baseAttack;

  if (strengthBoonRank === 4) {
    totalAttack += totalStrength;
  }

  updatePlayerTrackers();
}

// ===============================
//        Log Variables
// ===============================

const log = document.getElementById("log");
const logContainer = document.getElementById("logContainer");
const logModal = document.getElementById("logModal");
const logModalList = document.getElementById("logModalList");

const LOG_MONSTER_ATTACK = "MONSTER ATTACK";
const LOG_MONSTER_MISS = "MONSTER MISS";
const LOG_MONSTER_ABILITY = "MONSTER ABILITY";

const LOG_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_PLAYER_MISS = "PLAYER MISS";
const LOG_PLAYER_CRITICAL = "PLAYER CRITICAL ATTACK";
const LOG_GUARD = "GUARD";
const LOG_GUARD_FAIL = "GUARD FAIL";
const LOG_POTION = "POTION";
const LOG_FLEE = "FLEE";
const LOG_ROOM = "ROOM";

const LOG_TRAP_DESCRIPTION = "TRAP DESCRIPTION";
const LOG_NPC_DESCRIPTION = "NPC DESCRIPTION";
const LOG_MISC_DESCRIPTION = "MISC DESCRIPTION";
const LOG_SAFE_ROOM = "SAFE ROOM";

const LOG_NPC_DIALOGUE = "NPC DIALOGUE";
const LOG_NPC_OPTION_ONE = "NPC OPTION ONE";
const LOG_NPC_OPTION_TWO = "NPC OPTION TWO";
const LOG_MISC_OPTION_ONE = "MISC OPTION ONE";
const LOG_MISC_OPTION_TWO = "MISC OPTION TWO";
const LOG_TRAP_PASS = "TRAP PASS";
const LOG_TRAP_FAIL = "TRAP FAIL";

const LOG_LEVEL = "LEVEL UP";
const LOG_STAT_INCREASE = "STAT INCREASE";

const LOG_SMITE = "SMITE";
const LOG_SMITE_CRITICAL = "CRITICAL SMITE";
const LOG_RADIANT_AURA = "RADIANT AURA";

const LOG_UMBRAL_ASSAULT = "UMBRAL ASSAULT";
const LOG_DARKENED_REPRISAL = "DARKENED REPRISAL";

const LOG_CLEANSING_FLAME = "CLEANSING FLAME";
const LOG_BURNING_DEVOTION = "BURNING RADIANCE";

const LOG_ITEM = "ITEM";
const LOG_ATTUNE = "ATTUNE";
const LOG_CANT_ATTUNE = "CANT ATTUNE";
const LOG_CONSUMABLE = "CONSUMABLE";

const LOG_GAINED_CONDITION = "CONDITION GAINED";
const LOG_REMOVED_CONDITION = "CONDITION REMOVED";

const LOG_OTHER = "OTHER";

// ===============================
//      Event & NPC Trackers
// ===============================

// Legion's Grace
let legionTracker = 0;
let legionAttackBoost = Math.floor(legionTracker / 30);

// Crimson Covenant
let crimsonCovenantBoon = 0;
let crimsonCovenantTracker = 0;

// Ivan the Scoundrel
let ivanTracker = 0;

// Grervil the Bodiless
let grervilTracker = null;

// Forsaken Commander
let commanderTracker = null;

// Traders
let hagFavor = 0;
let previousHagFavor;

let curatorFavor = 0;

// ===============================
//    Hero Stats Modal Variables
// ===============================

const heroStatsModal = document.getElementById("heroStatsModal");

// ===============================
//       Catacomb Variables
// ===============================

const roomNameElement = document.getElementById("catacombRoomName");
let roomIndex; 
let roomCounter = 0;
let tierTwoRoomsTracker = null;
let tierThreeRoomsTracker = null;
let tierFourRoomsTracker = null;

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

// Gloryforged Blade
let gloryforgedTracker = 0;

// Wisps
const wisp = document.querySelector(".wisp");

let wispActive;
let guidingLightTracker;
let rowdyWispTracker;
let bleedingWispTracker;
let restlessWispTracker;
let curiousWispTracker;
let wickedWispTracker;

// Candles
let wardingCandleTracker;
let soothingCandleTracker;
let flickeringCandleTracker;
let blazingCandleTracker;
let soulflameCandleTracker;

// Misc.
let blackheartBrewTracker;
