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

let monsterMaxHealth = 100;
let currentMonsterHealth = monsterMaxHealth;
let monsterAttackValue = 10;

let currentPlayerHealth = null;

let potionCounter = 3;
const potions = document.getElementById("potionCount");
potions.textContent = ` x ${potionCounter}`;

let criticalHit;

// ===============================
//         Game Window
// ===============================

const gameWindow = document.querySelector(".game-window");
const roomImage = document.getElementById("backgroundImage");
const bottomContent = document.querySelector(".bottom-content");
const playerContainer = document.querySelector(".player-container");
const roomsCleared = document.getElementById("roomsCleared");
const narrativeText = document.getElementById("narrativeText");

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
    let rougePassiveBonus = baseDexterity;
    rougePassiveBonus *= darkenedReprisalTracker;
    totalDexterity += rougePassiveBonus;
    console.log(rougePassiveBonus);
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
let darkenedReprisalTracker = 2

// Priestess
// N/A

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

let actionCounter = 0;

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

// Wisps
let wispActive;
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

// ==============================================================
//                      Status Effects
// ==============================================================

const LEGIONS_GRACE = {
  name: "Legion's Grace",
  image: "styles/images/items/war-torn-banner.jpg",
  status: `Base Attack +${legionAttackBoost}.`,
  duration: null,
  function: () => {
    LEGIONS_GRACE.duration = `Legionnaires laid to rest: ${legionTracker}`;

    const legionsGraceInterval = setInterval(() => {
      LEGIONS_GRACE.duration = `${legionTracker} Legionnaires defeated`;
      LEGIONS_GRACE.status = `Base Attack increased by ${legionAttackBoost}. The more Legionnaires laid to rest, the greater the Legion's Grace becomes.`;
      if (legionTracker % 30 === 0) {
        attackBoost = Math.floor(legionTracker / 30);
        baseAttack = baseAttack + legionAttackBoost;
        updatePlayerTrackers();
      }

      if (LEGIONS_GRACE.duration === null) {
        clearInterval(legionsGraceInterval);
      }
    }, 5000);

    statusEffectHandler(LEGIONS_GRACE);
    renderStatusEffects(LEGIONS_GRACE);
  },
};

// const BLOOD_PACT = {
//   name: "Blood Pact",
//   status: "Your base attack is increased by 5, but your faith is reduced by 2.",
//   duration: null,
//   function: () => {
//     if (BLOOD_PACT.duration === null) {
//       let statusDuration = roomCounter + 15;
//       BLOOD_PACT.duration = "Duration: 15 Rooms";
//       let bloodPactInterval = setInterval(() => {
//         if (statusDuration - roomCounter > 1) {
//           BLOOD_PACT.duration = `Duration: ${
//             statusDuration - roomCounter
//           } Rooms`;
//         } else {
//           BLOOD_PACT.duration = `Duration: ${
//             statusDuration - roomCounter
//           } Room`;
//         }

//         if (roomCounter >= statusDuration) {
//           BLOOD_PACT.duration = null;
//           baseAttack -= 5;
//           baseFaith += 1;

//           updatePlayerTrackers();
//           clearInterval(bloodPactInterval);
//         }
//       }, 15000);

//       statusEffectHandler(BLOOD_PACT);
//       renderStatusEffects(BLOOD_PACT);
//     } else {
//       let statusDuration = roomCounter + 15;
//       BLOOD_PACT.duration = `Duration: ${statusDuration - roomCounter} Rooms`;
//     }
//   },
// };

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

let tempPoisonStrength = 0;
let tempPoisonDexterity = 0;

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
    if (POISONED.duration === null) {
      POISONED.statusDuration = roomCounter + length;
      POISONED.duration = `Duration: ${
        POISONED.statusDuration - roomCounter
      } Rooms`;

      // ITEM: Toxinweave Mask - Poison Immunity
      const immune = isItemAttuned(TOXINWEAVE_MASK, null);

      if (!immune) {
        let poisonedInterval = setInterval(() => {
          if (POISONED.statusDuration - roomCounter > 1) {
            POISONED.duration = `Duration: ${
              POISONED.statusDuration - roomCounter
            } Rooms`;
          } else {
            POISONED.duration = `Duration: ${
              POISONED.statusDuration - roomCounter
            } Room`;
          }

          if (roomCounter >= POISONED.statusDuration) {
            POISONED.duration = null;
            POISONED.statusDuration = null;

            removeStatChange(POISONED);
            updatePlayerTrackers();
            clearInterval(poisonedInterval);
          }
        }, 15000);

        addStatChange(POISONED);
        updatePlayerTrackers();
        // statusEffectHandler(POISONED);
        renderStatusEffects(POISONED);
      }
    } else if (length > POISONED.statusDuration - roomCounter) {
      POISONED.statusDuration = roomCounter + length;
      POISONED.duration = `Duration: ${
        POISONED.statusDuration - roomCounter
      } Rooms`;
      //writeToLog() Poisoned intensifies
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
    let randomNumber = Math.round(Math.random() * 7) + 1;
    if (HAUNTED.duration === null) {
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

        statusEffectHandler(HAUNTED);
        renderStatusEffects(HAUNTED);
      }
    } else if (randomNumber > HAUNTED.statusDuration) {
      HAUNTED.statusDuration = roomCounter + randomNumber;
      //writeToLog() Haunted again
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
    if (DISEASED.duration === null) {
      DISEASED.statusDuration = roomCounter + length;
      DISEASED.duration = `Duration: ${
        DISEASED.statusDuration - roomCounter
      } Rooms`;

      // ITEM: Plagueward Pendant - Disease Immunity
      const immune = isItemAttuned(PLAGUEWARD_PENDANT, null);

      if (!immune) {
        let diseasedInterval = setInterval(() => {
          if (DISEASED.statusDuration - roomCounter > 1) {
            DISEASED.duration = `Duration: ${
              DISEASED.statusDuration - roomCounter
            } Rooms`;
          } else {
            DISEASED.duration = `Duration: ${
              DISEASED.statusDuration - roomCounter
            } Room`;
          }

          if (roomCounter >= DISEASED.statusDuration) {
            DISEASED.duration = null;
            DISEASED.statusDuration = null;

            updatePlayerTrackers();
            clearInterval(diseasedInterval);
          }
        }, 15000);

        statusEffectHandler(DISEASED);
        renderStatusEffects(DISEASED);
      }
    } else if (length > DISEASED.statusDuration - roomCounter) {
      DISEASED.statusDuration = roomCounter + length;
      DISEASED.duration = `Duration: ${
        DISEASED.statusDuration - roomCounter
      } Rooms`;
      //writeToLog() Disease intensifies
    }
  },
};

const BURNED = {
  name: "Burned",
  image: "styles/images/items/burned.jpg",
  status: "All damage you take is increased by 25%.",
  duration: null,
  statusDuration: null,
  function: (length) => {
    if (BURNED.duration === null) {
      BURNED.statusDuration = roomCounter + length;
      BURNED.duration = `Duration: ${
        BURNED.statusDuration - roomCounter
      } Rooms`;

      // ITEM: Fire Trinket - Burned Immunity
      const immune = isItemAttuned(DARKGUARD_TRINKET, null);

      if (!immune) {
        let burnedInterval = setInterval(() => {
          if (BURNED.statusDuration - roomCounter > 1) {
            BURNED.duration = `Duration: ${
              BURNED.statusDuration - roomCounter
            } Rooms`;
          } else {
            BURNED.duration = `Duration: ${
              BURNED.statusDuration - roomCounter
            } Room`;
          }

          if (roomCounter >= BURNED.statusDuration) {
            BURNED.duration = null;
            BURNED.statusDuration = null;

            updatePlayerTrackers();
            clearInterval(burnedInterval);
          }
        }, 15000);

        statusEffectHandler(BURNED);
        renderStatusEffects(BURNED);
      }
    } else if (length > BURNED.statusDuration - roomCounter) {
      BURNED.statusDuration = roomCounter + length;
      BURNED.duration = `Duration: ${
        BURNED.statusDuration - roomCounter
      } Rooms`;
      //writeToLog() Disease intensifies
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
    if (CURSED.duration === null) {
      CURSED.statusDuration = roomCounter + length;
      CURSED.duration = `Duration: ${
        CURSED.statusDuration - roomCounter
      } Rooms`;

      // ITEM: Darkguard Trinket - Cursed Immunity
      const immune = isItemAttuned(DARKGUARD_TRINKET, null);

      if (!immune) {
        let cursedInterval = setInterval(() => {
          if (CURSED.statusDuration - roomCounter > 1) {
            CURSED.duration = `Duration: ${
              CURSED.statusDuration - roomCounter
            } Rooms`;
          } else {
            CURSED.duration = `Duration: ${
              CURSED.statusDuration - roomCounter
            } Room`;
          }

          if (roomCounter >= CURSED.statusDuration) {
            CURSED.duration = null;
            CURSED.statusDuration = null;

            updatePlayerTrackers();
            clearInterval(cursedInterval);
          }
        }, 15000);

        statusEffectHandler(CURSED);
        renderStatusEffects(CURSED);
      }
    } else if (length > CURSED.statusDuration - roomCounter) {
      CURSED.statusDuration = roomCounter + length;
      CURSED.duration = `Duration: ${
        CURSED.statusDuration - roomCounter
      } Rooms`;
      //writeToLog() Disease intensifies
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
    if (CHILLED.duration === null) {
      CHILLED.statusDuration = roomCounter + length;
      CHILLED.duration = `Duration: ${
        CHILLED.statusDuration - roomCounter
      } Rooms`;

      // ITEM: Chillbreaker Band - Chilled Immunity
      const immune = isItemAttuned(CHILLBREAKER_BAND, null);

      if (!immune) {
        let chilledInterval = setInterval(() => {
          if (CHILLED.statusDuration - roomCounter > 1) {
            CHILLED.duration = `Duration: ${
              CHILLED.statusDuration - roomCounter
            } Rooms`;
          } else {
            CHILLED.duration = `Duration: ${
              CHILLED.statusDuration - roomCounter
            } Room`;
          }

          if (roomCounter >= CHILLED.statusDuration) {
            CHILLED.duration = null;
            CHILLED.statusDuration = null;

            updatePlayerTrackers();
            clearInterval(chilledInterval);
          }
        }, 15000);

        statusEffectHandler(CHILLED);
        renderStatusEffects(CHILLED);
      }
    } else if (length > CHILLED.statusDuration - roomCounter) {
      CHILLED.statusDuration = roomCounter + length;
      CHILLED.duration = `Duration: ${
        CHILLED.statusDuration - roomCounter
      } Rooms`;
      //writeToLog() Disease intensifies
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
