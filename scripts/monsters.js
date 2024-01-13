const monsterNameElement = document.getElementById("monsterName");
const monsterSkullElement = document.getElementById("skull-level");
const monsterImageCard = document.getElementById("monsterImageCard");
const playerImageCard = document.getElementById("playerImageCard");

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
    attack: punchSounds,
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
    attack: punchSounds,
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
    attack: punchSounds,
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
    death: fightgruntSounds,
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
    death: fightgruntSounds,
    ability: evilSpell1,
  },
  function: () => {
    CURSED.function(3);
    soundEffectHandler(evilSpellVoice1);
  },
};

const FIENDSWORN_CULTIST = {
  name: "Fiendsworn Cultist",
  image: "styles/images/monsters/fiendsworn-cultist.jpg",
  type: "HUMANOID",
  skulls: 5,
  soundEffects: {
    spawn: swordFromSheath3,
    attack: magicAttackSounds,
    death: fightgruntSounds,
    ability: evilSpell1,
  },
  function: () => {
    CURSED.function(5);
    soundEffectHandler(evilSpellVoice1);
  },
};

const CRYPT_FIEND = {
  name: "Crypt Fiend",
  image: "styles/images/monsters/crypt-demon.jpg",
  type: "DEMON",
  skulls: 9,
  soundEffects: {
    spawn: monsterSnarl4,
    attack: magicAttackSounds,
    death: monsterSnarl3,
    ability: magicAttackSounds,
  },
  function: () => {
    BURNED.function(5);
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
    attack: punchSounds,
    death: boneBreakSounds,
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
    death: boneBreakSounds,
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
    death: armorSounds,
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
    death: armorSounds,
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
    death: armorSounds,
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
    spawn: magicGuardSounds,
    attack: magicAttackSounds,
    death: boneBreakSounds,
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
    spawn: iceCrackFreeze,
    attack: heavyAttackSounds,
    death: armorSounds,
    ability: iceCrackFreeze,
  },
  function: () => {
    CHILLED.function(5);
    soundEffectHandler(DRAUGR, "MONSTER ABILITY");
  },
};

const DEATH_KNIGHT = {
  name: "Death Knight",
  image: "styles/images/monsters/death-knight.jpg",
  type: "UNDEAD",
  skulls: 9,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: heavyAttackSounds,
    death: armorSounds,
    ability: magicAttackSounds,
  },
  tracker: 1,
  function: () => {
    //
  },
};

const BONE_TITAN = {
  name: "Bone Titan",
  image: "styles/images/monsters/bone-titan.jpg", // !FIX! change art
  type: "UNDEAD",
  skulls: 7,
  soundEffects: {
    spawn: monsterSnarl4,
    attack: fleshHitSounds,
    death: boneBreakSounds,
    ability: monsterSnarl3,
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
    spawn: monsterSnarl4,
    attack: fleshHitSounds,
    death: monsterSnarl3,
    ability: fleshHitSounds,
  },
  tracker: 1,
  function: () => {
    //
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
    // togglePlayerControls();
  }
}

const FLOOD_OF_BONES = {
  name: "Flood of Bones",
  boss: "Flood of Bones",
  type: "UNDEAD",
  skulls: 9,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: fleshHitSounds,
    death: heavyAttackSounds,
    ability: heavyAttackSounds,
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
  }
}
function endBaronOfBoneBoss() {
  if (
    currentRoom.roomName === "Throne of the Eternal" &&
    currentRoom.contents.monsters[0] === BARON_OF_BONE &&
    currentMonsterHealth <= 0
  ) {
    currentRoom.contents.monsters = [];
    setTimeout(() => {
      setTimeout(() => {
        isGameOver("GOOD ENDING");
      }, 2000);
    }, 2000);

    console.log("endBaronofBoneBoss");
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
    death: armorSounds,
    ability: magicAttackSounds,
  },
  tracker: 1,
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
    death: ghostShriekWhoosh,
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
    death: ghostlyDemonic,
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
    HAUNTED.function(3);
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
    HAUNTED.function(5);
  },
};

const WRAITH = {
  name: "Wraith",
  image: "styles/images/monsters/wraith.jpg",
  type: "UNDEAD",
  skulls: 9,
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
    attack: punchSounds,
    death: boneBreakSounds,
  },
};

const HEADLESS_SKELETON = {
  name: "Headless Skeleton",
  image: "styles/images/npcs/grervils-body.jpg",
  type: "UNDEAD",
  skulls: 3,
  soundEffects: {
    spawn: boneCrunchCrack1,
    attack: punchSounds,
    death: boneBreakSounds,
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
    death: fightgruntSounds,
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
    death: fightgruntSounds,
  },
  abilityCounter: 0,
  function: () => {
    // Ivan attacks and moves back behind another scoundrel to treat his wounds
    let room = currentRoom.contents.monsters;
    if (room.length > 0) {
      let temp = room[0];
      room[0] = room[1];
      room[1] = temp;
      currentRoom.contents.monsters = room;
      renderMonsterStatBlock(room[0]);
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
      monsterMaxHealth = 500;
      monsterAttackValue = 10;
      break;

    case BONEVAULT_DEMON:
      monsterMaxHealth = 210;
      monsterAttackValue = 12;
      break;

    case UNDYING_WARBAND:
      monsterMaxHealth = 240;
      monsterAttackValue = 6;
      break;

    case UNDEAD_LIHETH:
      monsterMaxHealth = 240;
      monsterAttackValue = 25;
      break;

    case UNDEAD_RIVEN:
      monsterMaxHealth = 280;
      monsterAttackValue = 20;
      break;

    case UNDEAD_SIGGURD:
      monsterMaxHealth = 320;
      monsterAttackValue = 20;
      break;

    case BARON_OF_BONE:
      monsterMaxHealth = 800;
      monsterAttackValue = 25;
      break;
  }
}

function renderMonsterStatBlock(monster) {
  const monsterLevel = document.getElementById("monsterLevel");
  const skullIcon = document.getElementById("skullIcon");

  monsterSkullLevel(monster.skulls);
  setMonsterHealth(monsterMaxHealth);

  monsterNameElement.textContent = monster.name;
  monsterContainer.style.width = `${monsterMaxHealth / 10 + 25}vw`;

  if (currentRoom.contents.monsters.length > 0) {
    fadeInAnimation(monsterContainer);
    fadeInAnimation(monsterImageCard);

    if (!monster.hasOwnProperty("boss")) {
      monsterImageCard.style.backgroundImage = `url(${monster.image})`;
      monsterImageCard.style.border = "2px solid var(--header)";
      monsterLevel.textContent = monster.skulls;
      skullIcon.style.display = 'none';
    } else {
      monsterImageCard.style.backgroundImage = ``;
      monsterImageCard.style.border = "0px";
      monsterLevel.style.visibility = 'hidden';
      skullIcon.style.display = 'inline-block';

    }

    // ITEM: Sunstone - Reduces the Attack & Max HP of Evil Spirits
    isItemAttuned(SUNSTONE, null);
    // ITEM: Bonechill Amulet - Reduces the Attack & Max HP of Humans & Beasts
    isItemAttuned(BONECHILL_AMULET, null);

    console.log("Monster Rendered");
  }
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

    setTimeout(() => {
      // setControlsInterval("START");
      togglePlayerControls();
    }, 1000);
  }, 1000);

  soundEffectHandler(currentRoom.contents.monsters[0], "SPAWN");
}

function checkForMonsters() {
  const monster = currentRoom.contents.monsters;

  // Checks for Legionnaire / Adds to Legion Tracker
  if (monster[0] === LEGIONNAIRE) {
    legionTracker++;
  }

  if (monster[0] === BARON_OF_BONE) {
    endBaronOfBoneBoss();
  } else {
    // ITEM - Bone Amalgum: Adds temporary HP
    boneAmalgamAddHitPoints();

    monster.shift();

    // Used to change the room after defeating a boss
    endBattlefieldEvent();
    endBonevaultDemonBoss();
    endFloodOfBonesBoss();

    // Checks for more monsters
    if (monster.length > 0) {
      startBattle();
    } else {
      attackCounter = 0; // Item: Soulreaver
      setTimeout(renderRoomSummaryModal, 5000);
    }
  }
  // setControlsInterval("STOP");
  turnOffControls();
}

function monsterAbilityHandler(monster) {
  if (monster.function) {
    switch (monster) {
      case BONE_TITAN:
        if (currentMonsterHealth <= 15) {
          BONE_TITAN.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case FLOOD_OF_BONES:
        if (criticalHit >= 20) {
          // !FIX! add healing and change log to collecting bones and restoring health
          FLOOD_OF_BONES.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case HAUNTING_SPIRIT:
        let spiritHauntChance = Math.floor(Math.random() * 20) + 1;
        if (spiritHauntChance === 20) {
          HAUNTING_SPIRIT.function();
        }
        break;

      case GRUDGE:
        let grudgeHauntChance = Math.floor(Math.random() * 10) + 1;
        if (grudgeHauntChance === 10) {
          GRUDGE.function();
        }
        break;

      case POSSESSED_EARVER:
        let earverHauntChance = Math.floor(Math.random() * 20) + 1;
        if (earverHauntChance === 20) {
          POSSESSED_EARVER.function();
        }
        break;

      case GNAWER:
        let gnawerDiseaseChance = Math.floor(Math.random() * 20) + 1;
        if (gnawerDiseaseChance === 20) {
          GNAWER.function();
        }
        break;

      case CRYPT_CRAWLER:
        if (webChance(4)) {
          setTimeout(CRYPT_CRAWLER.function, 300);
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case BROODMOTHER:
        if (BROODMOTHER.hatchEggCounter === 3) {
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
          DRAUGR.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES");
        }
        break;

      case SCOUNDREL:
        const poisonedChance = Math.floor(Math.random() * 20) + 1;
        if (poisonedChance >= 20) {
          SCOUNDREL.function();
        }
        break;

      case CULTIST:
        const cursedChance = Math.floor(Math.random() * 20) + 1;
        if (cursedChance >= 20) {
          CULTIST.function();
        }
        break;

      case CRYPT_FIEND:
        const fiendBurnChance = Math.floor(Math.random() * 10) + 1;
        if (fiendBurnChance >= 10) {
          CRYPT_FIEND.function();
        }
        break;

      case IVAN_STATS:
        if (
          currentMonsterHealth < 40 &&
          currentRoom.contents.monsters.length >= 2
        ) {
          // Log must be called before function
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", IVAN_STATS);
          IVAN_STATS.function();
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
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", UNDYING_WARBAND);
        } else if (currentMonsterHealth > 110) {
          UNDYING_WARBAND.function(3);
          UNDYING_WARBAND.attackCounter = 0;
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", UNDYING_WARBAND);
        } else if (currentMonsterHealth <= 110) {
          UNDYING_WARBAND.function(0);
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", "WARBAND BROKEN");
        }
        break;

      case BONEVAULT_DEMON:
        if (BONEVAULT_DEMON.tracker === 4) {
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", BONEVAULT_DEMON);
        }

        BONEVAULT_DEMON.tracker++;
        break;

      case DEATH_KNIGHT:
        if (DEATH_KNIGHT.tracker === 4) {
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", DEATH_KNIGHT);
        }

        DEATH_KNIGHT.tracker++;
        break;

      case UNDEAD_RIVEN:
        if (UNDEAD_RIVEN.tracker === 5) {
          UNDEAD_RIVEN.attackCounter = 3;
          UNDEAD_RIVEN.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", UNDEAD_RIVEN);
        } else {
          UNDEAD_RIVEN.tracker++;
        }
        break;

      case UNDEAD_LIHETH:
        if (UNDEAD_LIHETH.tracker === 5) {
          UNDEAD_LIHETH.function();
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", UNDEAD_LIHETH);
        } else {
          UNDEAD_LIHETH.tracker++;
        }
        break;

      case UNDEAD_SIGGURD:
        if (UNDEAD_SIGGURD.tracker === 4) {
          writeToLogMonster(LOG_MONSTER_ABILITY, "YES", UNDEAD_SIGGURD);
        }
        UNDEAD_SIGGURD.tracker++;

        break;

      case BARON_OF_BONE:
        BARON_OF_BONE.function();
        writeToLogMonster(LOG_MONSTER_ABILITY, null, BARON_OF_BONE);
        break;

      default:
        break;
    }
  }
}
