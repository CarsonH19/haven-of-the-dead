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

let potionCounter = 3;
const potions = document.getElementById("potionCount");
potions.textContent = ` x ${potionCounter}`;

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

const LOG_MONSTER_ATTACK = "MONSTER ATTACK";
const LOG_MONSTER_MISS = "MONSTER MISS";
const LOG_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_PLAYER_MISS = "PLAYER MISS";
const LOG_PLAYER_CRITICAL = "PLAYER CRITICAL ATTACK";
const LOG_GUARD = "GUARD";
const LOG_GUARD_FAIL = "GAURD FAIL";
const LOG_POTION = "POTION";
const LOG_FLEE = "FLEE";
const LOG_LEVEL = "LEVEL UP";
const LOG_ROOM = "ROOM";

const LOG_TRAP_DESCRIPTION = "TRAP DESCRIPTION";
const LOG_NPC_DESCRIPTION = "NPC DESCRIPTION";
const LOG_MISC_DESCRIPTION = "MISC DESCRIPTION";
const LOG_SAFE_ROOM = "SAFE ROOM";

const LOG_NPC_OPTION_ONE = "NPC OPTION ONE";
const LOG_NPC_OPTION_TWO = "NPC OPTION TWO";
const LOG_MISC_OPTION_ONE = "MISC OPTION ONE";
const LOG_MISC_OPTION_TWO = "MISC OPTION TWO";
const LOG_TRAP_PASS = "TRAP PASS";
const LOG_TRAP_FAIL = "TRAP FAIL";

const LOG_SMITE = "SMITE";
const LOG_SMITE_CRITICAL = "CRITICAL SMITE";
const LOG_RADIANT_AURA = "RADIANT AURA";

const LOG_SHADOW_STRIKE = "SHADOW STRIKE";
const LOG_EVASION = "EVASION";

const LOG_GREATER_PRAYER = "GREATER PRAYER";
const LOG_BURNING_DEVOTION = "BURNING RADIANCE";

const LOG_ITEM = "ITEM";
const LOG_ATTUNE = "ATTUNE";
const LOG_CONSUMABLE = "CONSUMABLE";

// ===============================
//       Event Trackers
// ===============================

let bloodSacrificed = 0;
let crimsonCovenantTracker = 0;
let bloodPactTracker = 0;

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
  playerMaxHealth = baseHealth + strengthBonusHealth + bloodPactTracker;

  // Checks for Diseased Condition
  if (DISEASED.duration !== null) {
    playerMaxHealth = playerMaxHealth * 0.75;
  }

  if (currentPlayerHealth > playerMaxHealth) {
    currentPlayerHealth = playerMaxHealth;
    playerHealthBar.value = playerMaxHealth;
    playerHealthBar.max = playerMaxHealth;
  }

  if (currentRoom === catacombEntrance) {
    playerHealthBar.max = playerMaxHealth;
    playerHealthBar.value = playerMaxHealth;
    currentPlayerHealth = playerMaxHealth;
  } else {
    playerHealthBar.max = playerMaxHealth;
  }

  return playerMaxHealth;
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
  return Math.round(baseAttack * baseCritModifier);
}

// Dexterity
let baseDexterity;

// Faith
let baseFaith;

// Paladin
let holySmiteTracker = 2.0;
let radiantAuraTracker = 5;

// Rogue
let shadowStrikeTracker = 6;
let evasionTracker = 2;

// Priestess

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
//     Status Effects
// ===============================

const LEGIONS_GRACE = {
  name: "Legion's Grace",
  status: `Base Attack increased by 1. The more soldiers laid to rest the greater the legion's grace becomes.`,
  duration: null,
  function: () => {
    let legionTracker = 27;
    let attackBoost = 1;
    LEGIONS_GRACE.duration = `0 soldiers put to rest`;
    setInterval(() => {
      LEGIONS_GRACE.duration = `${legionTracker} soldiers put to rest`;
      LEGIONS_GRACE.status = `Base Attack increased by ${attackBoost}. The more soldiers laid to rest, the greater the legion's grace becomes.`;
      if (legionTracker % 30 === 0) {
        statusEffectHandler(LEGIONS_GRACE);
        attackBoost++;
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

const AEGIS_STATUS_EFFECT = {
  name: "Aegis of the Fallen",
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

const POISONED = {
  name: "Poisoned",
  status: "Your Strength and Dexterity are reduced by 2.",
  duration: null,
  statusDuration: null,
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
            baseDexterity += 2;
            baseStrength += 2;

            updatePlayerTrackers();
            clearInterval(poisonedInterval);
          }
        }, 15000);

        statusEffectHandler(POISONED);
        renderStatusEffects(POISONED);
      }
    } else {
      if (length > POISONED.statusDuration - roomCounter) {
        POISONED.statusDuration = roomCounter + length;
        POISONED.duration = `Duration: ${
          POISONED.statusDuration - roomCounter
        } Rooms`;
        //writeToLog() Poisoned intensifies
      }
    }
  },
};

const HAUNTED = {
  name: "Haunted",
  status: "Evil spirits are following you.",
  duration: null,
  statusDuration: null,
  function: () => {
    let randomNumber = Math.round(Math.random() * 9) + 1;
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
    } else {
      if (randomNumber > HAUNTED.statusDuration) {
        HAUNTED.statusDuration = roomCounter + randomNumber;
        //writeToLog() Haunted again
      }
    }
  },
};

const DISEASED = {
  name: "Diseased",
  status: "Your max health is reduced by 25%.",
  duration: null,
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
    } else {
      if (length > DISEASED.statusDuration - roomCounter) {
        DISEASED.statusDuration = roomCounter + length;
        DISEASED.duration = `Duration: ${
          DISEASED.statusDuration - roomCounter
        } Rooms`;
        //writeToLog() Disease intensifies
      }
    }
  },
};

const CURSED = {
  name: "Cursed",
  status: "All damage taken is increased by 50%.",
  duration: null,
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
    } else {
      if (length > CURSED.statusDuration - roomCounter) {
        CURSED.statusDuration = roomCounter + length;
        CURSED.duration = `Duration: ${
          CURSED.statusDuration - roomCounter
        } Rooms`;
        //writeToLog() Disease intensifies
      }
    }
  },
};

const WEBBED = {
  name: "Webbed",
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

      // // ITEM: Plagueward Pendant - Poison Immunity
      // const immune = isItemAttuned(PLAGUEWARD_PENDANT, null);

      // if (!immune) {
      let webbedInterval = setInterval(() => {
        let breakFreeChance = Math.round(Math.random() * webStrength);
        breakFreeChance += baseStrength + counter;

        if (breakFreeChance >= webStrength) {
          console.log("You broke free!");
          WEBBED.duration = null;
          counter = 0;
          togglePlayerControls();
          soundEffectHandler(fleshRip1);
          //writeToLog() You break free
          clearInterval(webbedInterval);
        } else {
          counter++;
          monsterAttackHandler();
          //writeToLog() The spider attacks you while you struggle to break free
        }
      }, 2000);

      statusEffectHandler(WEBBED);
      renderStatusEffects(WEBBED);
    }
  },
}; //,
// };

const CHILLED = {
  name: "Chilled",
  status: "You are unable to use your special ability.",
  duration: null,
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
    } else {
      if (length > CHILLED.statusDuration - roomCounter) {
        CHILLED.statusDuration = roomCounter + length;
        CHILLED.duration = `Duration: ${
          CHILLED.statusDuration - roomCounter
        } Rooms`;
        //writeToLog() Disease intensifies
      }
    }
  },
};
