// ===============================
//             ITEMS
// ===============================

// Common Items
// - *Evertorch
// - *Graverobber's Spade - Graverobber Earver
// - *Sunstone
// - *Charm of Healing
// - *Shadowstep Boots
// - *Ring of Skittering
// - *Bone Bludgeon
// - *Holy Relic
// - *Silkstriders
// - *Ritual Blade - Crimson Covenant

// Rare Items
// - Mist Veil Cloak
// - *Bloodstone - Crimson Covenant
// - *Wraithbane
// - *Whispering Amulet
// - *Cursed Mirror
// - *Revenant's Rage
// - Plagueward Pendant
// - Ghostshroud Talisman
// - Toxinweave Mask
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
// - *Gloryforged Blade

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
// - *War Torn Banner - Forsaken Commander

// Candles
// - *Warding Candle
// - *Soothing Candle
// - *Flickering Candle
// - *Blazing Candle
// - *Soulflame Candle

// Wisps
// - *Guiding Light
// - *Rowdy Wisp
// - *Bleeding Wisp
// - *Restless Wisp
// - *Wicked Wisp
// - *Curious Wisp

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

const SUNSTONE = {
  name: "Sunstone",
  description: "",
  image: "styles/images/items/sunstone.jpg",
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
  effect: "While attuned to this item you are 10% more likely to find items.",
  function: () => {
    // setTimeout(updateTotalStats, 1000);
    return 10;
  },
};

const CHARM_OF_HEALING = {
  name: "Charm of Healing",
  description: "",
  image: "styles/images/items/charm-of-healing.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item you recover 5HP after each room cleared.",
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
    return 2;
  },
};

const SHADOWSTEP_BOOTS = {
  name: "Shadowstep Boots",
  description: "",
  image: "styles/images/items/shadowstep-boots.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item your dexterity increases by 1.",
  stats: {
    strength: 0,
    dexterity: 1,
    faith: 0,
    attack: 0,
  },
};

const BONE_BLUDGEON = {
  name: "Bone Bludgeon",
  description: "",
  image: "styles/images/items/bone-bludgeon.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item your strength increases by 1.",
  stats: {
    strength: 1,
    dexterity: 0,
    faith: 0,
    attack: 0,
  },
};

const HOLY_RELIC = {
  name: "Holy Relic",
  description: "",
  image: "styles/images/items/holy-relic.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item your faith increases by 1.",
  stats: {
    strength: 0,
    dexterity: 0,
    faith: 1,
    attack: 0,
  },
};

const RITUAL_BLADE = {
  name: "Ritual Blade",
  description: "",
  image: "styles/images/items/ritual-blade.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect:
    "While attuned to this item your Attack increases by 3 when fighting human and beast type enemies.",
  function: () => {
    if (
      currentRoom.contents.monsters[0].type === "BEAST" ||
      currentRoom.contents.monsters[0].type === "HUMANOID"
    ) {
      return 3;
    } else {
      return 0;
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

const MIST_VEIL_CLOAK = {
  name: "Mist Veil Cloak",
  image: "styles/images/items/mist-veil-cloak.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item you have a 10% chance of completely evading enemy attacks.",
  function: () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 10) {
      console.log(`Attack evaded with Mist Veil Cloak!`);
      writeToLogItem(LOG_ITEM, null, MIST_VEIL_CLOAK);
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
    "While attuned to this item your Attack increases by 3 when fighting evil spirits.",
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

const AMULET_OF_WHISPERS = {
  name: "Amulet of Whispers",
  description: "",
  image: "styles/images/items/whispering-amulet.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item you can communicate with some undead creatures.",
  function: () => {
    if (grervilTracker === null) {
      // Adds Grervil's Room While Wearing
      catacombRooms.push(SKULL_CHAMBER);
    }

    if (FORSAKEN_COMMANDER.tracker === null) {
      // Adds Commander's Room While Wearing
      catacombRooms.push(GRIM_GARRISON);
    }
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

    // Removes Forsaken Commander's Room When Unequipped
    if (catacombRooms.includes(GRIM_GARRISON)) {
      let indexToRemove = catacombRooms.findIndex(
        (room) => room.roomName === "Grim Garrison"
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
    "While attuned to this item, your attacks deal 5 additional damage while below 30HP.",
  function: () => {
    if (currentPlayerHealth <= 30) {
      // writeToLogItem(LOG_ITEM, null, REVENANTS_RAGE); !FIX! add log
      return 5;
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
    "Carried by scoundrels, this coin grants access to the infamous Laughing Coffin Tavern.",
  function: () => {
    writeToLogItem(LOG_ITEM, "YES", LAUGHING_COFFIN_COIN);
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
    writeToLogItem(LOG_ITEM, null, PLAGUEWARD_PENDANT);
    return "IMMUNE";
  },
};

const GHOSTSHROUD_TALISMAN = {
  name: "Ghostshroud Talisman",
  description: "",
  image: "styles/images/items/ghostshroud-talisman.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item it prevents you from being haunted.",
  function: () => {
    writeToLogItem(LOG_ITEM, null, GHOSTSHROUD_TALISMAN);
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
    writeToLogItem(LOG_ITEM, null, TOXINWEAVE_MASK);
    return "IMMUNE";
  },
};

const SILKSTRIDERS = {
  name: "Silkstriders",
  description: "",
  image: "styles/images/items/silkstriders.jpg",
  type: "MAGIC",
  rarity: "Common",
  effect: "While attuned to this item you can't be webbed by spiders.",
  function: () => {
    writeToLogItem(LOG_ITEM, null, SILKSTRIDERS);
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
    writeToLogItem(LOG_ITEM, null, CHILLBREAKER_BAND);
    return "IMMUNE";
  },
};

const BERSERKER_PAULDRON = {
  name: "Berserker Pauldron",
  description: "",
  image: "styles/images/items/berserker-pauldron.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +2 Strength, but -1 Faith.",
  stats: {
    strength: 2,
    dexterity: 0,
    faith: -1,
    attack: 0,
  },
};

const TOME_OF_DEVOTION = {
  name: "Tome of Devotion",
  description: "",
  image: "styles/images/items/tome-of-devotion.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +2 Faith, but -1 Dexterity.",
  stats: {
    strength: 0,
    dexterity: -1,
    faith: 2,
    attack: 0,
  },
};

const BRACELET_OF_THE_SERPENT = {
  name: "Bracelet of the Serpent",
  description: "",
  image: "styles/images/items/serpent-bracelet.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +2 Dexterity, but -1 Strength.",
  stats: {
    strength: -1,
    dexterity: 2,
    faith: 0,
    attack: 0,
  },
};

const FANGWEAVE_ARMOR = {
  name: "Fangweave Armor",
  description: "",
  image: "styles/images/items/fangweave.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect: "While attuned to this item you gain +1 Dexterity, and +20HP.",
  stats: {
    strength: 0,
    dexterity: 1,
    faith: 0,
    attack: 0,
  },
  function: () => {
    baseHealth += 20;
  },
  unequip: () => {
    baseHealth -= 20;
  },
};

const SKELETON_KEY = {
  name: "Skeleton Key",
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
      writeToLogItem(LOG_ITEM, null, SOULREAVER);
      return 5;
    }
  },
};

// ===============================
//         EPIC ITEMS
// ===============================

const ETHEREAL_CROWN = {
  name: "Ethereal Crown",
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
      fadeOutAnimation(monsterContainer);
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
      // !FIX! Add jar breaking sound effect?
      itemObject = inventoryItems.find((inv) => inv.name === "Soul Jar");
      const index = inventoryItems.indexOf(itemObject);
      inventoryItems.splice(index, 1);
      updatePlayerTrackers();

      writeToLogItem(LOG_ITEM, "YES", SOUL_JAR);
    }
  },
};

const CRIMSON_OFFERING = {
  name: "Crimson Offering",
  image: "styles/images/items/crimson-offering.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item you sacrifice 5HP after each of your attacks, but you deal an additional 10 damage.",
  function: () => {
    damagePlayer(5);
    writeToLogItem(LOG_ITEM, "YES", CRIMSON_OFFERING);
    return 10;
  },
};

const DARKGUARD_TRINKET = {
  name: "Darkguard Trinket",
  image: "styles/images/items/darkguard-trinket.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: "While attuned to this item it prevents you from being cursed.",
  function: () => {
    writeToLogItem(LOG_ITEM, null, DARKGUARD_TRINKET);
    return "IMMUNE";
  },
};

const HALLOWED_HOURGLASS = {
  name: "Hallowed Hourglass",
  image: "styles/images/items/hourglass.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item your special ability cooldown is reduced by 2 actions.",
  function: () => {
    return 2;
  },
};

const AEGIS_OF_THE_FALLEN = {
  name: "Aegis of the Fallen",
  image: "styles/images/items/aegis.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "While attuned to this item you become immune to damage for a brief time after falling below 30HP.",
  cooldown: 0,
  function: () => {
    if (AEGIS_OF_THE_FALLEN.cooldown === 0 && currentPlayerHealth <= 30) {
      AEGIS_STATUS_EFFECT.function();
      AEGIS_OF_THE_FALLEN.cooldown = 15;
    }
  },
  unequip: () => {
    AEGIS_STATUS_EFFECT.duration = null;
    AEGIS_STATUS_EFFECT.statusDuration = null;
  },
};

const GLORYFORGED_BLADE = {
  name: "Gloryforged Blade",
  image: "styles/images/items/gloryforged.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: `While attuned to this item, your attack is increased by ${gloryforgedTracker}. This blade becomes more powerful with each instance of glory found in Fallen Warriors' Vale.`,
  stats: {
    strength: 0,
    dexterity: 0,
    faith: 0,
    attack: gloryforgedTracker,
  },
  function: () => {
    GLORYFORGED_BLADE.stats.attack = gloryforgedTracker;
  },
  unequip: () => {
    //
  },
};

const BONE_AMALGAM = {
  name: "Bone Amalgam",
  image: "styles/images/items/bone-amalgam.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: `While attuned to this item, you gain temporary HP after defeating a creature with bones. You can accumulate up to 30 temporary HP.`,
  tracker: 0,
  function: () => {
    BONE_AMALGAM_STATUS_EFFECT.function();
  },
  unequip: () => {
    BONE_AMALGAM_STATUS_EFFECT.duration = null;
  },
};

function boneAmalgamAddHitPoints() {
  let monster = currentRoom.contents.monsters[0];
  if (attunedItems.includes(BONE_AMALGAM)) {
    if (
      (monster !== GRUDGE ||
        monster !== HAUNTING_SPIRIT ||
        monster !== SHADE ||
        monster !== WRAITH ||
        monster !== CRYPT_CRAWLER ||
        monster !== BROODMOTHER) &&
      BONE_AMALGAM.tracker < 30
    ) {
      let tempHitPoints = monster.skulls;
      BONE_AMALGAM.tracker += tempHitPoints;
      console.log(`Temp Hit Points added ${tempHitPoints}`);
      if (BONE_AMALGAM.tracker > 30) {
        BONE_AMALGAM.tracker = 30;
      }
    }
  }
}

function boneAmalgamUseHitPoints(damage) {
  const randomBoneBreak = Math.round(Math.random() * 1);
  let remainingDamage;

  if (attunedItems.includes(BONE_AMALGAM) && BONE_AMALGAM.tracker > 0) {
    if (BONE_AMALGAM.tracker >= damage) {
      BONE_AMALGAM.tracker -= damage;
      // console.log(`Temp Hit Points used! ${damage}`);
      // console.log(`Tracker ${BONE_AMALGAM.tracker}`);
      remainingDamage = 0;
    } else {
      remainingDamage = damage - BONE_AMALGAM.tracker;
      BONE_AMALGAM.tracker = 0; // Set temporaryHitPoints to 0, as they are all used up
      // console.log(`Temp Hit Points used! ${temporaryHitPoints}`);
      // console.log(`Remaining Damage after using Temp Hit Points: ${remainingDamage}`);
      // console.log(`Tracker ${BONE_AMALGAM.tracker}`);
    }

    if (randomBoneBreak === 1) {
      soundEffectHandler(boneBreak7);
    } else {
      soundEffectHandler(boneBreak8);
    }
    writeToLogItem(LOG_ITEM, null, BONE_AMALGAM);
  } else {
    remainingDamage = damage;
  }

  return remainingDamage;
}

const GEM_OF_ANGUISH = {
  name: "Gem of Anguish",
  image: "styles/images/items/gem-of-anguish.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: `While attuned to this item, you gain 1XP for each point of damage you receive.`,
  function: () => {
    // see damagePlayer() for item logic
  },
};

const RELIC_OF_RETRIBUTION = {
  name: "Relic of Retribution",
  image: "styles/images/items/relic-of-retribution.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: `While attuned to this item, your Attack damage is increased by 25% against undead enemies.`,
  tracker: 0,
  function: () => {
    if (currentRoom.contents.monsters[0].type === "UNDEAD") {
      return 1.25;
    } else {
      return 1;
    }
  },
};

const UNHOLY_EFFIGY = {
  name: "Unholy Effigy",
  image: "styles/images/items/unholy-effigy.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: `While attuned to this item, each time you land a critical hit your special ability cooldown is reduced.`,
  tracker: 0,
  function: () => {
    if (criticalHit >= 20) {
      specialCooldownCounter--;
      specialCooldownHandler();
    }
  },
};

// ===============================
//       LOCKED ROOM ITEMS
// ===============================

// Bonevault

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
    "While attuned to this item, your attacks deal 5 additional damage to enemies below 30% their max HP.",
  function: () => {
    if (currentMonsterHealth <= 30) {
      // writeToLogItem(LOG_ITEM, null, SKULLBREAKER_HELM); !FIX! add log
      return 5;
    } else {
      return 0;
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
        fadeOutAnimation(monsterContainer);
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
  stats: {
    strength: -1,
    dexterity: -1,
    faith: -1,
    attack: 9,
  },
};

// Bonevault Demon

const TOMBGUARD = {
  name: "Tombguard",
  image: "styles/images/items/tomb-guardian.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect: "While attuned to this item your Guard Bonus is increased by 5.",
  tracker: 0,
  function: () => {
    // add shield soundEffect? hero.soundEffects.guard = sound;
    // writeToLogItem(LOG_ITEM, null, TOMBGUARD); !FIX!
    console.log(`TOMBGUARD`);
    return 5;
  },
};

// Frozen Door

const BONECHILL_AMULET = {
  name: "Bonechill Amulet",
  image: "styles/images/items/bonechill-amulet.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item the max HP and Attack of human and beast type enemies are reduced.",
  function: () => {
    if (
      currentRoom.contents.monsters[0].type === "HUMANOID" ||
      currentRoom.contents.monsters[0].type === "BEAST"
    ) {
      monsterMaxHealth = monsterMaxHealth - 15;
      monsterAttackValue = monsterAttackValue - 3;
      soundEffectHandler(iceCrackFreeze);
      writeToLogItem(LOG_ITEM, "YES", BONECHILL_AMULET);
    }
  },
};

// Molten Door

const HELLFIRE_CHARM = {
  name: "Hellfire Charm",
  image: "styles/images/items/hellfire-charm.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item it will burst into flames dealing 15 damage to your enemies after you take an accumulative 30 damage.",
  tracker: 0,
  function: () => {
    if (HELLFIRE_CHARM.tracker >= 30) {
      HELLFIRE_CHARM.tracker = 0;
      damageMonster(15);
      soundEffectHandler(magicSpellFire1);
      writeToLogItem(LOG_ITEM, "YES", HELLFIRE_CHARM);
    }
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

const DEMONIC_GRIMOIRE = {
  name: "Hendra's Grimoire",
  description: "",
  image: "styles/images/items/cursed-grimoire.jpg",
  type: "MAGIC",
  rarity: "Epic",
  effect:
    "This grimoire once belonged to Scholar Hendra. You feel a strong urge to attune to this item.",
  function: () => {
    damagePlayer(1);
    DEMONIC_GRIMOIRE.name = "Demonic Grimoire";
    DEMONIC_GRIMOIRE.effect = "This item can't be unattuned.";
    soundEffectHandler(energyPresence4);
    setTimeout(() => {
      writeToLogItem(LOG_ITEM, "YES", DEMONIC_GRIMOIRE);
    }, 3000);
  },
};

const CACHE_KEY = {
  name: "Ivan's Cache Key",
  description: "",
  image: "styles/images/items/cache-key.jpg",
  soundEffect: skeletonKeyIn2,
  type: "MISC",
  rarity: "Rare",
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
  image: "styles/images/npcs/grervil.jpg",
  type: "MISC",
  rarity: "Rare",
  effect: "Head of the talking skull, Grervil.",
  function: () => {},
};

const WAR_TORN_BANNER = {
  name: "War Torn Banner",
  description: "",
  image: "styles/images/items/war-torn-banner.jpg",
  type: "MAGIC",
  rarity: "Rare",
  effect:
    "While attuned to this item, undead legionnaires will be drawn to you.",
  function: () => {
    WAR_TORN_BANNER_STATUS.function();
    // writeToLogItem(LOG_ITEM, "YES", WAR_TORN_BANNER); !FIX! // with the banner raised behind you the legion will come
  },
  unequip: () => {
    WAR_TORN_BANNER_STATUS.duration = null;
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
  rarity: "Rare",
  effect: "Restores 30 health points and can be used during combat.",
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
  detail: "EAT",
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
  detail: "DRINK",
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
  detail: "EAT",
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
  detail: "EAT",
  effect: "Restores 10 health points when eaten.",
  soundEffect: chewCrackersMouth,
  function: () => {
    healPlayer(10);
  },
};

// const SPIDER_EGG_YOLK = {
//   name: "Spider Egg Yolk",
//   description: "",
//   type: "CONSUMABLE",
//   rarity: "Rare",
//   detail: "EAT",
//   effect: "Restores 10 health points when eaten.",
//   soundEffect: gulpingWater24,
//   function: () => {
//     healPlayer(10);
//   },
// };

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
  detail: "EAT",
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
  detail: "EAT",
  effect: "Can be used for a chance to cure the diseased condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (DISEASED.duration !== null) {
      let cureChance = Math.floor(Math.random() * 3) + 1;

      if (cureChance >= 3) {
        DISEASED.duration = null;
        DISEASED.statusDuration = null;

        updatePlayerTrackers();
        writeToLogItem(LOG_ITEM, "YES", ROTBANE_FERN);
      }

      console.log(`Cure Chance: ${cureChance}`);
    }
  },
};

const WITCHFIRE_ORCHID = {
  name: "Witchfire Orchid",
  description: "",
  image: "styles/images/items/witchfire-orchid.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "EAT",
  effect: "Can be used for a chance to cure the cursed condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (CURSED.duration !== null) {
      let cureChance = Math.floor(Math.random() * 3) + 1;

      if (cureChance >= 3) {
        CURSED.duration = null;
        CURSED.statusDuration = null;

        writeToLogItem(LOG_ITEM, "YES", WITCHFIRE_ORCHID);
      }

      console.log(`Cure Chance: ${cureChance}`);
    }
  },
};

const EMBERTHAW_PETAL = {
  name: "Emberthaw Petal",
  description: "",
  image: "styles/images/items/emberthaw-petal.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "EAT",
  effect: "Can be used for a chance to cure the chilled condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (CHILLED.duration !== null) {
      let cureChance = Math.floor(Math.random() * 3) + 1;

      if (cureChance >= 3) {
        CHILLED.duration = null;
        CHILLED.statusDuration = null;
        writeToLogItem(LOG_ITEM, "YES", EMBERTHAW_PETAL);
      }

      console.log(`Cure Chance: ${cureChance}`);
    }
  },
};

const GHOSTLIGHT_LILY = {
  name: "Ghostlight Lily",
  description: "",
  image: "styles/images/items/ghostlight-lily.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "EAT",
  effect: "Can be used for a chance to cure the haunted condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (HAUNTED.duration !== null) {
      let cureChance = Math.floor(Math.random() * 3) + 1;

      if (cureChance >= 3) {
        HAUNTED.duration = null;
        HAUNTED.statusDuration = null;
        writeToLogItem(LOG_ITEM, "YES", GHOSTLIGHT_LILY);
      }

      console.log(`Cure Chance: ${cureChance}`);
    }
  },
};

const GRAVEBLOOM = {
  name: "Gravebloom",
  description: "",
  image: "styles/images/items/gravebloom.jpg",
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "EAT",
  effect: "Can be used for a chance to cure the poisoned condition.",
  soundEffect: chewCrackersMouth,
  function: () => {
    if (POISONED.duration !== null) {
      let cureChance = Math.floor(Math.random() * 3) + 1;

      if (cureChance >= 3) {
        POISONED.duration = null;
        POISONED.statusDuration = null;
        updatePlayerTrackers();
      }

      console.log(`Cure Chance: ${cureChance}`);
    }
  },
};

const LESSER_SOULSTONE = {
  name: "Lesser Soulstone",
  description: "",
  image: "styles/images/items/lesser-soulstone.jpg",
  soundEffect: crystalWhoosh,
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "USE",
  effect: "Can be used to gain experience points.",
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
  detail: "USE",
  effect: "Can be used to gain a great amount of experience points.",
  function: () => {
    gainExperience(25);
  },
};

const BLACKHEART_BREW = {
  name: "Blackheart Brew",
  image: "styles/images/items/balckheart-brew.jpg",
  soundEffect: gulpingWater24,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "DRINK",
  effect: null,
  status: "You are drunk. Strength increased by 2 & Dexterity decreased by 1.",
  duration: null,
  statusDuration: null,
  stats: {
    strength: 2,
    dexterity: -1,
    faith: 0,
    attack: 0,
  },
  function: () => {
    startStatusEffect(BLACKHEART_BREW, 5);
  },
};

const WHISPERING_SKULL = {
  name: "Whispering Skull",
  image: "styles/images/items/whispering-skull.jpg",
  soundEffect: evilSpell1,
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "SPEAK",
  effect: "Can be used to learn secrets of the catacomb.",
  function: () => {
    if (attunedItems.includes(AMULET_OF_WHISPERS)) {
      setTimeout(() => {
        let whisper = Math.floor(Math.random() * 10) + 1;
        writeToLogItem(LOG_ITEM, "YES", WHISPERING_SKULL, whisper);
      }, 3000);
    } else {
      setTimeout(() => {
        writeToLogItem(LOG_ITEM, "YES", WHISPERING_SKULL, "NO AMULET");
      }, 3000);
    }
  },
};

// const SOULSHROUD_STEW = {
//   name: "Soulshroud Stew",
//   image: "styles/images/items/soulshroud-stew.jpg",
//   soundEffect: gulpingWater24,
//   type: "CONSUMABLE",
//   rarity: "Common",
//   detail: "DRINK",
//   effect: "Using this item recovers 15HP.  Additionally, you gain 30XP.",
//   function: () => {
//     healPlayer(15);
//     gainExperience(3);
//   },
// };

const TROLLBLOOD_TONIC = {
  name: "Trollblood Tonic",
  image: "styles/images/items/trollblood-tonic.jpg",
  soundEffect: gulpingWater24,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "DRINK",
  effect:
    "Using this item increases your Strength and Dexterity by 1. Additionally, you recover 20HP after each room cleared. These effects persist for 10 rooms.",
  status:
    "Strength and Dexterity increased by 1, and you regain 20HP after after each room cleared.",
  duration: null,
  statusDuration: null,
  stats: {
    strength: 1,
    dexterity: 1,
    faith: 0,
    attack: 0,
  },
  function: () => {
    startStatusEffect(TROLLBLOOD_TONIC, 10);
    // healPlayer(20) added to playerAttackHandler
  },
};

const NECROTIC_NECTAR = {
  name: "Necrotic Nectar",
  image: "styles/images/items/necrotic-nectar.jpg",
  soundEffect: gulpingWater24,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "DRINK",
  effect:
    "Using this item recovers all missing HP. However, your Strength and Dexterity are reduced to 0, and your Attack is reduced by 3. These effects persist for 5 rooms.",
  status: "Strength and Dexterity reduced to 0.",
  duration: null,
  statusDuration: null,
  stats: {
    strength: -99,
    dexterity: -99,
    faith: 0,
    attack: -3,
  },
  function: () => {
    healPlayer(playerMaxHealth);
    startStatusEffect(NECROTIC_NECTAR, 10);
  },
};

const HEXBANE_BREW = {
  name: "Hexbane Brew",
  image: "styles/images/items/hexbane-brew.jpg",
  soundEffect: gulpingWater24,
  type: "CONSUMABLE",
  rarity: "Epic",
  detail: "DRINK",
  effect:
    "Using this item cures and grants immunity to the Poisoned, Diseased, Chilled, and Cursed conditions. These effects persist for 10 rooms.",
  status: "You have immunity to being Poisoned, Diseased, Chilled, and Cursed.",
  duration: null,
  statusDuration: null,
  function: () => {
    startStatusEffect(HEXBANE_BREW, 10);
  },
};

// ===============================
//           CANDLES
// ===============================

const WARDING_CANDLE = {
  name: "Warding Candle",
  image: "styles/images/items/warding-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "CANDLE",
  tracker: null,
  effect:
    "While this candle is lit undead creatures may flee from you. The candle burns out after clearing 5 rooms.",
  status: "There is a chance undead enemies will flee from you.",
  duration: null,
  statusDuration: null,
  function: () => {
    WARDING_CANDLE.tracker = "LIT";
    startStatusEffect(WARDING_CANDLE, 5);
  },
};

const SOOTHING_CANDLE = {
  name: "Soothing Candle",
  description: "",
  image: "styles/images/items/soothing-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "CANDLE",
  tracker: null,
  effect:
    "While this candle is lit you restore 10HP after clearing a room. The candle burns out after clearing 5 rooms.",
  status: "You regain 10HP after clearing a room.",
  duration: null,
  statusDuration: null,
  function: () => {
    SOOTHING_CANDLE.tracker = "LIT";
    startStatusEffect(SOOTHING_CANDLE, 5);
  },
};

const FLICKERING_CANDLE = {
  name: "Flickering Candle",
  description: "",
  image: "styles/images/items/flickering-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Common",
  detail: "CANDLE",
  tracker: null,
  effect:
    "While this candle is lit your chance to flee successfully becomes 100%. After fleeing 3 times the candle burns out.",
  status: "You always successfully flee.",
  duration: null,
  statusDuration: null,
  function: () => {
    FLICKERING_CANDLE.tracker = "LIT";
    startStatusEffect(FLICKERING_CANDLE, 3);
  },
};

const BLAZING_CANDLE = {
  name: "Blazing Candle",
  description: "",
  image: "styles/images/items/blazing-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Epic",
  detail: "CANDLE",
  tracker: null,
  effect:
    "While this candle is lit all attack you make become critical hits. The candle burns out after clearing a room.",
  status: "All attacks made are critical hits.",
  duration: null,
  statusDuration: null,
  function: () => {
    BLAZING_CANDLE.tracker = "LIT";
    startStatusEffect(BLAZING_CANDLE, 1);
  },
};

const SOULFLAME_CANDLE = {
  name: "Soulflame Candle",
  image: "styles/images/items/soulflame-candle.jpg",
  soundEffect: flameLicks2,
  type: "CONSUMABLE",
  rarity: "Epic",
  detail: "CANDLE",
  tracker: null,
  effect:
    "While this candle is lit all experience gained is doubled. The candle burns out after clearing 5 rooms.",
  status: "All experience gained is doubled.",
  duration: null,
  statusDuration: null,
  function: () => {
    SOULFLAME_CANDLE.tracker = "LIT";
    startStatusEffect(SOULFLAME_CANDLE, 5);
  },
};

// ===============================
//            WISPS
// ===============================

const GUIDING_LIGHT = {
  name: "Guiding Light",
  color: "#f5e9ae",
  image: "styles/images/items/guiding-light.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "WISP",
  tracker: null,
  effect:
    "When this item is used a light will guide you to the nearest Candlelight Shrine.",
  status: "Guiding you to a nearby Candlelight Shrine.",
  duration: null,
  statusDuration: null,
  function: () => {
    CANDLELIGHT_SHRINE.contents.events = SAFE_ROOM;

    let randomWispDuration = Math.round(Math.random() * 5) + 1;
    wispActive = "ACTIVE";
    renderWisp(GUIDING_LIGHT);
    startStatusEffect(GUIDING_LIGHT, randomWispDuration);
  },
};

const ROWDY_WISP = {
  name: "Rowdy Wisp",
  color: "#f2b268",
  image: "styles/images/items/rowdy-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "WISP",
  tracker: null,
  effect:
    "When this item is used a wisp will guide you to the Laughing Coffin Tavern.",
  status: "Guiding you to the Laughing Coffin Tavern.",
  duration: null,
  statusDuration: null,
  function: () => {
    // Clear room if player fleed in the past
    LAUGHING_COFFIN_ROOM.contents.monsters = [];
    LAUGHING_COFFIN_ROOM.contents.events = LAUGHING_COFFIN_EVENT;

    let randomWispDuration = Math.round(Math.random() * 5) + 1;
    wispActive = "ACTIVE";
    renderWisp(ROWDY_WISP);
    startStatusEffect(ROWDY_WISP, randomWispDuration);
  },
};

const BLEEDING_WISP = {
  name: "Bleeding Wisp",
  color: "#bf3637",
  image: "styles/images/items/unholy-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "WISP",
  tracker: null,
  effect:
    "When this item is used a wisp will guide you to the Crimson Covenant.",
  status: "Guiding you to the Blood Alter.",
  duration: null,
  statusDuration: null,
  function: () => {
    BLOOD_ALTER.contents.events = CRIMSON_COVENANT;

    let randomWispDuration = Math.round(Math.random() * 5) + 1;
    wispActive = "ACTIVE";
    renderWisp(BLEEDING_WISP);
    startStatusEffect(BLEEDING_WISP, randomWispDuration);
  },
};

const WICKED_WISP = {
  name: "Wicked Wisp",
  color: "#824ecc",
  image: "styles/images/items/wicked-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "WISP",
  tracker: null,
  effect: "When this item is used a wisp will guide you to Hag's Hollow.",
  status: "Guiding you to Hag's Hollow.",
  duration: null,
  statusDuration: null,
  function: () => {
    HAGS_HOLLOW.contents.events = HAG_TRADER;

    let randomWispDuration = Math.round(Math.random() * 5) + 1;
    wispActive = "ACTIVE";
    renderWisp(WICKED_WISP);
    startStatusEffect(WICKED_WISP, randomWispDuration);
  },
};

const CURIOUS_WISP = {
  name: "Curious Wisp",
  color: "#8fc4d9",
  image: "styles/images/items/curious-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "WISP",
  tracker: null,
  effect: "When this item is used a wisp will guide you to Curator's Curio",
  status: "Guiding you to Curator's Curio.",
  duration: null,
  statusDuration: null,
  function: () => {
    CURATORS_CURIO.contents.events = CURATOR_TRADER;

    let randomWispDuration = Math.round(Math.random() * 5) + 1;
    wispActive = "ACTIVE";
    renderWisp(CURIOUS_WISP);
    startStatusEffect(CURIOUS_WISP, randomWispDuration);
  },
};

const RESTLESS_WISP = {
  name: "Restless Wisp",
  color: "#95dba8",
  image: "styles/images/items/restless-wisp.jpg",
  soundEffect: ghostBreathWithReverb,
  type: "CONSUMABLE",
  rarity: "Rare",
  detail: "WISP",
  tracker: null,
  effect:
    "When this item is used a wisp will guide you to Fallen Warriors' Vale.",
  status: "Guiding you to Fallen Warrior's Vale.",
  duration: null,
  statusDuration: null,
  function: () => {
    // Clear room if player fleed in the past
    FALLEN_WARRIORS_VALE.contents.monsters = [];
    FALLEN_WARRIORS_VALE.contents.events = BATTLEFIELD;

    let randomWispDuration = Math.round(Math.random() * 5) + 1;
    wispActive = "ACTIVE";
    renderWisp(RESTLESS_WISP);
    startStatusEffect(RESTLESS_WISP, randomWispDuration);
  },
};

function renderWisp(wispObject) {
  const wispColor = wispObject.color;
  const root = document.documentElement;

  wisp.classList.add("orb");
  root.style.setProperty("--orb", wispColor);
}

// ===============================
//    Item & Inventory Arrays
// ===============================

let inventoryItems = [GUIDING_LIGHT, POTION, POTION, POTION];

let commonCuratorArray = [
  EVERTORCH,
  SUNSTONE,
  CHARM_OF_HEALING,
  SHADOWSTEP_BOOTS,
  BONE_BLUDGEON,
  HOLY_RELIC,
  SILKSTRIDERS,
  RING_OF_SKITTERING,
];

let rareCuratorArray = [
  MIST_VEIL_CLOAK,
  CURSED_MIRROR,
  REVENANTS_RAGE,
  PLAGUEWARD_PENDANT,
  GHOSTSHROUD_TALISMAN,
  TOXINWEAVE_MASK,
  CHILLBREAKER_BAND,
  BERSERKER_PAULDRON,
  TOME_OF_DEVOTION,
  BRACELET_OF_THE_SERPENT,
  FANGWEAVE_ARMOR,
];

let epicCuratorArray = [RELIC_OF_RETRIBUTION, GEM_OF_ANGUISH, UNHOLY_EFFIGY];

let candleItems = [
  SOOTHING_CANDLE,
  FLICKERING_CANDLE,
  WARDING_CANDLE,
  BLAZING_CANDLE,
  SOULFLAME_CANDLE,
];

let wispItems = [
  GUIDING_LIGHT,
  CURIOUS_WISP,
  WICKED_WISP,
  ROWDY_WISP,
  BLEEDING_WISP,
  RESTLESS_WISP,
];

// Bonevault Loot
let bonevaultItems = [
  RIBCAGE_DEFENDER,
  SKULLBREAKER_HELM,
  RATTLEBONE_WHISTLE,
  SPINE_OF_THE_NECROMANCER,
];

// Coffin Event Loot
let coffinEventItems = [
  GREATER_SOULSTONE,
  LESSER_SOULSTONE,
  WHISPERING_SKULL,
  SKELETON_KEY,
  POTION,
];

// Monster Magic Item Loot
let beastCommonLoot = [RING_OF_SKITTERING, SILKSTRIDERS];

let beastRareLoot = [PLAGUEWARD_PENDANT, FANGWEAVE_ARMOR];

let humanoidCommonLoot = [SUNSTONE, SHADOWSTEP_BOOTS];

let humanoidRareLoot = [
  BRACELET_OF_THE_SERPENT,
  MIST_VEIL_CLOAK,
  TOME_OF_DEVOTION,
  TOXINWEAVE_MASK,
];

let undeadCommonLoot = [EVERTORCH, HOLY_RELIC, BONE_BLUDGEON, CHARM_OF_HEALING];

let undeadRareLoot = [
  GHOSTSHROUD_TALISMAN,
  SOULREAVER,
  BERSERKER_PAULDRON,
  REVENANTS_RAGE,
  CURSED_MIRROR,
  WRAITHBANE,
];

// Consumables Loot
let commonConsumables = [
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
];

let rareConsumables = [
  LICHROOT,
  GREATER_SOULSTONE,
  GUIDING_LIGHT,
  BLEEDING_WISP,
  RESTLESS_WISP,
  ROWDY_WISP,
  CURIOUS_WISP,
  WICKED_WISP,
  POTION,
];

// Epic Loot
let epicItems = [HALLOWED_HOURGLASS, SOUL_JAR, DARKGUARD_TRINKET];

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
  if (attunedItems.length < 5) {
    // itemName must be the item's string name
    const itemObject = inventoryItems.find((inv) => inv.name === itemName);

    // Check if the item is not already attuned
    if (itemObject && !attunedItems.includes(itemObject)) {
      const index = inventoryItems.indexOf(itemObject);
      inventoryItems.splice(index, 1);
      attunedItems.push(itemObject);

      if (itemObject.stats) {
        addStatChange(itemObject);
      }

      if (itemObject.unequip) {
        itemObject.function();
      }

      clearInventory();
      renderInventory();
      soundEffectHandler(feedbackSwell4);
      writeToLogItem(LOG_ATTUNE, "YES", itemName);
    } else {
      // Handle case where the item is already attuned
      writeToLogItem(LOG_CANT_ATTUNE, "YES", itemName, "DUPLICATE");
    }
  } else {
    writeToLogItem(LOG_CANT_ATTUNE, "YES", "ONLY FIVE");
  }
}

function removeItem(itemName) {
  // itemName must be the item's string name
  itemObject = attunedItems.find((inv) => inv.name === itemName);

  if (itemObject !== "Demonic Grimoire") {
    const index = attunedItems.indexOf(itemObject);
    attunedItems.splice(index, 1);
    inventoryItems.push(itemObject);

    if (itemObject.stats) {
      removeStatChange(itemObject);
    }

    if (itemObject.unequip) {
      itemObject.unequip();
    }
  }

  clearInventory();
  renderInventory();
}

function getItem(rarity) {
  switch (rarity) {
    case "CONSUMABLE":
      const consumableIndex = Math.floor(
        Math.random() * consumableItems.length
      );
      foundItem = consumableItems[consumableIndex];
      currentRoom.contents.items.push(foundItem);
      break;

    case "CANDLE":
      const candleIndex = Math.floor(Math.random() * candleItems.length);
      foundItem = candleItems[candleIndex];
      currentRoom.contents.items.push(foundItem);
      break;

    case "WISP":
      const wispIndex = Math.floor(Math.random() * wispItems.length);
      foundItem = wispItems[wispIndex];
      currentRoom.contents.items.push(foundItem);
      break;

    case "BONEVAULT":
      const bonevaultIndex = Math.floor(Math.random() * bonevaultItems.length);
      foundItem = bonevaultItems[bonevaultIndex];
      currentRoom.contents.items.push(foundItem);
      bonevaultItems.splice(bonevaultIndex, 1);
      break;

    case "COFFIN":
      const coffinIndex = Math.floor(Math.random() * coffinEventItems.length);
      foundItem = coffinEventItems[coffinIndex];
      currentRoom.contents.items.push(foundItem);
      break;
  }
}

function useConsumable(consumable) {
  // must use item's string name
  let itemObject = inventoryItems.find((inv) => inv.name === consumable);

  if (itemObject !== POTION) {
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);

    if (
      itemObject.type === "CONSUMABLE" &&
      itemObject.name !== "Ivan's Cache Key"
    ) {
      writeToLogItem(LOG_CONSUMABLE, "YES", itemObject);
    }
  }

  itemObject.function();

  if (itemObject.soundEffect) {
    soundEffectHandler(itemObject, "ITEM");
  }

  clearInventory();
  renderInventory();
  updateTotalStats();
}

function lootItems(lootGroup) {
  if (currentRoom.contents.events === null) {
    let room = currentRoom.contents.items;
    let commonLoot;
    let rareLoot;
    let epicLoot = epicItems;
    let foundItem;
    let foundConsumable;

    let lootItemChance = Math.floor(Math.random() * 100) + 1;
    lootItemChance += itemFindChance;

    let lootConsumableChance = Math.floor(Math.random() * 100) + 1;
    lootConsumableChance += itemFindChance;

    let lootSpecialChance = Math.floor(Math.random() * 100) + 1;
    lootSpecialChance += itemFindChance;

    switch (lootGroup) {
      case "BEAST":
        commonLoot = beastCommonLoot;
        rareLoot = beastRareLoot;
        break;

      case "HUMANOID":
        commonLoot = humanoidCommonLoot;
        rareLoot = humanoidRareLoot;

        if (
          lootSpecialChance > 95 &&
          currentRoom.contents.monsters[0] === SCOUNDREL
        ) {
          room.push(LAUGHING_COFFIN_COIN);
        }

        break;

      case "UNDEAD":
        commonLoot = undeadCommonLoot;
        rareLoot = undeadRareLoot;

        if (lootSpecialChance > 95) {
          room.push(SKELETON_KEY);
        }

        break;

      default:
        break;
    }

    console.log(`Loot Item Chance: ${lootItemChance}`);
    console.log(`Loot Consumable Chance: ${lootConsumableChance}`);
    console.log(`Loot Special Chance: ${lootSpecialChance}`);

    // Loot Items
    if (lootItemChance > 110 && epicLoot.length > 0) {
      const epicIndex = Math.floor(Math.random() * epicLoot.length);
      foundItem = epicLoot[epicIndex];
      epicLoot.splice(epicIndex, 1);
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

// ===============================
//    Inventory Handling Logic
// ===============================

function openInventoryHandler() {
  inventoryModal.style.display = "block";
  soundEffectHandler(cameraBag2);
}

function closeInventoryHandler() {
  inventoryModal.style.display = "none";

  soundEffectHandler(cameraIntoBag);
  calculatePlayerMaxHealth();
  updateTotalStats();
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
    potionCounter++;
    potions.textContent = ` x ${potionCounter}`;
  }
}

const magicItemsBox = document.getElementById("magicItemsBox");
let magicItemCounter = 0;
const consumablesBox = document.getElementById("consumablesBox");
const magicItemsDiv = document.querySelectorAll("#magicItemsBox div");
const consumablesDiv = document.querySelectorAll("#consumablesBox div");
let consumableCounter = 0;
const slotOne = document.getElementById("slotOne");
const slotTwo = document.getElementById("slotTwo");
const slotThree = document.getElementById("slotThree");
const slotFour = document.getElementById("slotFour");
const slotFive = document.getElementById("slotFive");

function renderInventory() {
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
        magicItemCounter++;
        magicItemsBox.appendChild(itemBox);
      } else {
        consumableCounter++;
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

    if (attunedItems[i].image) {
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
  updatePlayerTrackers();
});

inventoryModal.addEventListener("click", (event) => {
  const buttons = document.getElementsByTagName("button"); // Use the plural 'buttons' to represent a collection

  for (let i = 0; i < buttons.length; i++) {
    let itemObject = inventoryItems.find((inv) => inv.name === buttons[i].id);

    // Monster attack if using inventory during combat
    if (
      currentRoom.contents.monsters.length > 0 &&
      event.target === buttons[i] &&
      buttons[i].id !== "Health Potion"
    ) {
      monsterAttackHandler(2);
      writeToLogOther(LOG_OTHER, "YES", "DISTRACTED");
    }

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

    // Misc Other Item Logic
    if (event.target === buttons[i] && buttons[i].id === "Grervil's Head") {
      if (attunedItems.includes(AMULET_OF_WHISPERS)) {
        writeToLogItem(LOG_ITEM, "YES", GRERVILS_HEAD, "UNDERSTAND");
      } else {
        writeToLogItem(LOG_ITEM, "YES", GRERVILS_HEAD, "WHISPERS");
      }
    }
  }

  function wispDuplicateHandler(itemName) {
    if (
      itemName === "Guiding Light" ||
      itemName === "Rowdy Wisp" ||
      itemName === "Restless Wisp" ||
      itemName === "Bleeding Wisp" ||
      itemName === "Curious Wisp" ||
      itemName === "Wicked Wisp"
    ) {
      return true;
    } else {
      return false;
    }
  }
});

hagItems = [];
curatorItems = [];

const traderItemsBox = document.getElementById("traderItemsBox");
const playerItemsBox = document.getElementById("playerItemsBox");
const favorTracker = document.getElementById("favorTracker");
const traderName = document.getElementById("traderName");
let traderItems = [];

function renderTrade() {
  let itemValue;

  // Open Modal
  tradeModal.style.display = "block";

  function renderItems(container, items) {
    const renderedItems = {};

    for (let i = 0; i < items.length; i++) {
      const itemName = items[i].name;

      // Check if the item has already been rendered
      if (renderedItems.hasOwnProperty(itemName)) {
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
        const tooltipTextFavor = document.createElement("li");
        tooltipTextName.textContent = `${items[i].name}`;
        tooltipTextName.style.fontWeight = "800";
        tooltipTextRarity.textContent = `${items[i].rarity}`;
        tooltipTextEffect.textContent = `${items[i].effect}`;

        if (items[i].rarity === "Epic") {
          tooltipTextRarity.classList.add("epic-item");
          itemValue = 50;
        } else if (items[i].rarity === "Rare") {
          tooltipTextRarity.classList.add("rare-item");
          itemValue = 25;
        } else {
          tooltipTextRarity.classList.add("common-item");
          itemValue = 10;
        }

        if (items[i].name === "Health Potion") {
          itemValue = 10;
        }

        tooltipTextFavor.textContent = `Favor: ${itemValue}`;
        tooltipTextFavor.style.fontWeight = 900;

        const itemButton = document.createElement("button");
        itemButton.setAttribute("id", itemName);

        if (items[i].image) {
          itemButton.style.backgroundImage = `url('${items[i].image}')`;
          itemButton.style.backgroundSize = "cover";
          itemButton.style.color = "lightgrey";
        } else {
          itemButton.textContent = itemName;
        }

        tooltipText.appendChild(tooltipTextName);
        tooltipText.appendChild(tooltipTextRarity);
        tooltipText.appendChild(tooltipTextEffect);
        tooltipText.appendChild(tooltipTextFavor);
        itemBox.appendChild(itemButton);

        if (items === traderItems) {
          container.appendChild(itemBox);
        }

        // Which Trader?
        if (currentRoom.roomName === "Hag's Hollow") {
          favorTracker.textContent = hagFavor;
          traderName.textContent = "Hag's Items";
          traderItems = hagItems;

          if (
            items === inventoryItems &&
            items[i].type === "CONSUMABLE" &&
            items[i].name !== "Health Potion" &&
            items[i].name !== "Whispering Skull" &&
            items[i].name !== "Warding Candle" &&
            items[i].name !== "Soothing Candle" &&
            items[i].name !== "Flickering Candle" &&
            items[i].name !== "Blazing Candle" &&
            items[i].name !== "Soulflame Candle"
          ) {
            container.appendChild(itemBox);
          }
        } else if (currentRoom.roomName === "Curator's Curio") {
          favorTracker.textContent = curatorFavor;
          traderItems = curatorItems;
          traderName.textContent = "Curator's Items";

          if (
            (items === inventoryItems &&
              items[i].type === "MAGIC" &&
              (items[i].name !== "War Torn Banner" ||
                items[i].name !== "Amulet of Whispers")) ||
            items[i].name === "Laughing Coffin Coin" ||
            items[i].name === "Skeleton Key"
          ) {
            container.appendChild(itemBox);
          }
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

    // Display counts for each item
    for (const itemName in renderedItems) {
      const itemButton = document.getElementById(itemName);

      // Ensure that the itemButton is found in the document
      if (itemButton) {
        // Create a separate span element for the counter
        const counterSpan = document.createElement("span");
        counterSpan.classList.add("item-counter");

        // Append counter to the item name if there's more than one instance
        if (renderedItems[itemName] > 1) {
          counterSpan.textContent = `x${renderedItems[itemName]}`;
          itemButton.appendChild(counterSpan); // Append counter to the button
        }
      }
    }
  }

  renderItems(playerItemsBox, inventoryItems);
  renderItems(traderItemsBox, traderItems);
}

tradeModal.addEventListener("click", (event) => {
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    // Trader Items Logic
    if (traderItemsBox.contains(event.target) && event.target === buttons[i]) {
      calculateFavor(buttons[i].id, "SUBTRACT");
    }

    // Player Items Logic
    if (playerItemsBox.contains(event.target) && event.target === buttons[i]) {
      calculateFavor(buttons[i].id, "ADD");
    }

    // Stop event propagation to prevent closing the modal
    event.stopPropagation();
  }
});

closeTradeBtn.addEventListener("click", () => {
  tradeModal.style.display = "none";
  clearTrade();
});

function calculateFavor(itemName, operator) {
  let itemValue;
  let favor;

  // Which Trader?
  if (currentRoom.roomName === "Hag's Hollow") {
    favor = hagFavor;
    trader = "Hag";
  } else if (currentRoom.roomName === "Curator's Curio") {
    favor = curatorFavor;
    trader = "Curator";
  }

  switch (operator) {
    case "ADD":
      getFavor(itemName);
      break;

    case "SUBTRACT":
      useFavor(itemName);
      break;
  }

  // Giving an Item
  function getFavor(itemName) {
    let itemObject = inventoryItems.find((inv) => inv.name === itemName);

    if (itemObject.rarity === "Epic") {
      itemValue = 50;
    } else if (itemObject.rarity === "Rare") {
      itemValue = 25;
    } else {
      itemValue = 10;
    }

    // Delete Item from inventory
    const index = inventoryItems.indexOf(itemObject);
    inventoryItems.splice(index, 1);
    // Add Item favor to total favor;
    favor += itemValue;

    // Update global favor variable based on the current room
    if (currentRoom.roomName === "Hag's Hollow") {
      previousHagFavor = "TRADED";
      hagFavor = favor;
      soundEffectHandler(splashSubmerge2);
    } else {
      curatorFavor = favor;
    }

    renderTrade();
    writeToLogOther(LOG_OTHER, null, "GET FAVOR", itemObject, itemValue);
    writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "GET FAVOR");
  }

  // Gaining an Item
  function useFavor(itemName) {
    let itemObject;
    if (currentRoom.roomName === "Hag's Hollow") {
      previousHagFavor = "TRADED";
      itemObject = hagItems.find((inv) => inv.name === itemName);
    } else if (currentRoom.roomName === "Curator's Curio") {
      soundEffectHandler(voiceClipMale226);
      itemObject = curatorItems.find((inv) => inv.name === itemName);
    }

    if (itemObject.rarity === "Epic") {
      itemValue = 50;
    } else if (itemObject.rarity === "Rare") {
      itemValue = 25;
    } else {
      itemValue = 10;
    }

    if (itemObject === POTION) {
      itemValue = 10;
    }

    // Add Item to Player's Inventory
    if (favor >= itemValue) {
      // Delete Item from Trader's Inventory
      const index = traderItems.indexOf(itemObject);
      traderItems.splice(index, 1);

      favor -= itemValue;
      // Update global favor variable based on the current room
      if (currentRoom.roomName === "Hag's Hollow") {
        hagFavor = favor;
      } else if (currentRoom.roomName === "Curator's Curio") {
        curatorFavor = favor;

        // Remove Item From Loot Tables
        if (beastCommonLoot.includes(itemObject)) {
          removeItemFromLootTable(beastCommonLoot, itemObject);
        } else if (beastRareLoot.includes(itemObject)) {
          removeItemFromLootTable(beastRareLoot, itemObject);
        } else if (humanoidCommonLoot.includes(itemObject)) {
          removeItemFromLootTable(humanoidCommonLoot, itemObject);
        } else if (humanoidRareLoot.includes(itemObject)) {
          removeItemFromLootTable(humanoidRareLoot, itemObject);
        } else if (undeadCommonLoot.includes(itemObject)) {
          removeItemFromLootTable(undeadCommonLoot, itemObject);
        } else if (undeadRareLoot.includes(itemObject)) {
          removeItemFromLootTable(undeadRareLoot, itemObject);
        }

        function removeItemFromLootTable(lootTable, itemObject) {
          const index = lootTable.indexOf(itemObject);
          lootTable.splice(index, 1);
        }
      }

      addItemToInventory(itemObject);
      writeToLogOther(LOG_OTHER, null, "USE FAVOR", itemObject, itemValue);
      writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "USE FAVOR");
    } else {
      writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "NO FAVOR");
    }
  }

  clearTrade();
  renderTrade();
}

function clearTrade() {
  playerItemsBox.textContent = "";
  traderItemsBox.textContent = "";
}
