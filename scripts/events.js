// ===============================
//         Finished Events
// ===============================

// Candlelight Shrine
// Safe Room

// Trap Events
// Spike Walls
// Spider Web
// Swarm of Vermin
// Gas Chamber
// Skeletal Hands
// Spike Pitfall
// Pendulum Blades

// NPC Events
// Graverobber Earver
// Graverobber Earver Event Two
// Graverobber Earver Event Three
// Ivan the Scoundrel
// Ivan the Scoundrel Event Two
// Scholar Hendra
// Forsaken Commander
// Grervil the Bodiless

// MISC Events
// Coffin Spider
// The Laughing Coffin
// Crimson Covenant
// Locked Room

// ===============================
//         Safe Rooms
// ===============================

const SAFE_ROOM = {
  name: "",
  eventType: "SAFE ROOM",
  description:
    "You arrive at a Candlelight Shrine, a haven untainted by darkness. You embrace the flickering sanctuary, and let the shadows fade as you rest, shielded from the evil that prowls beyond its sacred glow.",
  summary: `You rest at the Candlelight Shrine. The sacred flames stand sentinel, offering you solace in the heart of the catacomb.`,
  functionOne: () => {
    setTimeout(() => {
      setTimeout(newRoomAnimation, 5000);
      setTimeout(() => {
        healPlayer(calculatePlayerMaxHealth());
      }, 6500);
      setTimeout(renderRoomSummaryModal, 9000);
    });
    writeToLogEvent(LOG_SAFE_ROOM, "YES");
  },
};

// ===============================
//         Trap Events
// ===============================

const SPIKE_WALLS = {
  name: "Spike Walls",
  eventType: "TRAP",
  description:
    "As you step into the chamber, the air grows tense. Suddenly, the stone walls come to life, and menacing spikes emerge, closing in around you. They glisten with a malevolent glint, threatening to impale anything in their path.",
  optionOne: "Strength",
  optionTwo: "Dexterity",
  passValue: 7,
  failDamage: 30,
};

const SPIDER_WEB = {
  name: "Spider Web",
  eventType: "TRAP",
  description:
    "A sticky, silken web envelopes you. The web clings to you, its threads vibrating with an eerie energy. You can feel the faint tremors of distant movements.",
  optionOne: "Strength",
  optionTwo: "Faith",
  passValue: 6,
  functionOne: () => {
    soundEffectHandler(fleshRip1);
  },
  functionTwo: () => {
    SPIDER_WEB.summary = `You alerted the Crypt Crawlers while trying to escape the silken webs.`;
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    soundEffectHandler(fleshRip1);
    setRoomSummary();
    startBattle();
  },
};

const GAS_CHAMBER = {
  name: "Gas Chamber",
  eventType: "TRAP",
  description:
    "A noxious, green mist begins to billow forth from unseen vents. It fills the air, suffusing the space with an acrid smell. Panic sets in as you realize you're trapped.",
  optionOne: "Strength",
  optionTwo: "Faith",
  passValue: 7,
  failDamage: 25,
  functionOne: () => {
    gasLeakHose3.pause();
  },
  functionTwo: () => {
    gasLeakHose3.pause();
  },
  penalty: () => {
    POISONED.function(5);
  },
};

const SWARM_OF_VERMIN = {
  name: "Swarm of Vermin",
  eventType: "TRAP",
  description:
    "An unending tide of rats pour into the chamber. Their frenetic scuttling and chittering echoes off the walls, drowning out all other sound.",
  optionOne: "Strength",
  optionTwo: "Faith",
  passValue: 6,
  failDamage: 20,
  penalty: () => {
    DISEASED.function(5);
  },
};

const SKELETAL_HANDS = {
  name: "Skeletal Hands",
  eventType: "TRAP",
  description:
    "From the depths of the catacomb floor, ghostly skeletal hands claw their way forth, bony fingers outstretched in your direction. They sway and reach, for your limps.",
  optionOne: "Strength",
  optionTwo: "Dexterity",
  passValue: 7,
  failDamage: 25,
};

const SPIKE_PITFALL = {
  name: "Spike Pitfall",
  eventType: "TRAP",
  description:
    "The ground beneath your feet gives way, leaving you in a freefall. Your heart races as you plummet into the darkness, catching glimpses of jagged spikes gleaming below.",
  optionOne: "Dexterity",
  optionTwo: "Faith",
  passValue: 6,
  failDamage: 25,
  penalty: () => {
    DISEASED.function(5);
    soundEffectHandler(pitchforkBody);
  },
};

const PENDULUM_BLADES = {
  name: "Pendulum Blades",
  eventType: "TRAP",
  description:
    "Massive blades descend from the ceiling. They swing back and forth, slicing through the air like harbingers of doom. Their polished edges catch the flickering light, casting sinister gleams around the chamber.",
  optionOne: "Dexterity",
  optionTwo: "Faith",
  passValue: 6,
  failDamage: 30,
};

// ===============================
//         NPC Events
// ===============================

const GRAVEROBBER_EARVER = {
  name: "Graverobber Earver",
  eventType: "NPC",
  image: "styles/images/npcs/graverobber-earver.jpg",
  description:
    "You stumble upon Graverobber Earver, hell-bent on breaching a sealed tomb. He beckons you to join his sinister endeavor, promising to share the treasure within.",
  summary: "",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    GRAVEROBBER_EARVER.summary =
      "After helping Graverobber Earver open the tomb, he was possessed by an evil spirit and attacked you. Forced to defend yourself, you struck down the grave robber.";
    currentRoom.contents.monsters.push(POSSESSED_EARVER);
    currentRoom.contents.items.push(GRAVEROBBERS_SPADE);

    setRoomSummary();
    startBattle();
    monsterAttackHandler();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    GRAVEROBBER_EARVER.summary =
      "You refused to help Graverobber Earver open the sealed tomb.";
    let currentRoomCounter = roomCounter + 5;

    let earverInterval = setInterval(() => {
      if (roomCounter > currentRoomCounter) {
        catacombRooms.push(GRAVEROBBER_EARVER_ROOM_TWO);
        clearInterval(earverInterval);
      }
    }, 60000);

    setRoomSummary();
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const GRAVEROBBER_EARVER_EVENT_TWO = {
  name: "Graverobber Earver",
  eventType: "NPC",
  image: "styles/images/npcs/graverobber-earver.jpg",
  description:
    "Once more, the air grows heavy as you find Graverobber Earver, unyielding in his pursuit of forbidden riches. He implores you to lend your strength, offering to share the riches within, should you dare to assist him.",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    GRAVEROBBER_EARVER_EVENT_TWO.summary =
      "You agreed to help Graverobber Earver open the sarcophagus, awakening a Bone Titan which struck Earver down and nearly you as well.";

    currentRoom.contents.monsters.push(BONE_TITAN);
    currentRoom.contents.items.push(GRAVEROBBERS_SPADE);
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
    setRoomSummary();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    GRAVEROBBER_EARVER_EVENT_TWO.summary =
      "Again, you refused to help Graverobber Earver desecrate a burial.";

    let currentRoomCounter = roomCounter + 5;
    let earverInterval = setInterval(() => {
      if (roomCounter > currentRoomCounter) {
        catacombRooms.push(GRAVEROBBER_EARVER_ROOM_THREE);
        clearInterval(earverInterval);
      }
    }, 60000);

    setRoomSummary();
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const GRAVEROBBER_EARVER_EVENT_THREE = {
  name: "Graverobber Earver",
  eventType: "NPC",
  image: "styles/images/npcs/graverobber-earver.jpg",
  description:
    "As fate would have it, you cross paths with Graverobber Earver yet again, his determination unshaken. This time, he stands before an ornate crypt belonging to a long dead king. With a knowing look, he extends his offer once more, tempting you with the allure of treasures concealed within.",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    GRAVEROBBER_EARVER_EVENT_THREE.summary =
      "You agreed to help Graverobber Earver open the tomb, unleashing fiery skeletal undead which consumed Earver in flames and nearly you as well.";

    currentRoom.contents.monsters.push(
      BLAZING_SKELETON,
      BLAZING_SKELETON,
      BLAZING_SKELETON,
      BLAZING_SKELETON
    );
    currentRoom.contents.items.push(GRAVEROBBERS_SPADE);
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
    setRoomSummary();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    GRAVEROBBER_EARVER_EVENT_THREE.summary =
      "Yet again, you refused to help Graverobber Earver. In recognition of your virtue, the spirit of a long dead king gifted his Ethereal Crown to you.";

    currentRoom.contents.items.push(ETHEREAL_CROWN);
    setRoomSummary();
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const IVAN_THE_SCOUNDREL = {
  name: "Ivan the Scoundrel",
  eventType: "NPC",
  image: "styles/images/npcs/ivan-the-scoundrel.jpg",
  description: `
  Trapped, a scoundrel ensnared in a spider's web begs, You there! Release me, and my hidden treasure shall be yours. You have my word, just get me out of this web!"`,
  summary: "",
  optionOne: "Release",
  optionTwo: "Leave",
  functionOne: () => {
    IVAN_THE_SCOUNDREL.summary = `Amidst the severed limbs of the defeated arachnid, the scoundrel, grateful yet wary, hands over a cryptic key. "Treasures await within my hidden cache," he smirks. "Take what's yours."`;
    currentRoom.contents.items.push(CACHE_KEY);
    currentRoom.contents.monsters.push(BROODMOTHER);
    let addRoom = roomCounter + 5;
    let ivanInterval = setInterval(() => {
      if (roomCounter > addRoom) {
        catacombRooms.push(IVANS_CACHE);
        clearInterval(ivanInterval);
      }
    }, 60000);

    setRoomSummary();
    startBattle();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    IVAN_THE_SCOUNDREL.summary = `Ivan's spiteful gaze follows your retreating figure as you press on, his vow of revenge echoing through the catacomb. The air thickens with malice as you leave him dangling in the shadows, the taste of impending retribution lingering in the abyss.`;
    let addRoom = roomCounter + 5;
    let ivanInterval = setInterval(() => {
      if (roomCounter > addRoom) {
        catacombRooms.push(
          IVAN_TRAP_ROOM_ONE,
          IVAN_TRAP_ROOM_TWO,
          IVAN_TRAP_ROOM_THREE
        );
        clearInterval(ivanInterval);
      }
    }, 60000);

    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 5000);
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
  },
};

const IVAN_THE_SCOUNDREL_EVENT_TWO = {
  name: "Ivan the Scoundrel",
  eventType: "NPC",
  description: `Stumbling upon Ivan the Scoundrel's secret cache, the hidden bounty awaits. A glinting lock beckons.`,
  optionOne: "Open",
  optionTwo: "Leave",
  functionOne: () => {
    IVAN_THE_SCOUNDREL_EVENT_TWO.summary = `Unveiling Ivan's cache revealed a deceitful ruse. Ambushed, survival demanded a fierce struggle against Ivan and his scoundrels.`;
    currentRoom.contents.monsters.push(IVAN_STATS, SCOUNDREL, SCOUNDREL);
    currentRoom.contents.items.push(LAUGHING_COFFIN_COIN);

    setRoomSummary();
    useConsumable("Ivan's Cache Key");
    setTimeout(() => {
      soundEffectHandler(magicSpellFire1);
      damagePlayer(20);
      BURNED.function(3);
      writeToLogEvent(LOG_NPC_OPTION_ONE, "YES", IVAN_THE_SCOUNDREL_EVENT_TWO);

      setTimeout(() => {
        startBattle();
        soundEffectHandler(humanLaugh25);
        writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "IVANS CACHE AMBUSH");
        playMusic(hiddenCapacity);
      }, 2000);
    }, 2000);
  },
  functionTwo: () => {
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    IVAN_THE_SCOUNDREL_EVENT_TWO.summary = `Unveiling Ivan's cache revealed a deceitful ruse. Ambushed, survival demanded a fierce struggle against Ivan and his scoundrels. In the aftermath, amidst the fallen, a mocking gold coin with a laughing skull emerged from Ivan's pocket.`;
    useConsumable("Ivan's Cache Key");
    currentRoom.contents.monsters.push(IVAN_STATS, SCOUNDREL, SCOUNDREL);
    currentRoom.contents.items.push(LAUGHING_COFFIN_COIN, LAUGHING_COFFIN_COIN);
    setRoomSummary();
    startBattle();
    soundEffectHandler(humanLaugh25);
    playMusic(hiddenCapacity);
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
  },
};

const IVANS_AMBUSH = {
  name: "Ivan's Ambush",
  eventType: "TRAP",
  description: `As you progress through the dark corridor, a subtle click triggers a deadly mechanism. Suddenly, a barrage of poison-tipped arrows begin to rain down upon you from concealed openings in the walls.`,
  optionOne: "Dexterity",
  optionTwo: "Faith",
  passValue: 7,
  failDamage: 25,
  functionOne: () => {
    IVANS_AMBUSH.summary = `You avoided being struck by poison arrows after triggering a trap. Ambushed, a struggle to the death against Ivan and his scoundrels ensued. With Ivan dead, his traps will torment you no more.`;
    currentRoom.contents.monsters.push(IVAN_STATS, SCOUNDREL, SCOUNDREL);
    soundEffectHandler(bulletsPassBy4);
    startBattle();
    setRoomSummary();
  },
  functionTwo: () => {
    IVANS_AMBUSH.summary = `You were struck by poison arrows after triggering a trap. Ambushed, a struggle to the death against Ivan and his scoundrels ensued. With Ivan dead, his traps will torment you no more.`;
    POISONED.function(5);
    soundEffectHandler(bulletsImpactFlesh26);
    currentRoom.contents.monsters.push(IVAN_STATS, SCOUNDREL, SCOUNDREL);
    startBattle();
    setRoomSummary();
  },
};

function ivansRevengeTracker() {
  ivanTracker++;

  if (ivanTracker === 3) {
    ivanTracker === "ROOM ADDED";
    catacombRooms.push(IVANS_REVENGE);
  }
}

const FORSAKEN_COMMANDER = {
  name: "Forsaken Commander",
  eventType: "NPC",
  image: "styles/images/npcs/commander.jpg",
  description: `A spectral commander materializes before you. "Valiant adventurer, my legion walk these depths, bound by an unholy curse to fight for the Baron. Please, will you help me free them from the chains of undeath?"`,
  optionOne: "Accept",
  optionTwo: "Refuse",
  tracker: null,
  functionOne: () => {
    FORSAKEN_COMMANDER.tracker = "ACTIVE";
    FORSAKEN_COMMANDER.summary = `You agree to aid the Forsaken Commander, promising to defeat his cursed legion and give them the eternal rest they deserve.`;
    currentRoom.contents.items.push(WAR_TORN_BANNER);
    setTimeout(renderRoomSummaryModal, 5000);
    setRoomSummary();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    FORSAKEN_COMMANDER.summary = `You refused to aid the Forsaken Commander, in a rage the commander and several of his legionnaires attacked you.`;
    currentRoom.contents.monsters.push(
      LEGIONNAIRE,
      LEGIONNAIRE,
      LEGIONNAIRE,
      FORSAKEN_COMMANDER_STATS
    );
    currentRoom.contents.items.push(AEGIS_OF_THE_FALLEN);
    playMusic(passedDanger);
    setTimeout(() => {
      startBattle();
    }, 2000);
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    setRoomSummary();
  },
};

function forsakenCommanderCheck() {
  // Checks if Forsaken Commander's Quest is Complete
  if (legionTracker >= 20 && FORSAKEN_COMMANDER.tracker === "ACTIVE") {
    FORSAKEN_COMMANDER.tracker = "FINSIHED";
    WAR_TORN_BANNER_STATUS.duration = null;
    inventoryItems.push(AEGIS_OF_THE_FALLEN);

    if (inventoryItems.includes(WAR_TORN_BANNER)) {
      useConsumable("War Torn Banner");
    } else if (attunedItems.includes(WAR_TORN_BANNER)) {
      const index = attunedItems.indexOf(WAR_TORN_BANNER);
      attunedItems.splice(index, 1);
    }
    writeToLogOther(LOG_OTHER, "YES", AEGIS_OF_THE_FALLEN);
  }
}

const GRERVIL_THE_BODILESS = {
  name: "Grervil the Bodiless",
  eventType: "NPC",
  image: "styles/images/npcs/grervil.jpg",
  description: `Emerging from beneath a pile of bones, the talking skull, Grervil, beckons with ghostly whispers. "Adventurer, I am but a voice trapped in this hollowed cranium. My body wanders, lost in the depths of the catacomb. Take me with you, and aid me in finding my lost body."`,
  optionOne: "Take",
  optionTwo: "Leave",
  tracker: null,
  functionOne: () => {
    if (attunedItems.includes(AMULET_OF_WHISPERS)) {
      GRERVIL_THE_BODILESS.tracker = "ACTIVE";
      GRERVIL_THE_BODILESS.summary =
        "Grervil the Bodiless joins you on your journey through the catacomb, in search of his wandering body.";

      const randomUndeadRoom = findRandomUndeadRoom();
      randomUndeadRoom.contents.monsters.push(GRERVILS_BODY);
      inventoryItems.push(GRERVILS_HEAD);

      grervilsQuestInterval = setInterval(() => {
        if (currentRoom.contents.monsters[0] === GRERVILS_BODY) {
          currentRoom.contents.events = GRERVILS_BODY_EVENT;

          setTimeout(() => {
            fadeOutAnimation(monsterContainer);
            fadeOutAnimation(monsterImageCard);
            fadeOutAnimation(controlsContainer);

            setTimeout(() => {
              monsterContainer.style.display = "none";
              monsterImage.style.display = "none";
            }, 2000);
          }, 5000);

          useConsumable("Grervil's Head"); // removes item from inventory
          // setControlsInterval("STOP");
          turnOffControls();
          writeToLogEvent(LOG_NPC_DIALOGUE, "YES", GRERVILS_HEAD);
          setTimeout(() => {
            renderEvent(GRERVILS_BODY_EVENT);
          }, 7500);
          clearInterval(grervilsQuestInterval);
        }
      }, 3000);

      setRoomSummary();
      setTimeout(renderRoomSummaryModal, 5000);
      writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
    }
  },
  functionTwo: () => {
    GRERVIL_THE_BODILESS.tracker = "ACTIVE";
    GRERVIL_THE_BODILESS.summary = `You refused to aid Grervil find his wandering body, abandoning the talking skull where he was found.`;

    const randomUndeadRoom = findRandomUndeadRoom();
    randomUndeadRoom.contents.monsters.push(HEADLESS_SKELETON);

    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 5000);
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
  },
};

const GRERVILS_BODY_EVENT = {
  name: "Grervil's Body Found",
  image: "styles/images/npcs/grervil.jpg",
  eventType: "NPC",
  description: `I don't have much to aid you, but take what you need most, brave soul. A key to unlock secrets or an ethereal wisp to guide you through the shadows.`,
  summary: `While exploring the catacomb, you unearthed Grervil's skeletal body. The skeleton gave you a wisp before departing into the catacombs's depths.`,
  optionOne: "Skeleton Key",
  optionTwo: "Wisp",
  functionOne: () => {
    GRERVILS_BODY_EVENT.summary = `At last, you reunited Grervil with his skeletal body. As a gesture of gratitude, he bestowed a Skeleton Key on to you before departing.`;
    GRERVIL_THE_BODILESS.tracker = "FINISHED";
    currentRoom.contents.items.push(SKELETON_KEY);
    setRoomSummary();
    checkForMonsters();
  },
  functionTwo: () => {
    GRERVILS_BODY_EVENT.summary = `At last, you reunited Grervil with his skeletal body. As a gesture of gratitude, he bestowed a Wisp on to you before departing.`;
    GRERVIL_THE_BODILESS.tracker = "FINISHED";
    getItem("WISP");
    setRoomSummary();
    checkForMonsters();
  },
};

const HAG_TRADER = {
  name: "The Hag",
  eventType: "MISC",
  description: `"Welcome, lost souls, to my hollow's embrace. Longing for my cauldron's depths, are you? Bring rare tributes, and my cauldron shall brew you something special."`,
  summary: `Hag's Hollow,  hidden deep within the catacomb's bowels, glows eerily from the bubbling cauldron within. Thick fog billows from the cauldron and hangs in the air, filling the room with a nauseating smell. The hag, with her cauldron, offers her dark expertise, welcoming those who bring rare ingredients to trade.`,
  optionOne: "Trade",
  optionTwo: "Leave",
  functionOne: () => {
    renderTrade();
  },
  functionTwo: () => {
    endTrade();
    setTimeout(() => {
      cauldronLargeBoil.pause();
    }, 7000);
  },
};

const CURATOR_TRADER = {
  name: "The Curator",
  eventType: "MISC",
  description: `"Ah, about time you stumbled in. Let's cut the formalities get to the point. What pitiful trinkets have you scrounged up, or are you here to waste my time?"`,
  summary: `The Curator's Curio, a clandestine collection of catacomb relics and arcane artifacts. In the dim-lit reliquary, items of forgotten power gather, chosen by the curator, who is willing to make a deal for anything that catches his eye.`,
  optionOne: "Trade",
  optionTwo: "Leave",
  functionOne: () => {
    renderTrade();
  },
  functionTwo: () => {
    endTrade();
  },
};

function endTrade() {
  currentRoom.contents.events = null;
  fadeOutAnimation(eventModal);
  setTimeout(() => {
    eventModal.style.display = "none";
  }, 1900);
  setTimeout(() => {
    renderRoomSummaryModal();
  }, 5000);
}

// ===============================
//          Misc. Events
// ===============================

const ITEM_ROBBERY = {
  name: "Item Thieves",
  image: "styles/images/monsters/scoundrel.jpg",
  eventType: "MISC",
  description: `Scoundrels suddenly emerge from hiding and quickly surround you, their eyes gleaming with greed. "Surrender your items, and you won't join the dead just yet." they demand, blades unsheathed.`,
  optionOne: "Surrender",
  optionTwo: "Refuse",
  functionOne: () => {
    if (inventoryItems.length > 3) {
      ITEM_ROBBERY.summary =
        "You surrendered to the scoundrels took what they wanted from your inventory, but left you unharmed.";
      itemRobberyRemoval();
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "SURRENDER");
      setTimeout(renderRoomSummaryModal, 1000);
    } else {
      ITEM_ROBBERY.summary =
        "You surrendered to the soundrels, but had nothing of interest, so they attacked you anyways.";
      currentRoom.contents.items.push(LAUGHING_COFFIN_COIN);
      currentRoom.contents.monsters.push(
        SCOUNDREL,
        SCOUNDREL,
        SCOUNDREL,
        SCOUNDREL
      );
      playMusic(hiddenCapacity);
      setTimeout(() => {
        monsterAttackHandler();
        POISONED.function(3);
        startBattle();
      }, 3000);
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "NOTHING");
    }
    setRoomSummary();
  },
  functionTwo: () => {
    ITEM_ROBBERY.summary =
      "You refused to surrender your items to the scoundrels and a battle ensued.";
    currentRoom.contents.items.push(LAUGHING_COFFIN_COIN);
    currentRoom.contents.monsters.push(
      SCOUNDREL,
      SCOUNDREL,
      SCOUNDREL,
      SCOUNDREL
    );
    playMusic(hiddenCapacity);
    setTimeout(() => {
      monsterAttackHandler();
      POISONED.function(3);
      startBattle();
    }, 3000);
    setRoomSummary();
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES", "REFUSE");
  },
};

function itemRobberyRemoval() {
  for (let i = 0; i < 3; i++) {
    const randomItemIndex = Math.floor(Math.random() * inventoryItems.length);

    if (inventoryItems[randomItemIndex] !== UNHOLY_WISP) {
      const stolenItem = inventoryItems.splice(randomItemIndex, 1)[0];
      writeToLogOther(LOG_OTHER, null, stolenItem.name, "ITEMS STOLEN");
    }
  }
}

const COFFIN_EVENT = {
  name: "Coffin Raider",
  eventType: "MISC",
  description:
    "You find a large ornately decorated coffin. Something valuable may be hidden inside.",
  optionOne: "Open",
  optionTwo: "Ignore",
  functionOne: () => {
    let randomNumber = Math.round(Math.random() * 10);
    if (randomNumber >= 7) {
      COFFIN_EVENT.summary =
        "You decided to open the coffin. Thankfully nothing dangerous was waiting inside.";
      getItem("COFFIN");
      getItem("WISP");
      setTimeout(soundEffectHandler(doorSecretPassage1), 1500);
      setTimeout(renderRoomSummaryModal, 5000);
    } else {
      COFFIN_EVENT.summary =
        "You decided to open the coffin, disturbing the eternal rest of a Draugr within.";
      currentRoom.contents.monsters.push(DRAUGR);
      getItem("COFFIN");
      getItem("WISP");
      soundEffectHandler(doorSecretPassage1);
      setTimeout(() => {
        playMusic(edgeOfFear);
        startBattle();
        monsterAttackHandler();
      }, 1500);

      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "DRAUGR");
    }

    console.log(randomNumber);
    setRoomSummary();
  },
  functionTwo: () => {
    COFFIN_EVENT.summary =
      "You decided to leave the coffin, and not disturb the dead within.";
    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const LAUGHING_COFFIN_EVENT = {
  name: "Laughing Coffin",
  eventType: "MISC",
  description: `The Laughing Coffin tavern, sanctuary for underworld denizens. Amid dim-lit haze, dubious characters eye you.`,
  summary: "",
  optionOne: "Pay",
  optionTwo: "Refuse",
  functionOne: () => {
    let patrons = LAUGHING_COFFIN_ROOM.contents.monsters;

    if (inventoryItems.includes(LAUGHING_COFFIN_COIN)) {
      LAUGHING_COFFIN_EVENT.summary = `You pay the toll, exchanging a Laughing Coffin Coin for camaraderie and unexpected relaxation within the infamous tavern.`;
      useConsumable("Laughing Coffin Coin"); // removes coin from inventory
      setTimeout(newRoomAnimation, 7000);
      setTimeout(() => {
        BLACKHEART_BREW.function();
        healPlayer(calculatePlayerMaxHealth());
      }, 8500);
      setTimeout(renderRoomSummaryModal, 11000);
      setRoomSummary();
    } else {
      LAUGHING_COFFIN_EVENT.summary = `Caught in a lie, and unable to pay coin as you said you would, several scoundrels attacked you.`;
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "LIAR");
      patrons.push(SCOUNDREL, SCOUNDREL, SCOUNDREL);
      setRoomSummary();
      startBattle();
    }
  },
  functionTwo: () => {
    LAUGHING_COFFIN_EVENT.summary = `With no coin, you were unable to enter the Laughing Coffin.`;
    setTimeout(() => {
      writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
    }, 2000);
    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 7000);
  },
};

const CRIMSON_COVENANT = {
  name: "Crimson Covenant",
  eventType: "MISC",
  description:
    "Before you stands a figure in blood-stained robes, encircled by other members of a ritual. With chilling devotion, they cut their wrists, offering crimson tributes. Echoing chants fill the catacomb, a haunting invitation to join.",
  summary: "",
  optionOne: "Join",
  optionTwo: "Refuse",
  functionOne: () => {
    if (currentPlayerHealth >= 51) {
      CRIMSON_COVENANT.summary =
        "You partook in the ritual of the Crimson Covenant, and spilled your blood. Although weakened by the experience you feel a surge of vitality throughout your body.";
      crimsonCovenantBoon += 20;
      crimsonCovenantTracker++;

      switch (crimsonCovenantTracker) {
        case 1:
          currentRoom.contents.items.push(RITUAL_BLADE);
          break;

        case 2:
          currentRoom.contents.items.push(BLOODSTONE);
          break;

        case 3:
          currentRoom.contents.items.push(CRIMSON_OFFERING);
          break;

        default:
          break;
      }

      damagePlayer(50);
      soundEffectHandler(bloodDrips);
      setRoomSummary();
      CRIMSON_COVENANT.summary =
        "You participated in the ritual, spilling your blood alongside the other members of the Crimson Covenant.";
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "JOIN");
      writeToLogEvent(LOG_MISC_OPTION_ONE, null, "MAX HEALTH");
      updateTotalStats();
      setTimeout(renderRoomSummaryModal, 5000);
    } else {
      CRIMSON_COVENANT.summary =
        "You were too weak to participate in the Crimson Covenant's ritual.";
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "LOW HEALTH");
      setTimeout(renderRoomSummaryModal, 5000);
    }
  },
  functionTwo: () => {
    CRIMSON_COVENANT.summary =
      "You refused to participate in the Crimson Covenant's ritual.";
    setRoomSummary();
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const BATTLEFIELD = {
  name: "Forsaken Battlefield",
  eventType: "MISC",
  description: `Fallen Warriors' Vale, a cavernous passage unveiling the remnants of a battlefield within the catacomb's depths. Countless fallen warriors lie scattered across the expanse.`,
  optionOne: "Enter",
  optionTwo: "Return",
  blade: null,
  functionOne: () => {
    BATTLEFIELD.summary =
      "You entered Fallen Warriors' Vale, challenging the fallen warriors. Defeating them in combat, you claimed victory, laying to eternal rest countless undead.";
    FALLEN_WARRIORS_VALE.contents.monsters.push(UNDYING_WARBAND);

    if (BATTLEFIELD.blade === null) {
      FALLEN_WARRIORS_VALE.contents.items.push(GLORYFORGED_BLADE);
    }

    writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "BOSS");
    playMusic(weCantStopThem);
    setTimeout(newRoomAnimation, 6000);
    setTimeout(() => {
      let undyingWarbandImage = "styles/images/monsters/undying-warband.jpg";
      renderBackground(undyingWarbandImage);
      startBattle();
    }, 7500);
    setRoomSummary();
  },
  functionTwo: () => {
    BATTLEFIELD.summary = `You chose not to step onto the battlefield.`;
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 4000);
  },
};

function endBattlefieldEvent() {
  // Checks for end of battle at Fallen Warriors' Vale
  if (
    currentRoom.roomName === "Fallen Warriors' Vale" &&
    currentRoom.contents.monsters.length <= 0
  ) {
    setTimeout(newRoomAnimation, 1000);
    setTimeout(() => {
      playMusic(currentRoom.music);
      renderBackground(currentRoom.backgroundImage);
    }, 2000);
  }
}

function gloryforgedBladeCheck() {
  // Checks for Undying Warband / Adds Attack to Gloryforged Blade & Starts Echoes of Victory
  if (currentRoom.roomName === "Fallen Warriors' Vale") {
    BATTLEFIELD.blade = "LOOTED";
    gloryforgedTracker += 3;
    GLORYFORGED_BLADE.effect = `When attuned to this item, your Attack is increased by ${gloryforgedTracker}. This blade becomes more powerful with each victory in Fallen Warriors' Vale.`;
    GLORYFORGED_BLADE.stats.attack = gloryforgedTracker;
    ECHOES_OF_VICTORY.function(); // activate echoes of victory

    // Checks if item has been obtained before narration is called
    if (
      inventoryItems.includes(GLORYFORGED_BLADE) ||
      attunedItems.includes(GLORYFORGED_BLADE)
    ) {
      writeToLogItem(LOG_ITEM, "YES", GLORYFORGED_BLADE);
    }
  }
}

const JOIN_THE_BARON = {
  name: "The Baron's Offer",
  eventType: "MISC",
  description: `"Kneel before me, mortals. Embrace the eternal night. Join my legion of the undying, and together, we shall wield power beyond imagination." The Baron of Bone extends his skeletal hand; will you succumb to the allure of undeath?`,
  optionOne: "Join",
  optionTwo: "Refuse",
  functionOne: () => {
    setTimeout(() => {
      isGameOver("BAD ENDING");
    }, 7000);
    writeToLogEvent(LOG_MISC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    currentRoom.contents.monsters.push(BARON_OF_BONE);
    setTimeout(() => {
      playMusic(finalBrigade);
      startBattle();
    }, 2000);
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
  },
};

const THE_FINAL_BATTLE = {
  name: "The Final Battle",
  eventType: "MISC",
  description:
    "The final battle is just ahead. Are you sure you're ready to continue?",
  optionOne: "Yes",
  optionTwo: "No",
  functionOne: () => {
    newRoomAnimation();
    setTimeout(() => {
      currentRoom = BARON_OF_BONE_BOSS_ROOM;
      renderCurrentRoom(BARON_OF_BONE_BOSS_ROOM);
    }, 2000);
  },
  functionTwo: () => {
    setTimeout(() => {
      renderContinueButton();
    }, 2000);
    fadeInAnimation(inventoryButton);
  },
};

// ===============================
//          Locked Rooms
// ===============================

const LOCKED_ROOM = {
  name: "Locked Room",
  description: ``,
  eventType: "MISC",
  optionOne: "Unlock",
  optionTwo: "Leave",
  functionOne: () => {
    if (inventoryItems.includes(SKELETON_KEY)) {
      LOCKED_ROOM.summary = `You used a Skeleton Key to unlock the ${currentRoom.roomName}.`;
      setTimeout(soundEffectHandler(doorSecretPassage1), 1500);
      useConsumable("Skeleton Key"); // removes item from inventory
      lockedRoomHandler(currentRoom.roomName);
      setRoomSummary();
      // Skeleton Key Logs Information
    } else {
      LOCKED_ROOM.summary = `You didn't have a Skeleton Key to unlock the ${currentRoom.roomName}.`;
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES");
      setTimeout(renderRoomSummaryModal, 5000);
      setRoomSummary();
    }
  },
  functionTwo: () => {
    LOCKED_ROOM.summary = `You chose not to unlock the ${currentRoom.roomName}.`;
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
    setRoomSummary();
  },
};

function lockedRoomHandler(room) {
  let monsters = currentRoom.contents.monsters;
  let items = currentRoom.contents.items;
  let lockedDoor;

  if (currentRoom.roomName === "Bonevault") {
    lockedDoor = Math.floor(Math.random() * 5) + 1;
    console.log(`Bonevault Room: ${lockedDoor}`);
  } else {
    lockedDoor = room;
  }

  // Items you get in every room
  items.push(WHISPERING_SKULL, LESSER_SOULSTONE);

  switch (lockedDoor) {
    case 1:
      //writeToLog() room details
      getItem("BONEVAULT");
      playMusic(edgeOfFear);
      setTimeout(newRoomAnimation, 3000);
      setTimeout(() => {
        let bonevaultRoom =
          "styles/images/backgrounds/event-rooms/bonevault-room-1.jpg";
        renderBackground(bonevaultRoom);
      }, 4500);
      setTimeout(renderRoomSummaryModal, 5000);
      setRoomSummary();
      break;

    case 2:
      monsters.push(SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON);
      getItem("BONEVAULT");
      playMusic(edgeOfFear);
      setTimeout(newRoomAnimation, 3000);
      setTimeout(() => {
        let bonevaultRoom =
          "styles/images/backgrounds/event-rooms/bonevault-room-2.jpg";
        renderBackground(bonevaultRoom);
        startBattle();
      }, 4500);
      setRoomSummary();
      //writeToLog() room details
      break;

    case 3:
      monsters.push(ARMORED_SKELETON, ARMORED_SKELETON, ARMORED_SKELETON);
      getItem("BONEVAULT");
      playMusic(edgeOfFear);
      setTimeout(newRoomAnimation, 3000);
      setTimeout(() => {
        let bonevaultRoom =
          "styles/images/backgrounds/event-rooms/bonevault-room-3.jpg";
        renderBackground(bonevaultRoom);
        startBattle();
      }, 4500);
      setRoomSummary();
      //writeToLog() room details
      break;

    case 4:
      monsters.push(SKELETAL_SOLDIER, SKELETAL_SOLDIER, BONE_TITAN);
      getItem("BONEVAULT");
      playMusic(edgeOfFear);
      setTimeout(newRoomAnimation, 3000);
      setTimeout(() => {
        let bonevaultDemonImage =
          "styles/images/backgrounds/event-rooms/bonevault-room-3.jpg";
        renderBackground(bonevaultDemonImage);
        startBattle();
      }, 4500);
      setRoomSummary();
      //writeToLog() room details
      break;

    case 5:
      if (BONEVAULT_DEMON.boss !== "DEFEATED") {
        BONEVAULT_DEMON.boss = "FIGHTING";
        monsters.push(BONEVAULT_DEMON);
        items.push(TOMBGUARD);
        playMusic(passedDanger);
        setTimeout(newRoomAnimation, 3000);
        setTimeout(() => {
          let bonevaultDemonImage =
            "styles/images/backgrounds/event-rooms/bonevault-demon.jpg";
          renderBackground(bonevaultDemonImage);
          startBattle();
        }, 4500);
        setRoomSummary();
        //writeToLog() room details
      } else {
        getItem("BONEVAULT");
        playMusic(edgeOfFear);
        setTimeout(newRoomAnimation, 3000);
        setTimeout(() => {
          let bonevaultRoom =
            "styles/images/backgrounds/event-rooms/bonevault-room-1.jpg";
          renderBackground(bonevaultRoom);
        }, 4500);
        setTimeout(renderRoomSummaryModal, 5000);
        setRoomSummary();
        //writeToLog() room details
      }
      break;

    case "Molten Door":
      monsters.push(
        BLAZING_SKELETON,
        BLAZING_SKELETON,
        BLAZING_SKELETON,
        BLAZING_SKELETON,
        BLAZING_SKELETON
      );
      items.push(HELLFIRE_CHARM);
      playMusic(edgeOfFear);
      setTimeout(newRoomAnimation, 3000);
      setTimeout(() => {
        roomNameElement.textContent = `The Crematorium`;
        let moltenDoorImage =
          "styles/images/backgrounds/event-rooms/molten-door-room.jpg";
        renderBackground(moltenDoorImage);
        startBattle();
      }, 4500);
      setRoomSummary();
      //writeToLog() room details
      break;

    case "Frozen Door":
      items.push(BONECHILL_AMULET);
      monsters.push(DRAUGR, DRAUGR, DRAUGR, DRAUGR);
      playMusic(edgeOfFear);
      setTimeout(newRoomAnimation, 3000);
      setTimeout(() => {
        roomNameElement.textContent = `The Frigid Tomb`;
        let frozenDoorImage =
          "styles/images/backgrounds/event-rooms/frozen-door-room.jpg";
        renderBackground(frozenDoorImage);
        startBattle();
      }, 4500);
      setRoomSummary();
      //writeToLog() room details
      break;

    // case "Festering Door":
    //   monsters.push(GNAWER, GNAWER, GNAWER, GNAWER, GNAWER);
    //   // currentRoom.contents.items.push();
    //   //writeToLog() room details
    //   break;

    // case "Webbed Door":
    //   monsters.push(BROODMOTHER, BROODMOTHER, BROODMOTHER);
    //   // currentRoom.contents.items.push();
    //   //writeToLog() room details
    //   break;

    // case "Hidden Door":
    //   monsters.push(SCOUNDREL, SCOUNDREL, SCOUNDREL, SCOUNDREL, SCOUNDREL);
    //   // currentRoom.contents.items.push();
    //   //writeToLog() room details
    //   break;
  }
}

// ===============================
//          Event Logic
// ===============================

function generalEventHandler(option, statModifier, attribute) {
  let event = currentRoom.contents.events;

  // Logic for trap events
  if (event.eventType === "TRAP") {
    let randomNumber = Math.floor(Math.random() * 10) + 1 + statModifier;
    //ITEM: Evertorch - Increases success chance with traps.
    randomNumber += isItemAttuned(EVERTORCH, 0);

    if (randomNumber >= event.passValue) {
      event.summary = `With ${attribute} you overcame the ${event.name} and live to continue your journey through the catacomb.`;

      if (event.functionOne) {
        event.functionOne();
      }

      writeToLogEvent(LOG_TRAP_PASS, "YES", attribute);
    } else {
      event.summary = `You failed to overcome the ${event.name} and suffered ${event.failDamage} damage for your incompitence.`;

      if (event.failDamage) {
        damagePlayer(event.failDamage);
      }

      if (event.functionTwo) {
        event.functionTwo();
      }

      if (event.penalty) {
        event.penalty();
      }

      writeToLogEvent(LOG_TRAP_FAIL, "YES", attribute, event.failDamage);
    }

    setRoomSummary();

    if (currentRoom.roomName !== "Webspun Passage") {
      setTimeout(renderRoomSummaryModal, 5000);
    }
  }

  // Logic for non-trap events
  if (event.eventType !== "TRAP") {
    switch (option) {
      case event.optionOne:
        if (event.functionOne) {
          event.functionOne();
        }
        break;

      case event.optionTwo:
        if (event.functionTwo) {
          event.functionTwo();
        }
        break;
    }
  }

  if (
    currentRoom.roomName !== "Hag's Hollow" &&
    currentRoom.roomName !== "Curator's Curio"
  ) {
    currentRoom.contents.events = null;
    fadeOutAnimation(eventModal);

    if (npcImageCard.style.display === "block") {
      fadeOutAnimation(npcImageCard);
    }

    updateTotalStats();
  }
}

function renderEvent(event) {
  setTimeout(() => {
    switch (event.eventType) {
      case "TRAP":
        if (event.optionOne === "Strength") {
          eventButtonOne.textContent = "Strength";
        } else if (event.optionOne === "Dexterity") {
          eventButtonOne.textContent = "Dexterity";
        } else {
          eventButtonOne.textContent = "Faith";
        }

        if (event.optionTwo === "Strength") {
          eventButtonTwo.textContent = "Strength";
        } else if (event.optionTwo === "Dexterity") {
          eventButtonTwo.textContent = "Dexterity";
        } else {
          eventButtonTwo.textContent = "Faith";
        }
        break;

      case "NPC":
        eventButtonOne.textContent = event.optionOne;
        eventButtonTwo.textContent = event.optionTwo;
        break;

      case "MISC":
        eventButtonOne.textContent = event.optionOne;
        eventButtonTwo.textContent = event.optionTwo;
        break;

      case "SAFE ROOM":
        SAFE_ROOM.functionOne();
        currentRoom.contents.events = null;
        break;
    }

    // Render Image Card
    if (event.image) {
      npcImageCard.style.backgroundImage = `url(${event.image})`;
      npcImageCard.style.backgroundSize = "cover";
      fadeInAnimation(npcImageCard);
      npcImageCard.style.display = "block";
    }

    if (
      event.eventType === "TRAP" ||
      event.eventType === "NPC" ||
      event.eventType === "MISC"
    ) {
      fadeInAnimation(eventModal);
      eventModal.style.display = "block";
    }
  }, 2000);

  // Display Event Description as Narrative
  setTimeout(() => {
    switch (event.eventType) {
      case "TRAP":
        writeToLogEvent(LOG_TRAP_DESCRIPTION, "YES");
        break;
      case "NPC":
        writeToLogEvent(LOG_NPC_DESCRIPTION, "YES");
        break;
      case "MISC":
        writeToLogEvent(LOG_MISC_DESCRIPTION, "YES");
        break;
    }
  }, 1000);

  // setControlsInterval("START");
  togglePlayerControls();
}

// ===============================
//       Event Listeners
// ===============================

eventButtonOne.addEventListener("click", () => {
  let event = currentRoom.contents.events;
  // Traps
  if (event.eventType === "TRAP") {
    if (eventButtonOne.textContent === "Strength") {
      generalEventHandler(event.optionOne, totalStrength, "Strength");
    } else if (eventButtonOne.textContent === "Dexterity") {
      generalEventHandler(event.optionOne, totalDexterity, "Dexterity");
    } else {
      generalEventHandler(event.optionOne, totalFaith, "Faith");
    }
  }
  // NPCs
  if (event.eventType === "NPC") {
    generalEventHandler(event.optionOne);
  }
  // Miscellaneous
  if (event.eventType === "MISC") {
    generalEventHandler(event.optionOne);
  }
  removeEventDescriptionLog();
});

eventButtonTwo.addEventListener("click", () => {
  let event = currentRoom.contents.events;
  // Traps
  if (event.eventType === "TRAP") {
    if (eventButtonTwo.textContent === "Strength") {
      generalEventHandler(event.optionTwo, totalStrength, "Strength");
    } else if (eventButtonTwo.textContent === "Dexterity") {
      generalEventHandler(event.optionTwo, totalDexterity, "Dexterity");
    } else {
      generalEventHandler(event.optionTwo, totalFaith, "Faith");
    }
  }
  // NPCs
  if (event.eventType === "NPC") {
    generalEventHandler(event.optionTwo);
  }
  // Miscellaneous
  if (event.eventType === "MISC") {
    generalEventHandler(event.optionTwo);
  }

  // Logic for Hag Curse after not trading
  if (
    currentRoom.roomName === "Hag's Hollow" &&
    previousHagFavor === "HAVE NOT TRADED"
  ) {
    CURSED.function(7);
    // ADD SOUND EFFECT !FIX!
    writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "CURSE");
  }

  removeEventDescriptionLog();
});
