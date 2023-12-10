const monsterNameElement = document.getElementById("monster-name");
const monsterSkullElement = document.getElementById("skull-level");

// ===============================
//            Gnawers
// ===============================

const GNAWER = {
  name: "Gnawer",
  image: "styles/images/monsters/gnawer.jpg",
  type: "BEAST",
  skulls: 1,
  soundEffects: {
    spawn: ratSqueak9,
    attack: impactFleshChop,
    death: ratSqueak30,
  },
  function: () => {
    DISEASED.function(3);
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

// ===============================
//            Spiders
// ===============================

const CRYPT_CRAWLER = {
  name: "Crypt Crawler",
  image: "styles/images/monsters/crypt-crawler.jpg",
  type: "BEAST",
  skulls: 1,
  soundEffects: {
    spawn: spiderDaddyLong1,
    attack: spiderBiteFang3,
    death: alienSpiderWeb3,
    ability: spiderWebShoot7,
  },
  function: () => {
    WEBBED.function(4);
    soundEffectHandler(CRYPT_CRAWLER, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const COFFIN_SPIDER = {
  name: "Coffin Spider",
  type: "BEAST",
  skulls: 3,
  soundEffects: {
    spawn: spiderDaddyLong2,
    attack: spiderBiteFang3,
    death: alienSpiderWeb3,
    ability: spiderWebShoot7,
  },
  function: () => {
    WEBBED.function(5);
    soundEffectHandler(COFFIN_SPIDER, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const BROODMOTHER = {
  name: "Broodmother",
  image: "styles/images/monsters/broodmother.jpg",
  type: "BEAST",
  skulls: 6,
  soundEffects: {
    spawn: spiderDaddyLong2,
    attack: spiderBiteFang4,
    death: insectsSpider3,
    ability: larvaEggHatch4,
  },
  hatchEggCounter: 0,
  function: () => {
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    soundEffectHandler(BROODMOTHER, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

function webChance(chance) {
  let webChance = Math.round(Math.random() * chance);
  console.log(webChance);

  if (webChance === chance) {
    return true;
  }
}

// ===============================
//           Scoundrels
// ===============================

const SCOUNDREL = {
  name: "Scoundrel",
  image: "styles/images/monsters/scoundrel.jpg",
  type: "HUMANOID",
  skulls: 2,
  soundEffects: {
    spawn: swordFromSheath3,
    attack: knifeStab,
    death: fightGrunt6,
    ability: fleshStab3,
  },
  function: () => {
    POISONED.function(3);
    soundEffectHandler(SCOUNDREL, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

// ===============================
//        Cultists & Demons
// ===============================

const CULTIST = {
  name: "Cultist",
  type: "HUMANOID",
  skulls: 3,
  soundEffects: {
    spawn: swordFromSheath3,
    attack: knifeStab,
    death: fightGrunt6,
  },
};

const FIENDSWORN_CULTIST = {
  name: "Fiendsworn Cultist",
  type: "HUMANOID",
  skulls: 5,
  soundEffects: {
    spawn: "",
    attack: "",
    death: "",
  },
};

const DEMON = {
  name: "Demon",
  type: "DEMON",
  skulls: 7,
  soundEffects: {
    spawn: "",
    attack: "",
    death: "",
  },
  function: () => {},
};

// ===============================
//           Skeletons
// ===============================

const DECREPIT_SKELETON = {
  name: "Decrepit Skeleton",
  image: 'styles/images/monsters/decrepit-skeleton-one.jpg',
  type: "UNDEAD",
  skulls: 1,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: impactPunchBody2,
    death: boneBreak8,
  },
};

const SKELETAL_SOLDIER = {
  name: "Skeletal Soldier",
  image: "styles/images/monsters/skeletal-soldier.jpg",
  type: "UNDEAD",
  skulls: 2,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: severMetalHit2,
    death: boneBreak8,
  },
};

const ARMORED_SKELETON = {
  name: "Armored Skeleton",
  image: "styles/images/monsters/armored-skeleton.jpg",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: severMetalHit2,
    death: armorMetalClanksToTheGround,
  },
};

const LEGIONNAIRE = {
  name: "Undead Legionnaire",
  type: "UNDEAD",
  skulls: 4,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: severMetalHit2,
    death: armorMetalClanksToTheGround,
  },
};

const UNDEAD_PHALANX = {
  name: "Undead Legion Phalanx",
  type: "UNDEAD",
  skulls: 9,
  attackCounter: 0,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: severMetalHit2,
    death: armorMetalClanksToTheGround,
  },
  function: (attacks) => {
    //Altered Monster Attack Handler
    function phalanxAttacks() {
      let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);

      // Rogue Passive Ability Checker
      if (heroChoice === "ROGUE" && evasionTracker >= monsterToPlayerDamage) {
        monsterToPlayerDamage = 0;
        soundEffectHandler(swordSwingWhoosh, "MONSTER MISS");
        writeToLogHero(LOG_EVASION, "NO");
      }

      damagePlayer(monsterToPlayerDamage);
      writeToLogMonster(LOG_MONSTER_ATTACK, "NO", monsterToPlayerDamage);
    }

    function attackSounds() {
      const sound = Math.floor(Math.random() * 5) + 1;

      switch (sound) {
        case 1:
          severMetalHit2.play();
          break;
        case 2:
          fleshHit5.play();
          break;
        case 3:
          fleshStab3.play();
          break;
        case 4:
          knifeStab.play();
          break;
        case 5:
          swordImpactRock1.play();
          break;
      }
    }

    if (currentMonsterHealth <= 110) {
      damageMonster(currentMonsterHealth);
      for (let i = 0; i < 4; i++) {
        LOST_LEGIONS_VALE.contents.monsters.push(LEGIONNAIRE);
      }
      writeToLogMonster(LOG_MONSTER_ABILITY, "YES", "LOSE FORMATION");
    } else {
      const phalanxInterval = setInterval(() => {
        if (UNDEAD_PHALANX.attackCounter >= attacks) {
          clearInterval(phalanxInterval);
        }

        console.log("ATTACK MADE");
        UNDEAD_PHALANX.attackCounter++;
        attackSounds();
        phalanxAttacks();
        updatePlayerTrackers();
      }, 500);
    }

    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const BLAZING_SKELETON = {
  name: "Blazing Skeleton",
  image: "styles/images/monsters/blazing-skeleton.jpg",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: torchPassBy1,
    death: boneBreak8,
    ability: magicSpellFire1,
  },
  function: () => {
    //writeToLog() erupts in flames on death
    damagePlayer(15);
    damageMonster(currentMonsterHealth);
    showDamage(15, "MONSTER");
    updatePlayerTrackers();
    soundEffectHandler(BLAZING_SKELETON, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const DRAUGR = {
  name: "Draugr",
  image: "styles/images/monsters/draugr.jpg",
  type: "UNDEAD",
  skulls: 6,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: severMetalHit2,
    death: boneBreak8,
    ability: iceCrackFreeze,
  },
  function: () => {
    CHILLED.function(5);
    soundEffectHandler(DRAUGR, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const BONE_TITAN = {
  name: "Bone Titan",
  type: "UNDEAD",
  skulls: 7,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: fleshHit5,
    death: boneBreak8,
    ability: boneBreak7,
  },
  function: () => {
    damageMonster(currentMonsterHealth);
    currentRoom.contents.monsters.push(
      DECREPIT_SKELETON,
      DECREPIT_SKELETON,
      DECREPIT_SKELETON
    );

    soundEffectHandler(BONE_TITAN, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const FLOOD_OF_BONES = {
  name: "Flood of Bones",
  type: "UNDEAD",
  skulls: 9,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: fleshHit5,
    death: boneBreak8,
    ability: boneBreak7,
  },
  function: () => {
    //writeToLog() if critical attack, spawns 2 decrepit skeletons
    currentRoom.contents.monsters.push(DECREPIT_SKELETON);
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const BARON_OF_BONE = {
  name: "Baron of Bone",
  type: "UNDEAD",
  skulls: 9,
  spawn: boneCrunchCrack1,
  attack: fleshHit5,
  death: boneBreak8,
  ability: boneBreak7,
};

// ===============================
//          Evil Spirits
// ===============================

const SHADE = {
  name: "Shade",
  type: "UNDEAD",
  skulls: 1,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: getEvilSpiritAudio(),
    death: ghostHowl,
  },
};

const HAUNTING_SPIRIT = {
  name: "Haunting Spirit",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: getEvilSpiritAudio(),
    death: ghostHowl,
  },
  function: () => {
    HAUNTED.function();
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const GRUDGE = {
  name: "Grudge",
  type: "UNDEAD",
  skulls: 5,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: getEvilSpiritAudio(),
    death: ghostShriekWhoosh,
  },
  function: () => {
    HAUNTED.function();
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

function getEvilSpiritAudio() {
  let audio = Math.floor(Math.random() * 3) + 1;

  if (audio === 1) {
    return whooshGhost;
  } else if (audio === 2) {
    return whooshGhostBy1;
  } else if (audio === 3) {
    return whooshGhostBy2;
  }
}

// ===============================
//             NPCs
// ===============================

const GRERVILS_BODY = {
  name: "Grervil's Body",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: impactPunchBody2,
    death: boneBreak8,
  },
};

const HEADLESS_SKELETON = {
  name: "Headless Skeleton",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: impactPunchBody2,
    death: boneBreak8,
  },
};

const FORSAKEN_COMMANDER_STATS = {
  name: "Forsaken Commander",
  type: "UNDEAD",
  skulls: 6,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: getEvilSpiritAudio(),
    death: ghostHowl,
  },
};

const POSSESSED_EARVER = {
  name: "Graverobber Earver",
  type: "HUMANOID",
  skulls: 4,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: skullHitShovel,
    death: fightGrunt6,
  },
  function: () => {
    HAUNTED.function();
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const IVAN_STATS = {
  name: "Ivan the Scoundrel",
  type: "HUMANOID",
  skulls: 6,
  soundEffects: {
    spawn: swordFromSheath3,
    attack: knifeStab,
    death: fightGrunt6,
  },
  function: () => {
    // Ivan attacks and moves back behind another scoundrel
    let index = myArray.indexOf(IVAN_STATS);
    if (index > 0 && index < currentRoom.contents.monsters.length) {
      // Swap the current element with the one at the preceding index
      [array[index], array[index - 1]] = [array[index - 1], array[index]];
    }

    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

// ===============================
//        MONSTER LOGIC
// ===============================

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

  if (currentRoom.contents.monsters[0] === UNDEAD_PHALANX) {
    monsterMaxHealth = 180;
    monsterAttackValue = 4;
  }
}

function renderMonsterStatBlock(monster) {
  fadeInAnimation(monsterContainer);

  if (!monster.image) {
    monsterContainer.style.display = "flex";
    monsterNameElement.textContent = monster.name;
    monsterSkullElement.textContent = monster.skulls;
    monsterImage.style.display = "none";
  } else {
    fadeInAnimation(monsterImage);
    monsterContainer.style.display = "flex";
    monsterNameElement.textContent = monster.name;
    monsterSkullElement.textContent = monster.skulls;
    monsterImage.style.display = "block";
    monsterImage.style.backgroundImage = `url(${monster.image})`;
  }

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
    isItemAttuned(SUNSTONE);
    // ITEM: Rattlebone Whistle - Chance for humanoids to flee.
    isItemAttuned(RATTLEBONE_WHISTLE);
    // ITEM: Fallen King's Crown - Evil spirits don't attack you.
    isItemAttuned(ETHEREAL_CROWN);
    // ITEM: Warding Candle - Chance for evil spirits to flee.
    statusEffectHandler(WARDING_CANDLE);
  }, 1000);

  soundEffectHandler(currentRoom.contents.monsters[0], "SPAWN");
}

function checkForMonsters() {
  // If Legionnaire Killed Adds to Legion Tracker
  if (currentRoom.contents.monsters[0] === LEGIONNAIRE) {
    legionTracker++;
  }

  // Removes Monster From Rooms Monsters Arry
  currentRoom.contents.monsters.shift();

  // Checks for more monsters
  if (currentRoom.contents.monsters.length > 0) {
    startBattle();
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
      if (criticalHit >= 20) {
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

    case POSSESSED_EARVER:
      let earverHauntChance = Math.round(Math.random() * 20);
      if (earverHauntChance === 20) {
        console.log("Earver Ability Called!");
        POSSESSED_EARVER.function();
      }
      break;

    case GNAWER:
      let gnawerDiseaseChance = Math.floor(Math.random() * 21);
      if (gnawerDiseaseChance === 20) {
        console.log("Gnawer Ability Called!");
        GNAWER.function();
      }
      break;

    case CRYPT_CRAWLER:
      if (webChance(4)) {
        console.log("Crypt Crawler Ability Called!");
        setTimeout(CRYPT_CRAWLER.function, 300);
      }
      break;

    case COFFIN_SPIDER:
      if (webChance(3)) {
        console.log("Coffin Spider Ability Called!");
        setTimeout(CRYPT_CRAWLER.function, 300);
      }
      break;

    case BROODMOTHER:
      if (BROODMOTHER.hatchEggCounter === 3) {
        console.log("Broodmother Ability Called!");
        BROODMOTHER.hatchEggCounter = 0;
        BROODMOTHER.function();
      } else {
        BROODMOTHER.hatchEggCounter++;
      }
      break;

    case DRAUGR:
      const chilledChance = Math.round(Math.random() * 9);
      if (chilledChance >= 8) {
        DRAUGR.function();
      }
      break;

    case SCOUNDREL:
      const poisonDagger = Math.round(Math.random() * 9);
      if (poisonDagger >= 9) {
        SCOUNDREL.function();
      }
      break;

    case UNDEAD_PHALANX:
      if (currentMonsterHealth > 160) {
        UNDEAD_PHALANX.function(5);
        UNDEAD_PHALANX.attackCounter = 0;
      } else if (currentMonsterHealth > 130) {
        UNDEAD_PHALANX.function(4);
        UNDEAD_PHALANX.attackCounter = 0;
      } else if (currentMonsterHealth > 110) {
        UNDEAD_PHALANX.function(3);
        UNDEAD_PHALANX.attackCounter = 0;
      } else if (currentMonsterHealth <= 110) {
        UNDEAD_PHALANX.function(0);
      }
      break;
  }
}
