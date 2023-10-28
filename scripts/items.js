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
    "While attuned to this item you are more likely to flee successfully.",
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
    "While attuned to this item your attacks deal additional damage against undead spirits.",
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
    name: 'Whispering Amulet',
    description: '',
    type: 'MAGIC',
    rarity: 'RARE',
    effect: 'While attuned to this item you can communicate with some undead creatures.',
    function: () => {
      // Option 1: While wearing it adds NPC rooms to the catacombRooms array.
      // Option 2: While wearing the player gets alternate dialogue options during event.
    }
 }

 const CURSED_MIRROR = {
  name: 'Cursed Mirror',
  description: '',
  type: 'MAGIC',
  rarity: 'RARE',
  effect: 'While attuned to this item a portion of all damage received is reflected back to the attacker.',
  function: () => {
    // See monsterAttackHandler for item logic.
    return 1;
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

let attunedItems = [];
let inventoryItems = [];

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
