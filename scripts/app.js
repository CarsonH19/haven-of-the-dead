// ===============================
//            Attack
// ===============================

function playerAttackHandler(smite) {
  // Paladin Passive Ability Checker
  if (heroChoice === "PALADIN") {
    paladinRadiantAura();
  }

  criticalHitChance = calculateCritHitChance();
  let playerToMonsterDamage = dealMonsterDamage(baseAttack);
  let totalDamage;

  // ITEM: Revenant's Rage - Increases attack when low health
  playerToMonsterDamage += isItemAttuned(REVENANTS_RAGE, 0);
  // ITEM: Increases attack against evil spirits.
  playerToMonsterDamage += isItemAttuned(WRAITHBANE, 0);
  // ITEM: Crimson Offering - -5HP & +10 damage
  playerToMonsterDamage += isItemAttuned(CRIMSON_OFFERING, 0);
  // ITEM: Soulreaver - damage++ for each consecutive attack
  playerToMonsterDamage += isItemAttuned(SOULREAVER, 0);
  // ITEM: Blazing Candle - all attacks are critical hits
  criticalHitChance += statusEffectHandler(BLAZING_CANDLE);

  // Smite Critical Hit
  if (criticalHitChance >= 20 && smite > 1) {
    totalDamage = Math.round(
      smite * (playerToMonsterDamage * baseCritModifier)
    );
    showDamage(totalDamage, "PLAYER", "CRIT");
    soundEffectHandler(heroChecker(), "PLAYER ABILITY");
    writeToLogHero(LOG_SMITE_CRITICAL, "YES", totalDamage);
    // Smite Hit
  } else if (smite > 1) {
    totalDamage = playerToMonsterDamage * smite;
    showDamage(totalDamage, "PLAYER");
    soundEffectHandler(heroChecker(), "PLAYER ABILITY");
    writeToLogHero(LOG_SMITE, "YES", totalDamage);
    // Critical Hit
  } else if (criticalHitChance >= 20) {
    totalDamage = Math.round(playerToMonsterDamage * baseCritModifier);
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

function damageMonster(damage) {
  if (currentMonsterHealth - damage <= 0) {
    monsterHealthBar.value = 0;
    currentMonsterHealth = 0;
  } else {
    monsterHealthBar.value = +monsterHealthBar.value - damage;
    currentMonsterHealth -= damage;
  }
}

function dealMonsterDamage(damage) {
  let damageDealt = Math.round(Math.random() * damage);

  if (heroChoice === "PRIESTESS" && damageDealt < burningDevotionTracker) {
    damageDealt = burningDevotionTracker;
    writeToLogHero(LOG_BURNING_DEVOTION, "NO", damageDealt);
  }

  return damageDealt;
}

function calculateCritHitChance() {
  let number = Math.round(Math.random() * 20) + baseDexterity;

  return number;
}

function monsterAttackHandler() {
  const monster = currentRoom.contents.monsters[0];
  let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);

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
    console.log(`Damage Reflected: ${damageReflected}`);
  }

  // Rogue Passive Ability Checker
  if (heroChoice === "ROGUE" && evasionTracker >= monsterToPlayerDamage) {
    monsterToPlayerDamage = 0;
    soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
    writeToLogHero(LOG_EVASION, "NO");
  }

  if (monsterToPlayerDamage > 0) {
    damageFlashAnimation();
    soundEffectHandler(monster, "MONSTER ATTACK");
    writeToLogMonster(LOG_MONSTER_ATTACK, "NO", monsterToPlayerDamage);
  } else if (monsterToPlayerDamage <= 0) {
    soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
    writeToLogMonster(LOG_MONSTER_MISS, "NO");
  }

  damagePlayer(monsterToPlayerDamage);
  monsterAbilityHandler(currentRoom.contents.monsters[0]);
  updatePlayerTrackers();
  healthLowAnimation();
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

  if (damage > 0) {
    damageFlashAnimation();
  }

  showDamage(damage, "MONSTER");
  damageFlashAnimation();
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
      specialCooldownCounter = shadowStrikeTracker;
    } else if (heroChoice === "PRIESTESS") {
      specialCooldownCounter = 13;
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
      special.textContent = `Shadow Strike`;
    } else if (heroChoice === "PRIESTESS")
      special.textContent = `Greater Prayer`;
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
  let monsterToGuardDamage = dealPlayerDamage(monsterAttackValue);
  let damageBlocked = Math.round(Math.random() * monsterToGuardDamage);
  damageBlocked += baseDexterity * 2;
  let damageTaken = monsterToGuardDamage - damageBlocked;

  if (damageBlocked <= monsterToGuardDamage) {
    soundEffectHandler(heroChecker(), "PLAYER GUARD");
    writeToLogActions(LOG_GUARD, "NO", damageBlocked);
  }

  if (damageTaken > 0) {
    damagePlayer(damageTaken);
    soundEffectHandler(heroChecker(), "MONSTER ATTACK");
    writeToLogMonster(LOG_MONSTER_ATTACK, "NO", damageTaken);
  } else {
    damagePlayer(0);
    soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
    writeToLogMonster(LOG_MONSTER_MISS, "NO");
  }

  // console.log(`Damage Received: ${monsterToGuardDamage}`);
  // console.log(`Damage Blocked: ${damageBlocked}`);
  // console.log(`Current Player Health ${currentPlayerHealth}`);
  // console.log(`Current Player Health Bar Value ${playerHealthBar.value}`);

  updatePlayerTrackers();
}

function calculateMonsterDamage() {
  let damage = dealPlayerDamage(monsterAttackValue);
  if (baseDexterity >= damage) {
    return 0;
  } else {
    return damage - baseDexterity;
  }
}

// ===============================
//            Potion
// ===============================

function potionHandler() {
  const potions = document.getElementById("potionCount");

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
  let fleeChance = Math.round(Math.random() * 10) + baseFaith;

  // ITEM: Ring of the Rodent - Increased flee chance
  fleeChance += isItemAttuned(RING_OF_THE_RODENT, 0);
  // ITEM: FLickering Candle - 100% flee chance
  fleeChance += statusEffectHandler(FLICKERING_CANDLE);

  if (fleeChance >= 10) {
    console.log("Flee Successful");
    writeToLogActions(LOG_FLEE, "YES", currentRoom.name);
    getRandomRoom(catacombRooms);
    renderCurrentRoom(currentRoom);
  }
}

// ===============================
//          Is Game Over?
// ===============================

function isGameOver() {
  const monster = currentRoom.contents.monsters[0];

  if (currentPlayerHealth <= 0) {
    // ITEM: Soul Jar - resurrect with half HP
    isItemAttuned(SOUL_JAR, null);
    setTimeout(() => {
      if (currentPlayerHealth <= 0) {
        alert("You died!");
      }
    }, 1000);
  }

  if (currentRoom.contents.monsters.length > 0 && currentMonsterHealth <= 0) {
    playerControlsTimeout(3000);

    // ITEM: Bloodstone - Recovers health when monster dies
    isItemAttuned(BLOODSTONE, null);

    soundEffectHandler(monster, "MONSTER DEATH");

    gainExperience(currentRoom.contents.monsters[0].skulls);
    fadeOutAnimation(monsterContainer, 0000);
    setTimeout(() => {
      checkForMonsters();
      monsterContainer.style.display = "none";
    }, 2000);
  }
}

// ===============================
//       Choose Hero Modal
// ===============================

heroChoiceModal.style.display = "block";

heroChoiceModal.addEventListener("click", function (event) {
  const siggurd = document.getElementById("siggurd");
  const riven = document.getElementById("riven");
  const liheth = document.getElementById("liheth");
  const playerName = document.getElementById("playerName");

  specialCooldownCounter = 0;

  if (
    event.target === siggurd ||
    event.target === riven ||
    event.target === liheth
  ) {
    document.getElementById("heroChoiceModal").style.display = "none";

    if (event.target === siggurd) {
      heroChoice = "PALADIN";
      playerName.textContent = paladin.name;
      setPaladinStats();
    } else if (event.target === riven) {
      heroChoice = "ROGUE";
      playerName.textContent = rogue.name;
      setRogueStats();
    } else if (event.target === liheth) {
      heroChoice = "PRIESTESS";
      playerName.textContent = priestess.name;
      setPriestessStats();
    }

    document.getElementById("gameWindow").style.display = "flex";
    renderCurrentRoom(catacombEntrance);
    setTimeout(function () {
      catacombEntranceModal.style.display = "block";
    }, 3000);
  }
});

// ===============================
//          Game Window
// ===============================

document.getElementById("gameWindow").style.display = "none";

function renderCurrentRoom(currentRoom) {
  roomNameElement.textContent = currentRoom.roomName;
  previousExperience = experiencePoints;

  // Renders monsters if there are monsters in the room.
  if (
    currentRoom.contents.monsters.length > 0 &&
    currentRoom.contents.events === null
  ) {
    checkCurrentRoom(); // Used for the haunted condition
    setTimeout(startBattle(currentRoom), 2000);
  } else {
    monsterContainer.style.display = "none";
  }

  // Search for items in each room.
  if (currentRoom !== catacombEntrance) {
    findItemChance();
  }

  // Renders Event Modal
  if (currentRoom.contents.events) {
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

  // Calls function if one exists
  if (currentRoom.function) {
    currentRoom.function();
  }

  specialCooldownHandler();
  togglePlayerControls();
  setRoomSummary();
  renderBackground(currentRoom.backgroundImage);
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
    gameWindow.style.backgroundImage = `url(${link})`;
    gameWindow.style.backgroundRepeat = "no-repeat";
    gameWindow.style.backgroundSize = "cover";
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

  function updateHeroExperience() {
    const currentXP = document.getElementById("currentXP");
    currentXP.textContent = experiencePoints;
    const xpToNextLevel = document.getElementById("xpToNextLevel");

    if (levelCounter === 1) {
      xpToNextLevel.textContent = 30;
    } else if (levelCounter === 2) {
      xpToNextLevel.textContent = 80;
    } else if (levelCounter === 3) {
      xpToNextLevel.textContent = 160;
    } else if (levelCounter === 4) {
      xpToNextLevel.textContent = 270;
    } else if (levelCounter === 5) {
      xpToNextLevel.textContent = 410;
    } else if (levelCounter === 6) {
      xpToNextLevel.textContent = 580;
    } else if (levelCounter === 7) {
      xpToNextLevel.textContent = 780;
    } else if (levelCounter === 8) {
      xpToNextLevel.textContent = 999;
    } else {
      xpToNextLevel.textContent = `Max Level`;
    }
  }

  function renderHeroStats() {
    const heroStrength = document.getElementById("heroStrength");
    const heroDexterity = document.getElementById("heroDexterity");
    const heroFaith = document.getElementById("heroFaith");

    heroStrength.textContent = baseStrength;
    heroDexterity.textContent = baseDexterity;
    heroFaith.textContent = baseFaith;
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

function damageFlashAnimation() {
  gameWindow.classList.add("flash");

  setTimeout(() => {
    gameWindow.classList.remove("flash"); // Remove the class after the animation is complete
  }, 500); // Adjust this timing to match the animation duration
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
}

function renderRoomSummaryModal() {
  const roomSummaryDescription = document.getElementById(
    "roomSummaryDescription"
  );
  const roomSummaryMonsters = document.getElementById("roomSummaryMonsters");
  const roomSummaryItems = document.getElementById("roomSummaryItems");
  const roomSummaryEvents = document.getElementById("roomSummaryEvents");
  const roomSummaryExperience = document.getElementById(
    "roomSummaryExperience"
  );

  if (
    currentRoom !== catacombEntrance &&
    currentRoom.contents.monsters.length === 0
  ) {
    // Builds summary modal with currentRoom's contents.
    setTimeout(function () {
      roomSummaryModal.style.display = "block";
      let roomInfo = roomSummaryInformation.contents;

      // Description
      descriptionHeader = document.createElement("h4");
      descriptionHeader.textContent = `${roomSummaryInformation.roomName}`;
      roomSummaryDescription.appendChild(descriptionHeader);
      descriptionText = document.createElement("p");
      descriptionText.textContent = `${roomSummaryInformation.description}`;
      roomSummaryDescription.appendChild(descriptionText);

      // Events
      if (roomInfo.events) {
        eventHeader = document.createElement("h4");
        eventHeader.textContent = `${roomInfo.events.name}`;
        roomSummaryEvents.appendChild(eventHeader);
        eventText = document.createElement("p");
        eventText.textContent = `${roomInfo.events.summary}`;
        roomSummaryEvents.appendChild(eventText);
      }

      // Monsters
      if (roomInfo.monsters.length > 0) {
        monstersHeader = document.createElement("h4");
        monstersHeader.textContent = `Monsters Defeated`;
        roomSummaryMonsters.appendChild(monstersHeader);
        monstersList = document.createElement("ul");
        roomSummaryMonsters.appendChild(monstersList);

        for (let i = 0; i < roomInfo.monsters.length; i++) {
          addMonsterToList = document.createElement("li");
          addMonsterToList.textContent = roomInfo.monsters[i].name;
          monstersList.appendChild(addMonsterToList);
        }
      }

      // Items
      if (roomInfo.items.length > 0) {
        itemsHeader = document.createElement("h4");
        itemsHeader.textContent = "Items Found";
        roomSummaryItems.appendChild(itemsHeader);
        itemsList = document.createElement("ul");
        roomSummaryItems.appendChild(itemsList);

        for (let i = 0; i < roomInfo.items.length; i++) {
          addItemToList = document.createElement("li");
          addItemToList.textContent = roomInfo.items[i].name;
          itemsList.appendChild(addItemToList);
        }
      }

      // Experience

      if (experiencePoints > previousExperience) {
        let experienceGained = experiencePoints - previousExperience;
        experienceHeader = document.createElement("h4");
        experienceHeader.textContent = `Experience`;
        roomSummaryExperience.appendChild(experienceHeader);
        gainedExperienceText = document.createElement("p");
        gainedExperienceText.textContent = `Experience Gained: +${experienceGained}`;
        roomSummaryExperience.appendChild(gainedExperienceText);
        totalExperienceText = document.createElement("p");
        totalExperienceText.textContent = `Total Experience: ${experiencePoints}`;
        roomSummaryExperience.appendChild(totalExperienceText);
      }
    }, 2000);
  } else {
    roomSummaryModal.style.display = "none";
  }

  // Adds items in current room to inventory
  if (currentRoom.contents.items.length > 0) {
    for (let i = 0; i < currentRoom.contents.items.length; i++) {
      addItemToInventory(currentRoom.contents.items[i]);
    }
  }
}

function setRoomSummary() {
  roomSummaryInformation = JSON.parse(JSON.stringify(currentRoom));
}

function clearRoomSummaryModal() {
  roomSummaryDescription.textContent = "";
  roomSummaryMonsters.textContent = "";
  roomSummaryItems.textContent = "";
  roomSummaryEvents.textContent = "";
  roomSummaryExperience.textContent = "";
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
    setTimeout(isGameOver, 1500);
    updatePlayerTrackers();
  }
});

guardBtn.addEventListener("click", () => {
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver

  specialCooldownHandler();
  playerControlsTimeout(1500);
  setTimeout(guardHandler, 1200);
  setTimeout(isGameOver, 1500);
  updatePlayerTrackers();
});

specialBtn.addEventListener("click", () => {
  actionCounter++;

  if (heroChoice === "PALADIN") {
    paladinHolySmite();
  } else if (heroChoice === "ROGUE") {
    rogueShadowStrike();
    if (currentMonsterHealth <= 0) {
      isGameOver();
      playerControlsTimeout(1500);
    }
  } else if (heroChoice === "PRIESTESS") {
    attackCounter = 0; // Item: Soulreaver
    priestessGreaterPrayer();
  }

  if (
    currentMonsterHealth <= 0 &&
    (heroChoice === "PALADIN" || heroChoice === "PRIESTESS")
  ) {
    isGameOver();
  } else if (
    currentMonsterHealth > 0 &&
    (heroChoice === "PALADIN" || heroChoice === "PRIESTESS")
  ) {
    playerControlsTimeout(1500);
    setTimeout(monsterAttackHandler, 1200);
  }

  soundEffectHandler(heroChecker(), "PLAYER ABILITY");
  updatePlayerTrackers();
  specialCooldownHandler();
});

potionBtn.addEventListener("click", () => {
  actionCounter++;
  attackCounter = 0; // Item: Soulreaver
  
  potionHandler();

  if (currentRoom.contents.monsters.length > 0) {
    playerControlsTimeout(1500);
    setTimeout(monsterAttackHandler, 1200);
    specialCooldownHandler();
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
  setTimeout(monsterAttackHandler, 1200);
  isGameOver();
  updatePlayerTrackers();
});

greatCatacombsBtn.addEventListener("click", () => {
  catacombEntranceModal.style.display = "none";
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
  isItemAttuned(CURSED_GRIMOIRE, null);
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
      currentRoom = LOST_LEGIONS_VALE;
      renderCurrentRoom(LOST_LEGIONS_VALE);
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

volumeUpButton.addEventListener("click", () => adjustVolume(music, 0.05));
volumeDownButton.addEventListener("click", () => adjustVolume(music, -0.05));
