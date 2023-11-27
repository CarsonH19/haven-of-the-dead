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

  criticalDamage = calculateCritDamage();
  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
}

function paladinHolySmite() {
  playerAttackHandler(holySmiteTracker);
  specialCooldownCounter = 7;
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
  special: rogueShadowStrike,
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

  criticalDamage = calculateCritDamage();
  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
}

function rogueShadowStrike() {
  specialCooldownCounter = shadowStrikeTracker;

  // Guard
  setTimeout(() => {
    let monsterToGuardDamage = dealPlayerDamage(monsterAttackValue);
    let damageBlocked = Math.round(Math.random() * monsterToGuardDamage);
    damageBlocked += baseDexterity * 2;
    let damageTaken = monsterToGuardDamage - damageBlocked;

    if (damageBlocked <= monsterToGuardDamage) {
      writeToLogActions(LOG_GUARD, "NO", damageBlocked);
    }

    if (damageTaken > 0) {
      damageFlashAnimation();
      showDamage(damageTaken, "MONSTER");
      damagePlayer(damageTaken);
      writeToLogMonster(LOG_MONSTER_ATTACK, "NO", damageTaken);
    } else {
      damagePlayer(0);
      showDamage(0, "MONSTER");
      writeToLogMonster(LOG_MONSTER_MISS, "NO");
    }
  }, 1200);

  // Attack
  const criticalHitChance = Math.round(Math.random() * 20) + baseDexterity * 2;
  let playerToMonsterDamage = dealMonsterDamage(baseAttack);
  let totalDamage;
  // Critical Hit
  if (criticalHitChance >= 20) {
    playerToMonsterDamage = baseAttack;
    totalDamage = Math.round(playerToMonsterDamage * baseCritModifier);
    showDamage(totalDamage, "PLAYER", "CRIT");
    writeToLogHero(LOG_SHADOW_STRIKE, "YES", totalDamage);
    // Normal Hit
  } else if (playerToMonsterDamage > 0) {
    totalDamage = playerToMonsterDamage;
    showDamage(totalDamage, "PLAYER");
    writeToLogHero(LOG_SHADOW_STRIKE, "YES", totalDamage);
  } else {
    // Attack Misses
    showDamage(totalDamage, "PLAYER");
    writeToLogHero(LOG_PLAYER_MISS, "NO");
  }

  damageMonster(totalDamage);
  setTimeout(updatePlayerTrackers, 1250);
}

// See monsterAttackHandler for Rouge Passive Ability

// ===============================
//        Hero: Priestess
// ===============================

let greaterPrayerTracker = 20;
let burningDevotionTracker = 3;
let priestess = {
  name: "Priestess Liheth",
  level: 1,
  attack: 12,
  health: 90,
  strength: 0,
  dexterity: 1,
  faith: 2,
  special: priestessGreaterPrayer,
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

  criticalDamage = calculateCritDamage();
  strengthBonusHealth = calculateStrengthBonusHealth();
  playerMaxHealth = calculatePlayerMaxHealth();
}

function priestessGreaterPrayer() {
  healPlayer(greaterPrayerTracker);

  writeToLogHero(LOG_GREATER_PRAYER, "YES", greaterPrayerTracker);

  specialCooldownCounter = 9;
}

// See dealPlayerDamage for Priestess Passive Ability

function setStatsHandler() {
  if (heroChoice === "PALADIN") {
    setPaladinStats();
  } else if (heroChoice === "ROGUE") {
    setRogueStats();
  } else if (heroChoice === "PRIESTESS") {
    setPriestessStats();
  }
}

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
    gameWindow.classList.add("flash-low-health");
    heartbeatFastLow.volume = 0.3;
    heartbeatFastLow.play();
  } else {
    playerHealthBar.classList.remove("health-bar-critical");
    gameWindow.classList.remove("flash-low-health");
    heartbeatFastLow.pause();

  }
}

// ===============================
//        Boons & Leveling
// ===============================

function gainExperience(num) {
  // ITEM: Soulflame Candle - gain double exp.
  num = num * statusEffectHandler(SOULFLAME_CANDLE);

  experiencePoints += num;
}

function heroChecker() {
  if (heroChoice === "PALADIN") {
    return paladin;
  } else if (heroChoice === "ROGUE") {
    return rogue;
  } else {
    return priestess;
  }
}

function checkForLevelUp() {
  if (experiencePoints >= 999 && levelCounter <= 8) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 780 && levelCounter === 7) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 580 && levelCounter === 6) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 410 && levelCounter === 5) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 270 && levelCounter === 4) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 160 && levelCounter === 3) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 80 && levelCounter === 2) {
    renderLevelUpModal();
    levelCounter++;
  } else if (experiencePoints >= 30 && levelCounter === 1) {
    renderLevelUpModal();
    levelCounter++;
  }
}

function renderLevelUpModal() {
  strengthRank.disabled = false;
  dexterityRank.disabled = false;
  faithRank.disabled = false;
  specialRank.disabled = false;
  passiveRank.disabled = false;

  let hero = heroChecker();
  levelUpModal.style.display = "block";

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
      passiveText.textContent = "Radiant Aura";
      break;
    case rogue:
      specialText.textContent = "Shadow Strike";
      passiveText.textContent = "Evasion";
      break;
    case priestess:
      specialText.textContent = "Greater Prayer";
      passiveText.textContent = "Burning Radiance";
      break;
  }

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
  hero.level++;
  hero.attack += 2;
  hero.health += 10;

  if (boon === "STRENGTH") {
    baseStrength++;
  } else if (boon === "DEXTERITY") {
    baseDexterity++;
  } else if (boon === "FAITH") {
    baseFaith++;
  } else if (boon === "SPECIAL") {
    switch (hero) {
      case paladin:
        holySmiteTracker += 0.5;
        break;
      case rogue:
        shadowStrikeTracker--;
        break;
      case priestess:
        greaterPrayerTracker += 10;
        break;
    }
  } else if (boon === "PASSIVE") {
    switch (hero) {
      case paladin:
        radiantAuraTracker += 2;
        break;
      case rogue:
        evasionTracker++;
        break;
      case priestess:
        burningDevotionTracker += 1;
        break;
    }
  }
}

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



  updatePlayerTrackers();
}

function renderHeroStatsModal() {
  levelUpModal.style.display = "block";

  let hero = heroChecker();
  // Image
  const heroImage = document.querySelector(".hero-stats-img");

  if (hero === paladin) {
    heroImage.style.backgroundImage = "url(styles/images/paladin.png)";
  } else if (hero === rogue) {
    heroImage.style.backgroundImage = "url(styles/images/rogue.png)";
  } else {
    heroImage.style.backgroundImage = "url(styles/images/priestess.png)";
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
  heroBonusHealth.textContent = `+${strengthBonusHealth}`;
  const heroCritHitDamage = document.getElementById("heroCritHitDamage");
  let heroCritDamageMod = calculateBaseCritModifier() * 100;
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
    heroSpecial.textContent = "Shadow Strike:";
    let doubleGuard = baseDexterity * 2;
    let doubleCritChance = critHitPercentage * 2;
    heroSpecialStat.textContent = ` +${doubleGuard} / ${doubleCritChance}%`;
    heroSpecial.appendChild(heroSpecialStat);
  } else {
    heroSpecial.textContent = `Greater Prayer:`;
    heroSpecialStat.textContent = ` +${greaterPrayerTracker}`;
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
    heroPassive.textContent = "Evasion:";
    heroPassiveStat.textContent = ` +${evasionTracker}`;
    heroPassive.appendChild(heroPassiveStat);
  } else {
    heroPassive.textContent = "Burning Devotion:";
    heroPassiveStat.textContent = ` +${burningDevotionTracker}`;
    heroPassive.appendChild(heroPassiveStat);
  }
}

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
//      Event Listeners
// ===============================

strengthRank.addEventListener("click", () => {
  levelUpHandler("STRENGTH");
  strengthBoonRank++;
  endLevelUp();
});

dexterityRank.addEventListener("click", () => {
  levelUpHandler("DEXTERITY");
  dexterityBoonRank++;
  endLevelUp();
});

faithRank.addEventListener("click", () => {
  levelUpHandler("FAITH");
  faithBoonRank++;
  endLevelUp();
});

specialRank.addEventListener("click", () => {
  levelUpHandler("SPECIAL");
  specialAbilityBoonRank++;
  endLevelUp();
});

passiveRank.addEventListener("click", () => {
  levelUpHandler("PASSIVE");
  passiveAbilityBoonRank++;
  endLevelUp();
});
