// This file holds all the items and their logic.

// Inventory Modal
// Add sections to the modal
//  - An Attuned Section
//  - Items Section
//  - Consumables Section

// ===============================
//        COMMON ITEMS
// ===============================

const EVERTORCH = {
  name: "Evertorch",
  description:
    "This torch emits an ethereal luminescent glow in the presence of danger.",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned, you have a greater chance of successfully avoiding traps.",
  function: () => {
    return 2;
  },
};

// const sample = {
//     name:
//     description:
//     type:
//     rarity:
//     effect:
//     function:
//  }

const FLASK_OF_LIGHT = {
  name: "Flask of Light",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "While attuned to this item ghosts are weakened by your presence.",
  function: () => {
    if (currentRoom.contents.monsters[0].type === "GHOST") {
      monsterMaxHealth = monsterMaxHealth - 15;
      monsterAttackValue = monsterAttackValue - 2;
      console.log(`Ghost Weakened!`);
    }
  },
};

const BONEMAIL = {
  name: "Bonemail",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item your max health is increased by 20 points.",
  function: () => {
    console.log(`+20 Max HP`);
    return 20;
  },
};

const GRAVEROBBERS_SPADE = {
  name: "Graverobber's Spade",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "While attuned to this item you are more likely to find items.",
  function: () => {
    console.log(`Digging for items!`);
    return 2;
  },
};

const CHARM_OF_HEALING = {
  name: "Charm of Healing",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you recover 10 points of health after each room you clear.",
  function: () => {
    healPlayer(10);
    console.log("Player Healed by Charm of Healing!");
  },
};

const RING_OF_THE_RODENT = {
  name: "Ring of the Rodent",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you have a higher chance to flee successfully. The greater your dexterity, the higher the chance becomes.",
  function: () => {
    return 1 + baseDexterity;
  },
};

const MIST_VEIL_CLOAK = {
  name: "Mist Veil Cloak",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you have a slight chance of completely evading enemy attacks.",
  function: () => {
    let randomNumber = Math.round(Math.random() * 20);
    console.log(randomNumber);
    if (randomNumber === 20) {
      console.log(`Attack evaded with Mist Veil Cloak!`);
      return 0;
    } else {
      console.log(`Attack NOT evaded...`);
      return 1;
    }
  },
};

// ===============================
//         RARE ITEMS
// ===============================

// const sample = {
//     name:
//     description:
//     type:
//     rarity:
//     effect:
//     function:
//  }

const BLOODSTONE = {
  name: "Bloodstone",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "When attuned to this item you recover a small amount of health after slaying a monster.",
  function: () => {
    let monsterLevel = currentRoom.contents.monsters[0].skulls;
    let healthRecovered;

    switch (monsterLevel) {
      case 1:
        healthRecovered = 2;
        break;
      case 2:
        healthRecovered = 3;
        break;
      case 3:
        healthRecovered = 4;
        break;
      case 4:
        healthRecovered = 5;
        break;
      case 5:
        healthRecovered = 7;
        break;
      case 6:
        healthRecovered = 9;
        break;
      case 7:
        healthRecovered = 11;
        break;
      case 8:
        healthRecovered = 15;
        break;
      case 9:
        healthRecovered = 20;
        break;
    }

    healPlayer(healthRecovered);
    console.log(`You recovered ${healthRecovered} health!`);
  },
};

const WRAITHBANE = {
  name: "Wraithbane",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item your attacks deal additional damage against evil spirits.",
  function: () => {
    if (
      currentRoom.contents.monsters[0].name === SHADE ||
      currentRoom.contents.monsters[0].name === HAUNTING_SPIRIT ||
      currentRoom.contents.monsters[0].name === GRUDGE
    ) {
      console.log(`+5 Damage to ghosts!`);
      return 5;
    } else {
      return 0;
    }
  },
};

const SUNSTONE = {
  name: "Sunstone",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item undead creatures take damage at the start of battle.",
  function: () => {
    if (currentRoom.contents.monsters[0].type === "UNDEAD") {
      console.log(`The Sunstone deals 10 Damage!`);
      currentMonsterHealth -= 10;
      monsterHealthBar.value -= 10;
    } else {
      return;
    }
  },
};

const WHISPERING_AMULET = {
  name: "Whispering Amulet",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item you can communicate with some undead creatures.",
  function: () => {
    // Option 1: While wearing it adds NPC rooms to the catacombRooms array.
    // Option 2: While wearing the player gets alternate dialogue options during event.
  },
};

const CURSED_MIRROR = {
  name: "Cursed Mirror",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item a portion of all damage received is reflected back to the attacker.",
  function: () => {
    // See monsterAttackHandler for item logic.
    return 1;
  },
};

const WARDING_CANDLE = {
  name: "Warding Candle",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item there is a chance that evil spirits will flee from you. The greater your faith, the higher the chance becomes.",
  function: () => {
    if (
      currentRoom.contents.monsters[0] === SHADE ||
      currentRoom.contents.monsters[0] === HAUNTING_SPIRIT ||
      currentRoom.contents.monsters[0] === GRUDGE
    ) {
      let randomNumber = Math.round(Math.random() * 10 + baseFaith);
      console.log(`Warding Candle Chance: ${randomNumber}`);
      if (randomNumber >= 10) {
        checkForMonsters();
        console.log(`The spirit flees from you!`);
      }
    }
  },
};

const REVENANTS_RAGE = {
  name: "Revenant's Rage",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item you deal additional damage while below 40 points of health.",
  function: () => {
    if (currentPlayerHealth <= 40) {
      console.log("Revenant's Rage bonus damage added!");
      return 5;
    } else {
      return 0;
    }
  },
};

const SHADOWSTEP_BOOTS = {
  name: "Shadowstep Boots",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item your dexterity increases by 1.",
  function: () => {
    // See closeInventoryButton event listener for item logic.
    console.log("Dexterity Increased!");
    return 1;
  },
};

// ===============================
//         EPIC ITEMS
// ===============================

// const sample = {
//     name:
//     description:
//     type:
//     rarity:
//     effect:
//     function:
//  }

// ===============================
//         CONSUMABLES
// ===============================

// const sample = {
//     name:
//     description:
//     type:
//     rarity:
//     effect:
//     function:
//  }

const POTION = {
    name: 'Health Potion',
    description: 'A small bottle of glowing red liquid.',
    type: 'CONSUMABLE',
    rarity: 'COMMON',
    effect: 'Restores 20 health points and can be used during combat.',
    function: () => {
      potionHandler();
    }
 }



let attunedItems = [];
let inventoryItems = [
  BLOODSTONE,
  BONEMAIL,
  CHARM_OF_HEALING,
  CURSED_MIRROR,
  EVERTORCH,
  POTION,
  POTION,
  POTION,
  POTION,
  POTION
];

function isItemAttuned(item, defaultValue) {
  for (let i = 0; i < attunedItems.length; i++) {
    if (attunedItems[i] === item) {
      console.log(`${item.name} is being used!`);
      return item.function();
    }
  }
  // console.log(`No items used.`);
  return defaultValue;
}

function addItemToInventory(item) {
  inventoryItems.push(item);
}

function renderInventory() {
  const magicItemsBox = document.getElementById("magicItemsBox");
  const consumablesBox = document.getElementById("consumablesBox");
  const slotOne = document.getElementById("slotOne");
  const slotTwo = document.getElementById("slotTwo");
  const slotThree = document.getElementById("slotThree");
  const slotFour = document.getElementById("slotFour");
  const slotFive = document.getElementById("slotFive");

  for (let i = 0; i < inventoryItems.length; i++) {
    const itemBox = document.createElement("div");
    // const itemName = document.createElement("p");
    itemBox.classList.add("tooltip");
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltipText");
    tooltipText.textContent = inventoryItems[i].effect;
    const itemButton = document.createElement("button");
    itemButton.textContent = inventoryItems[i].name;
    itemButton.setAttribute("id", inventoryItems[i].name);
    // itemBox.appendChild(itemName);
    itemBox.appendChild(tooltipText);
    itemBox.appendChild(itemButton);

    if (inventoryItems[i].type === "MAGIC") {
      magicItemsBox.appendChild(itemBox);
    } else {
      consumablesBox.appendChild(itemBox);
    }
  }

  for (let i = 0; i < attunedItems.length; i++) {
    const itemBox = document.createElement("div");
    // const itemName = document.createElement("p");
    // itemName.textContent = attunedItems[i].name;
    const itemButton = document.createElement("button");
    itemButton.textContent = attunedItems[i].name;
    itemButton.setAttribute("id", attunedItems[i].name);
    itemBox.classList.add("tooltip");
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltipText");
    tooltipText.textContent = attunedItems[i].effect;
    // itemBox.appendChild(itemName);
    itemBox.appendChild(tooltipText);
    itemBox.appendChild(itemButton);

    if (!slotOne.hasChildNodes()) {
      slotOne.appendChild(itemBox);
    } else if (!slotTwo.hasChildNodes()) {
      slotTwo.appendChild(itemBox);
    } else if (!slotThree.hasChildNodes()) {
      slotThree.appendChild(itemBox);
    } else if (!slotFour.hasChildNodes()) {
      slotFour.appendChild(itemBox);
    } else if (!slotFive.hasChildNodes()) {
      slotFive.appendChild(itemBox);
    }
  }

  document.querySelectorAll(".tooltip").forEach(function (element) {
    element.addEventListener("mouseover", function () {
      const tooltipText = this.querySelector(".tooltipText");
      const rect = tooltipText.getBoundingClientRect();
      const modalRect = document
        .querySelector(".inventory-modal-content")
        .getBoundingClientRect();

      if (rect.right > modalRect.right) {
        tooltipText.style.left = "auto";
        tooltipText.style.right = "0";
      } else if (rect.left < modalRect.left) {
        tooltipText.style.left = "0";
        tooltipText.style.right = "auto";
      }

      tooltipText.style.visibility = "visible";
      tooltipText.style.opacity = "1";
    });

    element.addEventListener("mouseout", function () {
      const tooltipText = this.querySelector(".tooltipText");
      tooltipText.style.visibility = "hidden";
      tooltipText.style.opacity = "0";
    });
  });
}

function attuneItem(itemName) {
  itemObject = inventoryItems.find((inv) => inv.name === itemName);

  if (itemObject) {
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);
    attunedItems.push(itemObject);
  }

  clearInventory();
  renderInventory();
}

function removeItem(itemName) {
  itemObject = attunedItems.find((inv) => inv.name === itemName);

  if (itemObject) {
    const index = attunedItems.indexOf(itemObject);
    attunedItems.splice(index, 1);
    inventoryItems.push(itemObject);
  }

  clearInventory();
  renderInventory();
}

let commonItems = [
  EVERTORCH,
  FLASK_OF_LIGHT,
  RING_OF_THE_RODENT,
  CHARM_OF_HEALING,
];
let rareItems = [EVERTORCH, EVERTORCH, EVERTORCH, EVERTORCH];
let epicItems = [EVERTORCH, EVERTORCH, EVERTORCH, EVERTORCH];
let foundItem;

function findItems() {
  // Arrays need to be updated after all item objects are created.
  let randomNumber = Math.round(Math.random() * 20 + baseFaith);
  randomNumber += isItemAttuned(GRAVEROBBERS_SPADE, 0);
  console.log(randomNumber);
  if (randomNumber >= 20) {
    let itemRarity = Math.round(Math.random() * 100 + baseFaith);
    if (itemRarity >= 91) {
      const epicIndex = Math.round(Math.random() * epicItems.length);
      foundItem = epicItems[epicIndex];
      epicItems.splice(epicIndex, 1);
      console.log("Epic Item Found!");
    } else if (itemRarity >= 61) {
      const rareIndex = Math.round(Math.random() * rareItems.length);
      foundItem = rareItems[rareIndex];
      rareItems.splice(rareIndex, 1);
      console.log("Rare Item Found!");
    } else {
      const commonIndex = Math.round(Math.random() * commonItems.length);
      foundItem = commonItems[commonIndex];
      commonItems.splice(commonIndex, 1);
      console.log("Common Item Found!");
    }

    currentRoom.contents.items.push(foundItem);
  }
}

function clearInventory() {
  magicItemsBox.textContent = "";
  consumablesBox.textContent = "";
  slotOne.textContent = "";
  slotTwo.textContent = "";
  slotThree.textContent = "";
  slotFour.textContent = "";
  slotFive.textContent = "";
}

function useConsumable(consumable) {
  itemObject = inventoryItems.find((inv) => inv.name === consumable);

  if (!itemObject === POTION) {
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);
  }

  itemObject.function();

  clearInventory();
  renderInventory();
}

// ===============================
//            Inventory
// ===============================

function openInventoryHandler() {
  inventoryModal.style.display = "block";
}

function closeInventoryHandler() {
  inventoryModal.style.display = "none";
}

inventoryButton.addEventListener("click", () => {
  clearInventory();
  renderInventory();
  openInventoryHandler();
});

closeInventoryButton.addEventListener("click", () => {
  closeInventoryHandler();
  clearInventory();

  // Updates stats after changing attuned items.
  if (heroChoice === "PALADIN") {
    setPaladinStats();
  } else if (heroChoice === "ROGUE") {
    setRogueStats();
  } else {
    setPriestessStats();
  }

  renderHeroStats();

  // ITEM: Shadowstep Boots - +1 Dexterity;
  let newDex = baseDexterity + isItemAttuned(SHADOWSTEP_BOOTS, 0);
  baseDexterity = newDex;
});

inventoryModal.addEventListener("click", (event) => {
  const buttons = document.getElementsByTagName("button"); // Use the plural 'buttons' to represent a collection

  for (let i = 0; i < buttons.length; i++) {
    if (magicItemsBox.contains(event.target) && event.target === buttons[i]) {
      attuneItem(buttons[i].id);
    }

    if (consumablesBox.contains(event.target) && event.target === buttons[i]) {
      useConsumable(buttons[i].id);
    }

    if (slotOne.contains(event.target) && event.target === buttons[i]) {
      removeItem(buttons[i].id);
    }

    if (slotTwo.contains(event.target) && event.target === buttons[i]) {
      removeItem(buttons[i].id);
    }

    if (slotThree.contains(event.target) && event.target === buttons[i]) {
      removeItem(buttons[i].id);
    }

    if (slotFour.contains(event.target) && event.target === buttons[i]) {
      removeItem(buttons[i].id);
    }

    if (slotFive.contains(event.target) && event.target === buttons[i]) {
      removeItem(buttons[i].id);
    }
  }
});

