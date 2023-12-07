// ===============================
//             ITEMS
// ===============================

// Common Items
// - *Evertorch
// - Flask of Light
// - *Graverobber's Spade - Graverobber Earver
// - *Charm of Healing
// - Shadowstep Boots
// - *Ring of Skittering
// - *Titan's Femur
// - Holy Relic
// - *Ritual Blade - Crimson Covenant

// Rare Items
// - Mist Veil Cloak
// - *Bloodstone - Crimson Covenant
// - *Wraithbane
// - *Sunstone
// - *Whispering Amulet
// - *Cursed Mirror
// - *Revenant's Rage
// - Plagueward Pendant
// - Ghostshroud Talisman
// - Toxinweave Mask
// - *Silkstriders
// - Chillbreaker Band
// - Berserker Pauldrons
// - *Tome of Devotion
// - *Bracelet of the Serpent
// - *Fangweave Armor
// - *Soulreaver

// Epic Items
// - *Ethereal Crown - Graverobber Earver Event Three
// - *Soul Jar
// - *Crimson Offering - Crimson Covenant
// - Darkguard Trinket
// - *Hallowed Hourglass
// - *Aegis of the Fallen - Forsaken Commander
// - *War Torn Banner - Forsaken Commander

// Bonevault Items
// - Bonemail
// - *Ribcage Defender
// - *Skull Crusher Helm
// - *Bonechill Amulet
// - *Rattlebone Whistle
// - *Spine of the Necromancer

// ===============================
//          CONSUMABLES
// ===============================

// Consumables
// - *Potion
// - *Cryptbread
// - *Bone Marrow Soup
// - *Tombstone Truffle
// - Spider Egg Yolk
// - *Lichroot
// - *Rotbane Fern
// - *Witchfire Orchid
// - *Emberthaw Petal
// - *Ghostlitght Lily
// - *Gravebloom
// - Lesser Soulstone
// - *Greater Soulstone
// - *Blackheart Brew

// Misc Items
// *Laughing Coffin Coin
// *Skeleton Key

// Quest Items
// - *Cursed Grimoire - Scholar Hendra
// - *Cache Key - Ivan the Scoundrel
// - *Grervil's Head - Grervil the Bodiless

// Candles
// - *Warding Candle
// - *Soothing Candle
// - *Flickering Candle
// - *Blazing Candle
// - *Soulflame Candle

// Wisps
// - *Guiding Light
// - *Rowdy Wisp
// - *Unholy Wisp
// - *Restless Wisp
// - *Wicked Wisp

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
  image: "styles/images/items/evertorch.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect:
    "While attuned, you have a greater chance of successfully avoiding traps.",
  function: () => {
    return 2;
  },
};

const FLASK_OF_LIGHT = {
  name: "Flask of Light",
  description: "",
  image: "styles/images/items/flask-of-light.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect:
    "While attuned to this item evil spirits are weakened by your presence.",
  function: () => {
    if (
      currentRoom.contents.monsters[0] === SHADE ||
      currentRoom.contents.monsters[0] === HAUNTING_SPIRIT ||
      currentRoom.contents.monsters[0] === GRUDGE
    ) {
      monsterMaxHealth = monsterMaxHealth - 10;
      monsterAttackValue = monsterAttackValue - 2;
    }
  },
};

const GRAVEROBBERS_SPADE = {
  name: "Graverobber's Spade",
  description: "",
  image: "styles/images/items/graverobbers-spade.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item you are more likely to find items.",
  function: () => {
    itemFindChance += 5;
  },
  unequip: () => {
    itemFindChance -= 5;
  },
};

const CHARM_OF_HEALING = {
  name: "Charm of Healing",
  description: "",
  image: "styles/images/items/charm-of-healing.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect:
    "While attuned to this item you recover 5 points of health after each room you clear.",
  function: () => {
    healPlayer(5);
  },
};

const RING_OF_SKITTERING = {
  name: "Ring of Skittering",
  description: "",
  image: "styles/images/items/skittering-ring.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect:
    "While attuned to this item you have a higher chance to flee successfully.",
  function: () => {
    fleeChance += 10;
  },
  unequip: () => {
    fleeChance -= 10;
  },
};

const SHADOWSTEP_BOOTS = {
  name: "Shadowstep Boots",
  description: "",
  image: "styles/images/items/shadowstep-boots.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item your dexterity increases by 1.",
  function: () => {
    updateStats("DEXTERITY", 1);
  },
  unequip: () => {
    updateStats("DEXTERITY", -1);
  },
};

const BONE_BLUDGEON = {
  name: "Bone Bludgeon",
  description: "",
  image: "styles/images/items/bone-bludgeon.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item your strength increases by 1.",
  function: () => {
    updateStats("STRENGTH", 1);
  },
  unequip: () => {
    updateStats("STRENGTH", -1);
  },
};

const HOLY_RELIC = {
  name: "Holy Relic",
  description: "",
  image: "styles/images/items/holy-relic.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item your faith increases by 1.",
  function: () => {
    updateStats("FAITH", 1);
  },
  unequip: () => {
    updateStats("FAITH", -1);
  },
};

const RITUAL_BLADE = {
  name: "Ritual Blade",
  description: "",
  image: "styles/images/items/ritual-blade.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect:
    "While attuned to this item your attack increases by 3, but your faith decreases by 1.",
  function: () => {
    baseAttack += 3;
    updateStats("FAITH", -1);
  },
  unequip: () => {
    baseAttack -= 3;
    updateStats("FAITH", 1);
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

const MIST_VEIL_CLOAK = {
  name: "Mist Veil Cloak",
  description: "",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item you have a slight chance of completely evading enemy attacks.",
  function: () => {
    let randomNumber = Math.round(Math.random() * 20);
    if (randomNumber >= 19) {
      console.log(`Attack evaded with Mist Veil Cloak!`);
      return 0;
    } else {
      console.log(`Attack NOT evaded...`);
      return 1;
    }
  },
};

const BLOODSTONE = {
  name: "Bloodstone",
  description: "",
  image: "styles/images/items/bloodstone.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "When attuned to this item you recover a small amount of health after defeating a creature.",
  function: () => {
    let monsterLevel = currentRoom.contents.monsters[0].skulls;

    switch (monsterLevel) {
      case 1:
        healPlayer(2);
        break;

      case 2:
        healPlayer(4);
        break;

      case 3:
        healPlayer(6);
        break;

      case 4:
        healPlayer(8);
        break;

      case 5:
        healPlayer(10);
        break;

      case 6:
        healPlayer(15);
        break;

      case 7:
        healPlayer(15);
        break;

      case 8:
        healPlayer(30);
        break;

      case 9:
        healPlayer(40);
        break;
    }
  },
};

const WRAITHBANE = {
  name: "Wraithbane",
  description: "",
  image: "styles/images/items/wraithbane.jpg",
  type: "MAGIC",
  rarity: "Rare",
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
  image: "styles/images/items/sunstone.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item undead creatures take damage at the start of battle.",
  function: () => {
    if (currentRoom.contents.monsters[0].type === "UNDEAD") {
      setTimeout(damageMonster(10), 3000);
      writeToLogItem(LOG_ITEM, "YES", SUNSTONE);
    } else {
      return;
    }
  },
};

const WHISPERING_AMULET = {
  name: "Whispering Amulet",
  description: "",
  image: "styles/images/items/whispering-amulet.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item you can communicate with some undead creatures.",
  function: () => {
    // Adds Grervil's Room While Wearing
    catacombRooms.push(SKULL_CHAMBER);
  },
  unequip: () => {
    // Removes Grervil's Room When Unequipped
    if (catacombRooms.includes(SKULL_CHAMBER)) {
      let indexToRemove = catacombRooms.findIndex(
        (room) => room.roomName === "Skull-filled Chamber"
      );
      catacombRooms = [
        ...catacombRooms.slice(0, indexToRemove),
        ...catacombRooms.slice(indexToRemove + 1),
      ];
    }
  },
};

const CURSED_MIRROR = {
  name: "Cursed Mirror",
  description: "",
  image: "styles/images/items/cursed-mirror.jpg",
  type: "MAGIC",
  rarity: "Rare",
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
  image: "styles/images/items/revenants-rage.jpg",
  type: "MAGIC",
  rarity: "Rare",
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
  image: "styles/images/items/laughing-coffin-coin.jpg",
  soundEffect: coinFlipLand,
  type: "MISC",
  rarity: "Rare",
  effect:
    "Taken from Ivan the Scoundrel, it may be of some value to other scoundrels.",
  function: () => {
    writeToLogItem(LOG_ITEM, LAUGHING_COFFIN_COIN);
  },
};

const PLAGUEWARD_PENDANT = {
  name: "Plagueward Pendant",
  description: "",
  image: "styles/images/items/plagueward-pendant.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item it prevents you from being diseased.",
  function: () => {
    return "IMMUNE";
  },
};

const GHOSTSHROUD_TALISMAN = {
  name: "Ghostshroud Talisman",
  description: "",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item it prevents you from being haunted.",
  function: () => {
    return "IMMUNE";
  },
};

const TOXINWEAVE_MASK = {
  name: "Toxinweave Mask",
  description: "",
  image: "styles/images/items/toxinweave-mask.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item it prevents you from being poisoned.",
  function: () => {
    return "IMMUNE";
  },
};

const SILKSTRIDERS = {
  name: "Silkstriders",
  description: "",
  image: "styles/images/items/silkstriders.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you can't be webbed by spiders.",
  function: () => {
    return "IMMUNE";
  },
};

const CHILLBREAKER_BAND = {
  name: "Chillbreaker Band",
  description: "",
  image: "styles/images/items/chillbreaker-band.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item it prevents you from being chilled.",
  function: () => {
    return "IMMUNE";
  },
};

const BERSERKER_PAULDRONS = {
  name: "Berserker Pauldrons",
  description: "",
  image: "styles/images/items/berserker-pauldron.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +2 Strength, but -1 Faith.",
  function: () => {
    updateStats("STRENGTH", 2);
    updateStats("FAITH", -1);
  },
  unequip: () => {
    updateStats("STRENGTH", -2);
    updateStats("FAITH", 1);
  },
};

const TOME_OF_DEVOTION = {
  name: "Tome of Devotion",
  description: "",
  image: "styles/images/items/tome-of-devotion.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +2 Faith, but -1 Dexterity.",
  function: () => {
    updateStats("FAITH", 2);
    updateStats("DEXTERITY", -1);
  },
  unequip: () => {
    updateStats("FAITH", -2);
    updateStats("DEXTERITY", 1);
  },
};

const BRACELET_OF_THE_SERPENT = {
  name: "Bracelet of the Serpent",
  description: "",
  image: "styles/images/items/serpent-bracelet.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +2 Dexterity, but -1 Strength.",
  function: () => {
    updateStats("DEXTERITY", 2);
    updateStats("STRENGTH", -1);
  },
  unequip: () => {
    updateStats("DEXTERITY", -2);
    updateStats("STRENGTH", 1);
  },
};

const FANGWEAVE_ARMOR = {
  name: "Fangweave Armor",
  description: "",
  image: "styles/images/items/fangweave.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +1 Dexterity, and +20HP.",
  function: () => {
    updateStats("DEXTERITY", 1);
    baseHealth += 20;
  },
  unequip: () => {
    updateStats("DEXTERITY", -1);
    baseHealth -= 20;
  },
};

const SKELETON_KEY = {
  name: "Skeleton Key",
  description: "",
  image: "styles/images/items/skeleton-key.jpg",
  soundEffect: skeletonKeyIn2,
  type: "MISC",
  rarity: "Rare",
  effect:
    "This key can be used to unlock various locked rooms throughout the catacomb.",
  function: () => {
    writeToLogItem(LOG_ITEM, "YES", SKELETON_KEY, currentRoom.roomName);
  },
};

const SOULREAVER = {
  name: "Soulreaver",
  description: "",
  image: "styles/images/items/soulreaver.jpg",
  type: "MAGIC",
  rarity: "Rare",
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
      writeToLogItem(LOG_ITEM, "NO", SOULREAVER);
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
  image: "styles/images/items/ethereal-crown.jpg",
  type: "MAGIC",
  rarity: "Epic",
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
  image: "styles/images/items/souljar.jpg",
  type: "MAGIC",
  rarity: "Epic",
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
  image: "styles/images/items/crimson-offering.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item you sacrifice 5HP after each of your attacks, but you deal an additional 10 damage.",
  function: () => {
    damagePlayer(5);
    isGameOver();
    writeToLogItem(LOG_ITEM, "YES", CRIMSON_OFFERING);
    return 10;
  },
};

const DARKGUARD_TRINKET = {
  name: "Darkguard Trinket",
  description: "",
  image: "styles/images/items/darkguard-trinket.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: "While attuned to this item it prevents you from being cursed.",
  function: () => {
    return "IMMUNE";
  },
};

const HALLOWED_HOURGLASS = {
  name: "Hallowed Hourglass",
  description: "",
  image: "styles/images/items/hourglass.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item your special ability cooldown is reduced.",
  function: () => {
    specialCooldownCounter--;
  },
};

const AEGIS_OF_THE_FALLEN = {
  name: "Aegis of the Fallen",
  description: "",
  image: "styles/images/items/aegis.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item you become immune to damage for a brief time after falling below 30HP.",
  cooldown: 0,
  function: () => {
    if (AEGIS_OF_THE_FALLEN.cooldown === 0) {
      AEGIS_STATUS_EFFECT.function();
      AEGIS_OF_THE_FALLEN.cooldown = 15;
    }
  },
};

const WAR_TORN_BANNER = {
  name: "War Torn Banner",
  description: "",
  image: "styles/images/items/war-torn-banner.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item, Legion's Grace will be active. However, undead legionnaires will seek you.",
  function: () => {
    LEGIONS_GRACE.function();
    writeToLogItem(LOG_ITEM, "YES", WAR_TORN_BANNER);
  },
  unequip: () => {
    LEGIONS_GRACE.duration = null;
  },
};

// ===============================
//       LOCKED ROOM ITEMS
// ===============================

const RIBCAGE_DEFENDER = {
  name: "Ribcage Defender",
  description: "",
  image: "styles/images/items/ribcage-defender.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item your max health is increased by 30HP.",
  function: () => {
    baseHealth += 30;
  },
  unequip: () => {
    baseHealth -= 30;
  },
};

const SKULLBREAKER_HELM = {
  name: "Skullbreaker Helm",
  description: "",
  image: "styles/images/items/skullbreaker-helm.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item your max health is increased by 20HP and you gain +1 Strength.",
  function: () => {
    updateStats("STRENGTH", 1);
    baseHealth += 20;
  },
  unequip: () => {
    updateStats("STRENGTH", -1);
    baseHealth -= 20;
  },
};

const BONECHILL_AMULET = {
  name: "Bone Chill Amulet",
  description: "",
  image: "styles/images/items/bonechill-amulet.jpg",
  type: "MAGIC",
  rarity: "Common",
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

const RATTLEBONE_WHISTLE = {
  name: "Rattlebone Whistle",
  description: "",
  image: "styles/images/items/rattlebone-whistle.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item there is a chance that humans will flee from you.",
  function: () => {
    if (
      currentRoom.contents.monsters[0].type === "HUMANOID" &&
      currentRoom.contents.monsters[0] !== IVAN_STATS
    ) {
      let randomNumber = Math.round(Math.random() * 10);

      if (randomNumber >= 7) {
        fadeOutAnimation(monsterContainer, 0000);
        setTimeout(() => {
          monsterContainer.style.display = "none";
          playerControlsTimeout(2000);
          checkForMonsters();
        }, 2000);
        writeToLogItem(LOG_ITEM, "YES", RATTLEBONE_WHISTLE);
      }
    }
  },
};

const SPINE_OF_THE_NECROMANCER = {
  name: "Spine of the Necromance",
  description: "",
  image: "styles/images/items/spine-of-the-necromancer.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item you gain +9 Attack, but all stats are reduced by 1.",
  function: () => {
    baseAttack += 9;
    updateStats("STRENGTH", -1);
    updateStats("DEXTERITY", -1);
    updateStats("FAITH", -1);
  },
  unequip: () => {
    baseAttack -= 9;
    updateStats("STRENGTH", 1);
    updateStats("DEXTERITY", 1);
    updateStats("FAITH", 1);
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
  image: "styles/images/items/cursed-grimoire.jpg",
  type: "MISC",
  rarity: "Epic",
  effect: "This item is cursed and cannot be unattuned.",
  function: () => {
    damagePlayer(1);
    writeToLogItem(LOG_ITEM, "YES", CURSED_GRIMOIRE);
  },
};

const CACHE_KEY = {
  name: "Ivan's Cache Key",
  description: "",
  image: "styles/images/items/cache-key.jpg",
  soundEffect: skeletonKeyIn2,
  type: "MISC",
  rarity: "Common",
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
  image: "styles/images/items/grervils-skull.jpg",
  type: "MISC",
  rarity: "Common",
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
  image: "styles/images/items/potion.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  effect: "Restores 20 health points and can be used during combat.",
  soundEffect: gulpingWater24,
  function: () => {
    potionHandler();
  },
};

const CRYPTBREAD = {
  name: "Cryptbread",
  description: "",
  image: "styles/images/items/cryptbread.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "EAT",
  effect: "Restores 10 health points when eaten.",
  soundEffect: chewCrackersMouth,
  function: () => {
    healPlayer(10);
  },
};

const BONE_MARROW_SOUP = {
  name: "Bone Marrow Soup",
  description: "",
  image: "styles/images/items/bonemarrow-soup.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "DRINK",
  effect: "Restores 15 health points when eaten.",
  soundEffect: gulpingWater24,
  function: () => {
    healPlayer(15);
  },
};

const MARROWSTONE_CHEESE = {
  name: "Marrowstone Cheese",
  description: "",
  image: "styles/images/items/marrowstone-cheese.jpg",
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "EAT",
  effect: "Restores 20 health points when eaten.",
  soundEffect: chewCrackersMouth,
  function: () => {
    healPlayer(25);
  },
};

const TOMBSTONE_TRUFFLE = {
  name: "Tombstone Truffle",
  description: "",
  image: "styles/images/items/tombstone-truffle.jpg",
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "EAT",
  effect: "Restores 10 health points when eaten.",
  soundEffect: chewCrackersMouth,
  function: () => {
    healPlayer(10);
  },
};

const SPIDER_EGG_YOLK = {
  name: "Spider Egg Yolk",
  description: "",
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "EAT",
  effect: "Restores 10 health points when eaten.",
  soundEffect: gulpingWater24,
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
  image: "styles/images/items/lichroot.jpg",
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "EAT",
  effect:
    "Can be used to permanently increase the potency of health potions by 5HP.",
  soundEffect: chewCrackersMouth,
  function: () => {
    potionHealValue += 5;
  },
};

const ROTBANE_FERN = {
  name: "Rotbane Fern",
  description: "",
  image: "styles/images/items/rotbane-fern.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "EAT",
  effect: "Can be used for a chance to cure the diseased condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (DISEASED.duration !== null) {
      let randomNumber = Math.round(Math.random() * 9);

      if (randomNumber >= 8) {
        DISEASED.duration = null;
        DISEASED.statusDuration = null;

        updatePlayerTrackers();
        clearInterval(diseasedInterval);
        writeToLogItem(LOG_ITEM, "YES", ROTBANE_FERN);
      }
    }

    healPlayer(1);
  },
};

const WITCHFIRE_ORCHID = {
  name: "Witchfire Orchid",
  description: "",
  image: "styles/images/items/witchfire-orchid.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "EAT",
  effect: "Can be used for a chance to cure the cursed condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (CURSED.duration !== null) {
      let randomNumber = Math.round(Math.random() * 9);

      if (randomNumber >= 8) {
        CURSED.duration = null;
        CURSED.statusDuration = null;
        // baseDexterity += 2;
        // baseStrength += 2;

        updatePlayerTrackers();
        clearInterval(cursedInterval);
        writeToLogItem(LOG_ITEM, "YES", WITCHFIRE_ORCHID);
      }
    }

    healPlayer(1);
  },
};

const EMBERTHAW_PETAL = {
  name: "Emberthaw Petal",
  description: "",
  image: "styles/images/items/emberthaw-petal.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "EAT",
  effect: "Can be used for a chance to cure the chilled condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (CHILLED.duration !== null) {
      let randomNumber = Math.round(Math.random() * 9);

      if (randomNumber >= 8) {
        CHILLED.duration = null;
        CHILLED.statusDuration = null;

        updatePlayerTrackers();
        clearInterval(chilledInterval);
        writeToLogItem(LOG_ITEM, "YES", EMBERTHAW_PETAL);
      }
    }

    healPlayer(1);
  },
};

const GHOSTLIGHT_LILY = {
  name: "Ghostlight Lily",
  description: "",
  image: "styles/images/items/ghostlight-lily.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "EAT",
  effect: "Can be used for a chance to cure the haunted condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (HAUNTED.duration !== null) {
      let randomNumber = Math.round(Math.random() * 9);

      if (randomNumber >= 8) {
        HAUNTED.duration = null;
        HAUNTED.statusDuration = null;

        clearInterval(hauntedInterval);
        writeToLogItem(LOG_ITEM, "YES", GHOSTLIGHT_LILY);
      }
    }

    healPlayer(1);
  },
};

const GRAVEBLOOM = {
  name: "Gravebloom",
  description: "",
  image: "styles/images/items/gravebloom.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "EAT",
  effect: "Can be used for a chance to cure the poisoned condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (POISONED.duration !== null) {
      let randomNumber = Math.round(Math.random() * 9);

      if (randomNumber >= 8) {
        POISONED.duration = null;
        POISONED.statusDuration = null;
        baseDexterity += 2;
        baseStrength += 2;

        updatePlayerTrackers();
        clearInterval(poisonedInterval);
        writeToLogItem(LOG_ITEM, "YES", GRAVEBLOOM);
      }
    }

    healPlayer(1);
  },
};

const LESSER_SOULSTONE = {
  name: "Lesser Soulstone",
  description: "",
  image: "styles/images/items/soulstone.jpg",
  soundEffect: crystalWhoosh,
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "USE",
  effect: "Can be used to gain +5 experience.",
  function: () => {
    gainExperience(5);
  },
};

const GREATER_SOULSTONE = {
  name: "Greater Soulstone",
  description: "",
  image: "styles/images/items/soulstone.jpg",
  soundEffect: crystalWhoosh,
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "USE",
  effect: "Can be used to gain +20 experience.",
  function: () => {
    gainExperience(25);
  },
};

const BLACKHEART_BREW = {
  name: "Blackheart Brew",
  description: "A favored drink of the scoundrels at the Laughing Coffin.",
  image: "styles/images/items/balckheart-brew.jpg",
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "DRINK",
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
  image: "styles/images/items/warding-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "CANDLE",
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
  image: "styles/images/items/soothing-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "CANDLE",
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
  image: "styles/images/items/flickering-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "CANDLE",
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
  image: "styles/images/items/blazing-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Epic",
  logDetail: "CANDLE",
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
  image: "styles/images/items/soulflame-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Epic",
  logDetail: "CANDLE",
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
  image: "styles/images/items/guiding-light.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Common",
  logDetail: "WISP",
  effect:
    "When this item is used a light will guide you to the nearest Candlelight Shrine.",
  status: "Guiding you to a nearby Candlelight Shrine.",
  duration: null,
  function: () => {
    if ((FIENDSWORN.active !== null) & (wispActive !== "ACTIVE")) {
      // writeToLog() The light refuses to guide someone sworn to evil
    } else {
      const wisp = document.querySelector(".wisp");
      let randomNumber = Math.round(Math.random() * 5) + 1;
      let itemDuration = roomCounter + randomNumber;
      CANDLELIGHT_SHRINE.contents.events = SAFE_ROOM;
      GUIDING_LIGHT.duration = "Searching";
      wispActive = "ACTIVE";

      let guidingLightInterval = setInterval(() => {
        if (itemDuration - roomCounter > 1) {
          GUIDING_LIGHT.duration = `Duration: ${
            itemDuration - roomCounter
          } Rooms`;
        } else {
          GUIDING_LIGHT.duration = `Duration: ${
            itemDuration - roomCounter
          } Room`;
        }

        if (roomCounter >= itemDuration) {
          guidingLightTracker = "ARRIVE";
          wisp.classList.remove("orb");
          GUIDING_LIGHT.duration = null;
          wispActive = null;
          clearInterval(guidingLightInterval);
        } else {
          guidingLightTracker = "GUIDING";
        }
      }, 15000);

      wisp.classList.add("orb");

      const root = document.documentElement;
      root.style.setProperty("--orb", "#fff3b4");

      renderStatusEffects(GUIDING_LIGHT);
    }
  },
};

const ROWDY_WISP = {
  name: "Rowdy Wisp",
  description: "",
  image: "styles/images/items/rowdy-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "WISP",
  effect:
    "When this item is used a wisp will guide you to the Laughing Coffin Tavern.",
  status: "Guiding you to the Laughing Coffin Tavern.",
  duration: null,
  function: () => {
    if (wispActive !== "ACTIVE") {
      const wisp = document.querySelector(".wisp");
      let randomNumber = Math.round(Math.random() * 5) + 1;
      let duration = roomCounter + randomNumber;
      LAUGHING_COFFIN_ROOM.contents.events = LAUGHING_COFFIN_EVENT;
      ROWDY_WISP.duration = "Searching";
      wispActive = "ACTIVE";

      // Clear room if player fleed in the past
      LAUGHING_COFFIN_ROOM.contents.monsters = [];

      let rowdyWispInterval = setInterval(() => {
        ROWDY_WISP.duration = `Duration: ${duration - roomCounter} Rooms`;
        if (roomCounter >= duration) {
          rowdyWispTracker = "ARRIVE";
          wisp.classList.remove("orb");
          ROWDY_WISP.duration = null;
          wispActive = null;

          clearInterval(rowdyWispInterval);
        } else {
          rowdyWispTracker = "GUIDING";
        }
      }, 15000);

      wisp.classList.add("orb");

      const root = document.documentElement;
      root.style.setProperty("--orb", "#f2b268");

      renderStatusEffects(ROWDY_WISP);
    }
  },
};

const UNHOLY_WISP = {
  name: "Unholy Wisp",
  description: "",
  image: "styles/images/items/unholy-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "WISP",
  effect:
    "When this item is used a wisp will guide you to the nearest Blood Alter.",
  status: "Guiding you to the Blood Alter.",
  duration: null,
  function: () => {
    const wisp = document.querySelector(".wisp");
    let randomNumber = Math.round(Math.random() * 5) + 1;
    let wispDuration = roomCounter + randomNumber;
    BLOOD_ALTER.contents.events = CRIMSON_COVENANT;
    UNHOLY_WISP.duration = "Searching";
    wispActive = "ACTIVE";

    let unholyWispInterval = setInterval(() => {
      UNHOLY_WISP.duration = `Duration: ${wispDuration - roomCounter} Rooms`;
      if (roomCounter >= wispDuration) {
        wisp.classList.remove("orb");
        UNHOLY_WISP.duration = null;
        unholyWispTracker = "ARRIVE";
        wispActive = null;
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
  image: "styles/images/items/restless-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  logDetail: "WISP",
  effect: "When this item is used a wisp will guide you to Lost Legions Vale.",
  status: "Guiding you to Lost Legions Vale.",
  duration: null,
  function: () => {
    const wisp = document.querySelector(".wisp");
    let randomNumber = Math.round(Math.random() * 5) + 1;
    let wispDuration = roomCounter + randomNumber;
    RESTLESS_WISP.duration = "Searching";
    wispActive = "ACTIVE";

    // Clear room if player fleed in the past
    LOST_LEGIONS_VALE.contents.monsters = [];

    // Check if War Torn Banner is equipped
    if (attunedItems.includes(WAR_TORN_BANNER)) {
      for (let i = 0; i < 5; i++) {
        LOST_LEGIONS_VALE.contents.monsters.push(LEGIONNAIRE);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        LOST_LEGIONS_VALE.contents.monsters.push(SKELETAL_SOLDIER);
      }
    }

    let restlessWispInterval = setInterval(() => {
      RESTLESS_WISP.duration = `Duration: ${wispDuration - roomCounter} Rooms`;
      if (roomCounter >= wispDuration) {
        restlessWispTracker = "ARRIVE";
        wisp.classList.remove("orb");
        RESTLESS_WISP.duration = null;
        wispActive = null;
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

let inventoryItems = [GUIDING_LIGHT, POTION, POTION, POTION];

let commonConsumables = [
  POTION,
  MARROWSTONE_CHEESE,
  TOMBSTONE_TRUFFLE,
  CRYPTBREAD,
  BONE_MARROW_SOUP,
  GRAVEBLOOM,
  GHOSTLIGHT_LILY,
  ROTBANE_FERN,
  WITCHFIRE_ORCHID,
  EMBERTHAW_PETAL,
  LESSER_SOULSTONE,
  GREATER_SOULSTONE,
];

let rareConsumables = [
  LICHROOT,
  GREATER_SOULSTONE,
  GUIDING_LIGHT,
  UNHOLY_WISP,
  RESTLESS_WISP,
  ROWDY_WISP,
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
  RIBCAGE_DEFENDER,
  SKULLBREAKER_HELM,
  BONECHILL_AMULET,
  RATTLEBONE_WHISTLE,
  SPINE_OF_THE_NECROMANCER,
];

let beastCommonLoot = [RING_OF_SKITTERING, SILKSTRIDERS];

let beastRareLoot = [PLAGUEWARD_PENDANT, FANGWEAVE_ARMOR];

let humanoidCommonLoot = [FLASK_OF_LIGHT, SHADOWSTEP_BOOTS];

let humanoidRareLoot = [
  SUNSTONE,
  BRACELET_OF_THE_SERPENT,
  MIST_VEIL_CLOAK,
  TOME_OF_DEVOTION,
  TOXINWEAVE_MASK,
];

let undeadCommonLoot = [EVERTORCH, HOLY_RELIC, BONE_BLUDGEON, CHARM_OF_HEALING];

let undeadRareLoot = [
  GHOSTSHROUD_TALISMAN,
  SOULREAVER,
  BERSERKER_PAULDRONS,
  CHILLBREAKER_BAND,
  REVENANTS_RAGE,
  CURSED_MIRROR,
  WRAITHBANE,
];

let commonItems = [
  EVERTORCH,
  FLASK_OF_LIGHT,
  RING_OF_SKITTERING,
  CHARM_OF_HEALING,
  SOOTHING_CANDLE,
  FLICKERING_CANDLE,
  SHADOWSTEP_BOOTS,
  BONE_BLUDGEON,
  HOLY_RELIC,
];

let rareItems = [
  MIST_VEIL_CLOAK,
  WRAITHBANE,
  SUNSTONE,
  CURSED_MIRROR,
  REVENANTS_RAGE,
  WARDING_CANDLE,
  GUIDING_LIGHT,
  ROWDY_WISP,
  LAUGHING_COFFIN_COIN,
  TOXINWEAVE_MASK,
  GHOSTSHROUD_TALISMAN,
  BERSERKER_PAULDRONS,
  TOME_OF_DEVOTION,
  BRACELET_OF_THE_SERPENT,
];

let epicItems = [
  HALLOWED_HOURGLASS,
  DARKGUARD_TRINKET,
  SOUL_JAR,
  SOUL_JAR,
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
  const itemObject = inventoryItems.find((inv) => inv.name === itemName);

  // Check if the item is not already attuned
  if (itemObject && !attunedItems.includes(itemObject)) {
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);
    attunedItems.push(itemObject);

    if (itemObject.unequip) {
      itemObject.function();
    }

    clearInventory();
    renderInventory();
    writeToLogItem(LOG_ATTUNE, "YES", itemName);
  } else {
    // Handle case where the item is already attuned
    writeToLogItem(LOG_CANT_ATTUNE, "YES", itemName, "DUPLICATE");
  }
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

// function findItemChance() {
//   if (currentRoom.contents.events === null) {
//     let randomNumber = Math.round(Math.random() * 19 + baseFaith);

//     // ITEM: Graverobber's Spade - Increase item find chance by 10%
//     randomNumber += isItemAttuned(GRAVEROBBERS_SPADE, 0);

//     if (randomNumber >= 10) {
//       getItem("CONSUMABLE");
//     }

//     if (randomNumber >= 19) {
//       let itemRarity = Math.round(Math.random() * 99 + baseFaith);
//       if (itemRarity >= 95) {
//         getItem("Epic");
//       } else if (itemRarity >= 61) {
//         getItem("Rare");
//       } else {
//         getItem("Common");
//       }
//     }
//   }
// }

function getItem(rarity) {
  switch (rarity) {
    case "Epic":
      const epicIndex = Math.round(Math.random() * epicItems.length);
      foundItem = epicItems[epicIndex];
      epicItems.splice(epicIndex, 1);
      currentRoom.contents.items.push(foundItem);
      console.log("Epic Item Found!");
      break;

    case "Rare":
      const rareIndex = Math.round(Math.random() * rareItems.length);
      foundItem = rareItems[rareIndex];
      rareItems.splice(rareIndex, 1);
      currentRoom.contents.items.push(foundItem);
      console.log("Rare Item Found!");
      break;

    case "Common":
      const commonIndex = Math.round(Math.random() * commonItems.length);
      foundItem = commonItems[commonIndex];
      commonItems.splice(commonIndex, 1);
      currentRoom.contents.items.push(foundItem);
      console.log("Common Item Found!");
      break;

    case "RANDOM":
      let itemRarity = Math.round(Math.random() * 100 + baseFaith);

      if (itemRarity >= 91) {
        getItem("Epic");
      } else if (itemRarity >= 61) {
        getItem("Rare");
      } else {
        getItem("Common");
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
    writeToLogItem(LOG_CONSUMABLE, "YES", itemObject);
  }

  itemObject.function();

  if (itemObject.soundEffect) {
    soundEffectHandler(itemObject, "ITEM");
  }

  clearInventory();
  renderInventory();
}

function lootItems(lootGroup) {
  if (currentRoom.contents.events === null) {
    let room = currentRoom.contents.items;
    let commonLoot;
    let rareLoot;
    let epicLoot = epicItems;
    let foundItem;
    let foundConsumable;

    let lootItemChance = Math.round(Math.random() * 100);
    lootItemChance += itemFindChance;

    let lootConsumableChance = Math.round(Math.random() * 100);
    lootConsumableChance += itemFindChance;

    // // ITEM: Graverobber's Spade - Increase item find chance by 5%
    // lootItemChance += isItemAttuned(GRAVEROBBERS_SPADE, 0);
    // lootConsumableChance += isItemAttuned(GRAVEROBBERS_SPADE, 0);

    // function calculateItemFindChance() {
    //   itemFindChance = baseFaith * 2;

    //   // ITEM: Graverobber's Spade - Increase item find chance by 5%
    //   itemFindChance += isItemAttuned(GRAVEROBBERS_SPADE, 0);
    // }

    switch (lootGroup) {
      case "BEAST":
        commonLoot = beastCommonLoot;
        rareLoot = beastRareLoot;
        break;

      case "HUMANOID":
        commonLoot = humanoidCommonLoot;
        rareLoot = humanoidRareLoot;

        if (lootItemChance > 90) {
          room.push(LAUGHING_COFFIN_COIN);
        }

        break;

      case "UNDEAD":
        commonLoot = undeadCommonLoot;
        rareLoot = undeadRareLoot;

        if (lootItemChance > 90) {
          room.push(SKELETON_KEY);
        }

        break;

      default:
        break;
    }

    // Loot Items
    if (lootItemChance > 102 && epicLoot.length > 0) {
      const epicIndex = Math.floor(Math.random() * epicLoot.length);
      foundItem = epicLoot[epicIndex];
      rareLoot.splice(epicIndex, 1);
      room.push(foundItem);
    } else if (lootItemChance > 95 && rareLoot.length > 0) {
      const rareIndex = Math.floor(Math.random() * rareLoot.length);
      foundItem = rareLoot[rareIndex];
      rareLoot.splice(rareIndex, 1);
      room.push(foundItem);
    } else if (lootItemChance > 90 && commonLoot.length > 0) {
      const commonIndex = Math.floor(Math.random() * commonLoot.length);
      foundItem = commonLoot[commonIndex];
      commonLoot.splice(commonIndex, 1);
      room.push(foundItem);
    }

    // Loot Consuables
    if (lootConsumableChance > 95) {
      const rareConsumablesIndex = Math.floor(
        Math.random() * rareConsumables.length
      );
      foundConsumable = rareConsumables[rareConsumablesIndex];
      room.push(foundConsumable);
    } else if (lootConsumableChance > 70) {
      const commonConsumablesIndex = Math.floor(
        Math.random() * commonConsumables.length
      );
      foundConsumable = commonConsumables[commonConsumablesIndex];
      room.push(foundConsumable);
    }
  }
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

  // Render Image
  if (effect.image) {
    newEffect.style.backgroundImage = `url('${effect.image}')`;
    newEffect.style.backgroundSize = "cover";
  } else {
    newEffect.textContent = effect.name;
  }

  middleLeft.appendChild(newEffect);

  // Status Effect Tooltip
  newEffect.classList.add("statusTooltip");
  const tooltipText = document.createElement("ul");
  tooltipText.classList.add("statusTooltipText");
  newEffect.appendChild(tooltipText);

  const tooltipNoteName = document.createElement("li");
  const tooltipNoteDuration = document.createElement("li");
  const tooltipNoteStatus = document.createElement("li");
  tooltipNoteName.textContent = effect.name;
  tooltipNoteName.style.fontWeight = "800";

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

  document.querySelectorAll(".statusTooltip").forEach(function (element) {
    element.addEventListener("mouseover", function () {
      const tooltipText = this.querySelector(".statusTooltipText");

      tooltipText.style.visibility = "visible";
      tooltipText.style.opacity = "1";
    });

    element.addEventListener("mouseout", function () {
      const tooltipText = this.querySelector(".statusTooltipText");
      tooltipText.style.visibility = "hidden";
      tooltipText.style.opacity = "0";
    });
  });
}

// ===============================
//      STATUS EFFECT LOGIC
// ===============================

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
            writeToLogItem(LOG_ITEM, "YES", WARDING_CANDLE);
          }
        }
      }
      break;

    case SOOTHING_CANDLE:
      if (soothingCandleTracker === "LIT") {
        healPlayer(10);
        writeToLogItem(LOG_ITEM, "YES", SOOTHING_CANDLE);
      }
      break;

    case FLICKERING_CANDLE:
      if (flickeringCandleTracker > 0) {
        flickeringCandleTracker--;
        return 99;
      } else {
        return 0;
      }
      break;

    case BLAZING_CANDLE:
      if (blazingCandleTracker > 0) {
        blazingCandleTracker--;
        writeToLogItem(LOG_ITEM, "YES", BLAZING_CANDLE);
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
        updateStats("DEXTERITY", -1);
        updateStats("STRENGTH", 2);
        updatePlayerTrackers();
      }
      break;

    case POISONED:
      updateStats("DEXTERITY", -2);
      updateStats("STRENGTH", -2);
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

    // case BLOOD_PACT:
    //   //writeToLogItem()
    //   baseAttack += 5;
    //   baseFaith -= 2;
    //   updatePlayerTrackers();
    //   break;

    case LEGIONS_GRACE:
      //writeToLogItem()
      break;

    case CHILLED:
      //writeToLogItem() You are chilled and unable to use your special ability
      break;

    case FIENDSWORN:
      if (FIENDSWORN.active !== null) {
        if (
          currentRoom.contents.monsters[0] === CULTIST ||
          currentRoom.contents.monsters[0] === FIENDSWORN_CULTIST
        ) {
          fadeOutAnimation(monsterContainer, 0000);
          setTimeout(() => {
            checkForMonsters();
            monsterContainer.style.display = "none";
          }, 2000);
          writeToLogItem(LOG_STATUS, "YES", FIENDSWORN);
        }
      }
      break;

    case BRANDED:
      if (roomMonsters[0].length > 0 && BRANDED.active !== null) {
        let randomDemon = Math.round(Math.random() * 6);
        console.log("DEMON");
        console.log(randomDemon);

        if (randomDemon >= 6) {
          roomMonsters.unshift(DEMON);
          writeToLogItem(LOG_STATUS, "YES", BRANDED);
        }
      }
      break;
  }
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

  if (item === POTION) {
    console.log("potion");
    potionCounter++;
    potions.textContent = ` x ${potionCounter}`;
  }
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
      itemBox.classList.add("itemTooltip");
      const tooltipText = document.createElement("ul");
      tooltipText.classList.add("tooltipText");
      itemBox.appendChild(tooltipText);

      const tooltipTextName = document.createElement("li");
      const tooltipTextRarity = document.createElement("li");
      const tooltipTextEffect = document.createElement("li");
      tooltipTextName.textContent = `${inventoryItems[i].name}`;
      tooltipTextName.style.fontWeight = "800";
      tooltipTextRarity.textContent = `${inventoryItems[i].rarity}`;
      tooltipTextEffect.textContent = `${inventoryItems[i].effect}`;

      if (inventoryItems[i].rarity === "Epic") {
        tooltipTextRarity.classList.add("epic-item");
      } else if (inventoryItems[i].rarity === "Rare") {
        tooltipTextRarity.classList.add("rare-item");
      } else {
        tooltipTextRarity.classList.add("common-item");
      }

      const itemButton = document.createElement("button");
      itemButton.setAttribute("id", itemName);

      if (inventoryItems[i].image) {
        itemButton.style.backgroundImage = `url('${inventoryItems[i].image}')`;
        itemButton.style.backgroundSize = "cover";
        itemButton.style.color = "lightgrey";
      } else {
        itemButton.textContent = itemName;
      }

      tooltipText.appendChild(tooltipTextName);
      tooltipText.appendChild(tooltipTextRarity);
      tooltipText.appendChild(tooltipTextEffect);
      itemBox.appendChild(itemButton);

      if (
        inventoryItems[i].type === "MAGIC" ||
        inventoryItems[i].type === "MISC"
      ) {
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
    itemBox.classList.add("itemTooltip");

    const itemButton = document.createElement("button");
    itemButton.setAttribute("id", attunedItems[i].name);

    if (inventoryItems[i].image) {
      itemButton.style.backgroundImage = `url('${attunedItems[i].image}')`;
      itemButton.style.backgroundSize = "cover";
      itemButton.style.color = "lightgrey";
    } else {
      itemButton.textContent = attunedItems[i].name;
    }

    const tooltipText = document.createElement("ul");
    tooltipText.classList.add("tooltipText");
    itemBox.appendChild(tooltipText);

    const tooltipTextName = document.createElement("li");
    const tooltipTextRarity = document.createElement("li");
    const tooltipTextEffect = document.createElement("li");
    tooltipTextName.textContent = `${attunedItems[i].name}`;
    tooltipTextName.style.fontWeight = "800";
    tooltipTextRarity.textContent = `${attunedItems[i].rarity}`;
    tooltipTextEffect.textContent = `${attunedItems[i].effect}`;

    if (attunedItems[i].rarity === "Epic") {
      tooltipTextRarity.classList.add("epic-item");
    } else if (attunedItems[i].rarity === "Rare") {
      tooltipTextRarity.classList.add("rare-item");
    } else {
      tooltipTextRarity.classList.add("common-item");
    }

    tooltipText.appendChild(tooltipTextName);
    tooltipText.appendChild(tooltipTextRarity);
    tooltipText.appendChild(tooltipTextEffect);
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

  document.querySelectorAll(".itemTooltip").forEach(function (element) {
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
  checkForLevelUp();
  updatePlayerTrackers();
});

inventoryModal.addEventListener("click", (event) => {
  const buttons = document.getElementsByTagName("button"); // Use the plural 'buttons' to represent a collection

  for (let i = 0; i < buttons.length; i++) {
    let itemObject = inventoryItems.find((inv) => inv.name === buttons[i].id);

    // Magic Items Logic
    if (
      magicItemsBox.contains(event.target) &&
      event.target === buttons[i] &&
      itemObject.type === "MISC"
    ) {
      writeToLogItem(LOG_CANT_ATTUNE, "YES", buttons[i].id, "MISC");
    } else if (
      magicItemsBox.contains(event.target) &&
      event.target === buttons[i]
    ) {
      attuneItem(buttons[i].id);
    }

    // Consumable Items Logic
    if (consumablesBox.contains(event.target) && event.target === buttons[i]) {
      // Check if currently following a wisp
      if (
        wispDuplicateHandler(buttons[i].id) === true &&
        wispActive === "ACTIVE"
      ) {
        writeToLogOther(LOG_OTHER, "YES", "WISP");
      } else {
        useConsumable(buttons[i].id);
      }
    }

    // Attuned Items Logic
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

  function wispDuplicateHandler(itemName) {
    if (
      itemName === "Guiding Light" ||
      itemName === "Rowdy Wisp" ||
      itemName === "Restless Wisp" ||
      itemName === "Unholy Wisp"
    ) {
      return true;
    } else {
      return false;
    }
  }
});
