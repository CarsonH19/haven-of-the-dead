// ===============================
//        Hero: Paladin
// ===============================

let paladin = {
  name: "Holy Warrior Siggurd",
  level: 1,
  attack: 10,
  health: 120,
  strength: 2,
  dexterity: 0,
  faith: 1,
  special: paladinHolySmite,
  soundEffects: {
    attack: swordImpactRock1,
    miss: swordSwingWhoosh,
    ability: magicSpellWhoosh14,
    guard: swordHit4,
  },
};

function setPaladinStats() {
  baseAttack = paladin.attack;
  baseHealth = paladin.health;
  baseStrength = paladin.strength;
  baseDexterity = paladin.dexterity;
  baseFaith = paladin.faith;
  specialAbility = paladin.special;
}

function paladinHolySmite() {
  playerAttackHandler(holySmiteTracker);
  specialCooldownHandler("RESET");
}

function paladinRadiantAura() {
  if (
    currentRoom.contents.monsters[0].type === "UNDEAD" &&
    monsterContainer.style.display === "FLEX" &&
    heroChoice === "PALADIN" &&
    currentMonsterHealth > 0
  ) {
    setTimeout(() => {
      damageMonster(radiantAuraTracker);
      isGameOver();
      writeToLogHero(LOG_RADIANT_AURA, "NO");
    }, 500);
  }
}

// ===============================
//        Hero: Rogue
// ===============================

let rogue = {
  name: "Shadowcloak Riven",
  level: 1,
  attack: 8,
  health: 100,
  strength: 1,
  dexterity: 2,
  faith: 0,
  special: rogueUmbralAssault,
  soundEffects: {
    attack: swordDraw2,
    miss: swordSwingWhoosh,
    ability: ghostlyWhoosh,
    guard: swordHit4,
  },
};

function setRogueStats() {
  baseAttack = rogue.attack;
  baseHealth = rogue.health;
  baseStrength = rogue.strength;
  baseDexterity = rogue.dexterity;
  baseFaith = rogue.faith;
  specialAbility = rogue.special;
}

function rogueUmbralAssault() {
  let attacksMade = 0;
  let umbralAssaultInterval = setInterval(() => {
    attacksMade++;

    playerAttackHandler();
    isGameOver();

    if (attacksMade === umbralAssaultTracker || currentMonsterHealth <= 0) {
      clearInterval(umbralAssaultInterval);
    }
  }, 500);

  specialCooldownHandler("RESET");
  setControlsInterval("PAUSE", 1800);
  setTimeout(updatePlayerTrackers, 1450);
}

const DARKENED_REPRISAL = {
  name: "Darkened Reprisal",
  image: "styles/images/darkened-reprisal.jpg",
  status: `You're Dexterity is increased.`,
  duration: null,
  active: null,
  function: () => {
    DARKENED_REPRISAL.duration = "Active";
    let reprisalInterval = setInterval(() => {
      if (DARKENED_REPRISAL.active === "NO") {
        DARKENED_REPRISAL.duration = null;
        writeToLogHero(LOG_DARKENED_REPRISAL, "YES", "DISABLE");
        clearInterval(reprisalInterval);
        updateTotalStats();
      }
    }, 3000);

    renderStatusEffects(DARKENED_REPRISAL);
    updateTotalStats();
  },
};

function rogueDarkenedReprisal() {
  if (currentPlayerHealth <= 30 && heroChoice === "ROGUE") {
    DARKENED_REPRISAL.active = "YES";
    if (DARKENED_REPRISAL.duration === null) {
      DARKENED_REPRISAL.function();
      updateTotalStats();
      writeToLogHero(LOG_DARKENED_REPRISAL, "YES", "ACTIVE");
    }
  } else {
    DARKENED_REPRISAL.active = "NO";
  }
}

// See monsterAttackHandler for Rouge Passive Ability

// ===============================
//        Hero: Priestess
// ===============================

let priestess = {
  name: "Priestess Liheth",
  level: 1,
  attack: 12,
  health: 90,
  strength: 0,
  dexterity: 1,
  faith: 2,
  special: priestessCleansingFlame,
  soundEffects: {
    attack: magicWandCast14,
    miss: swordSwingWhoosh,
    ability: magicalSpell,
    guard: swordSwingWhoosh,
  },
};

function setPriestessStats() {
  baseAttack = priestess.attack;
  baseHealth = priestess.health;
  baseStrength = priestess.strength;
  baseDexterity = priestess.dexterity;
  baseFaith = priestess.faith;
  specialAbility = priestess.special;
}

function priestessCleansingFlame() {
  if (specialAbilityBoonRank === 4) {
    let conditions = [POISONED, DISEASED, CHILLED, CURSED, BURNED, HAUNTED];

    let activeConditions = conditions.filter((obj) => obj.duration !== null);
    console.log(activeConditions);

    if (activeConditions.length > 0) {
      let randomIndex = Math.floor(Math.random() * activeConditions.length);
      let curedCondition = activeConditions[randomIndex];
      curedCondition.duration = null;
      curedCondition.statusDuration = null;
      updateTotalStats();
      console.log(curedCondition);
    }
  }

  healPlayer(cleansingFlameTracker);
  specialCooldownHandler("RESET");
  writeToLogHero(LOG_CLEANSING_FLAME, "YES", cleansingFlameTracker);
}

// See dealPlayerDamage for Priestess Passive Ability

// function setPlayerStats() {
//   if (heroChoice === "PALADIN") {
//     setPaladinStats();
//   } else if (heroChoice === "ROGUE") {
//     setRogueStats();
//   } else if (heroChoice === "PRIESTESS") {
//     setPriestessStats();
//   }

//   updateStats("ALL");
// }

// ===============================
//             Health
// ===============================

function healPlayer(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
  currentPlayerHealth += healValue;

  if (currentPlayerHealth > playerMaxHealth) {
    playerHealthBar.value = playerMaxHealth;
    currentPlayerHealth = playerMaxHealth;
  }

  // Checks if Darkened Reprisal should be turned off
  rogueDarkenedReprisal();
  updatePlayerTrackers();
  healthLowAnimation();
}

function healthLowAnimation() {
  if (currentPlayerHealth <= 30) {
    playerHealthBar.classList.add("health-bar-critical");
    roomImage.classList.add("flash-low-health");
    heartbeatFastLow.volume = 0.3;
    heartbeatFastLow.play();
  } else {
    playerHealthBar.classList.remove("health-bar-critical");
    roomImage.classList.remove("flash-low-health");
    heartbeatFastLow.pause();
  }
}

// ===============================
//        Boons & Leveling
// ===============================

function gainExperience(num) {
  num *= 10;
  num = Math.round((num *= calculateExperienceModifier()));

  // ITEM: Soulflame Candle - gain double exp.
  num = num * statusEffectHandler(SOULFLAME_CANDLE);

  experiencePoints += num;

  console.log(`Experience Gained: ${num}`);
  updatePlayerTrackers();
  checkForLevelUp();
}

function heroChecker() {
  if (heroChoice === "PALADIN") {
    return paladin;
  } else if (heroChoice === "ROGUE") {
    return rogue;
  } else if (heroChoice === "PRIESTESS") {
    return priestess;
  }
}

function checkForLevelUp() {
  if (experiencePoints >= 9999 && levelCounter <= 8) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 7800 && levelCounter === 7) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 5800 && levelCounter === 6) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 4100 && levelCounter === 5) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 2700 && levelCounter === 4) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 1600 && levelCounter === 3) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 800 && levelCounter === 2) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 300 && levelCounter === 1) {
    renderLevelUpModal();
    levelCounter++;
  }
}

let firstLevelHandler = 0;

function renderLevelUpModal() {
  const levelUpHeader = document.getElementById("levelUpHeader");

  strengthRank.disabled = false;
  dexterityRank.disabled = false;
  faithRank.disabled = false;
  specialRank.disabled = false;
  passiveRank.disabled = false;

  strengthRank.style.backgroundImage = `url(styles/images/strength-boon.jpg)`;
  strengthRank.style.backgroundSize = "cover";
  dexterityRank.style.backgroundImage = `url(styles/images/dexterity-boon.jpg)`;
  dexterityRank.style.backgroundSize = "cover";
  faithRank.style.backgroundImage = `url(styles/images/faith-boon.jpg)`;
  faithRank.style.backgroundSize = "cover";

  let hero = heroChecker();

  fadeInAnimation(levelUpModal);
  setTimeout(() => {
    levelUpModal.style.display = "block";
  }, 1900);

  if (firstLevelHandler === 0) {
    levelUpHeader.textContent = "";
  } else {
    levelUpHeader.textContent = "Level Up";
  }

  if (strengthBoonRank === 4) {
    strengthRank.textContent = "IV";
    strengthRank.disabled = true;
  } else if (strengthBoonRank === 3) {
    strengthRank.textContent = "III";
  } else if (strengthBoonRank === 2) {
    strengthRank.textContent = "II";
  } else {
    strengthRank.textContent = "I";
  }

  if (dexterityBoonRank === 4) {
    dexterityRank.textContent = "IV";
    dexterityRank.disabled = true;
  } else if (dexterityBoonRank === 3) {
    dexterityRank.textContent = "III";
  } else if (dexterityBoonRank === 2) {
    dexterityRank.textContent = "II";
  } else {
    dexterityRank.textContent = "I";
  }

  if (faithBoonRank === 4) {
    faithRank.textContent = "IV";
    faithRank.disabled = true;
  } else if (faithBoonRank === 3) {
    faithRank.textContent = "III";
  } else if (faithBoonRank === 2) {
    faithRank.textContent = "II";
  } else {
    faithRank.textContent = "I";
  }

  switch (hero) {
    case paladin:
      specialText.textContent = "Holy Smite";
      specialRank.style.backgroundImage = `url(styles/images/holy-smite.jpg)`;
      passiveText.textContent = "Radiant Aura";
      passiveRank.style.backgroundImage = `url(styles/images/radiant-aura.jpg)`;
      break;

    case rogue:
      specialText.textContent = "Umbral Assault";
      specialRank.style.backgroundImage = `url(styles/images/umbral-assault.jpg)`;
      passiveText.textContent = "Darkened Reprisal";
      passiveRank.style.backgroundImage = `url(styles/images/darkened-reprisal.jpg)`;
      break;

    case priestess:
      specialText.textContent = "Cleansing Flame";
      specialRank.style.backgroundImage = `url(styles/images/cleansing-flame.jpg)`;
      passiveText.textContent = "Burning Devotion";
      passiveRank.style.backgroundImage = `url(styles/images/burning-devotion.jpg)`;
      break;
  }

  specialRank.style.backgroundSize = "cover";
  passiveRank.style.backgroundSize = "cover";

  if (specialAbilityBoonRank === 4) {
    specialRank.textContent = "IV";
    specialRank.disabled = true;
  } else if (specialAbilityBoonRank === 3) {
    specialRank.textContent = "III";
  } else if (specialAbilityBoonRank === 2) {
    specialRank.textContent = "II";
  } else {
    specialRank.textContent = "I";
  }

  if (passiveAbilityBoonRank === 4) {
    passiveRank.textContent = "IV";
    passiveRank.disabled = true;
  } else if (passiveAbilityBoonRank === 3) {
    passiveRank.textContent = "III";
  } else if (passiveAbilityBoonRank === 2) {
    passiveRank.textContent = "II";
  } else {
    passiveRank.textContent = "I";
  }
}

function levelUpHandler(boon) {
  let hero = heroChecker();

  if (firstLevelHandler === 0) {
    firstLevelHandler++;
  } else {
    hero.level++;
    baseAttack += 2;
    baseHealth += 10;
    inventoryItems.push(GUIDING_LIGHT);
    writeToLogHero(LOG_STAT_INCREASE, "NO");
  }

  if (boon === "STRENGTH") {
    baseStrength++;
    strengthBoonRank++;
  } else if (boon === "DEXTERITY") {
    baseDexterity++;
    dexterityBoonRank++;
  } else if (boon === "FAITH") {
    baseFaith++;
    faithBoonRank++;

    if (faithBoonRank === 4) {
      SOULFLAME_CANDLE.effect =
        "While this candle is lit all experience gained is doubled. The candle burns out after 20 rooms.";
      BLAZING_CANDLE.effect =
        "While this candle is lit all attack you make become critical hits. The candle burns out after clearing two rooms.";
      FLICKERING_CANDLE.effect =
        "While this candle is lit your chance to flee successfully becomes 100%. The candle burns out after fleeing 6 times.";
      SOOTHING_CANDLE.effect =
        "While this candle is lit you restore 10HP after clearing a room. The candle burns out after clearing 10 rooms.";
      WARDING_CANDLE.effect =
        "While this candle is lit undead creatures may flee from you. The candle burns out after clearing 10 rooms.";
    }
  } else if (boon === "SPECIAL") {
    specialAbilityBoonRank++;

    switch (hero) {
      case paladin:
        // Rank 4 Boon Differs
        if (specialAbilityBoonRank < 4) {
          holySmiteTracker += 0.5;
        }
        break;
      case rogue:
        // Rank 4 Boon Differs
        if (specialAbilityBoonRank < 4) {
          umbralAssaultTracker++;
        }
        break;
      case priestess:
        // Rank 4 Boon Differs
        if (specialAbilityBoonRank < 4) {
          cleansingFlameTracker += 10;
        }
        break;
    }
  } else if (boon === "PASSIVE") {
    passiveAbilityBoonRank++;

    switch (hero) {
      case paladin:
        radiantAuraTracker += 5;
        break;
      case rogue:
        darkenedReprisalTracker += 0.5;
        break;
      case priestess:
        burningDevotionTracker += 2;
        break;
    }
  }
}

//
// Hero Stats Modal
//

function renderHeroStatsModal() {
  let hero = heroChecker();
  // Image
  const heroImage = document.querySelector(".hero-stats-img");

  if (hero === paladin) {
    heroImage.style.backgroundImage = "url(styles/images/paladin.jpg)";
  } else if (hero === rogue) {
    heroImage.style.backgroundImage = "url(styles/images/rogue.jpg)";
  } else {
    heroImage.style.backgroundImage = "url(styles/images/priestess.jpg)";
  }

  // Name
  const heroName = document.getElementById("heroName");
  heroName.textContent = hero.name;
  // Health
  let heroHealthCurrent = document.getElementById("heroHealthCurrent");
  let heroHealthMax = document.getElementById("heroHealthMax");
  heroHealthCurrent.textContent = currentPlayerHealth;
  heroHealthMax.textContent = playerMaxHealth;
  // Strength
  let heroStatsStrength = document.getElementById("heroStatsStrength");
  heroStatsStrength.textContent = baseStrength;
  const heroBonusHealth = document.getElementById("heroBonusHealth");
  heroBonusHealth.textContent = `+${baseStrength * 10}`;
  const heroCritHitDamage = document.getElementById("heroCritHitDamage");
  let heroCritDamageMod = calculateCritDamageModifier() * 100;
  heroCritHitDamage.textContent = `${heroCritDamageMod}%`;
  // Dexterity
  let heroStatsDexterity = document.getElementById("heroStatsDexterity");
  heroStatsDexterity.textContent = baseDexterity;
  const heroCritHitChance = document.getElementById("heroCritHitChance");
  critHitPercentage = ((1 + baseDexterity) / 20) * 100;
  heroCritHitChance.textContent = `${critHitPercentage}%`;
  const heroGuardBonus = document.getElementById("heroGuardBonus");
  heroGuardBonus.textContent = `+${baseDexterity}`;
  // Faith
  let heroStatsFaith = document.getElementById("heroStatsFaith");
  heroStatsFaith.textContent = baseFaith;
  const heroFleeChance = document.getElementById("heroFleeChance");
  fleeChancePercentage = ((1 + baseFaith) / 10) * 100;
  heroFleeChance.textContent = `${fleeChancePercentage}%`;
  const heroFindItemChance = document.getElementById("heroFindItemChance");
  findItemPercentage = ((1 + baseFaith) / 20) * 100;
  heroFindItemChance.textContent = `${findItemPercentage}%`;
  // Special
  const heroSpecial = document.getElementById("heroSpecial");
  let heroSpecialStat = document.createElement(`span`);

  if (hero === paladin) {
    heroSpecial.textContent = "Holy Smite:";
    let smitePercentage = holySmiteTracker * 100;
    heroSpecialStat.textContent = ` ${smitePercentage}%`;
    heroSpecial.appendChild(heroSpecialStat);
  } else if (hero === rogue) {
    heroSpecial.textContent = "Umbral Strike:";
    heroSpecialStat.textContent = ` ${umbralAssaultTracker} Attacks`;
    heroSpecial.appendChild(heroSpecialStat);
  } else {
    heroSpecial.textContent = `Cleansing Flame:`;
    heroSpecialStat.textContent = ` +${cleansingFlameTracker}`;
    heroSpecial.appendChild(heroSpecialStat);
  }

  // Passive
  const heroPassive = document.getElementById("heroPassive");
  const heroPassiveStat = document.createElement("span");

  if (hero === paladin) {
    heroPassive.textContent = "Radiant Aura:";
    heroPassiveStat.textContent = ` +${radiantAuraTracker}`;
    heroPassive.appendChild(heroPassiveStat);
  } else if (hero === rogue) {
    heroPassive.textContent = "Darkened Reprisal:";
    heroPassiveStat.textContent = ` +${darkenedReprisalTracker}`;
    heroPassive.appendChild(heroPassiveStat);
  } else {
    heroPassive.textContent = "Burning Devotion:";
    heroPassiveStat.textContent = ` +${burningDevotionTracker}`;
    heroPassive.appendChild(heroPassiveStat);
  }
}

// ===============================
// Hero Stat Modal Event Listeners
// ===============================

playerContainer.addEventListener("click", () => {
  renderHeroStatsModal();
  heroStatsModal.style.display = "block";
});

heroStatsModal.addEventListener("click", (event) => {
  if (event.target !== logModal || event.target === heroStatsModal) {
    heroStatsModal.style.display = "none";
  }
});

// ===============================
//    Level Up Event Listeners
// ===============================

// MouseoverEvent Listener
levelUpModal.addEventListener("mouseover", (event) => {
  switch (event.target) {
    case strengthRank:
      strengthRank.textContent = nextBoonRank(strengthBoonRank);
      break;
    case dexterityRank:
      dexterityRank.textContent = nextBoonRank(dexterityBoonRank);
      break;
    case faithRank:
      faithRank.textContent = nextBoonRank(faithBoonRank);
      break;
    case specialRank:
      specialRank.textContent = nextBoonRank(specialAbilityBoonRank);
      break;
    case passiveRank:
      passiveRank.textContent = nextBoonRank(passiveAbilityBoonRank);
      break;
  }

  function nextBoonRank(currentRank) {
    switch (currentRank) {
      case 1:
        return "II";

      case 2:
        return "III";

      case 3:
        return "IV";

      case 4:
        return "IV";
    }
  }
});

// Mouseout Event Listener
levelUpModal.addEventListener("mouseout", (event) => {
  switch (event.target) {
    case strengthRank:
      strengthRank.textContent = currentBoonRank(strengthBoonRank);
      break;
    case dexterityRank:
      dexterityRank.textContent = currentBoonRank(dexterityBoonRank);
      break;
    case faithRank:
      faithRank.textContent = currentBoonRank(faithBoonRank);
      break;
    case specialRank:
      specialRank.textContent = currentBoonRank(specialAbilityBoonRank);
      break;
    case passiveRank:
      passiveRank.textContent = currentBoonRank(passiveAbilityBoonRank);
      break;
  }
});

function currentBoonRank(currentRank) {
  switch (currentRank) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
  }
}

// Choosing a Boon
levelUpModal.addEventListener("click", (event) => {
  switch (event.target) {
    case strengthRank:
      levelUpHandler("STRENGTH");
      setTimeout(() => {
        writeToLogHero(LOG_LEVEL, "YES", "STRENGTH");
      }, 2000);
      endLevelUp();
      break;
    case dexterityRank:
      levelUpHandler("DEXTERITY");
      setTimeout(() => {
        writeToLogHero(LOG_LEVEL, "YES", "DEXTERITY");
      }, 2000);
      endLevelUp();
      break;
    case faithRank:
      levelUpHandler("FAITH");
      setTimeout(() => {
        writeToLogHero(LOG_LEVEL, "YES", "FAITH");
      }, 2000);
      endLevelUp();
      break;
    case specialRank:
      levelUpHandler("SPECIAL");
      setTimeout(() => {
        writeToLogHero(LOG_LEVEL, "YES", "SPECIAL");
      }, 2000);
      endLevelUp();
      break;
    case passiveRank:
      levelUpHandler("PASSIVE");
      setTimeout(() => {
        writeToLogHero(LOG_LEVEL, "YES", "PASSIVE");
      }, 2000);
      endLevelUp();
      break;
  }
});

function endLevelUp() {
  strengthRank.disabled = true;
  dexterityRank.disabled = true;
  faithRank.disabled = true;
  specialRank.disabled = true;
  passiveRank.disabled = true;

  function clearLevelUpModal() {
    strengthRank.textContent = "";
    dexterityRank.textContent = "";
    faithRank.textContent = "";
    specialRank.textContent = "";
    passiveRank.textContent = "";
    specialText.textContent = "";
    passiveText.textContent = "";
  }

  fadeOutAnimation(levelUpModal, 0000);
  setTimeout(() => {
    levelUpModal.style.display = "none";
    levelUpModal.style.animation = "";
    clearLevelUpModal();
  }, 1950);

  updateTotalStats();
}

// ===============================
//      NPC Rendering Logic
// ===============================
