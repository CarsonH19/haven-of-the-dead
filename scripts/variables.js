// // ===============================
// //        General Variables
// // ===============================

const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");

const attackBtn = document.getElementById("attack-btn");
const guardBtn = document.getElementById("guard-btn");
const specialBtn = document.getElementById("special-btn");
const potionBtn = document.getElementById("potion-btn");
const fleeBtn = document.getElementById("flee-btn");

let monsterMaxHealth = null;
let currentMonsterHealth = monsterMaxHealth;
let monsterAttackValue = null;

let currentPlayerHealth = null;

let potionCounter = 3;
const potions = document.getElementById("potionCount");
potions.textContent = ` x ${potionCounter}`;

let criticalHit;
let actionCounter = 0;

// ===============================
//         Game Window
// ===============================

const gameWindow = document.querySelector(".game-window");
const roomImage = document.getElementById("backgroundImage");
const bottomContent = document.querySelector(".bottom-content");
const playerContainer = document.querySelector(".player-container");
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
  critDamageModifier = 1.5 + totalStrength * 0.3;
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
  critHitChance = totalDexterity;
  return critHitChance;
}

// Guard Bonus // +1 Damage Avoided Per Dex
let guardBonus;

function calculateGuardBonus() {
  guardBonus = totalDexterity;
  return guardBonus;
}

// Flee Chance // +5% per Dex
let fleeChance;

function calculateFleeChance() {
  fleeChance = totalDexterity;
  return fleeChance;
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
  return itemFindChance;
}

// Experience Modifier
let experienceModifier;
function calculateExperienceModifier() {
  experienceModifier = totalFaith * 0.2 + 1;
  return experienceModifier;
}

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

  for (const item of statChanges) {
    if (item.stats) {
      totalStrength += item.stats.strength || 0;
      totalDexterity += item.stats.dexterity || 0;
      totalFaith += item.stats.faith || 0;
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
    console.log(roguePassiveBonus);
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
let curatorFavor = 0;

// ===============================
//        Hero Variables
// ===============================

let heroChoice;
let baseAttack;
let potionHealValue = 30;
let specialCooldownCounter = 0;

// Paladin
let holySmiteTracker = 2.0;
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
//    Hero Stats Modal Variables
// ===============================

const heroStatsModal = document.getElementById("heroStatsModal");

// ===============================
//       Catacomb Variables
// ===============================

const roomNameElement = document.getElementById("catacombRoomName");
let roomIndex; // DELETE?!
let roomCounter = 0;

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
let wispActive;
let guidingLightTracker;
let rowdyWispTracker;
let unholyWispTracker;
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

// ==============================================================
//                      Status Effects
// ==============================================================

const WAR_TORN_BANNER_STATUS = {
  name: "War Torn Banner",
  image: "styles/images/items/war-torn-banner.jpg",
  status: `The undead legion will come.`,
  duration: null,
  function: () => {
    WAR_TORN_BANNER_STATUS.duration = `${
      30 - legionTracker
    } legionnaires remaining.`;

    const warTornBannerInterval = setInterval(() => {
      WAR_TORN_BANNER_STATUS.duration = `${legionTracker} Legionnaires defeated`;

      if (WAR_TORN_BANNER_STATUS.duration === null) {
        clearInterval(warTornBannerInterval);
      }
    }, 3000);

    statusEffectHandler(WAR_TORN_BANNER_STATUS);
    renderStatusEffects(WAR_TORN_BANNER_STATUS);
  },
};

const ECHOES_OF_VICTORY = {
  name: "Echoes of Victory",
  image: "styles/images/items/war-torn-banner.jpg",
  status: `All damage dealt is increased by 25%`,
  duration: null,
  statusDuration: null,
  function: () => {
    if (ECHOES_OF_VICTORY.duration === null) {
      ECHOES_OF_VICTORY.statusDuration = roomCounter + 9;
      ECHOES_OF_VICTORY.duration = `Duration: ${
        ECHOES_OF_VICTORY.statusDuration - roomCounter
      } Rooms`;

      let victoryInterval = setInterval(() => {
        const duration = ECHOES_OF_VICTORY.statusDuration - roomCounter;
        const roomText = duration > 1 ? "Rooms" : "Room";

        ECHOES_OF_VICTORY.duration = `Duration: ${duration} ${roomText}`;

        if (
          roomCounter >= ECHOES_OF_VICTORY.statusDuration ||
          ECHOES_OF_VICTORY.duration === null
        ) {
          ECHOES_OF_VICTORY.duration = null;
          ECHOES_OF_VICTORY.statusDuration = null;

          removeStatChange(ECHOES_OF_VICTORY);
          updatePlayerTrackers();
          clearInterval(victoryInterval);
        }
      }, 15000);

      addStatChange(ECHOES_OF_VICTORY);
      updatePlayerTrackers();
      renderStatusEffects(ECHOES_OF_VICTORY);
    } else if (length > ECHOES_OF_VICTORY.statusDuration - roomCounter) {
      ECHOES_OF_VICTORY.statusDuration = roomCounter + length;
      ECHOES_OF_VICTORY.duration = `Duration: ${
        ECHOES_OF_VICTORY.statusDuration - roomCounter
      } Rooms`;
      //writeToLog() Poisoned intensifies
    }
  },
};

// ===============================
//      Item Status Effects
// ===============================

const AEGIS_STATUS_EFFECT = {
  name: "Aegis of the Fallen",
  image: "styles/images/items/aegis.jpg",
  status: `You are immune to all damage.`,
  duration: null,
  statusDuration: null,
  function: () => {
    if (AEGIS_STATUS_EFFECT.duration === null) {
      AEGIS_STATUS_EFFECT.statusDuration = actionCounter + 3;
      AEGIS_STATUS_EFFECT.duration = `Duration: ${
        AEGIS_STATUS_EFFECT.statusDuration - actionCounter
      } Actions`;
    }

    let aegisInterval = setInterval(() => {
      if (AEGIS_STATUS_EFFECT.statusDuration - actionCounter > 1) {
        AEGIS_STATUS_EFFECT.duration = `Duration: ${
          AEGIS_STATUS_EFFECT.statusDuration - actionCounter
        } Actions`;
      } else {
        AEGIS_STATUS_EFFECT.duration = `Duration: ${
          AEGIS_STATUS_EFFECT.statusDuration - actionCounter
        } Action`;
      }

      if (actionCounter >= AEGIS_STATUS_EFFECT.statusDuration) {
        AEGIS_STATUS_EFFECT.duration = null;
        AEGIS_STATUS_EFFECT.statusDuration = null;

        updatePlayerTrackers();
        clearInterval(aegisInterval);
      }
    }, 3000);

    statusEffectHandler(AEGIS_STATUS_EFFECT);
    renderStatusEffects(AEGIS_STATUS_EFFECT);
  },
};

// ===============================
//    Condition Status Effects
// ===============================

const POISONED = {
  name: "Poisoned",
  image: "styles/images/items/poisoned.jpg",
  status: "Your Strength and Dexterity are reduced by 2.",
  duration: null,
  statusDuration: null,
  stats: {
    strength: -2,
    dexterity: -2,
    faith: 0,
  },
  function: (length) => {
    // ITEM: Toxinweave Mask - Poison Immunity
    const immune = isItemAttuned(TOXINWEAVE_MASK, null);

    if (!immune) {
      startStatusEffect(POISONED, length);
    } else {
      writeToLogItem(LOG_ITEM, null, TOXINWEAVE_MASK);
    }
  },
};

const HAUNTED = {
  name: "Haunted",
  image: "styles/images/items/huanted.jpg",
  status: "Evil spirits are following you.",
  duration: null,
  statusDuration: null,
  function: () => {
    if (HAUNTED.duration === null) {
      let randomNumber = Math.round(Math.random() * 7) + 1;
      HAUNTED.statusDuration = roomCounter + randomNumber;
      HAUNTED.duration = `Duration: ?`;

      // ITEM: Ghostshroud Talisman - Haunted Immunity
      const immune = isItemAttuned(GHOSTSHROUD_TALISMAN, null);

      if (!immune) {
        let hauntedInterval = setInterval(() => {
          if (roomCounter >= HAUNTED.statusDuration) {
            HAUNTED.duration = null;
            HAUNTED.statusDuration = null;
            clearInterval(hauntedInterval);
          }
        }, 15000);

        writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        statusEffectHandler(HAUNTED);
        renderStatusEffects(HAUNTED);
      }
    }
  },
};

const DISEASED = {
  name: "Diseased",
  image: "styles/images/items/diseased.jpg",
  status: "Your max health is reduced by 20%.",
  duration: null,
  statusDuration: null,
  function: (length) => {
    // ITEM: Plagueward Pendant - Disease Immunity
    const immune = isItemAttuned(PLAGUEWARD_PENDANT, null);

    if (!immune) {
      startStatusEffect(DISEASED, length);
    } else {
      writeToLogItem(LOG_ITEM, null, PLAGUEWARD_PENDANT);
    }
  },
};

const BURNED = {
  name: "Burned",
  image: "styles/images/burned.jpg",
  status: "All damage you take is increased by 25%.",
  duration: null,
  statusDuration: null,
  function: (length) => {
    // ITEM: Fire Trinket - Burned Immunity
    const immune = isItemAttuned(DARKGUARD_TRINKET, null);

    if (!immune) {
      startStatusEffect(BURNED, length);
    } else {
      writeToLogItem(LOG_ITEM, null, PLAGUEWARD_PENDANT);
    }
  },
};

const CURSED = {
  name: "Cursed",
  image: "styles/images/items/cursed.jpg",
  status: "You are unable to use your special ability.",
  duration: null,
  statusDuration: null,
  function: (length) => {
    // ITEM: Darkguard Trinket - Cursed Immunity
    const immune = isItemAttuned(DARKGUARD_TRINKET, null);

    if (!immune) {
      startStatusEffect(CURSED, length);
    } else {
      writeToLogItem(LOG_ITEM, null, DARKGUARD_TRINKET);
    }
  },
};

const WEBBED = {
  name: "Webbed",
  image: "styles/images/items/webbed.jpg",
  status: "You are caught in spider webbing.",
  duration: null,
  function: (webStrength) => {
    if (WEBBED.duration === null) {
      attackBtn.disabled = true;
      guardBtn.disabled = true;
      specialBtn.disabled = true;
      fleeBtn.disabled = true;
      inventoryButton.disabled = true;
      potionBtn.disabled = true;

      WEBBED.duration = `Struggling to break free...`;
      let counter = 0;

      // ADD SPIDER WEB IMAGE

      // ITEM: Silkstriders - Webbed Immunity
      const immune = isItemAttuned(SILKSTRIDERS, null);

      if (!immune) {
        let webbedInterval = setInterval(() => {
          let breakFreeChance = Math.round(Math.random() * webStrength);
          breakFreeChance += baseStrength + counter;

          if (breakFreeChance >= webStrength) {
            WEBBED.duration = null;
            counter = 0;
            togglePlayerControls();
            soundEffectHandler(fleshRip1);
            clearInterval(webbedInterval);
            writeToLogMonster(LOG_MONSTER_ABILITY, "YES", "BROKE FREE");
          } else {
            counter++;
            monsterAttackHandler();
            writeToLogMonster(LOG_MONSTER_ABILITY, "YES", "ATTACK");
          }
        }, 2000);

        statusEffectHandler(WEBBED);
        renderStatusEffects(WEBBED);
      }
    }
  },
};

const CHILLED = {
  name: "Chilled",
  image: "styles/images/items/chilled.jpg",
  status: "You are unable to use your special ability or flee.",
  duration: null,
  statusDuration: null,
  function: (length) => {
    // ITEM: Chillbreaker Band - Chilled Immunity
    const immune = isItemAttuned(CHILLBREAKER_BAND, null);

    if (!immune) {
      startStatusEffect(CHILLED, length);
    } else {
      writeToLogItem(LOG_ITEM, null, CHILLBREAKER_BAND);
    }
  },
};

// ===============================
//    Permanent Status Effects
// ===============================

const FIENDSWORN = {
  name: "Fiendsworn",
  image: "styles/images/items/fiendsworn.jpg",
  status: "You have become sworn to a demonic entity.",
  active: null,
  function: () => {
    if (FIENDSWORN.active === null) {
      FIENDSWORN.active = "Permanent";
      statusEffectHandler(FIENDSWORN);
      renderStatusEffects(FIENDSWORN);
    }
  },
};

const BRANDED = {
  name: "Branded",
  image: "styles/images/items/branded.jpg",
  status: "You have been branded by a demonic entity.",
  active: null,
  function: () => {
    if (BRANDED.active === null) {
      BRANDED.active = "Permanent";
      statusEffectHandler(BRANDED);
      renderStatusEffects(BRANDED);
    }
  },
};

//
//
//
//
//
//
//

const startStatusEffect = (statusEffect, length) => {
  if (statusEffect.duration === null && statusEffect.statusDuration === null) {
    startNewStatusEffect(statusEffect, length);
  } else if (isDurationExtended(statusEffect, length)) {
    extendStatusEffectDuration(statusEffect, length);
  }
};

const startNewStatusEffect = (statusEffect, length) => {
  statusEffect.statusDuration = roomCounter + length;
  const duration = statusEffect.statusDuration - roomCounter;
  const roomText = duration > 1 ? "Rooms" : "Room";
  statusEffect.duration = `Duration: ${duration} ${roomText}`;

  // Checks for different Status Effects
  if (statusEffect.stats) {
    addStatChange(statusEffect);
  } else {
    updateTotalStats();
  }

  setupStatusEffectInterval(statusEffect);
  renderStatusEffects(statusEffect);
};

const isDurationExtended = (statusEffect, length) =>
  length > statusEffect.statusDuration - roomCounter;

const extendStatusEffectDuration = (statusEffect, length) => {
  statusEffect.statusDuration = roomCounter + length;
  statusEffect.duration = `Duration: ${
    statusEffect.statusDuration - roomCounter
  } Rooms`;
};

const setupStatusEffectInterval = (statusEffect) => {
  const intervalId = setInterval(() => {
    const duration = statusEffect.statusDuration - roomCounter;
    const roomText = duration > 1 ? "Rooms" : "Room";

    statusEffect.duration = `Duration: ${duration} ${roomText}`;

    if (
      roomCounter >= statusEffect.statusDuration ||
      statusEffect.duration === null
    ) {
      endStatusEffectInterval(statusEffect, intervalId);
    }
  }, 3000);
};

const endStatusEffectInterval = (statusEffect, intervalId) => {
  statusEffect.duration = null;
  statusEffect.statusDuration = null;

  // Checks for different Status Effects
  if (statusEffect.stats) {
    removeStatChange(statusEffect);
  } else {
    updateTotalStats();
  }

  clearInterval(intervalId);
};
