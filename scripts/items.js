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
  effect: "While attuned to this item ghosts are weakened by your pressence.",
  function: () => {
    if (
      currentRoom.contents.monsters[0] === SHADE ||
      currentRoom.contents.monsters[0] === GHOST ||
      currentRoom.contents.monsters[0] === GRUDGE
    ) {
      monsterMaxHealth = monsterMaxHealth - 15;
      monsterAttackValue = monsterAttackValue - 2;
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
    playerMaxHealth += 20;
  },
};

const GRAVEROBBERS_SPADE = {
  name: "Graverobber's Spade",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you are slightly more likely to find items.",
  function: () => {
    return 1;
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
    currentPlayerHealth += 10;
  },
};

const RING_OF_THE_RODENT = {
  name: "Ring of the Rodent",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you are slightly more likely to flee successfully.",
  function: () => {
    return 2;
  },
};

const MIST_VEIL_CLOAK = {
  name: "Mist Veil Cloak",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you have a slight chance of evading enemy attacks.",
  function: () => {
    let randomNumber = Math.floor(Math.random() * 25);
    if (randomNumber === 25) {
      playerHealthBar.value = playerHealthBar.value;
      currentPlayerHealth = currentPlayerHealth;
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

    switch (monsterLevel) {
      case 1:
        currentPlayerHealth += 2;
        break;
      case 2:
        currentPlayerHealth += 3;
        break;
      case 3:
        currentPlayerHealth += 4;
        break;
      case 4:
        currentPlayerHealth += 5;
        break;
      case 5:
        currentPlayerHealth += 7;
        break;
      case 6:
        currentPlayerHealth += 9;
        break;
      case 7:
        currentPlayerHealth += 11;
        break;
      case 8:
        currentPlayerHealth += 15;
        break;
      case 9:
        currentPlayerHealth += 20;
        break;
    }
  },
};

const WRAITHBANE = {
    name: 'Wraithbane',
    description: '',
    type: 'MAGIC',
    rarity: 'RARE',
    effect: 'While attuned to this item your attacks deal additional damage against ghosts.',
    function: () => {
      if (currentRoom.contents.monsters[0].type === 'GHOST') {
        console.log(`+5 Damage`)
        return 5;
      } else {
        return 0;
      }
    }
 }

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

let attunedItems = [WRAITHBANE];
let inventoryItems = [];

function isItemAttuned(item) {
  for (let i = 0; i < attunedItems.length; i++) {
    if (attunedItems[i] === item) {
      console.log(`${item.name} is being used!`)
      return item.function();
    }
  }
}

function addItemToInventory(item) {
  inventoryItems.push(item);
}

function renderInventory() {
  const magicItemsBox = document.getElementById("magicItemsBox");
  const consumablesBox = document.getElementById("consumablesBox");

  for (let i = 0; i < inventoryItems.length; i++) {
    const itemBox = document.createElement("div");
    const itemName = document.createElement("p");
    itemName.textContent = inventoryItems[i].name;
    const itemButton = document.createElement("button");

    itemBox.appendChild(itemName);
    itemBox.appendChild(itemButton);

    if (inventoryItems[i].type === "MAGIC") {
      magicItemsBox.appendChild(itemBox);
    } else {
      consumablesBox.appendChild(itemBox);
    }
  }
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
  // Arrays need to be updated after item objects are created.
  let randomNumber = Math.floor(Math.random() * 2 + baseFaith);
  if (randomNumber >= 2) {
    let itemRarity = Math.floor(Math.random() * 100 + baseFaith * 2);
    if (itemRarity >= 91) {
      const epicIndex = Math.floor(Math.random() * epicItems.length);
      foundItem = epicItems[epicIndex];
      epicItems.splice(epicIndex, 1);
      console.log("Epic Item Found!");
      // Write to Log
    } else if (itemRarity >= 61) {
      const rareIndex = Math.floor(Math.random() * rareItems.length);
      foundItem = rareItems[rareIndex];
      rareItems.splice(rareIndex, 1);
      console.log("Rare Item Found!");
      // Write to Log
    } else {
      const commonIndex = Math.floor(Math.random() * commonItems.length);
      foundItem = commonItems[commonIndex];
      commonItems.splice(commonIndex, 1);
      console.log("Common Item Found!");
      // Write to Log
    }

    currentRoom.contents.items.push(foundItem);
  }
}
