// ===============================
//             Health
// ===============================

function setPlayerHealthBar(maxLife) {
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
  currentPlayerHealth = maxLife;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

// ===============================
//            Attack
// ===============================

function playerAttackHandler(smite = 1) {
  let playerToMonsterDamage = dealMonsterDamage(baseAttack) + baseStrength;
  let totalDamage;

  if (playerToMonsterDamage >= baseAttack && smite > 1) {
    totalDamage = smite * (playerToMonsterDamage * baseCritModifier);
    writeToLog(
      LOG_EVENT_SMITE_CRITICAL,
      currentRoom.contents.monsters[0].name,
      totalDamage
    );
  } else if (smite > 1) {
    totalDamage = playerToMonsterDamage * smite;
    writeToLog(
      LOG_EVENT_SMITE,
      currentRoom.contents.monsters[0].name,
      totalDamage
    );
  } else if (playerToMonsterDamage >= baseAttack) {
    totalDamage = Math.round(playerToMonsterDamage * baseCritModifier);
    writeToLog(
      LOG_EVENT_PLAYER_CRITICAL,
      currentRoom.contents.monsters[0].name,
      totalDamage
    );
  } else {
    totalDamage = playerToMonsterDamage;
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

  specialCooldownHandler();
}

function monsterAttackHandler() {
  let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);
  // Rogue Passive Ability Checker
  if (heroChoice === "ROGUE" && evasionTracker >= monsterToPlayerDamage) {
    monsterToPlayerDamage = 0;
    writeToLog(
      LOG_EVENT_EVASION,
      currentRoom.contents.monsters[0].name,
      monsterToPlayerDamage
    );
  }

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

  isGameOver();
  specialCooldownHandler();
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
  playerHealthBar.value += potionHealValue;
  currentPlayerHealth += potionHealValue;

  if (currentPlayerHealth > playerMaxHealth) {
    playerHealthBar.value = playerMaxHealth;
    currentPlayerHealth = playerMaxHealth;
  }

  if (currentRoom.contents.monsters.length > 0) {
    monsterAttackHandler();
    isGameOver();
    specialCooldownHandler();
  }

  writeToLog(LOG_EVENT_POTION, "You", potionHealValue);

  potionCounterHandler();
}

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
//             Flee
// ===============================
function fleeHandler() {
  const fleeChance = Math.round(Math.random() * 10) + baseFaith;
  console.log(fleeChance);
  monsterAttackHandler();
  if (fleeChance >= 10) {
    console.log("Flee Successful");
    getRandomRoom(catacombRooms);
    renderCurrentRoom(currentRoom);
  }
}

// ===============================
//        Hero: Paladin
// ===============================

let holySmiteTracker = 2.0;
let radiantAuraTracker = 5;
let paladin = {
  name: "Holy Warrior Siggurd",
  level: 1,
  attack: 10,
  health: 120,
  strength: 2,
  dexterity: 0,
  faith: 1,
  special: paladinHolySmite,
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
  setPlayerHealthBar(playerMaxHealth);
}

function paladinHolySmite() {
  playerAttackHandler(holySmiteTracker);
  //   console.log(currentMonsterHealth);
  //   console.log(monsterHealthBar.value);

  isGameOver();
  specialCooldownCounter = 4;
  specialCooldownHandler();
}

function paladinRadiantAura() {
  if (currentMonsterHealth <= radiantAuraTracker) {
    currentMonsterHealth = 0;
    monsterHealthBar.value = 0;
    console.log("Face your judgement!");
  }
}

// ===============================
//        Hero: Rogue
// ===============================

let shadowStrikeTracker = 0;
let evasionTracker = 2;
let rogue = {
  name: "Shadowcloak Riven",
  level: 1,
  attack: 8,
  health: 100,
  strength: 1,
  dexterity: 2,
  faith: 0,
  special: rogueShadowStrike,
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
  setPlayerHealthBar(playerMaxHealth);
}

function rogueShadowStrike() {
  guardHandler();

  monsterHealthBar.value = +monsterHealthBar.value - criticalDamage;
  currentMonsterHealth -= criticalDamage;

  isGameOver();
  specialCooldownCounter = 3;
  specialCooldownHandler();
}

// See monsterAttackHandler for Rouge Passive Ability

// ===============================
//        Hero: Priestess
// ===============================

let greaterPrayerTracker = 40;
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
  setPlayerHealthBar(playerMaxHealth);
}

function priestessGreaterPrayer() {
  playerHealthBar.value += greaterPrayerTracker;
  currentPlayerHealth += greaterPrayerTracker;

  writeToLog(LOG_EVENT_GREATER_PRAYER, "You", greaterPrayerTracker);

  isGameOver();
  specialCooldownCounter = 8;
  specialCooldownHandler();
}

// See dealPlayerDamage for Priestess Passive Ability

// ===============================
//        Boons & Leveling
// ===============================

let availableBoons = [];

// randomly choose a boon
// discard chosen boon from list
// apply boon to hero

// ===============================
//          Is Game Over?
// ===============================

function isGameOver() {
  if (currentPlayerHealth <= 0) {
    alert("You died!");
  }

  if (currentMonsterHealth <= 0) {
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

  if (currentRoom.contents.monsters.length > 0) {
    startBattle(currentRoom);
  } else {
    monsterContainer.style.display = "none";
  }

  if (currentRoom.contents.traps) {
    renderTrap(currentRoom.contents.traps);
    writeToLog(LOG_EVENT_TRAP_DESCRIPTION, "you", "danger");
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

  if (currentRoom.contents.monsters.length > 0) {
    inventoryButton.disabled = true;
  } else {
    inventoryButton.disabled = false;
  }
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
        itemsHeader.textContent = 'Items Found';
        roomSummaryItems.appendChild(itemsHeader);
        itemsList = document.createElement("ul");
        roomSummaryItems.appendChild(itemsList);

        for(let i = 0; i < roomInfo.items.length; i++) {
          addItemToList = document.createElement('li');
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
  console.log("renderTrap Called!");

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

  if (currentMonsterHealth <= 0) {
    isGameOver();
  } else {
    monsterAttackHandler();
  }
});

guardBtn.addEventListener("click", () => {
  guardHandler();
  monsterAttackHandler();
});

specialBtn.addEventListener("click", () => {
  if (heroChoice === "PALADIN") {
    paladinHolySmite();
  } else if (heroChoice === "ROGUE") {
    rogueShadowStrike();
  } else if (heroChoice === "PRIESTESS") {
    priestessGreaterPrayer();
  }
});

potionBtn.addEventListener("click", potionHandler);

fleeBtn.addEventListener("click", fleeHandler);

greatCatacombsBtn.addEventListener("click", () => {
  catacombEntranceModal.style.display = "none";
  continueButtonModal.style.display = "block";
  continueButton.textContent = "Enter the Catacombs";
});

roomSummaryButton.addEventListener("click", () => {
  closeRoomSummaryModal();
  renderContinueButton();
  clearRoomSummaryModal();
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
});

trapButtonTwo.addEventListener("click", () => {
  if (trapButtonTwo.textContent === "Strength") {
    trapHandler(baseStrength, "STRENGTH");
  } else if (trapButtonTwo.textContent === "Dexterity") {
    trapHandler(baseDexterity, "DEXTERITY");
  } else {
    trapHandler(baseFaith, "FAITH");
  }
});

inventoryButton.addEventListener("click", openInventoryHandler);

closeInventoryButton.addEventListener("click", closeInventoryHandler);
