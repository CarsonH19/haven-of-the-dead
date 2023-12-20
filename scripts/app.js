// ===============================
//            Attack
// ===============================

function playerAttackHandler(smite) {
  criticalHit = checkForCritcalHit();
  let playerToMonsterDamage = dealMonsterDamage(baseAttack);
  let totalDamage;

  // ITEM: Revenant's Rage - Increases attack when low health
  playerToMonsterDamage += isItemAttuned(REVENANTS_RAGE, 0);
  // ITEM: +3 attack against evil spirits.
  playerToMonsterDamage += isItemAttuned(WRAITHBANE, 0);
  // ITEM: +3 attack against beasts and humans.
  playerToMonsterDamage += isItemAttuned(RITUAL_BLADE, 0);
  // ITEM: Crimson Offering - -5HP & +10 damage
  playerToMonsterDamage += isItemAttuned(CRIMSON_OFFERING, 0);
  // ITEM: Soulreaver - damage++ for each consecutive attack
  playerToMonsterDamage += isItemAttuned(SOULREAVER, 0);
  // ITEM: Blazing Candle - all attacks are critical hits
  criticalHit += statusEffectHandler(BLAZING_CANDLE);

  // Smite Critical Hit
  if (criticalHit >= 20 && smite > 1 && playerToMonsterDamage > 0) {
    totalDamage = Math.round(
      smite * (playerToMonsterDamage * calculateCritDamageModifier())
    );
    showDamage(totalDamage, "PLAYER", "CRIT");
    soundEffectHandler(heroChecker(), "PLAYER ABILITY");
    writeToLogHero(LOG_SMITE_CRITICAL, "YES", totalDamage);
    // Smite Hit
  } else if (smite > 1) {
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
    writeToLogActions(LOG_PLAYER_CRITICAL, "YES", totalDamage);
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

  damageMonster(totalDamage);
  updatePlayerTrackers();
}

function checkForCritcalHit() {
  return Math.round(Math.random() * 20) + calculateCritHitChance();
}

function calculateTotalCritDamage() {
  return Math.round(baseAttack * calculateCritDamageModifier());
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
}

function dealMonsterDamage(damage) {
  let damageDealt = Math.round(Math.random() * damage);

  // Checks for Echoes of Victory - +25% damage
  if (ECHOES_OF_VICTORY.duration !== null) {
    damageDealt = Math.round(damageDealt * 1.25);
  }

  // Priestess Burning Devotion logic
  if (heroChoice === "PRIESTESS" && damageDealt < burningDevotionTracker) {
    damageDealt = burningDevotionTracker;
    writeToLogHero(LOG_BURNING_DEVOTION, "NO", damageDealt);
  }

  //Checks for Rank 4 Holy Smite - maximum damage
  if (heroChoice === "PALADIN" && specialAbilityBoonRank === 4) {
    damageDealt = baseAttack;
  }

  return damageDealt;
}

function monsterAttackHandler(bonus) {
  const monster = currentRoom.contents.monsters[0];
  let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);

  if (bonus) {
    monsterToPlayerDamage *= bonus;
  }

  // ITEM: Bonechill Amulet - reduces Draugr attacks
  monsterToPlayerDamage *= isItemAttuned(BONECHILL_AMULET, 1);

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
    console.log(`Damage Reflected: ${damageReflected}`);
  }

  if (monsterToPlayerDamage > 0) {
    soundEffectHandler(monster, "MONSTER ATTACK");
    monsterAbilityHandler(currentRoom.contents.monsters[0]);
    writeToLogMonster(LOG_MONSTER_ATTACK, "NO", monsterToPlayerDamage);
  } else if (monsterToPlayerDamage <= 0) {
    soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
    writeToLogMonster(LOG_MONSTER_MISS, "NO");
  }

  damagePlayer(monsterToPlayerDamage);
  updatePlayerTrackers();
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.round(Math.random() * damage);
  return dealtDamage;
}

function damagePlayer(damage) {
  if (currentPlayerHealth <= 30) {
    // ITEM - ACTIVIATE: Aegis of the Fallen - Immunity to all damage.
    isItemAttuned(AEGIS_OF_THE_FALLEN, null);
  }

  if (AEGIS_STATUS_EFFECT.duration !== null) {
    damage = 0;
  }

  if (currentPlayerHealth - damage <= 0) {
    playerHealthBar.value = 0;
    currentPlayerHealth = 0;
  } else {
    playerHealthBar.value = +playerHealthBar.value - damage;
    currentPlayerHealth -= damage;
  }

  // Check for Burned Condition
  if (BURNED.duration !== null) {
    damage = Math.round(damage * 1.25);
  }

  if (damage > 0) {
    damageFlashAnimation("PLAYER");
  }

  // Rogue Passive Ability
  rogueDarkenedReprisal();

  showDamage(damage, "MONSTER");
  healthLowAnimation();
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
      specialCooldownCounter = 7;
    } else if (heroChoice === "ROGUE") {
      specialCooldownCounter = 7;
    } else if (heroChoice === "PRIESTESS") {
      specialCooldownCounter = 16;
    }

    // ITEM: HALLOWED HOURGLASS - Reduces Cooldown by 1
    isItemAttuned(HALLOWED_HOURGLASS, null);
  }

  if (specialCooldownCounter > 0 && !reset) {
    specialCooldownCounter--;
    specialBtn.disabled = true;
    special.textContent = `Cooldown: ${specialCooldownCounter}`;
  }

  if (specialCooldownCounter === 0) {
    specialBtn.disabled = false;
    if (heroChoice === "PALADIN") {
      special.textContent = `Holy Smite`;
    } else if (heroChoice === "ROGUE") {
      special.textContent = `Umbral Assault`;
    } else if (heroChoice === "PRIESTESS")
      special.textContent = `Cleansing Flame`;
  }

  // ITEM COOLDOWNS
  if (AEGIS_OF_THE_FALLEN.cooldown !== 0) {
    AEGIS_OF_THE_FALLEN.cooldown--;
  }
}

// ===============================
//            Guard
// ===============================

function guardHandler() {
  let damageToGuard = dealPlayerDamage(monsterAttackValue);
  let damageBlocked = Math.round(Math.random() * damageToGuard);
  damageBlocked += totalDexterity;
  let damageTaken = damageToGuard - damageBlocked;

  if (damageBlocked <= damageToGuard) {
    soundEffectHandler(heroChecker(), "PLAYER GUARD");
    writeToLogActions(LOG_GUARD, "NO", damageBlocked);
  }

  if (damageTaken > 0) {
    damagePlayer(damageTaken);
    monsterAbilityHandler(currentRoom.contents.monsters[0]);
    soundEffectHandler(heroChecker(), "MONSTER ATTACK");
    writeToLogMonster(LOG_MONSTER_ATTACK, "NO", damageTaken);
  } else {
    damagePlayer(0);
    soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
    writeToLogMonster(LOG_MONSTER_MISS, "NO");
  }

  // console.log(`Damage Received: ${damageToGuard}`);
  // console.log(`Damage Blocked: ${damageBlocked}`);
  // console.log(`Current Player Health ${currentPlayerHealth}`);
  // console.log(`Current Player Health Bar Value ${playerHealthBar.value}`);

  updatePlayerTrackers();
}

// ===============================
//            Potion
// ===============================

function potionHandler() {
  let numberOfPotions = 0;

  for (let i = 0; i < inventoryItems.length; i++) {
    if (inventoryItems[i] === POTION) {
      numberOfPotions++;
    }
  }

  potionCounter = numberOfPotions;

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
  let fleeAttempt = Math.round(Math.random() * 10) + totalFaith;

  // ITEM: Ring of Skittering - Increased flee chance
  fleeAttempt += isItemAttuned(RING_OF_SKITTERING, 0);
  // ITEM: FLickering Candle - 100% flee chance
  fleeAttempt += statusEffectHandler(FLICKERING_CANDLE);

  // Flee bonus when fighting the Flood of Bones
  if (currentRoom.contents.monsters[0].name === "Flood of Bones") {
    fleeAttempt += 3;
  }

  if (fleeAttempt >= 10) {
    let roomToFlee = currentRoom;
    let newRoom = getRandomRoom(catacombRooms);

    if (roomToFlee !== newRoom) {
      setTimeout(() => {
        fadeOutAnimation(monsterContainer);
        fadeOutAnimation(monsterImage);
        newRoomAnimation();
        setTimeout(() => {
          monsterContainer.style.display = "none";
          monsterImage.style.display = "none";
          // getRandomRoom(catacombRooms);
          renderCurrentRoom(currentRoom);
        }, 1500);
      }, 2000);

      writeToLogActions(LOG_FLEE, "YES", currentRoom.name);
    } else {
      fleeHandler();
    }
  } else {
    setTimeout(monsterAttackHandler, 1200);
    isGameOver();
  }
}

// ===============================
//          Is Game Over?
// ===============================

function isGameOver() {
  const monster = currentRoom.contents.monsters[0];

  if (currentPlayerHealth <= 0) {
    // ITEM: Soul Jar - resurrect with half HP
    isItemAttuned(SOUL_JAR);
    setTimeout(() => {
      if (currentPlayerHealth <= 0) {
        currentMusic.pause();
        heartbeatFastLow.pause();
        renderGameOverModal();
      }
    }, 1000);

    function renderGameOverModal() {
      const gameOverModal = document.getElementById("gameOverModal");
      gameOverModal.style.display = "block";
    }
  }

  if (currentRoom.contents.monsters.length > 0 && currentMonsterHealth <= 0) {
    playerControlsTimeout(3000);

    // ITEM: Bloodstone - Recovers health when monster dies
    isItemAttuned(BLOODSTONE, null);

    soundEffectHandler(monster, "MONSTER DEATH");

    gainExperience(currentRoom.contents.monsters[0].skulls);
    fadeOutAnimation(monsterContainer);
    fadeOutAnimation(monsterImage);

    setTimeout(() => {
      checkForMonsters();
      monsterContainer.style.display = "none";
      monsterImage.style.display = "none";
    }, 2000);
  }
}

// ===============================
//       Choose Hero Modal
// ===============================

heroChoiceModal.style.display = "block";
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
    document.getElementById("heroChoiceModal").style.display = "none";

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

    totalStrength = baseStrength;
    totalDexterity = baseDexterity;
    totalFaith = baseFaith;

    document.getElementById("gameWindow").style.display = "flex";
    renderCurrentRoom(catacombEntrance);
    setTimeout(function () {
      catacombEntranceModal.style.display = "block";
    }, 3000);

    updateTotalStats();
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
      LOCKED_ROOM.description = `${currentRoom.description} Do you wish to unlock it?`;
    }

    setTimeout(() => {
      renderEvent(currentRoom.contents.events);
      switch (currentRoom.contents.events.eventType) {
        case "TRAP":
          writeToLogEvent(LOG_TRAP_DESCRIPTION, "YES");
          break;
        case "NPC":
          writeToLogEvent(LOG_NPC_DESCRIPTION, "YES");
          break;
        case "MISC":
          writeToLogEvent(LOG_MISC_DESCRIPTION, "YES");
          break;
      }
    }, 3000);
  }

  specialCooldownHandler();
  togglePlayerControls();
  setRoomSummary();
  renderBackground(currentRoom.backgroundImage);
  playMusic(currentRoom.music);
  updatePlayerTrackers();
  checkForNewTier();
}

function togglePlayerControls() {
  if (currentRoom.contents.monsters.length > 0) {
    attackBtn.disabled = false;
    guardBtn.disabled = false;
    specialBtn.disabled = false;
    fleeBtn.disabled = false;
    potionBtn.disabled = false;
  } else {
    attackBtn.disabled = true;
    guardBtn.disabled = true;
    specialBtn.disabled = true;
    fleeBtn.disabled = true;
  }

  if (
    currentRoom.contents.monsters.length > 0 &&
    specialCooldownCounter === 0
  ) {
    specialBtn.disabled = false;
  } else {
    specialBtn.disabled = true;
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

  if (eventModal.style.display === "block") {
    inventoryButton.disabled = true;
    potionBtn.disabled = true;
  } else {
    inventoryButton.disabled = false;
    potionBtn.disabled = false;
  }

  if (potionCounter <= 0) {
    potionBtn.disabled = true;
  }
}

function playerControlsTimeout(timeout) {
  attackBtn.disabled = true;
  guardBtn.disabled = true;
  specialBtn.disabled = true;
  fleeBtn.disabled = true;
  inventoryButton.disabled = true;
  potionBtn.disabled = true;

  setTimeout(() => {
    togglePlayerControls();
  }, timeout);
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
    // const xpToNextLevel = document.getElementById("xpToNextLevel");

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
  fade.style.animation = "fade-in 2s";
  setTimeout(() => {
    fade.style.animation = "fade-out 2s";
  }, 2000);
}

function damageFlashAnimation(target) {
  switch (target) {
    case "PLAYER":
      roomImage.classList.add("flash");

      setTimeout(() => {
        roomImage.classList.remove("flash");
      }, 1000);
      break;

    case "MONSTER":
      monsterImage.classList.add("monster-flash-damage");

      setTimeout(() => {
        monsterImage.classList.remove("monster-flash-damage");
      }, 1000);
      break;
  }
}

// ===============================
//        Start Game Modal
// ===============================

document.getElementById("startGameModal").style.display = "none";

// ===============================
//      Room Summary Modal
// ===============================

const roomSummaryModal = document.getElementById("roomSummaryModal");
const roomSummaryButton = document.getElementById("roomSummaryBtn");

function closeRoomSummaryModal() {
  roomSummaryModal.style.display = "none";

  // Adds Attack Power to Gloryforged Blade
  if ((currentRoom.roomName === "Fallen Warriors' Vale")) {
    gloryforgedTracker += 4;
    GLORYFORGED_BLADE.effect = `When attuned to this item, your attack is increased by ${gloryforgedTracker}. This blade becomes more powerful with each instance of glory found in Fallen Warriors' Vale.`,

    writeToLogItem(LOG_ITEM, "YES", GLORYFORGED_BLADE);
  }

  // Checks if Forsaken Commander's Quest is Complete
  if (legionTracker >= 30) {
    inventoryItems.push(AEGIS_OF_THE_FALLEN);
    if (inventoryItems.includes(WAR_TORN_BANNER)) {
      useConsumable("War Torn Banner");
    } else if (attunedItems.includes(WAR_TORN_BANNER)) {
      const index = attunedItems.indexOf(WAR_TORN_BANNER);
      inventoryItems.splice(index, 1);
    }
    writeToLogOther(LOG_OTHER, "YES", AEGIS_OF_THE_FALLEN);
  }
}

function renderRoomSummaryModal() {
  const roomSummaryInfo = document.getElementById("roomSummaryInfo");
  // const roomSummaryInfo = document.querySelector(".room-summary-modal-content");

  if (
    currentRoom !== catacombEntrance &&
    currentRoom.contents.monsters.length === 0
  ) {
    // Builds summary modal with currentRoom's contents.
    setTimeout(function () {
      roomSummaryModal.style.display = "block";
      let roomInfo = roomSummaryInformation.contents;

      // Main Header
      mainHeader = document.createElement("h2");
      mainHeader.textContent = "Room Cleared";
      roomSummaryInfo.appendChild(mainHeader);

      // Description
      descriptionSummaryContainer = document.createElement("div");
      descriptionHeader = document.createElement("h4");
      descriptionHeader.textContent = `${roomSummaryInformation.roomName}`;
      descriptionSummaryContainer.appendChild(descriptionHeader);
      descriptionText = document.createElement("p");
      descriptionText.textContent = `${roomSummaryInformation.description}`;
      descriptionSummaryContainer.appendChild(descriptionText);
      roomSummaryInfo.appendChild(descriptionSummaryContainer);

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

      // Monsters
      if (roomInfo.monsters.length > 0) {
        monsterSummaryContainer = document.createElement("div");
        monstersHeader = document.createElement("h4");
        monstersHeader.textContent = `Monsters Defeated`;
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
      addItemToInventory(currentRoom.contents.items[i]);
    }
  }

  updatePlayerTrackers();
}

function setRoomSummary() {
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
    currentRoom !== catacombEntrance &&
    currentRoom.contents.monsters.length === 0 &&
    currentRoom.contents.events === null
  ) {
    fadeInAnimation(continueButtonModal);
    continueButtonModal.style.display = "block";
  } else {
    continueButtonModal.style.display = "none";
  }
}

// ===============================
//       Event Listeners
// ===============================

attackBtn.addEventListener("click", function () {
  actionCounter++;

  playerAttackHandler();
  specialCooldownHandler();

  if (currentMonsterHealth <= 0) {
    isGameOver();
  } else {
    playerControlsTimeout(1500);
    setTimeout(monsterAttackHandler, 1200);
    setTimeout(isGameOver, 1300);
    updatePlayerTrackers();
  }
});

guardBtn.addEventListener("click", () => {
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver

  specialCooldownHandler();
  playerControlsTimeout(1500);
  guardHandler();
  setTimeout(isGameOver, 500);
  updatePlayerTrackers();
});

specialBtn.addEventListener("click", () => {
  actionCounter++;

  if (heroChoice === "PALADIN") {
    paladinHolySmite();
  } else if (heroChoice === "ROGUE") {
    rogueUmbralAssault();
    writeToLogHero(LOG_UMBRAL_ASSAULT, "YES");
  } else if (heroChoice === "PRIESTESS") {
    attackCounter = 0; // Item: Soulreaver
    priestessCleansingFlame();
  }

  if (currentMonsterHealth <= 0) {
    isGameOver();
  } else if (currentMonsterHealth > 0 && heroChoice !== "ROGUE") {
    setTimeout(monsterAttackHandler, 1200);
  }

  playerControlsTimeout(1500);
  soundEffectHandler(heroChecker(), "PLAYER ABILITY");
  updatePlayerTrackers();
  specialCooldownHandler();
});

potionBtn.addEventListener("click", () => {
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver

  potionHandler();

  if (currentRoom.contents.monsters.length > 0) {
    specialCooldownHandler();
    playerControlsTimeout(1500);
    setTimeout(monsterAttackHandler, 1200);
    isGameOver();
  }

  updatePlayerTrackers();
});

fleeBtn.addEventListener("click", () => {
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver

  fleeHandler();
  specialCooldownHandler();
  playerControlsTimeout(1500);
  updatePlayerTrackers();
});

catacombEntranceBtn.addEventListener("click", () => {
  catacombEntranceModal.style.display = "none";
  renderLevelUpModal();
  continueButtonModal.style.display = "block";
  continueButton.textContent = "Enter the Catacombs";
});

roomSummaryButton.addEventListener("click", () => {
  closeRoomSummaryModal();
  renderContinueButton();
  clearRoomSummaryModal();
  togglePlayerControls();
  updateRoomsCleared();
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
  attackCounter = 0; // Item: Soulreaver

  // ITEM: Aegis of the Fallen - Reset if still active
  if (AEGIS_STATUS_EFFECT.duration !== null) {
    AEGIS_STATUS_EFFECT.duration = null;
    AEGIS_STATUS_EFFECT.statusDuration = null;
    clearInterval(aegisInterval);
  }

  newRoomAnimation();
  closeContinueButton();
  updatePlayerTrackers();

  setTimeout(() => {
    // ITEM: Wisps
    if (guidingLightTracker === "ARRIVE") {
      currentRoom = CANDLELIGHT_SHRINE;
      renderCurrentRoom(CANDLELIGHT_SHRINE);
      guidingLightTracker = null;
    } else if (rowdyWispTracker === "ARRIVE") {
      currentRoom = LAUGHING_COFFIN_ROOM;
      renderCurrentRoom(LAUGHING_COFFIN_ROOM);
      rowdyWispTracker = null;
    } else if (unholyWispTracker === "ARRIVE") {
      currentRoom = BLOOD_ALTER;
      renderCurrentRoom(BLOOD_ALTER);
      unholyWispTracker = null;
    } else if (restlessWispTracker === "ARRIVE") {
      currentRoom = FALLEN_WARRIORS_VALE;
      renderCurrentRoom(FALLEN_WARRIORS_VALE);
      restlessWispTracker = null;
    } else {
      removeCurrentRoom();
      getRandomRoom(catacombRooms);
      renderCurrentRoom(currentRoom);
    }
  }, 1500);

  soundEffectHandler(whooshLowAir);
});

settingsButton.addEventListener("click", () => {
  // openSettingsHandler();
  settingsModal.style.display = "block";
});

restartGameBtn.addEventListener("click", () => {
  location.reload();
});

volumeUpButton.addEventListener("click", () => adjustVolume(music, 0.05));
volumeDownButton.addEven;
