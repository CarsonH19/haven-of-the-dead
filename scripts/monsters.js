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
    attack: lightAttackSounds,
    death: fightGrunt6,
    ability: lightAttackSounds,
  },
  function: () => {
    POISONED.function(3);
    soundEffectHandler(SCOUNDREL, "MONSTER ABILITY");
  },
};

// ===============================
//        Cultists & Demons
// ===============================

const CULTIST = {
  name: "Cultist",
  image: "styles/images/monsters/cultist.jpg",
  type: "HUMANOID",
  skulls: 3,
  soundEffects: {
    spawn: swordFromSheath3,
    attack: lightAttackSounds,
    death: fightGrunt6,
    ability: evilSpell1,
  },
  function: () => {
    CURSED.function(5);
  },
};

const FIENDSWORN_CULTIST = {
  name: "Fiendsworn Cultist",
  image: "styles/images/monsters/fiendsworn-cultist.jpg",
  type: "HUMANOID",
  skulls: 5,
  soundEffects: {
    spawn: swordFromSheath3,
    attack: lightAttackSounds,
    death: fightGrunt6,
    ability: evilSpell1,
  },
  function: () => {
    CURSED.function(7);
  },
};

// ===============================
//           Skeletons
// ===============================

const DECREPIT_SKELETON = {
  name: "Decrepit Skeleton",
  image: "styles/images/monsters/decrepit-skeleton-one.jpg",
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
    attack: heavyAttackSounds,
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
    attack: heavyAttackSounds,
    death: armorMetalClanksToTheGround,
  },
};

const LEGIONNAIRE = {
  name: "Undead Legionnaire",
  image: "styles/images/monsters/legionnaire.jpg",
  type: "UNDEAD",
  skulls: 4,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: heavyAttackSounds,
    death: armorMetalClanksToTheGround,
  },
};

const UNDYING_WARBAND = {
  name: "Undying Warband",
  boss: "Undying Warband",
  type: "UNDEAD",
  skulls: 9,
  attackCounter: 0,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: lightAttackSounds,
    death: armorMetalClanksToTheGround,
  },
  function: (attacks) => {
    //Altered Monster Attack Handler
    function warbandAttacks() {
      let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);

      damagePlayer(monsterToPlayerDamage);
      writeToLogMonster(LOG_MONSTER_ATTACK, "NO", monsterToPlayerDamage);
    }

    if (currentMonsterHealth <= 110) {
      damageMonster(currentMonsterHealth);
      for (let i = 0; i < 4; i++) {
        FALLEN_WARRIORS_VALE.contents.monsters.push(ARMORED_SKELETON);
      }
    } else {
      const warbandInterval = setInterval(() => {
        if (UNDYING_WARBAND.attackCounter >= attacks) {
          clearInterval(warbandInterval);
        }

        console.log("ATTACK MADE");
        UNDYING_WARBAND.attackCounter++;
        soundEffectHandler(heavyAttackSounds());
        warbandAttacks();
        updatePlayerTrackers();
      }, 500);
    }
  },
};

const BLAZING_SKELETON = {
  name: "Blazing Skeleton",
  image: "styles/images/monsters/blazing-skeleton.jpg",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: magicAttackSounds,
    death: boneBreak8,
    ability: magicAttackSounds,
  },
  function: () => {
    //writeToLog() erupts in flames on death !FIX!
    damageMonster(currentMonsterHealth);
    BURNED.function(3);
    soundEffectHandler(BLAZING_SKELETON, "MONSTER ABILITY");
    writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
  },
};

const DRAUGR = {
  name: "Draugr",
  image: "styles/images/monsters/draugr.jpg",
  type: "UNDEAD",
  skulls: 5,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: heavyAttackSounds,
    death: boneBreak8,
    ability: iceCrackFreeze,
  },
  function: () => {
    CHILLED.function(5);
    soundEffectHandler(DRAUGR, "MONSTER ABILITY");
  },
};

const BONE_TITAN = {
  name: "Bone Titan",
  image: "styles/images/monsters/bone-titan.jpg",
  type: "UNDEAD",
  skulls: 7,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: heavyAttackSounds,
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
  },
};

const BONEVAULT_DEMON = {
  name: "Bonevault Demon",
  boss: "Bonevault Demon",
  type: "UNDEAD",
  skulls: 7,
  soundEffects: {
    // !FIX! Add sound effects
    spawn: boneCrunchCrack1,
    attack: heavyAttackSounds,
    death: boneBreak8,
    ability: boneBreak7,
  },
  tracker: 0,
  function: () => {
    if (BONEVAULT_DEMON.tracker === 3) {
      writeToLogMonster(LOG_MONSTER_ABILITY, "YES", BONEVAULT_DEMON);
    }
  },
};

function endBonevaultDemonBoss() {
  if (
    currentRoom.roomName === "Bonevault" &&
    BONEVAULT_DEMON.boss === "FIGHTING" &&
    currentRoom.contents.monsters.length <= 0
  ) {
    BONEVAULT_DEMON.boss = "DEFEATED";
    setTimeout(newRoomAnimation, 1000);
    setTimeout(() => {
      playMusic(currentRoom.music);
      renderBackground(currentRoom.backgroundImage);
    }, 2500);
    togglePlayerControls();
  }
}

const FLOOD_OF_BONES = {
  name: "Flood of Bones",
  boss: "Flood of Bones",
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
  },
};

function endFloodOfBonesBoss() {
  if (
    currentRoom.roomName === "Flood of Bones" &&
    currentRoom.contents.monsters.length <= 0
  ) {
    setTimeout(newRoomAnimation, 1000);
    setTimeout(() => {
      let defeatedFloodImage =
        "styles/images/backgrounds/tier-one/flood-of-bones-defeated.jpg";
      playMusic(pileOfBones);
      renderBackground(defeatedFloodImage);
    }, 2500);
    togglePlayerControls();
  }
}

const UNDEAD_SIGGURD = {
  name: "Death Knight Siggurd",
  image: "styles/images/monsters/undead-siggurd.jpg",
  type: "UNDEAD",
  skulls: 9,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: heavyAttackSounds,
    death: armorMetalClanksToTheGround,
    ability: magicAttackSounds,
  },
  tracker: 0,
  function: () => {
    //
  },
};

const UNDEAD_LIHETH = {
  name: "The Unholy Flame, Liheth",
  image: "styles/images/monsters/undead-liheth.jpg",
  type: "UNDEAD",
  skulls: 9,
  soundEffects: {
    spawn: magicGuardSounds,
    attack: magicAttackSounds,
    death: armorMetalClanksToTheGround,
    ability: magicAttackSounds,
  },
  tracker: 0,
  function: () => {
    UNDEAD_LIHETH.tracker = 0;

    monsterHealthBar.value = +monsterHealthBar.value + 30;
    currentMonsterHealth += 30;

    if (currentMonsterHealth > monsterMaxHealth) {
      monsterHealthBar.value = monsterMaxHealth;
      currentMonsterHealth = monsterMaxHealth;
    }

    updatePlayerTrackers();
  },
};

const UNDEAD_RIVEN = {
  name: "Riven, Shadow of the Baron",
  image: "styles/images/monsters/undead-riven.jpg",
  type: "UNDEAD",
  skulls: 9,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: lightAttackSounds,
    death: ghostShriekWhoosh,
    ability: lightAttackSounds,
  },
  attackCounter: 0,
  tracker: 0,
  function: () => {
    function undeadRivenAttacks() {
      let monsterToPlayerDamage = dealPlayerDamage(monsterAttackValue);

      damagePlayer(monsterToPlayerDamage);
      writeToLogMonster(LOG_MONSTER_ATTACK, "NO", monsterToPlayerDamage);
    }

    let undeadRivenInterval = setInterval(() => {
      if (UNDEAD_RIVEN.attackCounter > 0) {
        UNDEAD_RIVEN.attackCounter--;

        undeadRivenAttacks();
        isGameOver();
      } else {
        clearInterval(undeadRivenInterval);
      }
    }, 500);

    // playerControlsTimeout(1500);
  },
};

const BARON_OF_BONE = {
  name: "Baron of Bone",
  boss: "Baron of Bone",
  type: "UNDEAD",
  skulls: 9,
  soundEffects: {
    spawn: evilSpell1,
    attack: magicAttackSounds,
    death: armorMetalClanksToTheGround,
  },
  function: () => {
    const conditionsArray = [POISONED, DISEASED, CHILLED, BURNED, CURSED];
    let index = Math.floor(Math.random() * conditionsArray.length);

    let condition = conditionsArray[index];
    condition.function(9);
  },
};

// ===============================
//          Evil Spirits
// ===============================

const SHADE = {
  name: "Shade",
  image: "styles/images/monsters/shade.jpg",
  type: "UNDEAD",
  skulls: 1,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: getEvilSpiritAudio,
    death: ghostHowl,
  },
};

const HAUNTING_SPIRIT = {
  name: "Haunting Spirit",
  image: "styles/images/monsters/haunting-spirit.jpg",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: getEvilSpiritAudio,
    death: ghostHowl,
  },
  function: () => {
    HAUNTED.function(5);
  },
};

const GRUDGE = {
  name: "Grudge",
  image: "styles/images/monsters/grudge.jpg",
  type: "UNDEAD",
  skulls: 5,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: getEvilSpiritAudio,
    death: ghostShriekWhoosh,
  },
  function: () => {
    HAUNTED.function(7);
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
  image: "styles/images/npcs/grervils-body.jpg",
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
  image: "styles/images/npcs/grervils-body.jpg",
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
  image: "styles/images/npcs/commander.jpg",
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
  image: "styles/images/npcs/possessed-earver.jpg",
  type: "HUMANOID",
  skulls: 4,
  soundEffects: {
    spawn: ghostAppearance1,
    attack: skullHitShovel,
    death: fightGrunt6,
  },
  function: () => {
    HAUNTED.function(7);
  },
};

const IVAN_STATS = {
  name: "Ivan the Scoundrel",
  image: "styles/images/npcs/ivan-the-scoundrel.jpg",
  type: "HUMANOID",
  skulls: 5,
  soundEffects: {
    spawn: swordFromSheath3,
    attack: lightAttackSounds,
    death: fightGrunt6,
  },
  abilityCounter: 0,
  function: () => {
    // Ivan attacks and moves back behind another scoundrel to treat his wounds
    let room = currentRoom.contents.monsters;
    if (room.length > 0) {
      // must be called before the monsters swap
      let temp = room[0];
      room[0] = room[1];
      room[1] = temp;
      currentRoom.contents.monsters = room;
      renderMonsterStatBlock(room[0]); // Needed to load swapped monster
      soundEffectHandler(bodyShove);
      soundEffectHandler(humanLaugh25);
    }
  },
};

// ===============================
//        MONSTER LOGIC
// ===============================

function monsterSkullLevel(level) {
  let monster = currentRoom.contents.monsters[0];
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

  // Logic for bosses & specific case monsters
  switch (monster) {
    case FLOOD_OF_BONES:
      monsterMaxHealth = 400;
      monsterAttackValue = 10;
      break;

    case BONEVAULT_DEMON:
      monsterMaxHealth = 180;
      monsterAttackValue = 12;
      break;

    case UNDYING_WARBAND:
      monsterMaxHealth = 260;
      monsterAttackValue = 5;
      break;

    case BARON_OF_BONE:
      monsterMaxHealth = 800;
      monsterAttackValue = 25;
      break;
  }
}

function renderMonsterStatBlock(monster) {
  fadeInAnimation(monsterContainer);

  if (monster.boss) {
    //
  } else {
    fadeInAnimation(monsterImage);
    monsterImage.style.display = "block";
    monsterImage.style.backgroundImage = `url(${monster.image})`;
  }

  monsterContainer.style.display = "flex";
  monsterNameElement.textContent = monster.name;
  // monsterSkullElement.textContent = monster.skulls;

  monsterSkullLevel(monster.skulls);

  // ITEM: Sunstone - Reduces the Attack & Max HP of Evil Spirits
  isItemAttuned(SUNSTONE, null);
  // ITEM: Bonechill Amulet - Reduces the Attack & Max HP of Humans & Beasts
  isItemAttuned(BONECHILL_AMULET, null);

  setMonsterHealth(monsterMaxHealth);

  monsterContainer.style.maxWidth = `${monsterMaxHealth + 350}px`;

  togglePlayerControls();
}

function setMonsterHealth(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  currentMonsterHealth = maxLife;
}

function startBattle() {
  setTimeout(() => {
    renderMonsterStatBlock(currentRoom.contents.monsters[0]);
    // Checks for Paladin Passive
    setTimeout(paladinRadiantAura, 1500);
    // ITEM: Rattlebone Whistle - Chance for humanoids to flee.
    isItemAttuned(RATTLEBONE_WHISTLE);
    // ITEM: Fallen King's Crown - Evil spirits don't attack you.
    isItemAttuned(ETHEREAL_CROWN);
    // ITEM: Warding Candle - Chance for evil spirits to flee.
    statusEffectHandler(WARDING_CANDLE);
    updatePlayerTrackers();

    setControlsInterval("START");
  }, 1000);

  soundEffectHandler(currentRoom.contents.monsters[0], "SPAWN");
}

function checkForMonsters() {
  const monster = currentRoom.contents.monsters;
  // Checks for Legionnaire / Adds to Legion Tracker
  if (monster[0] === LEGIONNAIRE) {
    legionTracker++;
  }

  // ITEM - Bone Amalgum: Adds temporary HP
  boneAmalgamAddHitPoints();

  // Removes Monster From Rooms Monsters Array
  monster.shift();

  // Used to change the room after defeating a boss
  endBattlefieldEvent();
  endBonevaultDemonBoss();
  endFloodOfBonesBoss();

  // Checks for more monsters
  if (monster.length > 0) {
    // setControlsInterval("PAUSE", 1100);
    startBattle();
  } else {
    console.log("All monsters defeated");
    attackCounter = 0; // Item: Soulreaver
    setTimeout(renderRoomSummaryModal, 5000);
  }

  setControlsInterval("STOP");
}

function monsterAbilityHandler(monster) {
  if (monster.function) {
    switch (monster) {
      case BONE_TITAN:
        if (currentMonsterHealth <= 15) {
          console.log("Bone Titan Ability Called!");
          BONE_TITAN.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case FLOOD_OF_BONES:
        if (criticalHit >= 20) {
          // !FIX! add healing and change log to collecting bones and restoring health
          console.log("Flood of Bones Ability Called!");
          FLOOD_OF_BONES.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case HAUNTING_SPIRIT:
        let spiritHauntChance = Math.floor(Math.random() * 20) + 1;
        if (spiritHauntChance === 20) {
          console.log("Haunting Spirit Ability Called!");
          HAUNTING_SPIRIT.function();
        }
        break;

      case GRUDGE:
        let grudgeHauntChance = Math.floor(Math.random() * 10) + 1;
        if (grudgeHauntChance === 10) {
          console.log("Grudge Ability Called!");
          GRUDGE.function();
        }
        break;

      case POSSESSED_EARVER:
        let earverHauntChance = Math.floor(Math.random() * 20) + 1;
        if (earverHauntChance === 20) {
          console.log("Earver Ability Called!");
          POSSESSED_EARVER.function();
        }
        break;

      case GNAWER:
        let gnawerDiseaseChance = Math.floor(Math.random() * 20) + 1;
        if (gnawerDiseaseChance === 20) {
          console.log("Gnawer Ability Called!");
          GNAWER.function();
        }
        break;

      case CRYPT_CRAWLER:
        if (webChance(4)) {
          console.log("Crypt Crawler Ability Called!");
          setTimeout(CRYPT_CRAWLER.function, 300);
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case BROODMOTHER:
        if (BROODMOTHER.hatchEggCounter === 3) {
          console.log("Broodmother Ability Called!");
          BROODMOTHER.hatchEggCounter = 0;
          BROODMOTHER.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else {
          BROODMOTHER.hatchEggCounter++;
        }
        break;

      case DRAUGR:
        const chilledChance = Math.floor(Math.random() * 20) + 1;
        if (chilledChance >= 20) {
          console.log("Draugr Ability Called!");
          DRAUGR.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case SCOUNDREL:
        const poisonedChance = Math.floor(Math.random() * 20) + 1;
        if (poisonedChance >= 20) {
          console.log("Scoundrel Ability Called!");
          SCOUNDREL.function();
        }
        break;

      case CULTIST:
        const cursedChance = Math.floor(Math.random() * 20) + 1;
        if (cursedChance >= 20) {
          console.log("Cultist Ability Called!");
          CULTIST.function();
        }
        break;

      case IVAN_STATS:
        if (
          currentMonsterHealth < 40 &&
          currentRoom.contents.monsters.length >= 2
        ) {
          console.log("Ivan Ability Called!");
          IVAN_STATS.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case UNDYING_WARBAND:
        if (currentMonsterHealth > 230) {
          UNDYING_WARBAND.function(5);
          UNDYING_WARBAND.attackCounter = 0;
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else if (currentMonsterHealth > 180) {
          UNDYING_WARBAND.function(4);
          UNDYING_WARBAND.attackCounter = 0;
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else if (currentMonsterHealth > 110) {
          UNDYING_WARBAND.function(3);
          UNDYING_WARBAND.attackCounter = 0;
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else if (currentMonsterHealth <= 110) {
          UNDYING_WARBAND.function(0);
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", "WARBAND BROKEN");
        }
        break;

      case BONEVAULT_DEMON:
        if (BONEVAULT_DEMON.tracker === 3) {
          console.log("Bonevault Demon Ability Called!");
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else {
          BONEVAULT_DEMON.tracker++;
          BONEVAULT_DEMON.function();
        }
        break;

      case UNDEAD_RIVEN:
        if (UNDEAD_RIVEN.tracker === 5) {
          console.log("Undead Riven Ability Called!");
          UNDEAD_RIVEN.attackCounter = 3;
          UNDEAD_RIVEN.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else {
          UNDEAD_RIVEN.tracker++;
        }
        break;

      case UNDEAD_LIHETH:
        if (UNDEAD_LIHETH.tracker === 5) {
          console.log("Undead Liheth Ability Called!");
          UNDEAD_LIHETH.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else {
          UNDEAD_LIHETH.tracker++;
        }
        break;

      case UNDEAD_SIGGURD:
        if (UNDEAD_SIGGURD.tracker === 5) {
          console.log("Undead Siggurd Ability Called!");
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        } else {
          UNDEAD_SIGGURD.tracker++;
        }
        break;

      case BARON_OF_BONE:
        console.log("Baron of Bone Ability Called!");
        BARON_OF_BONE.function();
        writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        break;

      default:
        break;
    }
  }
}
