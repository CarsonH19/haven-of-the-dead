const monsterNameElement = document.getElementById("monster-name");
const monsterSkullElement = document.getElementById("skull-level");

// ===============================
//            Gnawers
// ===============================

const GNAWER = {
  name: "Gnawer",
  type: "BEAST",
  skulls: 1,
  function: () => {
    DISEASED.function();
  },
};

// ===============================
//            Spiders
// ===============================

const CRYPT_CRAWLER = {
  name: "Crypt Crawler",
  type: "BEAST",
  skulls: 1,
};

const COFFIN_SPIDER = {
  name: "Coffin Spider",
  type: "BEAST",
  skulls: 3,
};

const BROODMOTHER = {
  name: "Broodmother",
  type: "BEAST",
  skulls: 6,
  function: () => {
    WEBBED.function();
  }
};

// ===============================
//           Scoundrels
// ===============================

const SCOUNDREL = {
  name: "Scoundrel",
  type: "HUMANOID",
  skulls: 2,
};

// ===============================
//           Skeletons
// ===============================

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
  function: () => {
    //writeToLog() erupts in flames on death
    damagePlayer(15);
    showDamage(15, "MONSTER");
    damageMonster(currentMonsterHealth);
    updatePlayerTrackers();
    damageFlashAnimation();
    healthLowAnimation();
  },
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
  function: () => {
    damageMonster(currentMonsterHealth);
    currentRoom.contents.monsters.push(
      DECREPIT_SKELETON,
      DECREPIT_SKELETON,
      DECREPIT_SKELETON
    );
    //writeToLog(); crumbles and reforms into smaller skeletons
  },
};

const FLOOD_OF_BONES = {
  name: "Flood of Bones",
  type: "UNDEAD",
  skulls: 8,
  function: () => {
    //writeToLog() if critical attack, spawns 2 decrepit skeletons
    currentRoom.contents.monsters.push(DECREPIT_SKELETON);
  },
};

const BARON_OF_BONE = {
  name: "Baron of Bone",
  type: "UNDEAD",
  skulls: 9,
};

// ===============================
//          Evil Spirits
// ===============================

const SHADE = {
  name: "Shade",
  type: "UNDEAD",
  skulls: 1,
};

const HAUNTING_SPIRIT = {
  name: "Haunting Spirit",
  type: "UNDEAD",
  skulls: 3,
  function: () => {
    HAUNTED.function(); // applies the haunted condition
    //writeToLog() gives you the haunted condition... causes Shades to randomly appear and attack you.
  },
};

const GRUDGE = {
  name: "Grudge",
  type: "UNDEAD",
  skulls: 5,
  function: () => {
    HAUNTED.function(); // applies the haunted condition
  },
};

// ===============================
//             NPCs
// ===============================

const GRERVILS_BODY = {
  name: "Grervil's Body",
  type: "UNDEAD",
  skulls: 3,
};

const HEADLESS_SKELETON = {
  name: "Headless Skeleton",
  type: "UNDEAD",
  skulls: 1,
};

const FORSAKEN_COMMANDER_STATS = {
  name: "Forsaken Commander",
  type: "UNDEAD",
  skulls: 6,
};

const SPECTRAL_SOLDIER = {
  name: "Spectral Soldier",
  type: "UNDEAD",
  skulls: 2,
};

const POSSESSED_EARVER = {
  name: "Graverobber Earver",
  type: "HUMANOID",
  skulls: 4,
};

const IVAN_STATS = {
  name: "Ivan the Scoundrel",
  type: "HUMANOID",
  skulls: 5,
  function: () => {
    // Ivan attacks and moves back behind another scoundrel
    let index = myArray.indexOf(IVAN_STATS);
    if (index > 0 && index < currentRoom.contents.monsters.length) {
      // Swap the current element with the one at the preceding index
      [array[index], array[index - 1]] = [array[index - 1], array[index]];
    }
  },
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
  fadeInAnimation(monsterContainer);
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
  setTimeout(() => {
    renderMonsterStatBlock(currentRoom.contents.monsters[0]);
    updatePlayerTrackers();
    togglePlayerControls();

    // ITEM: Sunstone - Damages undead creatures.
    isItemAttuned(SUNSTONE, 0);
    // ITEM: Warding Candle - Chance for evil spirits to flee.
    statusEffectHandler(WARDING_CANDLE);
    // ITEM: Fallen King's Crown - Evil spirits don't attack you.
    isItemAttuned(ETHEREAL_CROWN, 0);
  }, 1000);
}

function checkForMonsters() {
  currentRoom.contents.monsters.shift();

  if (currentRoom.contents.monsters.length > 0) {
    startBattle();
    console.log("Another Monster!");
  } else {
    console.log("RENDER SUMMARY CALLED!");
    attackCounter = 0; // Item: Soulreaver
    setTimeout(renderRoomSummaryModal, 5000);
    togglePlayerControls();
  }
}

function monsterAbilityHandler(monster) {
  switch (monster) {
    case BONE_TITAN:
      if (currentMonsterHealth <= 15) {
        console.log("Bone Titan Ability Called!");
        BONE_TITAN.function();
      }
      break;

    case BLAZING_SKELETON:
      if (currentMonsterHealth <= 5) {
        console.log("Blazing Skeleton Ability Called!");
        BLAZING_SKELETON.function();
      }
      break;

    case FLOOD_OF_BONES:
      if (criticalHitChance >= 20) {
        console.log("Flood of Bones Ability Called!");
        FLOOD_OF_BONES.function();
      }
      break;

    case HAUNTING_SPIRIT:
      let spiritHauntChance = Math.round(Math.random() * 50);
      if (spiritHauntChance === 50) {
        console.log("Haunting Spirit Ability Called!");
        HAUNTING_SPIRIT.function();
      }
      break;

    case GRUDGE:
      let grudgeHauntChance = Math.round(Math.random() * 20);
      if (grudgeHauntChance === 20) {
        console.log("Grudge Ability Called!");
        GRUDGE.function();
      }
      break;

    case GNAWER:
      let gnawerDiseaseChance = Math.round(Math.random() * 100);
      if (gnawerDiseaseChance === 100) {
        console.log("Gnawer Ability Called!");
        GNAWER.function();
      }
      break;

    case BROODMOTHER:
      let webChance = Math.round(Math.random() * 3);
      console.log(webChance);

      if (webChance === 3) {
        console.log("Broodmother Ability Called!");
        WEBBED.function();
      }
      break;
  }
}
