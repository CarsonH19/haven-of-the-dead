
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

let criticalHit;

// ===============================
//         Game Window
// ===============================

const gameWindow = document.querySelector(".game-window");
const roomImage = document.getElementById('backgroundImage');
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
//           STRENGTH
// ===============================
let baseStrength;

// Max Health // +10 per Str
let baseHealth;
let playerMaxHealth;

function calculatePlayerMaxHealth() {
  let strengthBonusHealth = baseStrength * 10;
  playerMaxHealth = baseHealth + strengthBonusHealth;
  playerMaxHealth += crimsonCovenantBoon;

  // Checks for Diseased Condition
  if (DISEASED.duration !== null) {
    playerMaxHealth = playerMaxHealth * 0.75;
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
  critDamageModifier = 1.5 + (baseStrength * 0.3);
  return critDamageModifier;
}

// ===============================
//           DEXTERITY
// ===============================
let baseDexterity;

// Crit Hit Chance // +5% per Dex
let critHitChance;

function calculateCritHitChance() {
  critHitChance = baseDexterity;
  return critHitChance;
}

// Guard Bonus // +1 Damage Avoided Per Dex
let guardBonus;

function calculateGuardBonus() {
  guardBonus = baseDexterity;
  return guardBonus;
}

// Flee Chance // +5% per Dex
let  fleeChance;

function calculateFleeChance() {
  fleeChance = baseDexterity; 
  return fleeChance;
}



// ===============================
//            FAITH
// ===============================
let baseFaith;

// Item Find Chance
let itemFindChance;

function calculateItemFindChance() {
  itemFindChance = baseFaith * 5;
  isItemAttuned(GRAVEROBBERS_SPADE);

  return itemFindChance;
}

// Experience Modifier
let experienceModifier;
function calculateExperienceModifier() {
  experienceModifier = baseFaith * 0.2;
  return experienceModifier;
}


// ===============================
//            STATS
// ===============================

let attunedItems = [];

function updateStats(stat, number = 0) {

  switch (stat) {
    case "STRENGTH":
      baseStrength = baseStrength + number;

      if (baseStrength < 0) {
        baseStrength = 0;
      }

      playerMaxHealth = calculatePlayerMaxHealth();
      critDamageModifier = calculateCritDamageModifier();
      break;

    case "DEXTERITY":
      baseDexterity = baseDexterity + number;

      if (baseDexterity < 0) {
        baseDexterity = 0;
      }

      critHitChance = calculateCritHitChance()
      guardBonus = calculateGuardBonus()
      fleeChance = calculateFleeChance();
      break;

    case "FAITH":
      baseFaith = baseFaith + number;

      if (baseFaith < 0) {
        baseFaith = 0;
      }

      findItemChance = calculateItemFindChance();
      experienceModifier = calculateExperienceModifier();
      break;

    case "ALL":
      updateStats("STRENGTH");
      updateStats("DEXTERITY");
      updateStats("FAITH");
      break;
  }

  updatePlayerTrackers();
}

function applyItemStatChanges() {
  for (let i = 0; i < attunedItems.length; i++) {
    if (attunedItems[i].unequip) {
      attunedItems[i].function();
      console.log("CALLED");
    }
  }
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
const LOG_CANT_ATTUNE = "CANT ATTUNE";
const LOG_CONSUMABLE = "CONSUMABLE";

const LOG_OTHER = "OTHER";

// ===============================
//       Event Trackers
// ===============================
 
// Legion's Grace
let legionTracker = 0;
let legionAttackBoost = Math.floor(legionTracker/30);

// Crimson Covenant
let crimsonCovenantBoon = 0;
let crimsonCovenantTracker = 0;
// let bloodPactTracker = 0; REMOVE?!?

// ===============================
//        Hero Variables
// ===============================

let heroChoice;
let baseAttack;
let potionHealValue = 20;
let specialCooldownCounter = 0;

// Paladin
let holySmiteTracker = 2.0;
let radiantAuraTracker = 5;

// Rogue
let shadowStrikeTracker = 6;
let evasionTracker = 2;

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

    setInterval(() => {
      LEGIONS_GRACE.duration = `${legionTracker} Legionnaires defeated`;
      LEGIONS_GRACE.status = `Base Attack increased by ${legionAttackBoost}. The more Legionnaires laid to rest, the greater the Legion's Grace becomes.`;
      if (legionTracker % 30 === 0) {
        attackBoost = Math.floor(legionTracker/30);
        baseAttack = baseAttack + legionAttackBoost;
        updatePlayerTrackers();
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

const POISONED = {
  name: "Poisoned",
  image: "styles/images/items/poisoned.jpg",
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
            
            updateStats("STRENGTH", 2);
            updateStats("DEXTERITY", 2);
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
  image: "styles/images/items/huanted.jpg",
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
  image: "styles/images/items/diseased.jpg",
  status: "Your max health is reduced by 25%.",
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
  image: "styles/images/items/cursed.jpg",
  status: "All damage taken is increased by 50%.",
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
  }
},
};

const CHILLED = {
  name: "Chilled",
  image: "styles/images/items/chilled.jpg",
  status: "You are unable to use your special ability.",
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

// ===============================
//    Permanent Status Effects
// ===============================

const FIENDSWORN = {
  name: "Fiendsworn",
  status: "You have become sworn to a demonic entity.",
  active: null,
  function: () => {
    if (FIENDSWORN.active === null) {
      FIENDSWORN.active = 'Permanent';
        statusEffectHandler(FIENDSWORN);
        renderStatusEffects(FIENDSWORN);
      }
    },
};

const BRANDED = {
  name: "Branded",
  status: "You have been branded by a demonic entity.",
  active: null,
  function: () => {
    if (BRANDED.active === null) {
      BRANDED.active = 'Permanent';
        statusEffectHandler(BRANDED);
        renderStatusEffects(BRANDED);
      }
    },
};

