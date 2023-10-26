// This file holds all the items and their logic.

// Inventory Modal
// Add sections to the modal
//  - An Attuned Section
//  - Items Section
//  - Consumables Section

let evertorch = {
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

let attunedItems = [];
let inventoryItems = [];

function isItemAttuned(item) {
  for (let i = 0; i < attunedItems.length; i++) {
    if (attunedItems[i] === item) {
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

let commonItems = [evertorch, evertorch, evertorch, evertorch, evertorch];
let rareItems = [evertorch, evertorch, evertorch, evertorch, evertorch];
let epicItems = [evertorch, evertorch, evertorch, evertorch, evertorch];
let foundItem;

function findItems() {
  // Arrays need to be updated after item objects are created.
  let randomNumber = Math.floor(Math.random() * 2 + baseFaith);
  if (randomNumber >= 2) {
    let itemRarity = Math.floor(Math.random() * 100 + (baseFaith * 2));
    if (itemRarity >= 91) {
      const commonIndex = Math.floor(Math.random() * commonItems.length);
      foundItem = commonItems[commonIndex];
      commonItems.splice(commonIndex, 1);
      console.log("Common Item Found!");
    } else if (itemRarity >= 61) {
      const rareIndex = Math.floor(Math.random() * rareItems.length);
      foundItem = rareItems[rareIndex];
      rareItems.splice(rareIndex, 1);
      console.log("Rare Item Found!");
    } else {
      const epicIndex = Math.floor(Math.random() * epicItems.length);
      foundItem = epicItems[epicIndex];
      epicItems.splice(epicIndex, 1);
      console.log("Epic Item Found!");

    }

    currentRoom.contents.items.push(foundItem);
  }
}
