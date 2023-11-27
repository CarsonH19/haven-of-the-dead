// ===============================
//             ITEMS
// ===============================

// Common Items
// - Evertorch
// - Flask of Light
// - Bonemail
// - Graverobber's Spade - Graverobber Earver
// - Charm of Healing
// - Mist Veil Cloak
// - Shadowstep Boots
// - Titan's Gauntlets
// - Holy Relic

// Rare Items
// - Bloodstone
// - Wraithbane
// - Sunstone
// - Whispering Amulet
// - Cursed Mirror
// - Revenant's Rage
// - Laughing Coffin Coin
// - Plagueward Charm

// Epic Items
// - Ethereal Crown - Graverobber Earver Event Three
// - Soulreaver
// - Soul Jar
// - Crimson Offering

// Quest Items
// - Cursed Grimoire - Scholar Hendra
// - Cache Key - Ivan the Scoundrel
// - Grervil's Head

// ===============================
//          CONSUMABLES
// ===============================

// Food & Drink
// - Potion
// - Cryptbread
// - Bone Marrow Soup
// - Marrowstone Cheese
// - Tombestone Truffle

//  Misc. Consumables
// - Lichroot
// - Lesser Soulstone
// - Greater Soulstone
// - Blackheart Brew

// Candles
// - Warding Candle
// - Soothing Candle
// - Flickering Candle
// - Blazing Candle
// - Soulflame Candle

// Wisps
// Guiding Light
// Rowdy Wisp
// Unholy Wisp
// Restless Wisp

// ===============================
//        COMMON ITEMS
// ===============================

// const sample = {
//     name:
//     description:
//     type:
//     rarity:
//     effect:
//     function:
//  }

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

const FLASK_OF_LIGHT = {
  name: "Flask of Light",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item evil spirits are weakened by your presence.",
  function: () => {
    if (
      currentRoom.contents.monsters[0] === SHADE ||
      currentRoom.contents.monsters[0] === HAUNTING_SPIRIT ||
      currentRoom.contents.monsters[0] === GRUDGE
    ) {
      monsterMaxHealth = monsterMaxHealth - 15;
      monsterAttackValue = monsterAttackValue - 2;
    }
  },
};

const GRAVEROBBERS_SPADE = {
  name: "Graverobber's Spade",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "While attuned to this item you are more likely to find items.",
  function: () => {
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
    if (randomNumber === 20) {
      console.log(`Attack evaded with Mist Veil Cloak!`);
      return 0;
    } else {
      console.log(`Attack NOT evaded...`);
      return 1;
    }
  },
};

const SHADOWSTEP_BOOTS = {
  name: "Shadowstep Boots",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "While attuned to this item your dexterity increases by 1.",
  function: () => {
    baseDexterity++;
  },
  unequip: () => {
    baseDexterity--;
  },
};

const TITANS_GAUNTLETS = {
  name: "Titan's Gauntlets",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "While attuned to this item your strength increases by 1.",
  function: () => {
    baseStrength++;
  },
  unequip: () => {
    baseStrength--;
  },
};

const HOLY_RELIC = {
  name: "Holy Relic",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "While attuned to this item your faith increases by 1.",
  function: () => {
    baseFaith++;
  },
  unequip: () => {
    baseFaith--;
  },
};

const SACRIFICIAL_BLADE = {
  name: "Sacrificial Blade",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item your attack increases by 3, but your faith decreases by 1.",
  function: () => {
    console.log("stats added!");
    baseAttack += 3;
    baseFaith--;
  },
  unequip: () => {
    console.log("stats removed!");
    baseAttack -= 3;
    baseFaith++;
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
    "When attuned to this item you recover a small amount of health after defeating a creature.",
  function: () => {
    let monsterLevel = currentRoom.contents.monsters[0].skulls;
    let healthRecovered;

    switch (monsterLevel) {
      case 1:
        healthRecovered = 2;
        break;
      case 2:
        healthRecovered = 4;
        break;
      case 3:
        healthRecovered = 6;
        break;
      case 4:
        healthRecovered = 8;
        break;
      case 5:
        healthRecovered = 10;
        break;
      case 6:
        healthRecovered = 15;
        break;
      case 7:
        healthRecovered = 20;
        break;
      case 8:
        healthRecovered = 30;
        break;
      case 9:
        healthRecovered = 40;
        break;
    }

    healPlayer(healthRecovered);
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
      currentRoom.contents.monsters[0] === SHADE ||
      currentRoom.contents.monsters[0] === HAUNTING_SPIRIT ||
      currentRoom.contents.monsters[0] === GRUDGE
    ) {
      console.log(`+3 Damage to ghosts!`);
      return 3;
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
  function: () => {},
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

const REVENANTS_RAGE = {
  name: "Revenant's Rage",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item you deal more damage when your health reaches critical levels.",
  function: () => {
    if (currentPlayerHealth <= 10) {
      return 4;
    } else if (currentPlayerHealth <= 20) {
      return 3;
    } else if (currentPlayerHealth <= 30) {
      return 2;
    } else if (currentPlayerHealth <= 40) {
      return 1;
    } else {
      return 0;
    }
  },
};

const LAUGHING_COFFIN_COIN = {
  name: "Laughing Coffin Coin",
  description: "",
  soundEffect: coinFlipLand,
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "Taken from Ivan the Scoundrel, it may be of some value to other scoundrels.",
  function: () => {
    writeToLogItem(LOG_ITEM, LAUGHING_COFFIN_COIN);
  },
};

const PLAGUEWARD_PENDANT = {
  name: "Plagueward Pendant",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item it prevents you from being diseased.",
  function: () => {
    return "IMMUNE";
  },
};

const GHOSTSHROUD_TALISMAN = {
  name: "Ghostshroud Talisman",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item it prevents you from being haunted.",
  function: () => {
    return "IMMUNE";
  },
};

const TOXINWEAVE_MASK = {
  name: "Toxinweave_Mask",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item it prevents you from being poisoned.",
  function: () => {
    return "IMMUNE";
  },
};

const BERSERKER_PAULDRONS = {
  name: "Berserker Pauldrons",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item you gain +2 Strength, but -1 Faith.",
  function: () => {
    baseStrength += 2;
    baseFaith -= 1;
  },
  unequip: () => {
    baseStrength -= 2;
    baseFaith += 1;
  },
};

const TOME_OF_DEVOTION = {
  name: "Tome of Devotion",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item you gain +2 Faith, but -1 Dexterity.",
  function: () => {
    baseFaith += 2;
    baseDexterity -= 1;
  },
  unequip: () => {
    baseFaith -= 2;
    baseDexterity += 1;
  },
};

const BRACELET_OF_THE_SERPENT = {
  name: "Bracelet of the Serpent",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item you gain +2 Dexterity, but -1 Strength.",
  function: () => {
    baseDexterity += 2;
    baseStrength -= 1;
  },
  unequip: () => {
    baseDexterity -= 2;
    baseStrength += 1;
  },
};

const SKELETON_KEY = {
  name: "Skeleton Key",
  description: "",
  soundEffect: skeletonKeyIn2,
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "This key can be used to unlock various locked rooms throughout the catacomb.",
  function: () => {
    writeToLogItem(LOG_ITEM, "YES", SKELETON_KEY, currentRoom.roomName);
  },
};

const SOULREAVER = {
  name: "Soulreaver",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item your damage increases by +1 for each consecutive attack up to a max of 5",
  function: () => {
    console.log("Soulreaver Counter: " + attackCounter);
    if (attackCounter === 0) {
      attackCounter++;
      return 0;
    } else if (attackCounter === 1) {
      attackCounter++;
      return 1;
    } else if (attackCounter === 2) {
      attackCounter++;
      return 2;
    } else if (attackCounter === 3) {
      attackCounter++;
      return 3;
    } else if (attackCounter === 4) {
      attackCounter++;
      return 4;
    } else if (attackCounter >= 5) {
      attackCounter++;
      writeToLogItem(LOG_ITEM, 'NO', SOULREAVER);
      return 5;
    }
  },
};

// ===============================
//         EPIC ITEMS
// ===============================

const ETHEREAL_CROWN = {
  name: "Ethereal Crown",
  description: "",
  type: "MAGIC",
  rarity: "EPIC",
  effect: "While attuned to this item evil spirits will not attack you.",
  function: () => {
    if (
      currentRoom.contents.monsters[0] === SHADE ||
      currentRoom.contents.monsters[0] === HAUNTING_SPIRIT ||
      currentRoom.contents.monsters[0] === GRUDGE
    ) {
      fadeOutAnimation(monsterContainer, 0000);
      setTimeout(() => {
        monsterContainer.style.display = "none";
        checkForMonsters();
        writeToLogItem(LOG_ITEM, "YES", ETHEREAL_CROWN);
      }, 2000);
    }
  },
};


const SOUL_JAR = {
  name: "Soul Jar",
  description: "",
  type: "MAGIC",
  rarity: "EPIC",
  effect:
    "While attuned to this item if you die, you'll be resurrected with half your HP. This item is then destroyed.",
  function: () => {
    if (currentPlayerHealth <= 0) {
      currentPlayerHealth = calculatePlayerMaxHealth() * 0.5;
      playerHealthBar.value = calculatePlayerMaxHealth() * 0.5;
      removeItem("Soul Jar");
      itemObject = inventoryItems.find((inv) => inv.name === "Soul Jar");
      const index = inventoryItems.indexOf(itemObject);
      inventoryItems.splice(index, 1);
      updatePlayerTrackers();
      healthLowAnimation();

      writeToLogItem(LOG_ITEM, "YES", SOUL_JAR);
    }
  },
};

const CRIMSON_OFFERING = {
  name: "Crimson Offering",
  description: "",
  type: "MAGIC",
  rarity: "EPIC",
  effect:
    "While attuned to this item you sacrifice 5HP after each of your attacks, but you deal an additional 10 damage.",
  function: () => {
    damagePlayer(5);
    isGameOver();
    writeToLogItem(LOG_ITEM, "YES", CRIMSON_OFFERING);
    return 10;
  },
};

// ===============================
//       LOCKED ROOM ITEMS
// ===============================

const BONEMAIL = {
  name: "Bonemail",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "While attuned to this item your max health is increased by 20HP.",
  function: () => {
    baseHealth += 20;
  },
  unequip: () => {
    baseHealth -= 20;
  },
};

const RIBCAGE_DEFENDER = {
  name: "Ribcage Defender",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect: "While attuned to this item your max health is increased by 30HP.",
  function: () => {
    baseHealth += 30;
  },
  unequip: () => {
    baseHealth -= 30;
  },
};

const SKULLCRUSHER_HELM = {
  name: "Skullcrusher Helm",
  description: "",
  type: "MAGIC",
  rarity: "RARE",
  effect:
    "While attuned to this item your max health is increased by 20HP and you gain +1 Strength.",
  function: () => {
    baseHealth += 20;
  },
  unequip: () => {
    baseHealth -= 20;
  },
};

const BONECHILL_AMULET = {
  name: "Bone Chill Amulet",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you have resistance against draugr attacks.",
  function: () => {
    if (currentRoom.contents.monsters[0] === DRAUGR) {
      return 0.5;
    } else {
      return 1;
    }
  },
};

const RATTLEBONE_CHARM = {
  name: "Rattlebone Charm",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item there is a chance that humans will flee from you.",
  function: () => {
    if (
      currentRoom.contents.monsters[0].type === "HUMANOID" &&
      currentRoom.contents.monsters[0] !== IVAN_STATS
    ) {
      let randomNumber = Math.round(Math.random() * 10);

      if (randomNumber >= 5) {
        fadeOutAnimation(monsterContainer, 0000);
        setTimeout(() => {
          checkForMonsters();
          monsterContainer.style.display = "none";
        }, 2000);
        writeToLogItem(LOG_ITEM, 'YES', RATTLEBONE_CHARM);
      }
    }
  },
};

const SPINE_OF_THE_NECROMANCER = {
  name: "Spine of the Necromance",
  description: "",
  type: "EPIC",
  rarity: "COMMON",
  effect:
    "While attuned to this item you gain +9 Attack, but all stats are reduced by 1.",
  function: () => {
    baseAttack += 9;
    baseStrength -= 1;
    baseDexterity -= 1;
    baseFaith -= 1;
  },
  unequip: () => {
    baseAttack -= 9;
    baseStrength += 1;
    baseDexterity += 1;
    baseFaith += 1;
  },
};

// ===============================
//         QUEST ITEMS
// ===============================

// const sample = {
//     name:
//     description:
//     type:
//     rarity:
//     effect:
//     function:
//  }

const CURSED_GRIMOIRE = {
  name: "Cursed Grimoire",
  description: "",
  type: "MAGIC",
  rarity: "EPIC",
  effect: "This item is cursed and cannot be unattuned.",
  function: () => {
    currentPlayerHealth--;
    playerHealthBar.value--;
    damageFlashAnimation();
    writeToLogItem(LOG_ITEM, "YES", CURSED_GRIMOIRE);
  },
};

const CACHE_KEY = {
  name: "Ivan's Cache Key",
  description: "",
  soundEffect: skeletonKeyIn2,
  type: "MAGIC",
  rarity: "COMMON",
  effect:
    "Given to you by Ivan the Scoundrel, he said it unlocks a chamber within the catacombs were his hidden cache is kept.",
  function: () => {
    // Unlocks a trapped vault.
    writeToLogItem(LOG_ITEM, "YES", CACHE_KEY);
  },
};

const GRERVILS_HEAD = {
  name: "Grervil's Head",
  description: "",
  type: "MAGIC",
  rarity: "COMMON",
  effect: "Head of the talking skull, Grervil.",
  function: () => {
    // Obtained after meeting Grervil agreeing to help him find his body.
    writeToLogItem(LOG_ITEM, "YES", GRERVILS_HEAD);
  },
};

// ===============================
//        FOOD & DRINK
// ===============================

const POTION = {
  name: "Health Potion",
  description: "A small bottle of glowing red liquid.",
  type: "CONSUMABLE",
  rarity: "COMMON",
  effect: "Restores 20 health points and can be used during combat.",
  soundEffect: gulpingWater24,
  function: () => {
    potionHandler();
  },
};

const CRYPTBREAD = {
  name: "Cryptbread",
  description: "",
  type: "CONSUMABLE",
  rarity: "COMMON",
  logDetail: 'EAT',
  effect: "Restores 10 health points when eaten.",
  soundEffect: chewCrackersMouth,
  function: () => {
    healPlayer(10);
  },
};

const BONE_MARROW_SOUP = {
  name: "Bone Marrow Soup",
  description: "",
  type: "CONSUMABLE",
  rarity: "COMMON",
  logDetail: 'DRINK',
  effect: "Restores 15 health points when eaten.",
  soundEffect: gulpingWater24,
  function: () => {
    healPlayer(15);
  },
};

const MARROWSTONE_CHEESE = {
  name: "Marrowstone Cheese",
  description: "",
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'EAT',
  effect: "Restores 20 health points when eaten.",
  soundEffect: chewCrackersMouth,
  function: () => {
    healPlayer(25);
  },
};

const TOMBSTONE_TRUFFLE = {
  name: "Tombstone Truffle",
  description: "",
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'EAT',
  effect: "Restores 10 health points when eaten.",
  soundEffect: chewCrackersMouth,
  function: () => {
    healPlayer(10);
  },
};

// ===============================
//        MISC CONSUMABLES
// ===============================

// const sample = {
//     name:
//     description:
//     type:
//     rarity:
//     effect:
//     function:
//  }

const LICHROOT = {
  name: "Lichroot",
  description: "",
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'EAT',
  effect: "Can be used to permanently increase the potency of health potions by 5HP.",
  soundEffect: chewCrackersMouth,
  function: () => {
    potionHealValue += 5;
  },
};

const GRAVEBLOOM = {
  name: "Gravebloom",
  description: "",
  type: "CONSUMABLE",
  rarity: "COMMON",
  logDetail: 'EAT',
  effect: "Can be used for a chance to cure poison.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (POISONED.duration !== null) {
      let randomNumber = Math.round(Math.random() * 10);

      if (randomNumber >= 9) {
        POISONED.duration = null;
        baseDexterity += 2;
        baseStrength += 2;
        clearInterval(poisonedInterval);
        writeToLogItem(LOG_ITEM, 'YES', GRAVEBLOOM);
      }
    }

    healPlayer(1);
  },
};

const LESSER_SOULSTONE = {
  name: "Lesser Soulstone",
  description: "",
  soundEffect: crystalWhoosh,
  type: "CONSUMABLE",
  rarity: "COMMON",
  logDetail: 'USE',
  effect: "Can be used to gain +5 experience.",
  function: () => {
    gainExperience(5);
  },
};

const GREATER_SOULSTONE = {
  name: "Greater Soulstone",
  description: "",
  soundEffect: crystalWhoosh,
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'USE',
  effect: "Can be used to gain +20 experience.",
  function: () => {
    gainExperience(25);
  },
};

const BLACKHEART_BREW = {
  name: "Blackheart Brew",
  description: "A favored drink of the scoundrels at the Laughing Coffin.",
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'DRINK',
  effect:
    "Can be used to gain increased Strength, but decreased Dexterity for a short time.",
  soundEffect: gulpingWater24,
  status: "You are drunk. Strength increased by 2 & Dexterity decreased by 1.",
  duration: null,
  function: () => {
    let duration = roomCounter + 5;
    blackheartBrewTracker = "DRUNK";
    BLACKHEART_BREW.duration = "5 Rooms";
    let blackheartBrewInterval = setInterval(() => {
      BLACKHEART_BREW.duration = `Duration: ${duration - roomCounter} Rooms`;
      if (roomCounter >= duration) {
        blackheartBrewTracker = "SOBER";
        BLACKHEART_BREW.duration = null;
        baseDexterity++;
        baseStrength -= 2;
        clearInterval(blackheartBrewInterval);
      }
    }, 15000);

    statusEffectHandler(BLACKHEART_BREW);
    renderStatusEffects(BLACKHEART_BREW);
  },
};

// ===============================
//           CANDLES
// ===============================

const WARDING_CANDLE = {
  name: "Warding Candle",
  description: "",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'CANDLE',
  effect:
    "When this item is used there is a chance that evil spirits will flee from you. The candle burns out after clearing five rooms.",
  status: "There is a chance the undead will evade you.",
  duration: null,
  function: () => {
    let itemDuration = roomCounter + 5;
    WARDING_CANDLE.duration = "Duration: 5 Rooms";
    let wardingCandleInterval = setInterval(() => {
      if (itemDuration - roomCounter > 1) {
        WARDING_CANDLE.duration = `Duration: ${
          itemDuration - roomCounter
        } Rooms`;
      } else {
        WARDING_CANDLE.duration = `Duration: ${
          itemDuration - roomCounter
        } Room`;
      }

      if (roomCounter >= itemDuration) {
        wardingCandleTracker = "BURNED OUT";
        WARDING_CANDLE.duration = null;
        clearInterval(wardingCandleInterval);
      } else {
        wardingCandleTracker = "LIT";
      }
    }, 15000);
    renderStatusEffects(WARDING_CANDLE);
  },
};

const SOOTHING_CANDLE = {
  name: "Soothing Candle",
  description: "",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "COMMON",
  logDetail: 'CANDLE',
  effect:
    "When this item is used you restore 10HP after clearing a room. The candle burns out after clearing five rooms.",
  status: "You regain some HP after clearing a room.",
  duration: null,
  function: () => {
    let itemDuration = roomCounter + 5;
    SOOTHING_CANDLE.duration = "Duration: 5 Rooms";
    let soothingCandleInterval = setInterval(() => {
      if (itemDuration - roomCounter > 1) {
        SOOTHING_CANDLE.duration = `Duration: ${
          itemDuration - roomCounter
        } Rooms`;
      } else {
        SOOTHING_CANDLE.duration = `Duration: ${
          itemDuration - roomCounter
        } Room`;
      }

      if (roomCounter >= itemDuration) {
        soothingCandleTracker = "BURNED OUT";
        SOOTHING_CANDLE.duration = null;
        clearInterval(soothingCandleInterval);
      } else {
        soothingCandleTracker = "LIT";
      }
    }, 15000);
    renderStatusEffects(SOOTHING_CANDLE);
  },
};

const FLICKERING_CANDLE = {
  name: "Flickering Candle",
  description: "",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "COMMON",
  logDetail: 'CANDLE',
  effect:
    "When this item is used your chance to flee successfully becomes 100%. After fleeing three times the candle burns out.",
  status: "You always successfully flee.",
  duration: null,
  function: () => {
    flickeringCandleTracker = 3;
    FLICKERING_CANDLE.duration = `Duration: 3`;
    let flickeringCandleInterval = setInterval(() => {
      FLICKERING_CANDLE.duration = `Duration: ${flickeringCandleTracker}`;
      if (flickeringCandleTracker <= 0) {
        flickeringCandleTracker = "BURNED OUT";
        FLICKERING_CANDLE.duration = null;
        clearInterval(flickeringCandleInterval);
      }
    }, 3000);
    renderStatusEffects(FLICKERING_CANDLE);
  },
};

const BLAZING_CANDLE = {
  name: "Blazing Candle",
  description: "",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "EPIC",
  logDetail: 'CANDLE',
  effect:
    "When this item is used all of your attacks are critical hits. After five critical hits the candle burns out.",
  status: "All attacks made are critical hits.",
  duration: null,
  function: () => {
    blazingCandleTracker = 5;
    BLAZING_CANDLE.duration = `Duration: 5 Attacks`;
    let blazingCandleInterval = setInterval(() => {
      BLAZING_CANDLE.duration = `Duration: ${blazingCandleTracker} Attacks`;
      if (blazingCandleTracker <= 0) {
        blazingCandleTracker = "BURNED OUT";
        BLAZING_CANDLE.duration = null;
        clearInterval(blazingCandleInterval);
      }
    }, 3000);
    renderStatusEffects(BLAZING_CANDLE);
  },
};

const SOULFLAME_CANDLE = {
  name: "Soulflame Candle",
  description: "",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "EPIC",
  logDetail: 'CANDLE',
  effect:
    "When this item is used the experience you gain is doubled. The candle burns out after gaining 100XP.",
  status: "All experience gained is doubled.",
  duration: null,
  function: () => {
    let itemDuration = experiencePoints + 100;
    SOULFLAME_CANDLE.duration = "100XP";
    let soulflameCandleInterval = setInterval(() => {
      SOULFLAME_CANDLE.duration = `Duration: ${
        itemDuration - experiencePoints
      }XP`;
      if (experiencePoints >= itemDuration) {
        soulflameCandleTracker = "BURNED OUT";
        SOULFLAME_CANDLE.duration = null;
        clearInterval(soulflameCandleInterval);
      } else {
        soulflameCandleTracker = "LIT";
      }
    }, 3000);
    renderStatusEffects(SOULFLAME_CANDLE);
  },
};

// ===============================
//            WISPS
// ===============================

const GUIDING_LIGHT = {
  name: "Guiding Light",
  description: "",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "COMMON",
  logDetail: 'WISP',
  effect:
    "When this item is used a light will guide you to the nearest Candlelight Shrine.",
  status: "Guiding you to a nearby Candlelight Shrine.",
  duration: null,
  function: () => {
    const wisp = document.querySelector(".wisp");
    CANDLELIGHT_SHRINE.contents.events = SAFE_ROOM;
    let randomNumber = Math.round(Math.random() * 5) + 1;
    let itemDuration = roomCounter + randomNumber;
    GUIDING_LIGHT.duration = "Searching";

    let guidingLightInterval = setInterval(() => {
      if (itemDuration - roomCounter > 1) {
        GUIDING_LIGHT.duration = `Duration: ${
          itemDuration - roomCounter
        } Rooms`;
      } else {
        GUIDING_LIGHT.duration = `Duration: ${itemDuration - roomCounter} Room`;
      }

      if (roomCounter >= itemDuration) {
        guidingLightTracker = "ARRIVE";
        wisp.classList.remove("orb");
        GUIDING_LIGHT.duration = null;
        clearInterval(guidingLightInterval);
      } else {
        guidingLightTracker = "GUIDING";
      }
    }, 15000);

    wisp.classList.add("orb");

    const root = document.documentElement;
    root.style.setProperty("--orb", "#fff3b4");

    renderStatusEffects(GUIDING_LIGHT);
  },
};

const ROWDY_WISP = {
  name: "Rowdy Wisp",
  description: "",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'WISP',
  effect:
    "When this item is used a wisp will guide you to the Laughing Coffin Tavern.",
  status: "Guiding you to the Laughing Coffin.",
  duration: null,
  function: () => {
    const wisp = document.querySelector(".wisp");
    LAUGHING_COFFIN_ROOM.contents.events = LAUGHING_COFFIN_EVENT;
    let randomNumber = Math.round(Math.random() * 5) + 1;
    let duration = roomCounter + randomNumber;
    ROWDY_WISP.duration = "Searching";

    let rowdyWispInterval = setInterval(() => {
      ROWDY_WISP.duration = `Duration: ${duration - roomCounter} Rooms`;
      if (roomCounter >= duration) {
        rowdyWispTracker = "ARRIVE";
        wisp.classList.remove("orb");
        ROWDY_WISP.duration = null;
        clearInterval(rowdyWispInterval);
      } else {
        rowdyWispTracker = "GUIDING";
      }
    }, 15000);

    wisp.classList.add("orb");

    const root = document.documentElement;
    root.style.setProperty("--orb", "#f2b268");

    renderStatusEffects(ROWDY_WISP);
  },
};

const UNHOLY_WISP = {
  name: "Unholy Wisp",
  description: "",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'WISP',
  effect:
    "When this item is used a wisp will guide you to the nearest Blood Alter.",
  status: "Guiding you to the Blood Alter.",
  duration: null,
  function: () => {
    const wisp = document.querySelector(".wisp");
    BLOOD_ALTER.contents.events = CRIMSON_COVENANT;
    let randomNumber = Math.round(Math.random() * 5) + 1;
    let wispDuration = roomCounter + randomNumber;
    UNHOLY_WISP.duration = "Searching";

    let unholyWispInterval = setInterval(() => {
      UNHOLY_WISP.duration = `Duration: ${wispDuration - roomCounter} Rooms`;
      if (roomCounter >= wispDuration) {
        unholyWispTracker = "ARRIVE";
        wisp.classList.remove("orb");
        UNHOLY_WISP.duration = null;
        clearInterval(unholyWispInterval);
      } else {
        unholyWispTracker = "GUIDING";
      }
    }, 15000);

    wisp.classList.add("orb");

    const root = document.documentElement;
    root.style.setProperty("--orb", "#bf3637");

    renderStatusEffects(UNHOLY_WISP);
  },
};

const RESTLESS_WISP = {
  name: "Restless Wisp",
  description: "",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "RARE",
  logDetail: 'WISP',
  effect: "When this item is used a wisp will guide you to Lost Legions Vale.",
  status: "Guiding you to Lost Legions Vale.",
  duration: null,
  function: () => {
    const wisp = document.querySelector(".wisp");
    let randomNumber = Math.round(Math.random() * 5) + 1;
    let wispDuration = roomCounter + randomNumber;
    RESTLESS_WISP.duration = "Searching";

    // LOST_LEGIONS_VALE.contents.monsters.push(SKELETAL_CAPTAIN); // ADD BOSS?!

    for (let i = 0; i < 5; i++) {
      LOST_LEGIONS_VALE.contents.monsters.push(SKELETAL_SOLDIER);
    }

    let restlessWispInterval = setInterval(() => {
      RESTLESS_WISP.duration = `Duration: ${wispDuration - roomCounter} Rooms`;
      if (roomCounter >= wispDuration) {
        restlessWispTracker = "ARRIVE";
        wisp.classList.remove("orb");
        RESTLESS_WISP.duration = null;
        clearInterval(restlessWispInterval);
      } else {
        restlessWispTracker = "GUIDING";
      }
    }, 15000);

    wisp.classList.add("orb");

    const root = document.documentElement;
    root.style.setProperty("--orb", "#95dba8");

    renderStatusEffects(RESTLESS_WISP);
  },
};

// ===============================
//    Item & Inventory Arrays
// ===============================

let attunedItems = [];

let inventoryItems = [GUIDING_LIGHT, POTION, POTION, POTION];

let consumableItems = [
  POTION,
  MARROWSTONE_CHEESE,
  TOMBSTONE_TRUFFLE,
  CRYPTBREAD,
  BONE_MARROW_SOUP,
  LICHROOT,
  GRAVEBLOOM,
  LESSER_SOULSTONE,
  GREATER_SOULSTONE,
  BLACKHEART_BREW,
];

let candleItems = [
  SOOTHING_CANDLE,
  FLICKERING_CANDLE,
  WARDING_CANDLE,
  BLAZING_CANDLE,
  SOULFLAME_CANDLE,
];

let wispItems = [GUIDING_LIGHT, ROWDY_WISP, UNHOLY_WISP, RESTLESS_WISP];

let bonevaultItems = [
  BONEMAIL,
  RIBCAGE_DEFENDER,
  SKULLCRUSHER_HELM,
  BONECHILL_AMULET,
  RATTLEBONE_CHARM,
  SPINE_OF_THE_NECROMANCER,
];

let commonItems = [
  EVERTORCH,
  FLASK_OF_LIGHT,
  RING_OF_THE_RODENT,
  CHARM_OF_HEALING,
  MIST_VEIL_CLOAK,
  SOOTHING_CANDLE,
  FLICKERING_CANDLE,
  SHADOWSTEP_BOOTS,
  TITANS_GAUNTLETS,
  HOLY_RELIC,
];

let rareItems = [
  WRAITHBANE,
  SUNSTONE,
  CURSED_MIRROR,
  REVENANTS_RAGE,
  WARDING_CANDLE,
  GUIDING_LIGHT,
  ROWDY_WISP,
  LAUGHING_COFFIN_COIN,
  PLAGUEWARD_PENDANT,
  TOXINWEAVE_MASK,
  GHOSTSHROUD_TALISMAN,
  BERSERKER_PAULDRONS,
  TOME_OF_DEVOTION,
  BRACELET_OF_THE_SERPENT,
];

let epicItems = [
  SOULREAVER,
  CRIMSON_OFFERING,
  SOUL_JAR,
  BLAZING_CANDLE,
  SOULFLAME_CANDLE,
];

let foundItem;

// ===============================
//       Item Handling Logic
// ===============================

function isItemAttuned(item, defaultValue) {
  for (let i = 0; i < attunedItems.length; i++) {
    if (attunedItems[i] === item) {
      return item.function();
    }
  }
  return defaultValue;
}

function attuneItem(itemName) {
  // itemName must be the item's string name
  itemObject = inventoryItems.find((inv) => inv.name === itemName);

  if (itemObject) {
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);
    attunedItems.push(itemObject);
  }

  if (itemObject.unequip) {
    itemObject.function();
  }

  clearInventory();
  renderInventory();
  writeToLogItem(LOG_ATTUNE, 'YES', itemName);
}

function removeItem(itemName) {
  // itemName must be the item's string name
  itemObject = attunedItems.find((inv) => inv.name === itemName);

  if (itemObject !== "Curesed Grimoire") {
    const index = attunedItems.indexOf(itemObject);
    attunedItems.splice(index, 1);
    inventoryItems.push(itemObject);
  }

  if (itemObject.unequip) {
    console.log("item function called!");
    itemObject.unequip();
  }

  clearInventory();
  renderInventory();
}

function statusEffectHandler(item) {
  switch (item) {
    case WARDING_CANDLE:
      if (wardingCandleTracker === "LIT") {
        if (
          currentRoom.contents.monsters[0].type === "UNDEAD" &&
          currentRoom.contents.monsters[0].skulls <= 6
        ) {
          let randomNumber = Math.round(Math.random() * 10);

          if (randomNumber >= 5) {
            fadeOutAnimation(monsterContainer, 0000);
            setTimeout(() => {
              checkForMonsters();
              monsterContainer.style.display = "none";
            }, 2000);
            writeToLogItem(LOG_ITEM, 'YES', WARDING_CANDLE);
          }
        }
      }
      break;

    case SOOTHING_CANDLE:
      if (soothingCandleTracker === "LIT") {
        healPlayer(10);
        writeToLogItem(LOG_ITEM, 'YES', SOOTHING_CANDLE);
      }
      break;

    case FLICKERING_CANDLE:
      if (flickeringCandleTracker > 0) {
        flickeringCandleTracker--;
        return 10;
      }
      break;

    case BLAZING_CANDLE:
      if (blazingCandleTracker > 0) {
        blazingCandleTracker--;
        writeToLogItem(LOG_ITEM, 'YES', BLAZING_CANDLE);
        return 20;
      } else {
        return 0;
      }

    case SOULFLAME_CANDLE:
      if (soulflameCandleTracker === "LIT") {
        return 2;
      } else {
        return 1;
      }

    case BLACKHEART_BREW:
      if (blackheartBrewTracker === "DRUNK") {
        baseDexterity--;
        baseStrength += 2;
        updatePlayerTrackers();
      }
      break;

    case POISONED:
      baseDexterity -= 2;
      baseStrength -= 2;
      updatePlayerTrackers();
      //writeToLogItem() You've been poisoned!
      break;

    case HAUNTED:
      //writeToLogItem() You've been haunted!
      break;

    case DISEASED:
      updatePlayerTrackers();
      //writeToLogItem() You've been diseased!
      break;

    case WEBBED:
      //writeToLogItem() You are caught in the spiders web
      break;

    case BLOOD_PACT:
      //writeToLogItem()
      baseAttack += 5;
      baseFaith -= 2;
      updatePlayerTrackers();
      break;

    case LEGIONS_GRACE:
      //writeToLogItem()
      baseAttack++;
      updatePlayerTrackers();
      break;
  }
}

function findItemChance() {
  if (currentRoom.contents.events === null) {
    let randomNumber = Math.round(Math.random() * 20 + baseFaith);

    // ITEM: Graverobber's Spade - Increase item find chance by 10%
    randomNumber += isItemAttuned(GRAVEROBBERS_SPADE, 0);

    if (randomNumber > 10) {
      getItem("CONSUMABLE");
    }

    if (randomNumber >= 20) {
      let itemRarity = Math.round(Math.random() * 100 + baseFaith);
      if (itemRarity >= 91) {
        getItem("EPIC");
      } else if (itemRarity >= 61) {
        getItem("RARE");
      } else {
        getItem("COMMON");
      }
    }
  }
}

function getItem(rarity) {
  switch (rarity) {
    case "EPIC":
      const epicIndex = Math.round(Math.random() * epicItems.length);
      foundItem = epicItems[epicIndex];
      epicItems.splice(epicIndex, 1);
      currentRoom.contents.items.push(foundItem);
      console.log("Epic Item Found!");
      break;

    case "RARE":
      const rareIndex = Math.round(Math.random() * rareItems.length);
      foundItem = rareItems[rareIndex];
      rareItems.splice(rareIndex, 1);
      currentRoom.contents.items.push(foundItem);
      console.log("Rare Item Found!");
      break;

    case "COMMON":
      const commonIndex = Math.round(Math.random() * commonItems.length);
      foundItem = commonItems[commonIndex];
      commonItems.splice(commonIndex, 1);
      currentRoom.contents.items.push(foundItem);
      console.log("Common Item Found!");
      break;

    case "RANDOM":
      let itemRarity = Math.round(Math.random() * 100 + baseFaith);

      if (itemRarity >= 91) {
        getItem("EPIC");
      } else if (itemRarity >= 61) {
        getItem("RARE");
      } else {
        getItem("COMMON");
      }
      break;

    case "CONSUMABLE":
      console.log("CONSUMABLE FOUND");
      const consumableIndex = Math.round(
        Math.random() * consumableItems.length
      );
      foundItem = consumableItems[consumableIndex];
      currentRoom.contents.items.push(foundItem);
      break;

    case "CANDLE":
      console.log("CANDLE FOUND");
      const candleIndex = Math.round(Math.random() * candleItems.length);
      foundItem = candleItems[candleIndex];
      currentRoom.contents.items.push(foundItem);
      break;

    case "WISP":
      const wispIndex = Math.round(Math.random() * wispItems.length);
      foundItem = wispItems[wispIndex];
      currentRoom.contents.items.push(foundItem);
      break;

    case "BONEVAULT":
      const bonevaultIndex = Math.round(Math.random() * bonevaultItems.length);
      foundItem = bonevaultItems[bonevaultIndex];
      currentRoom.contents.items.push(foundItem);
      bonevaultItems.splice(bonevaultIndex, 1);
      break;
  }
}

function useConsumable(consumable) {
  // must use item's string name
  let itemObject = inventoryItems.find((inv) => inv.name === consumable);

  if (consumable !== "Health Potion") {
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);
    writeToLogItem(LOG_CONSUMABLE, 'YES', itemObject);
  }

  itemObject.function();

  if (itemObject.soundEffect) {
    soundEffectHandler(itemObject, 'ITEM');
  }

  clearInventory();
  renderInventory();
}

// List to store active effects
const activeEffects = [];

function renderStatusEffects(effect) {
  const middleLeft = document.querySelector(".middle-left");

  // Check if the effect is already active
  const existingEffectIndex = activeEffects.findIndex(
    (activeEffect) => activeEffect.name === effect.name
  );

  if (existingEffectIndex !== -1) {
    // Update the existing effect
    const existingEffect = activeEffects[existingEffectIndex];
    existingEffect.duration = effect.duration;
    // You can update other properties as needed

    return; // Exit the function since the effect is already active
  }

  // New Status Effect
  const newEffect = document.createElement("div");
  newEffect.textContent = effect.name;
  middleLeft.appendChild(newEffect);

  // Status Effect Tooltip
  newEffect.classList.add("tooltip");
  const tooltipText = document.createElement("ul");
  tooltipText.classList.add("tooltipText");
  newEffect.appendChild(tooltipText);

  const tooltipNoteName = document.createElement("li");
  const tooltipNoteDuration = document.createElement("li");
  const tooltipNoteStatus = document.createElement("li");
  tooltipNoteName.textContent = effect.name;
  tooltipNoteDuration.textContent = effect.duration;

  // Updates & Check Effect Duration
  let newEffectInterval = setInterval(() => {
    tooltipNoteDuration.textContent = effect.duration;
    if (effect.duration === null) {
      // Removes Element when duration ends
      middleLeft.removeChild(newEffect);
      clearInterval(newEffectInterval);

      // Remove the effect from the activeEffects list
      activeEffects.splice(existingEffectIndex, 1);
    }
  }, 3000);

  tooltipNoteStatus.textContent = effect.status;

  tooltipText.appendChild(tooltipNoteName);
  tooltipText.appendChild(tooltipNoteDuration);
  tooltipText.appendChild(tooltipNoteStatus);

  // Add the effect to the list of active effects
  activeEffects.push({
    element: newEffect,
    name: effect.name,
    duration: effect.duration,
    // Add other properties as needed
  });

  document.querySelectorAll(".tooltip").forEach(function (element) {
    element.addEventListener("mouseover", function () {
      const tooltipText = this.querySelector(".tooltipText");

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

// ===============================
//    Inventory Handling Logic
// ===============================

function openInventoryHandler() {
  inventoryModal.style.display = "block";
}

function closeInventoryHandler() {
  inventoryModal.style.display = "none";

  calculatePlayerMaxHealth();
  updatePlayerTrackers();
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

  const renderedItems = {};

  for (let i = 0; i < inventoryItems.length; i++) {
    const itemName = inventoryItems[i].name;

    // Check if the item has already been rendered
    if (renderedItems[itemName]) {
      // Increment the counter for this item
      renderedItems[itemName]++;
    } else {
      // First time encountering this item, initialize the counter
      renderedItems[itemName] = 1;

      const itemBox = document.createElement("div");
      itemBox.classList.add("tooltip");
      const tooltipText = document.createElement("span");
      tooltipText.classList.add("tooltipText");
      tooltipText.textContent = inventoryItems[i].effect;
      const itemButton = document.createElement("button");

      itemButton.textContent = itemName;

      itemButton.setAttribute("id", itemName);

      itemBox.appendChild(tooltipText);
      itemBox.appendChild(itemButton);

      if (inventoryItems[i].type === "MAGIC") {
        magicItemsBox.appendChild(itemBox);
      } else {
        consumablesBox.appendChild(itemBox);
      }
    }
  }

  // Display counts for each item
  for (const itemName in renderedItems) {
    const itemButton = document.getElementById(itemName);

    // Create a separate span element for the counter
    const counterSpan = document.createElement("span");
    counterSpan.classList.add("item-counter");

    // Append counter to the item name if there's more than one instance
    if (renderedItems[itemName] > 1) {
      counterSpan.textContent = `x${renderedItems[itemName]}`;
      itemButton.appendChild(counterSpan); // Append counter to the button
    }
  }

  for (let i = 0; i < attunedItems.length; i++) {
    const itemBox = document.createElement("div");
    const itemButton = document.createElement("button");
    itemButton.textContent = attunedItems[i].name;
    itemButton.setAttribute("id", attunedItems[i].name);
    itemBox.classList.add("tooltip");
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltipText");
    tooltipText.textContent = attunedItems[i].effect;

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

// ===============================
//        Event Listeners
// ===============================

inventoryButton.addEventListener("click", () => {
  clearInventory();
  renderInventory();
  openInventoryHandler();
});

closeInventoryButton.addEventListener("click", () => {
  // Updates stats after changing attuned items.
  // setStatsHandler();
  closeInventoryHandler();
  clearInventory();
  calculatePlayerMaxHealth();
  updatePlayerTrackers();
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

    if (buttons[i].id !== "Cursed Grimoire") {
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
    } else if (
      buttons[i].id === "Cursed Grimoire" &&
      event.target === buttons[i]
    ) {
      CURSED_GRIMOIRE.function();
    }
  }
});
