// ==============================================================
//                      Status Effects
// ==============================================================

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
  function: (length) => {
    // ITEM: Ghostshroud Talisman - Haunted Immunity
    const immune = isItemAttuned(GHOSTSHROUD_TALISMAN, null);

    if (!immune) {
      startStatusEffect(HAUNTED, length);
    } else {
      writeToLogItem(LOG_ITEM, null, GHOSTSHROUD_TALISMAN);
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
      writeToLogItem(LOG_ITEM, null, DARKGUARD_TRINKET);
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

// const FIENDSWORN = {
//   name: "Fiendsworn",
//   image: "styles/images/items/fiendsworn.jpg",
//   status: "You have become sworn to a demonic entity.",
//   active: null,
//   function: () => {
//     if (FIENDSWORN.active === null) {
//       FIENDSWORN.active = "Permanent";
//       statusEffectHandler(FIENDSWORN);
//       renderStatusEffects(FIENDSWORN);
//     }
//   },
// };

// const BRANDED = {
//   name: "Branded",
//   image: "styles/images/items/branded.jpg",
//   status: "You have been branded by a demonic entity.",
//   active: null,
//   function: () => {
//     if (BRANDED.active === null) {
//       BRANDED.active = "Permanent";
//       statusEffectHandler(BRANDED);
//       renderStatusEffects(BRANDED);
//     }
//   },
// };

// ===============================
//     Misc. Status Effects
// ===============================

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

// ==============================================================
//                Status Effect Handling Logic
// ==============================================================

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

function statusEffectHandler(item) {
  switch (item) {
    case WARDING_CANDLE:
      if (wardingCandleTracker === "LIT") {
        if (
          currentRoom.contents.monsters[0].type === "UNDEAD" &&
          currentRoom.contents.monsters[0].skulls <= 6
        ) {
          let randomNumber = Math.round(Math.random() * 10);

          if (randomNumber >= 5) {
            playerControlsTimeout(2500);
            fadeOutAnimation(monsterContainer);
            fadeOutAnimation(monsterImage);
            setTimeout(() => {
              checkForMonsters();
              monsterContainer.style.display = "none";
              monsterImage.style.display = "none";
            }, 2000);
            writeToLogItem(LOG_ITEM, "YES", WARDING_CANDLE);
          }
        }
      }
      break;

    case SOOTHING_CANDLE:
      if (soothingCandleTracker === "LIT") {
        healPlayer(10);
        writeToLogItem(LOG_ITEM, "YES", SOOTHING_CANDLE);
      }
      break;

    case FLICKERING_CANDLE:
      if (flickeringCandleTracker > 0) {
        flickeringCandleTracker--;
        return 99;
      } else {
        return 0;
      }

    case BLAZING_CANDLE:
      if (blazingCandleTracker > 0) {
        blazingCandleTracker--;
        writeToLogItem(LOG_ITEM, "YES", BLAZING_CANDLE);
        return 20;
      } else {
        return 0;
      }

    case SOULFLAME_CANDLE:
      if (soulflameCandleTracker === "LIT") {
        return 2;
      } else {
        return 1;
      }

    // case BLACKHEART_BREW:
    //   break;

    // case POISONED:
    //   break;

    // case HAUNTED:
    //   break;

    // case DISEASED:
    //   break;

    // case WEBBED:
    //   break;

    // case CHILLED:
    //   break;

    case FIENDSWORN:
      if (FIENDSWORN.active !== null) {
        if (
          currentRoom.contents.monsters[0] === CULTIST ||
          currentRoom.contents.monsters[0] === FIENDSWORN_CULTIST
        ) {
          fadeOutAnimation(monsterContainer);
          setTimeout(() => {
            checkForMonsters();
            monsterContainer.style.display = "none";
          }, 2000);
          writeToLogItem(LOG_STATUS, "YES", FIENDSWORN);
        }
      }
      break;

    case BRANDED:
      if (roomMonsters[0].length > 0 && BRANDED.active !== null) {
        let randomDemon = Math.round(Math.random() * 6);

        if (randomDemon >= 6) {
          roomMonsters.unshift(DEMON);
          writeToLogItem(LOG_STATUS, "YES", BRANDED);
        }
      }
      break;

    default:
      break;
  }
}

// ===============================
//  STATUS EFFECT RENDERING LOGIC
// ===============================

// List to store active effects
const activeEffects = [];

function renderStatusEffects(effect) {
  const middleLeft = document.querySelector(".middle-left");

  // Check if the effect is already active
  const existingEffectIndex = activeEffects.findIndex(
    (activeEffect) => activeEffect.name === effect.name
  );

  if (existingEffectIndex !== -1) {
    // Update the existing effect
    const existingEffect = activeEffects[existingEffectIndex];
    existingEffect.duration = effect.duration;
    // You can update other properties as needed

    return; // Exit the function since the effect is already active
  }

  // New Status Effect
  const newEffect = document.createElement("div");

  // Render Image
  if (effect.image) {
    newEffect.style.backgroundImage = `url('${effect.image}')`;
    newEffect.style.backgroundSize = "cover";
  } else {
    newEffect.textContent = effect.name;
  }

  middleLeft.appendChild(newEffect);

  // Status Effect Tooltip
  newEffect.classList.add("statusTooltip");
  const tooltipText = document.createElement("ul");
  tooltipText.classList.add("statusTooltipText");
  newEffect.appendChild(tooltipText);

  const tooltipNoteName = document.createElement("li");
  const tooltipNoteDuration = document.createElement("li");
  const tooltipNoteStatus = document.createElement("li");
  tooltipNoteName.textContent = effect.name;
  tooltipNoteName.style.fontWeight = "800";

  tooltipNoteDuration.textContent = effect.duration;

  // Updates & Check Effect Duration
  let newEffectInterval = setInterval(() => {
    tooltipNoteDuration.textContent = effect.duration;
    if (effect.duration === null) {
      // Removes Element when duration ends
      middleLeft.removeChild(newEffect);
      clearInterval(newEffectInterval);

      // Remove the effect from the activeEffects list
      activeEffects.splice(existingEffectIndex, 1);
    }
  }, 3000);

  tooltipNoteStatus.textContent = effect.status;

  tooltipText.appendChild(tooltipNoteName);
  tooltipText.appendChild(tooltipNoteDuration);
  tooltipText.appendChild(tooltipNoteStatus);

  // Add the effect to the list of active effects
  activeEffects.push({
    element: newEffect,
    name: effect.name,
    duration: effect.duration,
    // Add other properties as needed
  });

  document.querySelectorAll(".statusTooltip").forEach(function (element) {
    element.addEventListener("mouseover", function () {
      const tooltipText = this.querySelector(".statusTooltipText");

      tooltipText.style.visibility = "visible";
      tooltipText.style.opacity = "1";
    });

    element.addEventListener("mouseout", function () {
      const tooltipText = this.querySelector(".statusTooltipText");
      tooltipText.style.visibility = "hidden";
      tooltipText.style.opacity = "0";
    });
  });
}
