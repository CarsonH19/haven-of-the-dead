// ===============================
//            Attack
// ===============================

function playerAttackHandler(smite) {
  criticalHit = checkForCritcalHit();
  let playerToMonsterDamage = dealMonsterDamage(totalAttack);
  let totalDamage;

  // Checks for Rank 4 Holy Smite - maximum damage
  if (heroChoice === "PALADIN" && specialAbilityBoonRank === 4 && smite > 1) {
    playerToMonsterDamage = totalAttack;
  }

  // Checks for Rank 4 Umbral Assault - additional damage !FIX! Balance?!
  if (
    heroChoice === "ROGUE" &&
    specialAbilityBoonRank === 4 &&
    smite === "UMBRAL ASSAULT"
  ) {
    playerToMonsterDamage += totalDexterity;
  }

  // ATTACK MODIFIERS
  // ITEM: Revenant's Rage - Increases attack when low health
  playerToMonsterDamage += isItemAttuned(REVENANTS_RAGE, 0);
  // ITEM: Skullbreaker Helm - +5 Attack below 30%HP
  playerToMonsterDamage += isItemAttuned(SKULLBREAKER_HELM, 0);
  // ITEM: +3 attack against evil spirits.
  playerToMonsterDamage += isItemAttuned(WRAITHBANE, 0);
  // ITEM: +3 attack against beasts and humans.
  playerToMonsterDamage += isItemAttuned(RITUAL_BLADE, 0);
  // ITEM: Crimson Offering - -5HP & +10 damage
  playerToMonsterDamage += isItemAttuned(CRIMSON_OFFERING, 0);
  // ITEM: Soulreaver - damage++ for each consecutive attack
  playerToMonsterDamage += isItemAttuned(SOULREAVER, 0);

  // CRITICAL HIT MODIFIERS
  // ITEM: Blazing Candle - all attacks are critical hits
  criticalHit += statusEffectHandler(BLAZING_CANDLE);

  //ITEM: Unholy Effigy - Reduces cooldown on Crit
  isItemAttuned(UNHOLY_EFFIGY);

  // Smite Critical Hit
  if (
    criticalHit >= 20 &&
    smite > 1 &&
    playerToMonsterDamage > 0 &&
    heroChoice === "PALADIN"
  ) {
    totalDamage = Math.round(
      smite * (playerToMonsterDamage * calculateCritDamageModifier())
    );
    showDamage(totalDamage, "PLAYER", "CRIT");
    soundEffectHandler(heroChecker(), "PLAYER ABILITY");
    writeToLogHero(LOG_SMITE_CRITICAL, "YES", totalDamage);
    // Smite Hit
  } else if (smite > 1 && heroChoice === "PALADIN") {
    totalDamage = Math.round(playerToMonsterDamage * smite);
    showDamage(totalDamage, "PLAYER");
    soundEffectHandler(heroChecker(), "PLAYER ABILITY");
    writeToLogHero(LOG_SMITE, "YES", totalDamage);
    // Critical Hit
  } else if (criticalHit >= 20 && playerToMonsterDamage > 0) {
    totalDamage = Math.round(
      playerToMonsterDamage * calculateCritDamageModifier()
    );
    showDamage(totalDamage, "PLAYER", "CRIT");
    soundEffectHandler(heroChecker(), "PLAYER ATTACK");
    // writeToLogActions(LOG_PLAYER_CRITICAL, "YES", totalDamage);
    writeToLogActions(LOG_PLAYER_ATTACK, "NO", totalDamage);
    // Normal Hit
  } else if (playerToMonsterDamage > 0) {
    totalDamage = playerToMonsterDamage;
    showDamage(totalDamage, "PLAYER");
    soundEffectHandler(heroChecker(), "PLAYER ATTACK");
    writeToLogActions(LOG_PLAYER_ATTACK, "NO", totalDamage);
    // Miss (No Damage)
  } else if (playerToMonsterDamage <= 0) {
    totalDamage = 0;
    showDamage(totalDamage, "PLAYER");
    soundEffectHandler(heroChecker(), "PLAYER MISS");
    writeToLogActions(LOG_PLAYER_MISS, "NO");
  }

  console.log("ATTACK");
  damageMonster(totalDamage);
}

function checkForCritcalHit() {
  return Math.floor(Math.random() * 20) + calculateCritHitChance();
}

function calculateTotalCritDamage() {
  return Math.round(totalAttack * calculateCritDamageModifier());
}

function damageMonster(damage) {
  if (currentMonsterHealth - damage <= 0) {
    monsterHealthBar.value = 0;
    currentMonsterHealth = 0;
  } else {
    monsterHealthBar.value = +monsterHealthBar.value - damage;
    currentMonsterHealth -= damage;
  }

  if (damage > 0) {
    damageFlashAnimation("MONSTER");
  }

  updatePlayerTrackers();

  if (currentMonsterHealth <= 0) {
    isGameOver();
  }
}

function dealMonsterDamage(damage) {
  let damageDealt = Math.round(Math.random() * damage);

  // ITEM: Relic of Retribution - +25% damage against undead
  damageDealt = Math.round(
    (damageDealt *= isItemAttuned(RELIC_OF_RETRIBUTION, 1))
  );

  // Checks for Echoes of Victory - +20% damage
  if (ECHOES_OF_VICTORY.duration !== null) {
    damageDealt = Math.round(damageDealt * 1.2);
  }

  // Priestess Burning Devotion logic
  if (heroChoice === "PRIESTESS" && damageDealt < burningDevotionTracker) {
    damageDealt = burningDevotionTracker;
    writeToLogHero(LOG_BURNING_DEVOTION, "NO", damageDealt);
  }

  return damageDealt;
}

function monsterAttackHandler(bonus) {
  const monster = currentRoom.contents.monsters[0];
  let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);

  // Monster Ability Logic
  if (bonus) {
    monsterToPlayerDamage *= bonus;
  } else if (UNDEAD_SIGGURD.tracker === 5) {
    UNDEAD_SIGGURD.tracker = 0;
    monsterToPlayerDamage = 36;
  } else if (BONEVAULT_DEMON.tracker === 5) {
    BONEVAULT_DEMON.tracker = 0;
    monsterToPlayerDamage = 18;
  } else if (DEATH_KNIGHT.tracker === 5) {
    DEATH_KNIGHT.tracker = 0;
    monsterToPlayerDamage = 25;
  } else if (
    currentRoom.contents.monsters[0] === BLAZING_SKELETON &&
    currentMonsterHealth <= 7
  ) {
    monsterToPlayerDamage = 15;
    BLAZING_SKELETON.function();
  }

  // ITEM: Hellfire Charm - Erupts dealing 15 damage
  isItemAttuned(HELLFIRE_CHARM, null);

  // ITEM: Mist Veil Cloak - Chance to evade attacks.
  monsterToPlayerDamage *= isItemAttuned(MIST_VEIL_CLOAK, 1);

  // ITEM: Cursed Mirror - Reflects a portion of damage taken back to monster.
  let cursedMirrorTracker = isItemAttuned(CURSED_MIRROR, 0);
  if (cursedMirrorTracker > 0) {
    let damageReflected = Math.round(
      Math.random() * (monsterToPlayerDamage / 1.5)
    );
    damageMonster(damageReflected);
    showDamage(damageReflected, "PLAYER");
  }

  if (monsterToPlayerDamage > 0) {
    soundEffectHandler(monster, "MONSTER ATTACK");
    monsterAbilityHandler(currentRoom.contents.monsters[0]);
    writeToLogMonster(LOG_MONSTER_ATTACK, "NO", monsterToPlayerDamage);
  } else if (currentRoom.contents.monsters[0] === UNDYING_WARBAND) {
    // Calls Undying Warband Ability even on miss
    monsterAbilityHandler(UNDYING_WARBAND);
  } else if (monsterToPlayerDamage <= 0) {
    soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
    writeToLogMonster(LOG_MONSTER_MISS, "NO");
  }

  damagePlayer(monsterToPlayerDamage);

  // Coooldown needs to be after player is damaged
  if (AEGIS_OF_THE_FALLEN.cooldown !== 0) {
    AEGIS_OF_THE_FALLEN.cooldown--;
  }

  updatePlayerTrackers();
  // setControlsInterval("START");
  togglePlayerControls();
}

function dealPlayerDamage(damage) {
  let dealtDamage = Math.round(Math.random() * damage);

  // Rank 4 Dexterity damage reduction
  if (dexterityBoonRank === 4) {
    dealtDamage -= totalDexterity;
  }

  if (dealtDamage <= 0) {
    dealtDamage = 0;
  }

  // ITEM - Hellfire Charm - Accumulates damage received
  if (attunedItems.includes(HELLFIRE_CHARM)) {
    HELLFIRE_CHARM.tracker += dealtDamage;
  }

  return dealtDamage;
}

function damagePlayer(damage) {
  if (currentPlayerHealth <= 30) {
    // ITEM - ACTIVIATE: Aegis of the Fallen - Immunity to all damage.
    isItemAttuned(AEGIS_OF_THE_FALLEN);
  }

  if (AEGIS_STATUS_EFFECT.duration !== null) {
    damage = 0;
  }

  // Bone Amalgam Use Temp HP
  if (attunedItems.includes(BONE_AMALGAM)) {
    damage = boneAmalgamUseHitPoints(damage);
  }

  // Check for Burned Condition
  if (BURNED.duration !== null) {
    damage = Math.round(damage * 1.25);
  }

  // Subtract from Health
  if (currentPlayerHealth - damage <= 0) {
    playerHealthBar.value = 0;
    currentPlayerHealth = 0;
  } else {
    playerHealthBar.value = +playerHealthBar.value - damage;
    currentPlayerHealth -= damage;
  }

  // ITEM: Gem of Anguish - Gain XP for each point of damage
  if (isItemAttuned(GEM_OF_ANGUISH, null) !== null) {
    let xp = damage * 0.1;
    gainExperience(xp);
  }

  // Boss Critical Hit
  if (
    (currentRoom.contents.monsters[0] === BONEVAULT_DEMON &&
      BONEVAULT_DEMON.tracker === 1) ||
    (currentRoom.contents.monsters[0] === DEATH_KNIGHT &&
      DEATH_KNIGHT.tracker === 1) ||
    (currentRoom.contents.monsters[0] === UNDEAD_SIGGURD &&
      UNDEAD_SIGGURD.tracker === 1) ||
    currentRoom.contents.monsters[0] === BARON_OF_BONE
  ) {
    showDamage(damage, "MONSTER", "CRIT");
  } else {
    showDamage(damage, "MONSTER");
  }

  if (damage > 0) {
    damageFlashAnimation("PLAYER");
  }

  // ITEM: Soul Jar - resurrect with half HP
  isItemAttuned(SOUL_JAR);

  healthLowAnimation();

  if (currentPlayerHealth <= 0) {
    isGameOver();
  }
}

function showDamage(damage, source, critical) {
  const damageDealtElement = document.getElementById("damageDealt");
  const damageReceivedElement = document.getElementById("damageReceived");

  const numbers = document.createElement("li");

  if (source === "PLAYER") {
    damageElement = damageDealtElement;
  } else {
    damageElement = damageReceivedElement;
  }

  numbers.classList.remove("critical", "fade-out", "damage-shake");
  numbers.textContent = damage;
  numbers.style.opacity = "1";

  if (critical) {
    // Apply special red text and animation for critical hit
    numbers.classList.add("critical");
  } else {
    // Apply regular shake animation
    numbers.classList.add("damage-shake");
  }

  // Shake for 1 second
  setTimeout(() => {
    numbers.classList.add("fade-out");

    // Fade out after the shaking stops
    setTimeout(() => {
      numbers.style.opacity = "0";
    }, 450);
  }, 500);

  damageElement.insertBefore(numbers, damageElement.firstChild);

  if (damageDealtElement.children.length > 1) {
    damageDealtElement.removeChild(damageDealtElement.lastElementChild);
  }

  if (damageReceivedElement.children.length > 1) {
    damageReceivedElement.removeChild(damageReceivedElement.lastElementChild);
  }
}

// ===============================
//            Special
// ===============================

function specialCooldownHandler(reset) {
  const special = document.getElementById("specialCount");

  if (reset) {
    if (heroChoice === "PALADIN") {
      specialCooldownCounter = 16;
    } else if (heroChoice === "ROGUE") {
      specialCooldownCounter = 11;
    } else if (heroChoice === "PRIESTESS") {
      specialCooldownCounter = 21;
    }

    // ITEM: HALLOWED HOURGLASS - Reduces Cooldown by 2
    specialCooldownCounter -= isItemAttuned(HALLOWED_HOURGLASS, 0);
  }

  if (specialCooldownCounter > 0 && !reset) {
    specialCooldownCounter--;
    special.textContent = `Cooldown: ${specialCooldownCounter}`;
  }

  if (specialCooldownCounter === 0) {
    if (heroChoice === "PALADIN") {
      special.textContent = `Holy Smite`;
    } else if (heroChoice === "ROGUE") {
      special.textContent = `Umbral Assault`;
    } else if (heroChoice === "PRIESTESS")
      special.textContent = `Cleansing Flame`;
  }
}

// ===============================
//            Guard
// ===============================

function guardHandler(bonus) {
  const guard = document.getElementById("guardCount");
  let damageToGuard = dealPlayerDamage(monsterAttackValue);

  if (bonus) {
    damageToGuard *= bonus;
  } else if (UNDEAD_SIGGURD.tracker === 5) {
    UNDEAD_SIGGURD.tracker = 0;
    damageToGuard = 36;
  } else if (BONEVAULT_DEMON.tracker === 5) {
    BONEVAULT_DEMON.tracker = 0;
    damageToGuard = 18;
  } else if (DEATH_KNIGHT.tracker === 5) {
    DEATH_KNIGHT.tracker = 0;
    damageToGuard = 25;
  }

  let damageBlocked = Math.round(Math.random() * damageToGuard);
  damageBlocked += guardBonus;

  let damageTaken = damageToGuard - damageBlocked;

  if (damageBlocked <= damageToGuard) {
    soundEffectHandler(heroChecker(), "PLAYER GUARD");
  }

  if (damageTaken > 0) {
    damagePlayer(damageTaken);
    monsterAbilityHandler(currentRoom.contents.monsters[0]);
    soundEffectHandler(heroChecker(), "MONSTER ATTACK");
    writeToLogMonster(LOG_MONSTER_ATTACK, null, damageTaken);
  } else {
    damagePlayer(0);
    soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
    writeToLogMonster(LOG_MONSTER_MISS, null);
  }

  // console.log(`Damage Received: ${damageToGuard}`);
  // console.log(`Damage Blocked: ${damageBlocked}`);
  // console.log(`Current Player Health ${currentPlayerHealth}`);
  // console.log(`Current Player Health Bar Value ${playerHealthBar.value}`);

  if (damageBlocked > damageToGuard) {
    damageBlocked = damageToGuard;
  }

  guardReady = "NO";

  writeToLogActions(LOG_GUARD, "YES", damageBlocked);
  updatePlayerTrackers();

  setTimeout(() => {
    // setControlsInterval("START");
    togglePlayerControls();
  }, 1500);
}

// ===============================
//            Potion
// ===============================

function countPotions() {
  potionCounter = 0;
  for (let i = 0; i < inventoryItems.length; i++) {
    if (inventoryItems[i] === POTION) {
      potionCounter++;
    }
  }
}

function potionHandler() {
  if (potionCounter > 0) {
    potionCounter--;
    itemObject = inventoryItems.find((inv) => inv.name === "Health Potion");
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);
  }

  if (potionCounter <= 0) {
    potionBtn.disabled = true;
  }

  potions.textContent = ` x ${potionCounter}`;

  healPlayer(potionHealValue);
  soundEffectHandler(POTION, "ITEM");
  writeToLogActions(LOG_POTION, "YES", potionHealValue);
}

// ===============================
//             Flee
// ===============================
function fleeHandler() {
  let fleeAttempt = Math.floor(Math.random() * 10) + totalDexterity;

  // ITEM: Ring of Skittering - Increased flee chance
  fleeAttempt += isItemAttuned(RING_OF_SKITTERING, 0);
  // ITEM: FLickering Candle - 100% flee chance
  fleeAttempt += statusEffectHandler(FLICKERING_CANDLE);

  // Flee bonus when fighting the Flood of Bones
  if (currentRoom.contents.monsters[0] === FLOOD_OF_BONES) {
    fleeAttempt += 3;
  }

  if (fleeAttempt >= 10 && currentRoom.roomName !== "Throne of the Eternal") {
    // Log must be placed before currentRoom change
    writeToLogActions(LOG_FLEE, "YES", "SUCCESS");

    // Remove Locked Room from catacombRooms
    if (
      currentRoom.roomName === "Bonevault" ||
      currentRoom.roomName === "The Crematorium" ||
      currentRoom.roomName === "The Frigid Tomb"
    ) {
      catacombRooms.splice(roomIndex, 1);
    }

    let roomToFlee = currentRoom;
    let newRoom = getRandomRoom(catacombRooms);

    if (roomToFlee !== newRoom) {
      setTimeout(() => {
        fadeOutAnimation(monsterContainer);
        fadeOutAnimation(monsterImageCard);
        newRoomAnimation();

        setTimeout(() => {
          monsterContainer.style.display = "none";
          monsterImageCard.style.display = "none";
          renderCurrentRoom(currentRoom);
        }, 2000);
      }, 5000);

      // setControlsInterval("STOP");
      turnOffControls();
    } else {
      fleeHandler();
    }
  } else {
    // setControlsInterval("STOP");
    turnOffControls();
    setTimeout(monsterAttackHandler, 1200);
    writeToLogActions(LOG_FLEE, "YES", "FAILURE");
  }
}

// ===============================
//          Is Game Over?
// ===============================

function isGameOver(ending) {
  console.log("isGameOver");

  const monster = currentRoom.contents.monsters[0];

  switch (ending) {
    case "GOOD ENDING":
      renderGameOverModal("GOOD");
      break;

    case "BAD ENDING":
      renderGameOverModal("BAD");
      break;

    default:
      // check for player death
      if (currentPlayerHealth <= 0) {
        setTimeout(() => {
          currentMusic.pause();
          heartbeatFastLow.pause();
          renderGameOverModal("DEAD");
        }, 2000);
      }
      break;
  }

  if (
    currentMonsterHealth <= 0 &&
    monsterImageCard.style.display === "block" &&
    monsterContainer.style.display === "block"
  ) {
    fadeOutAnimation(monsterContainer);
    fadeOutAnimation(monsterImageCard);
  }

  if (currentRoom.contents.monsters.length > 0 && currentMonsterHealth <= 0) {
    // ITEM: Bloodstone - Recovers health when monster dies
    isItemAttuned(BLOODSTONE, null);
    soundEffectHandler(monster, "MONSTER DEATH");
    gainExperience(currentRoom.contents.monsters[0].skulls);

    setTimeout(() => {
      checkForMonsters();
    }, 1000);
  }

  // if (npcImageCard.style.display === "block") {
  //   fadeOutAnimation(npcImageCard);
  // }

  function renderGameOverModal(ending) {
    if (ending === "DEAD") {
      openGameOverModal();
      playMusic(theEndOfTheWorld);
    } else {
      setTimeout(() => {
        const topContent = document.querySelector(".top-content");
        const bottomContent = document.querySelector(".bottom-content");
        const middleLeftContent = document.querySelector(".middle-left");
        const middleRightContent = document.querySelector(".middle-right");
        topContent.style.display = "none";
        bottomContent.style.display = "none";
        middleLeftContent.style.display = "none";
        middleRightContent.style.display = "none";

        chooseEnding(ending);
      }, 2000);
      newRoomAnimation();
    }
  }

  function chooseEnding(ending) {
    switch (ending) {
      case "DEAD":
        playMusic(theEndOfTheWorld);
        clearNarrative();
        break;

      case "GOOD":
        backgroundImage.style.backgroundImage = `url(styles/images/backgrounds/good-ending.jpg)`;
        playMusic(returnOfTheFallen);
        break;

      case "BAD":
        if (heroChoice === "PALADIN") {
          backgroundImage.style.backgroundImage = `url(styles/images/siggurd-bad-ending.jpg)`;
        } else if (heroChoice === "ROGUE") {
          backgroundImage.style.backgroundImage = `url(styles/images/riven-bad-ending.jpg)`;
        } else if (heroChoice === "PRIESTESS") {
          backgroundImage.style.backgroundImage = `url(styles/images/liheth-bad-ending.jpg)`;
        }

        playMusic(theEndOfTheWorld);

        break;
    }

    darkenBackground();

    function darkenBackground() {
      setTimeout(() => {
        fade.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        fadeInAnimation(fade);
        setTimeout(() => {
          fade.style.opacity = "1";
        }, 950);

        if (ending === "GOOD") {
          writeToLogEvent(LOG_MISC_DESCRIPTION, "YES", "GOOD ENDING");
        } else if (ending === "BAD") {
          writeToLogEvent(LOG_MISC_DESCRIPTION, "YES", "BAD ENDING");
        }

        backgroundImage.style.display = "flex";
        backgroundImage.style.flexDirection = "column";
        backgroundImage.style.justifyContent = "center";
        backgroundImage.style.alignItems = "center";
      }, 6000);

      const playerDisplay = document.querySelector(".player-display");
      eventModal.style.display = "none";
      tradeModal.style.display = "none";
      levelUpModal.style.display = "none";
      heroStatsModal.style.display = "none";
      logModal.style.display = "none";
      roomSummaryButton.style.display = "none";
      continueButtonModal.style.display = "none";
      monsterContainer.style.display = "none";
      playerDisplay.style.display = "none";
    }
  }

  function openGameOverModal() {
    fadeInAnimation(gameOverModal);
  }
}

// ===============================
//       Choose Hero Modal
// ===============================

// heroChoiceModal.style.display = "block";
heroChoiceModal.addEventListener("click", function (event) {
  const SIGGURD = document.getElementById("siggurd");
  const RIVEN = document.getElementById("riven");
  const LIHETH = document.getElementById("liheth");
  const playerName = document.getElementById("playerName");

  // Function to check if the target is SIGGURD or its child
  const isSiggurdOrChild = (target) => SIGGURD.contains(target);
  // Function to check if the target is RIVEN or its child
  const isRivenOrChild = (target) => RIVEN.contains(target);
  // Function to check if the target is LIHETH or its child
  const isLihethOrChild = (target) => LIHETH.contains(target);

  if (
    isSiggurdOrChild(event.target) ||
    isRivenOrChild(event.target) ||
    isLihethOrChild(event.target)
  ) {
    if (isSiggurdOrChild(event.target)) {
      heroChoice = "PALADIN";
      playerName.textContent = paladin.name;
      setPaladinStats();
    } else if (isRivenOrChild(event.target)) {
      heroChoice = "ROGUE";
      playerName.textContent = rogue.name;
      setRogueStats();
    } else if (isLihethOrChild(event.target)) {
      heroChoice = "PRIESTESS";
      playerName.textContent = priestess.name;
      setPriestessStats();
    }

    if (heroChoice === "PALADIN") {
      playerImageCard.style.backgroundImage = "url(styles/images/paladin.jpg)";
    } else if (heroChoice === "ROGUE") {
      playerImageCard.style.backgroundImage = "url(styles/images/rogue.jpg)";
    } else if (heroChoice === "PRIESTESS") {
      playerImageCard.style.backgroundImage =
        "url(styles/images/priestess.jpg)";
    }

    totalStrength = baseStrength;
    totalDexterity = baseDexterity;
    totalFaith = baseFaith;

    setTimeout(() => {
      gameWindow.style.display = "flex";
      document.getElementById("heroChoiceModal").style.display = "none";
      startGameModal.style.display = "none";
      document.getElementById("gameWindow").style.display = "flex";
      renderCurrentRoom(catacombEntrance);
    }, 2000);
    newRoomAnimation();
    soundEffectHandler(whooshLowAir);

    setTimeout(function () {
      catacombEntranceModal.style.display = "block";
    }, 3000);

    updateTotalStats();
    // setControlsInterval("START");
    togglePlayerControls();
  }
});

// ===============================
//          Game Window
// ===============================

document.getElementById("gameWindow").style.display = "none";

function renderCurrentRoom(currentRoom) {
  roomNameElement.textContent = currentRoom.roomName;
  previousExperience = experiencePoints;

  // Calls function if one exists
  if (currentRoom.function) {
    currentRoom.function();
  }

  // Renders monsters if there are monsters in the room.
  if (
    currentRoom.contents.monsters.length > 0 &&
    currentRoom.contents.events === null
  ) {
    checkCurrentRoom(); // Used to add specific contents
    setTimeout(startBattle(currentRoom), 2000);
  } else {
    monsterContainer.style.display = "none";
  }

  // Search for items in each room.
  if (
    currentRoom !== catacombEntrance &&
    currentRoom.contents.monsters.length > 0
  ) {
    const lootGroup = currentRoom.contents.monsters[0].type;
    lootItems(lootGroup);
  }

  // Renders Event Modal
  if (currentRoom.contents.events) {
    if (currentRoom.contents.events === LOCKED_ROOM) {
      LOCKED_ROOM.description = `${currentRoom.description}`; // !FIX! doesn't need to be here
    }

    setTimeout(() => {
      renderEvent(currentRoom.contents.events);
    }, 3000);
  }

  turnOffControls();
  specialCooldownHandler();
  setRoomSummary();
  renderBackground(currentRoom.backgroundImage);
  playMusic(currentRoom.music);
  updatePlayerTrackers();
  checkForNewTier();
}

// const CONTROL_INTERVAL_DURATION = 500;
// let controlInterval = null;

// function setControlsInterval(command, pauseTime) {
//   // Clear existing interval if it exists
//   clearInterval(controlInterval);

//   switch (command) {
//     case "START":
//       if (controlInterval === null) {
//         controlInterval = setInterval(() => {
//           togglePlayerControls();
//         }, CONTROL_INTERVAL_DURATION);
//       }
//       break;

//     case "STOP":
//       controlInterval = null;
//       turnOffControls();
//       break;

//     default:
//       console.error("Invalid command:", command);
//       break;
//   }
// }

function togglePlayerControls() {
  setTimeout(() => {
    if (currentRoom.contents.monsters.length > 0) {
      attackBtn.disabled = false;
      guardBtn.disabled = false;
      fleeBtn.disabled = false;
      potionBtn.disabled = false;
    } else {
      attackBtn.disabled = true;
      guardBtn.disabled = true;
      fleeBtn.disabled = true;
    }

    // Checks for Guard Cooldown
    if (currentRoom.contents.monsters.length > 0 && guardReady === "YES") {
      guardBtn.disabled = false;
    } else {
      guardBtn.disabled = true;
    }

    // Checks for Special Ability Cooldown
    if (
      currentRoom.contents.monsters.length > 0 &&
      specialCooldownCounter === 0
    ) {
      specialBtn.disabled = false;
    } else {
      specialBtn.disabled = true;
    }

    // Checks for Event Modal
    if (eventModal.style.display === "block") {
      potionBtn.disabled = true;
      inventoryButton.disabled = true;
    } else {
      inventoryButton.disabled = false;
      potionBtn.disabled = false;
    }

    // Checks for Chilled Condition
    if (CHILLED.duration !== null) {
      guardBtn.disabled = true;
      fleeBtn.disabled = true;
    }

    // Checks for Cursed Condition
    if (CURSED.duration !== null) {
      specialBtn.disabled = true;
    }

    // Checks for Webbed Condition
    if (WEBBED.duration !== null) {
      attackBtn.disabled = true;
      guardBtn.disabled = true;
      specialBtn.disabled = true;
      fleeBtn.disabled = true;
      potionBtn.disabled = true;
    }

    // Close Action Buttons
    if (
      monsterContainer.style.display === "none" &&
      currentRoom.contents.monsters.length <= 0 &&
      currentPlayerHealth > 0
    ) {
      fadeOutAnimation(controlsContainer);
    } else {
      fadeInAnimation(controlsContainer);
      setTimeout(() => {
        controlsContainer.style.display = "flex";
      }, 1500);
    }

    // Gives access to inventory while trading
    if (
      currentRoom.roomName === "Hag's Hollow" ||
      currentRoom.roomName === "Curator's Curio"
    ) {
      potionBtn.disabled = false;
      inventoryButton.disabled = false;
    }

    if (potionCounter <= 0) {
      potionBtn.disabled = true;
    }

    // Baron of Bone Room
    if (
      currentRoom.roomName === "Presence of the Eternal" &&
      currentRoom.roomName === "Throne of the Eternal"
    ) {
      fleeBtn.disabled = true;
    }

    if (currentPlayerHealth <= 0) {
      attackBtn.disabled = true;
      guardBtn.disabled = true;
      fleeBtn.disabled = true;
      potionBtn.disabled = true;
      specialBtn.disabled = true;
    }

    addStrikeThrough(attackBtn);
    addStrikeThrough(guardBtn);
    if (specialCooldownCounter === 0) {
      addStrikeThrough(specialBtn);
    }
    addStrikeThrough(potionBtn);
    addStrikeThrough(fleeBtn);
  }, 500);

  function addStrikeThrough(button) {
    if (button.disabled === true) {
      button.classList.add("strikethrough-text");
    } else {
      button.classList.remove("strikethrough-text");
    }
  }
}

function turnOffControls() {
  if (currentRoom.roomName === "Candlelight Shrine") {
    inventoryButton.disabled = false;
    potionBtn.disabled = false;
  } else {
    attackBtn.disabled = true;
    guardBtn.disabled = true;
    specialBtn.disabled = true;
    fleeBtn.disabled = true;
    potionBtn.disabled = true;
  }
}

function updateRoomsCleared() {
  roomCounter++;
  roomsCleared.textContent = `Rooms Cleared: ${roomCounter}`;
}

function renderBackground(link) {
  const image = new Image();
  image.src = link;
  image.onload = () => {
    roomImage.style.backgroundImage = `url(${link})`;
  };
}

function updatePlayerTrackers() {
  function updateHealthTrackers() {
    const currentHP = document.getElementById("currentHP");
    const maxHP = document.getElementById("maxHP");
    const monsterCurrentHP = document.getElementById("monsterCurrentHP");
    const monsterMaxHP = document.getElementById("monsterMaxHP");

    maxHP.textContent = calculatePlayerMaxHealth();
    currentHP.textContent = currentPlayerHealth;

    monsterCurrentHP.textContent = currentMonsterHealth;
    monsterMaxHP.textContent = monsterMaxHealth;
  }

  function updateHeroLevel() {
    const heroLevel = document.getElementById("heroLevel");
    heroLevel.textContent = levelCounter;
  }

  const xpToNextLevel = document.getElementById("xpToNextLevel");

  function updateHeroExperience() {
    const currentXP = document.getElementById("currentXP");
    currentXP.textContent = experiencePoints;

    if (levelCounter === 1) {
      xpToNextLevel.textContent = 300;
    } else if (levelCounter === 2) {
      xpToNextLevel.textContent = 800;
    } else if (levelCounter === 3) {
      xpToNextLevel.textContent = 1600;
    } else if (levelCounter === 4) {
      xpToNextLevel.textContent = 2700;
    } else if (levelCounter === 5) {
      xpToNextLevel.textContent = 4100;
    } else if (levelCounter === 6) {
      xpToNextLevel.textContent = 5800;
    } else if (levelCounter === 7) {
      xpToNextLevel.textContent = 7800;
    } else if (levelCounter === 8) {
      xpToNextLevel.textContent = 9999;
    } else {
      xpToNextLevel.textContent = `Max Level`;
    }
  }

  function renderHeroStats() {
    const heroStrength = document.getElementById("heroStrength");
    const heroDexterity = document.getElementById("heroDexterity");
    const heroFaith = document.getElementById("heroFaith");

    heroStrength.textContent = totalStrength;
    heroDexterity.textContent = totalDexterity;
    heroFaith.textContent = totalFaith;
  }

  updateHealthTrackers();
  updateHeroLevel();
  updateHeroExperience();
  renderHeroStats();
}

function newRoomAnimation() {
  const fade = document.getElementById("fade");
  fade.style.animation = "none";
  void fade.offsetWidth;
  fade.style.animation = "room-transition 4s";
  console.log(`Room Animation: ${fade}`);
  clearNarrative();
}

// ===============================
//        Start Game Modal
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  playMusic(mazeHeist);
});

// ===============================
//      Room Summary Modal
// ===============================

const roomSummaryModal = document.getElementById("roomSummaryModal");
const roomSummaryButton = document.getElementById("roomSummaryBtn");

function closeRoomSummaryModal() {
  roomSummaryModalTracker = null;
  roomSummaryModal.style.display = "none";

  gloryforgedBladeCheck();
  forsakenCommanderCheck();
  countPotions();
}

function renderRoomSummaryModal() {
  const roomSummaryInfo = document.getElementById("roomSummaryInfo");
  // const roomSummaryInfo = document.querySelector(".room-summary-modal-content");

  if (
    currentRoom !== catacombEntrance &&
    currentRoom.contents.monsters.length === 0 &&
    roomSummaryModalTracker !== "ACTIVE" &&
    currentPlayerHealth > 0
  ) {
    console.log("Rendering Room Summary");
    roomSummaryModalTracker = "ACTIVE";
    // Builds summary modal with currentRoom's contents.
    setTimeout(function () {
      roomSummaryModal.style.display = "block";
      let roomInfo = roomSummaryInformation.contents;

      // Header Box
      let headerBox = document.createElement("div");
      roomSummaryInfo.appendChild(headerBox);

      // Main Header
      mainHeader = document.createElement("h2");
      mainHeader.textContent = `${roomSummaryInformation.roomName} Cleared`;
      headerBox.appendChild(mainHeader);

      // Divider
      let divider = document.createElement("div");
      divider.classList.add("character-divider");
      headerBox.appendChild(divider);

      // Description
      // descriptionSummaryContainer = document.createElement("div");
      // descriptionHeader = document.createElement("h4");
      // descriptionHeader.textContent = `${roomSummaryInformation.roomName}`;
      // descriptionSummaryContainer.appendChild(descriptionHeader);
      // descriptionText = document.createElement("p");
      // descriptionText.textContent = `${roomSummaryInformation.description}`;
      // descriptionSummaryContainer.appendChild(descriptionText);
      // roomSummaryInfo.appendChild(descriptionSummaryContainer);

      // Events
      if (roomInfo.events) {
        eventSummaryContainer = document.createElement("div");
        eventHeader = document.createElement("h4");
        eventHeader.textContent = `${roomInfo.events.name}`;
        eventSummaryContainer.appendChild(eventHeader);
        eventText = document.createElement("p");
        eventText.textContent = `${roomInfo.events.summary}`;
        eventSummaryContainer.appendChild(eventText);
        roomSummaryInfo.appendChild(eventSummaryContainer);
      }

      // Enemies
      if (roomInfo.monsters.length > 0) {
        monsterSummaryContainer = document.createElement("div");
        monstersHeader = document.createElement("h4");
        monstersHeader.textContent = `Enemies Defeated`;
        monsterSummaryContainer.appendChild(monstersHeader);
        monstersList = document.createElement("ul");
        monsterSummaryContainer.appendChild(monstersList);
        roomSummaryInfo.appendChild(monsterSummaryContainer);

        for (let i = 0; i < roomInfo.monsters.length; i++) {
          addMonsterToList = document.createElement("li");
          addMonsterToList.textContent = roomInfo.monsters[i].name;
          monstersList.appendChild(addMonsterToList);
        }
      }

      // Experience
      if (experiencePoints > previousExperience) {
        experienceSummaryContainer = document.createElement("div");
        let experienceGained = experiencePoints - previousExperience;
        experienceHeader = document.createElement("h4");
        experienceHeader.textContent = `Experience`;
        experienceSummaryContainer.appendChild(experienceHeader);
        gainedExperienceText = document.createElement("p");
        gainedExperienceText.textContent = `Gained: +${experienceGained}`;
        experienceSummaryContainer.appendChild(gainedExperienceText);
        experienceNeededText = document.createElement("p");
        experienceNeededText.textContent = `To Next Level: ${
          xpToNextLevel.textContent - experiencePoints
        }`;
        roomSummaryInfo.appendChild(experienceSummaryContainer);
      }

      // Items
      if (roomInfo.items.length > 0) {
        itemSummaryContainer = document.createElement("div");
        // itemSummaryContainer.classList.add("item-summary-container");
        itemsHeader = document.createElement("h4");
        itemsHeader.textContent = "Items Found";
        itemSummaryContainer.appendChild(itemsHeader);
        itemsList = document.createElement("ul");
        itemSummaryContainer.appendChild(itemsList);
        roomSummaryInfo.appendChild(itemSummaryContainer);

        for (let i = 0; i < roomInfo.items.length; i++) {
          addItemToList = document.createElement("li");
          addItemToList.textContent = roomInfo.items[i].name;
          itemsList.appendChild(addItemToList);
        }
      }
    }, 2000);

    document.querySelectorAll(".itemTooltip").forEach(function (element) {
      element.addEventListener("mouseover", function () {
        const tooltipText = this.querySelector(".tooltipText");
        tooltipText.style.visibility = "visible";
        tooltipText.style.opacity = "1";
      });

      element.addEventListener("mouseout", function () {
        const tooltipText = this.querySelector(".tooltipText");
        tooltipText.style.visibility = "hidden";
        tooltipText.style.opacity = "0";
      });
    });
  } else {
    roomSummaryModal.style.display = "none";
  }

  // Adds items in current room to inventory
  if (currentRoom.contents.items.length > 0) {
    for (let i = 0; i < currentRoom.contents.items.length; i++) {
      let currentItem = currentRoom.contents.items[i];
      addItemToInventory(currentItem);
    }

    // Clear the items array in the current room
    currentRoom.contents.items = [];
  }

  updatePlayerTrackers();
  soundEffectHandler(hitReverbDark4);
  fadeOutAnimation(controlsContainer);
}

function setRoomSummary() {
  roomSummaryInformation = null;
  roomSummaryInformation = JSON.parse(JSON.stringify(currentRoom));
}

function clearRoomSummaryModal() {
  roomSummaryInfo.textContent = "";
}

// ===============================
//      Continue Button Modal
// ===============================

function closeContinueButton() {
  continueButtonModal.style.display = "none";
}

function renderContinueButton() {
  continueButton.textContent = "Continue...";

  if (
    currentRoom.contents.monsters.length === 0 &&
    currentRoom.contents.events === null
  ) {
    fadeInAnimation(continueButtonModal);
  } else {
    continueButtonModal.style.display = "none";
  }

  if (currentRoom === catacombEntrance) {
    continueButton.textContent = "Enter";
  }
}

// ===============================
//       Event Listeners
// ===============================

attackBtn.addEventListener("click", () => {
  guardReady = "YES";
  actionCounter++;

  playerAttackHandler();
  specialCooldownHandler();

  if (!(currentMonsterHealth <= 0)) {
    setTimeout(monsterAttackHandler, 1200);
    updatePlayerTrackers();
  }

  // setControlsInterval("STOP");
  turnOffControls();
});

guardBtn.addEventListener("click", () => {
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver

  specialCooldownHandler();
  // setControlsInterval("STOP");
  turnOffControls();

  guardHandler();
  updatePlayerTrackers();
});

specialBtn.addEventListener("click", () => {
  guardReady = "YES";
  actionCounter++;

  if (heroChoice === "PALADIN") {
    paladinHolySmite();
  } else if (heroChoice === "ROGUE") {
    rogueUmbralAssault();
  } else if (heroChoice === "PRIESTESS") {
    attackCounter = 0; // Item: Soulreaver
    priestessCleansingFlame();
  }

  if (currentMonsterHealth <= 0) {
  } else if (currentMonsterHealth > 0 && heroChoice !== "ROGUE") {
    setTimeout(monsterAttackHandler, 1200);
  }

  soundEffectHandler(heroChecker(), "PLAYER ABILITY");
  updatePlayerTrackers();
  specialCooldownHandler();
  // setControlsInterval("STOP");
  turnOffControls();
});

potionBtn.addEventListener("click", () => {
  guardReady = "YES";
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver

  potionHandler();

  if (currentRoom.contents.monsters.length > 0) {
    specialCooldownHandler();
    // setControlsInterval("STOP");
    turnOffControls();
    setTimeout(monsterAttackHandler, 1200);
  }

  updatePlayerTrackers();
});

fleeBtn.addEventListener("click", () => {
  guardReady = "YES";
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver

  fleeHandler();
  specialCooldownHandler();
  updatePlayerTrackers();
});

catacombEntranceBtn.addEventListener("click", () => {
  catacombEntranceModal.style.display = "none";
  renderLevelUpModal();
  setTimeout(() => {
    renderContinueButton();
  }, 2000);
});

roomSummaryButton.addEventListener("click", () => {
  closeRoomSummaryModal();
  renderContinueButton();
  clearRoomSummaryModal();
  updateRoomsCleared();
  // setControlsInterval("START");
  togglePlayerControls();

  // ITEM: Trollblood Tonic - 20HP after each cleared room.
  if (TROLLBLOOD_TONIC.duration !== null) {
    healPlayer(20);
  }
  // ITEM: Charm of Healing - Recover 10HP after each cleared room.
  isItemAttuned(CHARM_OF_HEALING, null);
  // ITEM: Cursed Grimoire - NPC ITEM / hurts you after each cleared room.
  isItemAttuned(DEMONIC_GRIMOIRE, null);
  // ITEM: Soothing Candle - Recover 10HP after each cleared room.
  statusEffectHandler(SOOTHING_CANDLE);

  updatePlayerTrackers();
  checkForLevelUp();
});

continueButton.addEventListener("click", () => {
  guardReady = "YES";
  attackCounter = 0; // Item: Soulreaver

  // ITEM: Aegis of the Fallen - Reset if still active
  if (AEGIS_STATUS_EFFECT.duration !== null) {
    AEGIS_STATUS_EFFECT.duration = null;
    AEGIS_STATUS_EFFECT.statusDuration = null;
    // clearInterval(aegisInterval);
  }

  if (currentRoom.roomName === "Throne of the Eternal") {
    currentRoom.contents.events = THE_FINAL_BATTLE;
    renderEvent(THE_FINAL_BATTLE);
    closeContinueButton();
  } else {
    setTimeout(() => {
      removeCurrentRoom();

      // Wisp Logic
      if (GUIDING_LIGHT.tracker === "ARRIVE") {
        currentRoom = CANDLELIGHT_SHRINE;
        renderCurrentRoom(CANDLELIGHT_SHRINE);
        GUIDING_LIGHT.tracker = null;
      } else if (ROWDY_WISP.tracker === "ARRIVE") {
        currentRoom = LAUGHING_COFFIN_ROOM;
        renderCurrentRoom(LAUGHING_COFFIN_ROOM);
        ROWDY_WISP.tracker = null;
      } else if (BLEEDING_WISP.tracker === "ARRIVE") {
        currentRoom = BLOOD_ALTER;
        renderCurrentRoom(BLOOD_ALTER);
        BLEEDING_WISP.tracker = null;
      } else if (RESTLESS_WISP.tracker === "ARRIVE") {
        currentRoom = FALLEN_WARRIORS_VALE;
        renderCurrentRoom(FALLEN_WARRIORS_VALE);
        RESTLESS_WISP.tracker = null;
      } else if (CURIOUS_WISP.tracker === "ARRIVE") {
        currentRoom = CURATORS_CURIO;
        renderCurrentRoom(CURATORS_CURIO);
        CURIOUS_WISP.tracker = null;
      } else if (WICKED_WISP.tracker === "ARRIVE") {
        currentRoom = HAGS_HOLLOW;
        renderCurrentRoom(HAGS_HOLLOW);
        WICKED_WISP.tracker = null;
      } else {
        getRandomRoom(catacombRooms);
        renderCurrentRoom(currentRoom);
      }
    }, 1500);

    newRoomAnimation();
    closeContinueButton();
    updatePlayerTrackers();
  }

  // setControlsInterval("STOP");
  turnOffControls();
  soundEffectHandler(whooshLowAir);
});

startBtn.addEventListener("click", () => {
  const startModalTitle = document.getElementById("startModalTitle");

  setTimeout(() => {
    // startGameModal.style.display = "none";
    startModalTitle.style.display = "none";
    startBtn.style.display = "none";
    heroChoiceModal.style.display = "block";
  }, 2000);

  // fadeIn(heroChoiceModal);
  newRoomAnimation();
  soundEffectHandler(whooshLowAir);
});

restartGameBtn.addEventListener("click", () => {
  location.reload();
});

// volumeUpButton.addEventListener("click", () => adjustVolume(music, 0.05));
// volumeDownButton.addEven;

// settingsButton.addEventListener("click", () => {
//   // openSettingsHandler();
//   settingsModal.style.display = "block";
// });
