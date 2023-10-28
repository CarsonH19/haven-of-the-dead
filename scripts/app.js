// ===============================
//             Health
// ===============================

function setPlayerHealthBar(maxLife) {
  maxLife = playerMaxHealth + isItemAttuned(BONEMAIL, 0); // ITEM: +20 Max HP

  if (currentRoom === catacombEntrance) {
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
    currentPlayerHealth = maxLife;
  } else {
    playerHealthBar.max = maxLife;
  }
}

function healPlayer(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
  currentPlayerHealth += healValue;

  if (currentPlayerHealth > playerMaxHealth) {
    playerHealthBar.value = playerMaxHealth;
    currentPlayerHealth = playerMaxHealth;
  }
}

// ===============================
//            Attack
// ===============================

function playerAttackHandler(smite = 1) {
  const criticalHitChance = Math.round(Math.random() * 20) + baseDexterity;
  let playerToMonsterDamage = dealMonsterDamage(baseAttack) + baseStrength;

  // ITEM: Revenant's Rage - Increases attack when low health.
  playerToMonsterDamage += isItemAttuned(REVENANTS_RAGE, 0);
  // ITEM: Increases attack against evil spirits.
  playerToMonsterDamage += isItemAttuned(WRAITHBANE, 0); 

  let totalDamage;

  // Smite Critical Hit
  if (criticalHitChance >= 20 && smite > 1) {
    playerToMonsterDamage = baseAttack + baseStrength;
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
    playerToMonsterDamage = baseAttack + baseStrength;
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
    let damageReflected = Math.round(Math.random() * (monsterToPlayerDamage / 1.5))
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
      LOG_EVENT_BURNING_RADIANCE,
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

  if (specialCooldownCounter <= 0) {
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

  if (currentRoom.contents.monsters.length > 0 && currentMonsterHealth <= 0) {
    isItemAttuned(BLOODSTONE, null); // ITEM: Recovers health when monster dies
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

  if (
    event.target === siggurd ||
    event.target === riven ||
    event.target === liheth
  ) {
    document.getElementById("heroChoiceModal").style.display = "none";

    if (event.target === siggurd) {
      heroChoice = "PALADIN";
      setPaladinStats();
    } else if (event.target === riven) {
      heroChoice = "ROGUE";
      setRogueStats();
    } else if (event.target === liheth) {
      heroChoice = "PRIESTESS";
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

  // Renders Trap Modal if there is a trap in the room.
  if (currentRoom.contents.traps) {
    renderTrap(currentRoom.contents.traps);
    writeToLog(LOG_EVENT_TRAP_DESCRIPTION, "you", "danger");
  }

  // Adds findItem() if not at the Catacomb Entrance.
  if (currentRoom !== catacombEntrance) {
    findItems();
  }

  specialCooldownCounter = 0;
  specialCooldownHandler();
  togglePlayerControls();
  setRoomSummary();
}

function togglePlayerControls() {
  if (currentRoom.contents.monsters.length > 0) {
    attackBtn.disabled = false;
    guardBtn.disabled = false;
    specialBtn.disabled = false;
    fleeBtn.disabled = false;
  } else {
    attackBtn.disabled = true;
    guardBtn.disabled = true;
    specialBtn.disabled = true;
    fleeBtn.disabled = true;
  }

  if (trapModal.style.display === "block") {
    inventoryButton.disabled = true;
    potionBtn.disabled = true;
  } else {
    inventoryButton.disabled = false;
    potionBtn.disabled = false;
  }
}

function updateRoomsCleared() {
  roomCounter++;
  roomsCleared.textContent = `Rooms Cleared: ${roomCounter}`;
}

// ===============================
//        Start Game Modal
// ===============================

document.getElementById("startGameModal").style.display = "none";

// ===============================
//    Catacomb Entrance Modal
// ===============================

function closeCatacombsEntranceModal() {
  catacombEntranceModal.style.display = "none";
}

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
  const roomSummaryNPCs = document.getElementById("roomSummaryNPCs");
  const roomSummaryTraps = document.getElementById("roomSummaryTraps");
  const roomSummaryExperience = document.getElementById(
    "roomSummaryExperience"
  );

  if (
    currentRoom !== catacombEntrance &&
    currentRoom.contents.monsters.length === 0 &&
    !currentRoom.contents.traps &&
    !currentRoom.contents.NPCs
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

      // NPCs
      if (roomInfo.NPCs) {
        npcsHeader = document.createElement("h4");
        npcsHeader.textContent = `${roomInfo.NPCs.name}`;
        roomSummaryNPCs.appendChild(npcsHeader);
        npcsText = document.createElement("p");
        npcsText.textContent = `${roomInfo.NPCs.description}`;
        roomSummaryNPCs.appendChild(npcsText);
      }

      // Traps
      if (roomInfo.traps) {
        trapsHeader = document.createElement("h4");
        trapsHeader.textContent = `${roomInfo.traps.name}`;
        roomSummaryTraps.appendChild(trapsHeader);
        trapText = document.createElement("p");
        trapText.textContent = `${roomInfo.traps.description}`;
        roomSummaryTraps.appendChild(trapText);
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
  roomSummaryNPCs.textContent = "";
  roomSummaryTraps.textContent = "";
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
    !currentRoom.contents.traps &&
    !currentRoom.contents.NPCs
  ) {
    continueButtonModal.style.display = "block";
  } else {
    continueButtonModal.style.display = "none";
  }
}

// ===============================
//          Trap Modal
// ===============================

trapModal.style.display = "none";

function renderTrap(trap) {
  // console.log("renderTrap Called!");

  trapModal.style.display = "block";

  if (trap.optionOne === "STRENGTH") {
    trapButtonOne.textContent = "Strength";
  } else if (trap.optionOne === "DEXTERITY") {
    trapButtonOne.textContent = "Dexterity";
  } else {
    trapButtonOne.textContent = "Faith";
  }

  if (trap.optionTwo === "STRENGTH") {
    trapButtonTwo.textContent = "Strength";
  } else if (trap.optionTwo === "DEXTERITY") {
    trapButtonTwo.textContent = "Dexterity";
  } else {
    trapButtonTwo.textContent = "Faith";
  }
}

// ===============================
//            Inventory
// ===============================

const inventoryButton = document.getElementById("inventoryBtn");
const inventoryModal = document.getElementById("inventoryModal");
const closeInventoryButton = document.getElementById("closeInventoryBtn");

function openInventoryHandler() {
  inventoryModal.style.display = "block";
}

function closeInventoryHandler() {
  inventoryModal.style.display = "none";
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
    monsterAttackHandler();
  }
});

guardBtn.addEventListener("click", () => {
  guardHandler();
  monsterAttackHandler();
  isGameOver();
  specialCooldownHandler();
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
  isGameOver();
});

potionBtn.addEventListener("click", () => {
  potionHandler();

  if (currentRoom.contents.monsters.length > 0) {
    monsterAttackHandler();
    specialCooldownHandler();
    isGameOver();
  }
});

fleeBtn.addEventListener("click", () => {
  fleeHandler();
  monsterAttackHandler();
  isGameOver();
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
});

continueButton.addEventListener("click", () => {
  removeCurrentRoom();
  getRandomRoom(catacombRooms);
  renderCurrentRoom(currentRoom);
  closeContinueButton();
});

trapButtonOne.addEventListener("click", () => {
  if (trapButtonOne.textContent === "Strength") {
    trapHandler(baseStrength, "STRENGTH");
  } else if (trapButtonOne.textContent === "Dexterity") {
    trapHandler(baseDexterity, "DEXTERITY");
  } else {
    trapHandler(baseFaith, "FAITH");
  }

  isGameOver();
});

trapButtonTwo.addEventListener("click", () => {
  if (trapButtonTwo.textContent === "Strength") {
    trapHandler(baseStrength, "STRENGTH");
  } else if (trapButtonTwo.textContent === "Dexterity") {
    trapHandler(baseDexterity, "DEXTERITY");
  } else {
    trapHandler(baseFaith, "FAITH");
  }

  isGameOver();
});

inventoryButton.addEventListener("click", () => {
  renderInventory();
  openInventoryHandler();
});

closeInventoryButton.addEventListener("click", () => {
  closeInventoryHandler();

  // Clears the inventory to avoid duplication.
  slots = "";
  magicItemsBox.textContent = "";
  consumablesBox.textContent = "";

  // Updates stats after changing attuned items.
  if (heroChoice === 'PALADIN') {
    setPaladinStats();
  } else if (heroChoice === 'ROGUE') {
    setRogueStats();
  } else {
    setPriestessStats();
  }

  // ITEM: Shadowstep Boots - +1 Dexterity;
  let newDex =  baseDexterity + isItemAttuned(SHADOWSTEP_BOOTS, 0);
  baseDexterity = newDex;
});

