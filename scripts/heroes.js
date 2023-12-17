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
    currentMonsterHealth <= radiantAuraTracker &&
    currentRoom.contents.monsters[0].type === "UNDEAD"
  ) {
    writeToLogHero(LOG_RADIANT_AURA, "NO");

    currentMonsterHealth = 0;
    monsterHealthBar.value = 0;
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
  playerControlsTimeout(1500);
  setTimeout(updatePlayerTrackers, 1450);
}

const DARKENED_REPRISAL = {
  name: "Darkened Reprisal",
  image: "styles/images/items/cursed.jpg",
  status: "You're Base Dexterity is increased.",
  duration: null,
  active: null,
  function: () => {
    DARKENED_REPRISAL.duration = "Active";
    let reprisalInterval = setInterval(() => {
      if (DARKENED_REPRISAL.active === "NO") {
        DARKENED_REPRISAL.duration = null;
        updateTotalStats();
        writeToLogHero(LOG_DARKENED_REPRISAL, "YES", "DISABLE");
        clearInterval(reprisalInterval);
      }
    }, 3000);

    renderStatusEffects(DARKENED_REPRISAL);
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

let cleansingFlameTracker = 15;
let burningDevotionTracker = 3;
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
  levelUpModal.style.display = "block";

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
    console.log(firstLevelHandler);
  } else {
    console.log('stats gained');
    hero.level++;
    baseAttack += 2;
    baseHealth += 10;
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
  } else if (boon === "SPECIAL") {
    specialAbilityBoonRank++;

    switch (hero) {
      case paladin:
        holySmiteTracker += 0.5;
        break;
      case rogue:
        umbralAssaultTracker++;
        break;
      case priestess:
        cleansingFlameTracker += 10;
        break;
    }
  } else if (boon === "PASSIVE") {
    passiveAbilityBoonRank++;

    switch (hero) {
      case paladin:
        radiantAuraTracker += 2;
        break;
      case rogue:
        darkenedReprisalTracker += 0.5;
        break;
      case priestess:
        burningDevotionTracker += 5;
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
