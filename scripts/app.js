// ===============================
//            Attack
// ===============================

function playerAttackHandler(smite = 1) {
  const criticalHitChance = Math.round(Math.random() * 20) + baseDexterity;
  let playerToMonsterDamage = dealMonsterDamage(baseAttack);

  // ITEM: Revenant's Rage - Increases attack when low health.
  playerToMonsterDamage += isItemAttuned(REVENANTS_RAGE, 0);
  // ITEM: Increases attack against evil spirits.
  playerToMonsterDamage += isItemAttuned(WRAITHBANE, 0);

  let totalDamage;

  // Smite Critical Hit
  if (criticalHitChance >= 20 && smite > 1) {
    totalDamage = smite * (playerToMonsterDamage * baseCritModifier);
    writeToLog(
      LOG_EVENT_SMITE_CRITICAL,
      currentRoom.contents.monsters[0].name,
      totalDamage
    );
    // Smite Hit
  } else if (smite > 1) {
    totalDamage = playerToMonsterDamage * smite;
    writeToLog(
      LOG_EVENT_SMITE,
      currentRoom.contents.monsters[0].name,
      totalDamage
    );
    // Critical Hit
  } else if (criticalHitChance >= 20) {
    totalDamage = Math.round(playerToMonsterDamage * baseCritModifier);
    console.log(`Critical Hit: ${totalDamage}`);
    writeToLog(
      LOG_EVENT_PLAYER_CRITICAL,
      currentRoom.contents.monsters[0].name,
      totalDamage
    );
    // Normal Hit
  } else {
    totalDamage = playerToMonsterDamage;
    console.log(`Base Damage: ${playerToMonsterDamage}`);
    writeToLog(
      LOG_EVENT_PLAYER_ATTACK,
      currentRoom.contents.monsters[0].name,
      totalDamage
    );
  }

  monsterHealthBar.value = +monsterHealthBar.value - totalDamage;
  currentMonsterHealth -= totalDamage;

  // Paladin Passive Ability Checker
  if (heroChoice === "PALADIN") {
    paladinRadiantAura();
  }
}

function monsterAttackHandler() {
  let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);

  // ITEM: Cursed Mirror - Reflects a portion of damage taken back to monster.
  let cursedMirrorTracker = isItemAttuned(CURSED_MIRROR, 0);
  if (cursedMirrorTracker > 0) {
    let damageReflected = Math.round(
      Math.random() * (monsterToPlayerDamage / 1.5)
    );
    currentMonsterHealth -= damageReflected;
    monsterHealthBar.value -= damageReflected;
    console.log(`Damage Reflected: ${damageReflected}`);
  }

  // Rogue Passive Ability Checker
  if (heroChoice === "ROGUE" && evasionTracker >= monsterToPlayerDamage) {
    monsterToPlayerDamage = 0;
    writeToLog(
      LOG_EVENT_EVASION,
      currentRoom.contents.monsters[0].name,
      monsterToPlayerDamage
    );
  }

  // ITEM: Mist Veil Cloak - Chance to evade attacks.
  monsterToPlayerDamage *= isItemAttuned(MIST_VEIL_CLOAK, 1);

  playerHealthBar.value = +playerHealthBar.value - monsterToPlayerDamage;
  currentPlayerHealth -= monsterToPlayerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    currentRoom.contents.monsters[0].name,
    monsterToPlayerDamage
  );
}

function dealMonsterDamage(damage) {
  let dealtDamage = Math.round(Math.random() * damage);

  if (heroChoice === "PRIESTESS" && dealtDamage < burningDevotionTracker) {
    dealtDamage = burningDevotionTracker;
    writeToLog(
      LOG_EVENT_BURNING_DEVOTION,
      currentRoom.contents.monsters[0].name,
      dealtDamage
    );
  }

  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.round(Math.random() * damage);
  return dealtDamage;
}

// ===============================
//            Special
// ===============================

function specialCooldownHandler() {
  const special = document.getElementById("specialCount");
  if (specialCooldownCounter > 0) {
    specialCooldownCounter--;
    specialBtn.disabled = true;
    special.textContent = `Cooldown: ${specialCooldownCounter}`;
  }

  if (specialCooldownCounter === 0) {
    specialBtn.disabled = false;
    special.textContent = `Special`;
  }
}

// ===============================
//            Guard
// ===============================

function guardHandler() {
  const monsterToGuardDamage = calculateMonsterDamage();
  const damageBlocked = Math.round(Math.random() * monsterToGuardDamage);
  const damageTaken = monsterToGuardDamage - damageBlocked;

  playerHealthBar.value = +playerHealthBar.value - damageTaken;
  currentPlayerHealth -= damageTaken;

  writeToLog(
    LOG_EVENT_GUARD,
    currentRoom.contents.monsters[0].name,
    damageBlocked
  );

  // console.log(`Damage Received: ${monsterToGuardDamage}`);
  // console.log(`Damage Blocked: ${damageBlocked}`);
  // console.log(`Current Player Health ${currentPlayerHealth}`);
  // console.log(`Current Player Health Bar Value ${playerHealthBar.value}`);
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

let potionCounter = 3;
document.getElementById("potionCount").textContent = ` x ${potionCounter}`;

function potionCounterHandler() {
  const potions = document.getElementById("potionCount");
  if (potionCounter > 0) {
    potionCounter--;
  }

  if (potionCounter <= 0) {
    potionBtn.disabled = true;
  }

  potions.textContent = ` x ${potionCounter}`;
}

function potionHandler() {
  healPlayer(potionHealValue);

  writeToLog(LOG_EVENT_POTION, "You", potionHealValue);

  potionCounterHandler();
}

// ===============================
//             Flee
// ===============================
function fleeHandler() {
  let fleeChance = Math.round(Math.random() * 10) + baseFaith;
  fleeChance += isItemAttuned(RING_OF_THE_RODENT, 0);
  if (fleeChance >= 10) {
    console.log("Flee Successful");
    // writeToLog()
    getRandomRoom(catacombRooms);
    renderCurrentRoom(currentRoom);
  }
}

// ===============================
//          Is Game Over?
// ===============================

function isGameOver() {
  if (currentPlayerHealth <= 0) {
    alert("You died!");
  }

  if (currentMonsterHealth <= 0) {
    isItemAttuned(BLOODSTONE, null); // ITEM: Recovers health when monster dies
    gainExperience(currentRoom.contents.monsters[0].skulls);
    checkForMonsters();
  }

  return;
}

// ===============================
//       Choose Hero Modal
// ===============================

heroChoiceModal.style.display = "block";

heroChoiceModal.addEventListener("click", function (event) {
  const siggurd = document.getElementById("siggurd");
  const riven = document.getElementById("riven");
  const liheth = document.getElementById("liheth");
  const playerName = document.getElementById('playerName');

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

  // Renders monsters if there are monsters in the room.
  if (currentRoom.contents.monsters.length > 0) {
    startBattle(currentRoom);
  } else {
    monsterContainer.style.display = "none";
  }

  // Renders Event Modal
  if (currentRoom.contents.events) {
    renderEvent(currentRoom.contents.events);
    switch (currentRoom.contents.events.eventType) {
      case "TRAP":
        writeToLog(LOG_EVENT_TRAP_DESCRIPTION, "you", "danger");
        break;
      case "NPC":
        writeToLog(LOG_EVENT_NPC_DESCRIPTION, "you", "do");
        break;
      case "MISC":
        writeToLog(LOG_EVENT_MISC_DESCRIPTION, "you", "danger");
        break;
    }
  }

  // Search for items in each room.
  if (currentRoom !== catacombEntrance) {
    findItems();
  }

  specialCooldownCounter = 0;
  specialCooldownHandler();
  togglePlayerControls();
  setRoomSummary();
  renderHeroStats();
  renderBackground(currentRoom.backgroundImage);
  updatePlayerHealthTracker();
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
    ) 
    {
      specialBtn.disabled = false;
    } else {
      specialBtn.disabled = true;

    }

  if (eventModal.style.display === "block") {
    inventoryButton.disabled = true;
    potionBtn.disabled = true;
  } else {
    inventoryButton.disabled = false;
    potionBtn.disabled = false;
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
    console.log('Controls On!');
  }, timeout);
}

function updateRoomsCleared() {
  roomCounter++;
  roomsCleared.textContent = `Rooms Cleared: ${roomCounter}`;
}

function renderHeroStats() {
  const heroStrength = document.getElementById("heroStrength");
  const heroDexterity = document.getElementById("heroDexterity");
  const heroFaith = document.getElementById("heroFaith");

  heroStrength.textContent = baseStrength;
  heroDexterity.textContent = baseDexterity;
  heroFaith.textContent = baseFaith;
}

function renderBackground(link) {
  console.log(`image: url(${link})`);
  const image = new Image();
  image.src = link;
  console.log(image.src);
  image.onload = () => {
    gameWindow.style.backgroundImage = `url(${link})`;
    gameWindow.style.backgroundRepeat = 'no-repeat';
    gameWindow.style.backgroundSize = 'cover';
  };
}

function updatePlayerHealthTracker() {
  const currentHP = document.getElementById('currentHP');
  const maxHP = document.getElementById('maxHP');

  currentHP.textContent = currentPlayerHealth;
  maxHP.textContent = playerMaxHealth;
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
        eventText.textContent = `${roomInfo.events.description}`;
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
      // experienceHeader = document.createElement('h4');
      // experienceText = document.createElement('p');
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
    currentRoom.contents.monsters.length === 0
  ) {
    continueButtonModal.style.display = "block";
  } else {
    continueButtonModal.style.display = "none";
  }
}

// ===============================
//       Event Listeners
// ===============================

attackBtn.addEventListener("click", function () {
  playerAttackHandler();
  specialCooldownHandler();

  if (currentMonsterHealth <= 0) {
    isGameOver();
  } else {
    playerControlsTimeout(2000);
    setTimeout(monsterAttackHandler, 2000);
    updatePlayerHealthTracker();
  }
});

guardBtn.addEventListener("click", () => {
  guardHandler();
  specialCooldownHandler();
  playerControlsTimeout(2000);
  setTimeout(monsterAttackHandler, 2000);
  isGameOver();
  updatePlayerHealthTracker();
});

specialBtn.addEventListener("click", () => {
  if (heroChoice === "PALADIN") {
    paladinHolySmite();
  } else if (heroChoice === "ROGUE") {
    rogueShadowStrike();
  } else if (heroChoice === "PRIESTESS") {
    priestessGreaterPrayer();
  }

  specialCooldownHandler();

  if (currentMonsterHealth <= 0) {
    isGameOver();
  } else {
    playerControlsTimeout(2000);
    setTimeout(monsterAttackHandler, 2000);
    updatePlayerHealthTracker();
  }
});

potionBtn.addEventListener("click", () => {
  potionHandler();

  if (currentRoom.contents.monsters.length > 0) {
    playerControlsTimeout(2000);
    setTimeout(monsterAttackHandler, 2000);
    specialCooldownHandler();
    isGameOver();
  }

  updatePlayerHealthTracker();
});

fleeBtn.addEventListener("click", () => {
  fleeHandler();
  specialCooldownHandler();
  playerControlsTimeout(2000);
  setTimeout(monsterAttackHandler, 2000);
  isGameOver();
  updatePlayerHealthTracker();
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
  isItemAttuned(CHARM_OF_HEALING, 0);
  checkForLevelUp();
});

continueButton.addEventListener("click", () => {
  removeCurrentRoom();
  getRandomRoom(catacombRooms);
  renderCurrentRoom(currentRoom);
  closeContinueButton();
});
