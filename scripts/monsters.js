const monsterNameElement = document.getElementById("monster-name");
const monsterSkullElement = document.getElementById("skull-level");

const CRYPT_CRAWLER = {
  name: "Crypt Crawler",
  type: "BEAST",
  skulls: 1,
};

const DECREPIT_SKELETON = {
  name: "Decrepit Skeleton",
  type: "UNDEAD",
  skulls: 1,
};

const SKELETAL_SOLDIER = {
  name: "Skeletal Soldier",
  type: "UNDEAD",
  skulls: 2,
};

const ARMORED_SKELETON = {
  name: "Armored Skeleton",
  type: "UNDEAD",
  skulls: 3,
};

const BLAZING_SKELETON = {
  name: "Blazing Skeleton",
  type: "UNDEAD",
  skulls: 3,
};

const DRAUGR = {
  name: "Draugr",
  type: "UNDEAD",
  skulls: 6,
};

const BONE_TITAN = {
  name: "Bone Titan",
  type: "UNDEAD",
  skulls: 7,
};

const FLOOD_OF_BONES = {
  name: "Flood of Bones",
  type: "UNDEAD",
  skulls: 8,
};

const BARON_OF_BONE = {
  name: "Baron of Bone",
  type: "UNDEAD",
  skulls: 9,
};

const SHADE = {
  name: "Shade",
  type: "UNDEAD",
  skulls: 1,
};

const HAUNTING_SPIRIT = {
  name: "Haunting Spirit",
  type: "UNDEAD",
  skulls: 3,
};

const GRUDGE = {
  name: "Grudge",
  type: "UNDEAD",
  skulls: 5,
};

const GNAWER = {
  name: "Gnawer",
  type: "BEAST",
  skulls: 1,
};

const COFFIN_SPIDER = {
  name: "Coffin Spider",
  type: "BEAST",
  skulls: 2,
};

const SCOUNDREL = {
  name: "Scoundrel",
  type: "BEAST",
  skulls: 2,
};

function monsterSkullLevel(level) {
  switch (level) {
    case 1:
      monsterMaxHealth = 20;
      monsterAttackValue = 3;
      break;
    case 2:
      monsterMaxHealth = 30;
      monsterAttackValue = 4;
      break;
    case 3:
      monsterMaxHealth = 40;
      monsterAttackValue = 5;
      break;
    case 4:
      monsterMaxHealth = 50;
      monsterAttackValue = 6;
      break;
    case 5:
      monsterMaxHealth = 70;
      monsterAttackValue = 8;
      break;
    case 6:
      monsterMaxHealth = 90;
      monsterAttackValue = 10;
      break;
    case 7:
      monsterMaxHealth = 110;
      monsterAttackValue = 12;
      break;
    case 8:
      monsterMaxHealth = 150;
      monsterAttackValue = 15;
      break;
    case 9:
      monsterMaxHealth = 200;
      monsterAttackValue = 18;
      break;
  }
}

function renderMonsterStatBlock(monster) {
  monsterContainer.style.display = "flex";
  monsterNameElement.textContent = monster.name;
  monsterSkullElement.textContent = monster.skulls;
  monsterSkullLevel(monster.skulls);
  // ITEM: Flask of Light - Weakens evil spirits.
  isItemAttuned(FLASK_OF_LIGHT, 0); 
  setMonsterHealth(monsterMaxHealth);
}

function setMonsterHealth(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  currentMonsterHealth = maxLife;
}

function startBattle() {
  renderMonsterStatBlock(currentRoom.contents.monsters[0]);
  togglePlayerControls();

  // ITEM: Sunstone - Damages undead creatures.
  isItemAttuned(SUNSTONE, 0);
  // ITEM: Warding Candle - Chance for evil spirits to flee.
  isItemAttuned(WARDING_CANDLE, 0); 
}

function checkForMonsters() {
  currentRoom.contents.monsters.shift();

  if (currentRoom.contents.monsters.length > 0) {
    startBattle();
    console.log("Another Monster!");
  } else {
    console.log('RENDER SUMMARY CALLED!');
    renderRoomSummaryModal();
    togglePlayerControls();
  }
}
