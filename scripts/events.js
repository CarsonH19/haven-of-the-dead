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
  name: "Safe Room",
  eventType: "SAFE ROOM",
  description:
    "Before you lies the Candlelight Shrine, a haven untainted by darkness. Here, malevolence recoils, granting you respite. Embrace the flickering sanctuary, and let the shadows fade as you rest, shielded from the evil that prowls beyond its sacred glow.",
  summary: `You rest at the Candlelight Shrine. The sacred flames stand sentinel, offering solace in the heart of the endless catacomb.`,
  optionOne: null,
  optionTwo: null,
  passValue: null,
  failDamage: null,
  functionOne: () => {
    setTimeout(() => {
      getItem("CANDLE");
      healPlayer(calculatePlayerMaxHealth());
      setRoomSummary();
      newRoomAnimation(); // creates passing of time effect
      setTimeout(renderRoomSummaryModal, 4000);
      //writeToLogEvent() restored to full health and found a candle
    });
  },
  functionTwo: null,
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
  functionOne: null,
  functionTwo: null,
};

const SPIDER_WEB = {
  name: "Spider Web",
  eventType: "TRAP",
  description:
    "A sticky, silken labyrinth envelopes you, woven meticulously by some monstrous arachnid. The web clings to you, its threads vibrating with an eerie energy. You can feel the faint tremors of distant movements, a chilling reminder of the web's creator.",
  optionOne: "Strength",
  optionTwo: "Faith",
  passValue: 6,
  failDamage: "You've alerted nearby Crypt Crawlers!",
  functionOne: null,
  functionTwo: () => {
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    currentRoom.contents.monsters.push(CRYPT_CRAWLER);
    setRoomSummary();
    startBattle();
  },
};

const GAS_CHAMBER = {
  name: "Gas Chamber",
  eventType: "TRAP",
  description:
    "The chamber's atmosphere turns ominous as a noxious, green mist begins to billow forth from unseen vents. It fills the air, suffusing the space with an acrid smell. Panic sets in as you realize you're trapped, the chamber quickly becoming a suffocating sea of emerald haze.",
  optionOne: "Strength",
  optionTwo: "Faith",
  passValue: 6,
  failDamage: 25,
  functionOne: null,
  functionTwo: null,
};

const SWARM_OF_VERMIN = {
  name: "Swarm of Vermin",
  eventType: "TRAP",
  description:
    "A horrifying spectacle unfolds before you, as an unending tide of rats pour into the chamber. Their frenetic scuttling and chittering echoes off the walls, drowning out all other sound. The ground seems to writhe beneath the onslaught, and the air grows thick with their foul scent.",
  optionOne: "Strength",
  optionTwo: "Faith",
  passValue: 5,
  failDamage: 20,
  functionOne: null,
  functionTwo: null,
};

const SKELETAL_HANDS = {
  name: "Skeletal Hands",
  eventType: "TRAP",
  description:
    "From the depths of the catacomb floor, ghostly skeletal hands claw their way forth, bony fingers outstretched in your direction. They sway and reach, their movements eerily synchronized. The cold, clammy touch of their grasp sends shivers down your spine.",
  optionOne: "Strength",
  optionTwo: "Dexterity",
  passValue: 6,
  failDamage: 25,
  functionOne: null,
  functionTwo: null,
};

const SPIKE_PITFALL = {
  name: "Spike Pitfall",
  eventType: "TRAP",
  description:
    "The ground beneath your feet gives way suddenly, leaving you in a freefall. Your heart races as you plummet into the darkness, catching glimpses of jagged spikes gleaming below. The air rushes past you, carrying the scent of damp earth and impending danger.",
  optionOne: "Dexterity",
  optionTwo: "Faith",
  passValue: 6,
  failDamage: 25,
  functionOne: null,
  functionTwo: null,
};

const PENDULUM_BLADES = {
  name: "Pendulum Blades",
  eventType: "TRAP",
  description:
    "A symphony of deadly precision unfolds above you, as massive blades descend from the ceiling. They swing back and forth with a rhythmic, hypnotic motion, slicing through the air like harbingers of doom. Their polished edges catch the flickering light, casting sinister gleams around the chamber.",
  optionOne: "Dexterity",
  optionTwo: "Faith",
  passValue: 6,
  failDamage: 25,
  functionOne: null,
  functionTwo: null,
};

// ===============================
//         NPC Events
// ===============================

const GRAVEROBBER_EARVER = {
  name: "Graverobber Earver",
  eventType: "NPC",
  description:
    "Amidst the haunting mist, you stumble upon Graverobber Earver, a sinister figure, hell-bent on breaching an ancient tomb. He beckons you to join his sinister endeavor, promising untold treasures from the cursed depths if you dare to embrace the darkness.",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    currentRoom.contents.monsters.push(POSSESSED_EARVER);
    currentRoom.contents.items.push(GRAVEROBBERS_SPADE);
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    writeToLog(LOG_NPC_OPTION_TWO, "YES");
    let currentRoomCounter = roomCounter + 10;
    console.log(`currentRoomCounter: ${currentRoomCounter}`);
    let earverInterval = setInterval(() => {
      console.log(`currentRoomCounter: ${currentRoomCounter}`);
      if (roomCounter > currentRoomCounter) {
        console.log("Room Added");
        catacombRooms.push(GRAVEROBBER_EARVER_ROOM_TWO);
        clearInterval(earverInterval);
      }
    }, 60000);
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const GRAVEROBBER_EARVER_EVENT_TWO = {
  name: "Graverobber Earver",
  eventType: "NPC",
  description:
    "Once more, the air grows heavy as you find Graverobber Earver, unyielding in his pursuit of forbidden riches. He implores you to lend your strength, offering a glimpse into the abyssal unknown that awaits within the looming sarcophagus, should you dare to delve into the shadows once more.",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    currentRoom.contents.monsters.push(BONE_TITAN);
    currentRoom.contents.items.push(GRAVEROBBERS_SPADE);
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    let currentRoomCounter = roomCounter + 10;
    let earverInterval = setInterval(() => {
      console.log(`currentRoomCounter: ${currentRoomCounter}`);
      if (roomCounter > currentRoomCounter) {
        console.log("Room Added");
        catacombRooms.push(GRAVEROBBER_EARVER_ROOM_THREE);
        clearInterval(earverInterval);
      }
    }, 60000);
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const GRAVEROBBER_EARVER_EVENT_THREE = {
  name: "Graverobber Earver",
  eventType: "NPC",
  description:
    "As fate would have it, you cross paths with Graverobber Earver yet again, his determination unshaken. This time, he stands before an ornate crypt belonging to a long dead king. With a knowing look, he extends his offer once more, tempting you with the allure of unimaginable treasures concealed within.",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    currentRoom.contents.monsters.push(DRAUGR, DRAUGR, DRAUGR);
    currentRoom.contents.items.push(GRAVEROBBERS_SPADE);
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    currentRoom.contents.items.push(ETHEREAL_CROWN);
    setRoomSummary();
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const IVAN_THE_SCOUNDREL = {
  name: "Ivan the Scoundrel",
  eventType: "NPC",
  description: `
  Trapped, a scoundrel ensnared in a spider's web begs, "Release me, and treasures hidden in these catacombs shall be yours." Dare you free the scoundrel, confronting the unknown horrors lurking nearby?`,
  summary: "",
  optionOne: "Release",
  optionTwo: "Leave",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
    IVAN_THE_SCOUNDREL.summary = `Amidst the severed limbs of the defeated arachnid, the scoundrel, grateful yet wary, hands over a cryptic key. "Treasures await within my hidden cache," he smirks. "Take what's yours."`;
    currentRoom.contents.items.push(CACHE_KEY); // reward for saving him
    currentRoom.contents.monsters.push(BROODMOTHER); // mini-boss
    let addRoom = roomCounter + 10; // start room counter for event 2
    let ivanInterval = setInterval(() => {
      if (roomCounter > addRoom) {
        catacombRooms.push(IVANS_CACHE);
        clearInterval(ivanInterval);
      }
    }, 60000);

    setRoomSummary();
    startBattle();
  },
  functionTwo: () => {
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    IVAN_THE_SCOUNDREL.summary = `Ivan's spiteful gaze follows your retreating figure as you press on, his vow of revenge echoing through the catacomb. The air thickens with malice as you leave him dangling in the shadows, the taste of impending retribution lingering in the abyss.`;
    let addRoom = roomCounter + 5; // start room counter for to add traps
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

    LAUGHING_COFFIN_ROOM.contents.monsters.push(IVAN_STATS);
    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const IVAN_THE_SCOUNDREL_EVENT_TWO = {
  name: "Ivan the Scoundrel",
  eventType: "NPC",
  description: `Stumbling upon Ivan the Scoundrel's secret cache, a hidden bounty awaits. A glinting lock beckons. Will you wield Ivan's Cache Key to unveil the treasures within?`,
  optionOne: "Open",
  optionTwo: "Leave",
  functionOne: () => {
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
    IVAN_THE_SCOUNDREL_TWO.summary = `Unveiling Ivan's cache revealed a deceitful ruse. Ambushed, survival demanded a fierce struggle against Ivan and his scoundrels. In the aftermath, amidst the fallen, a mocking gold coin with a laughing skull emerged from Ivan's pocket.`;
    useConsumable("Ivan's Cache Key"); // deletes item from inventory
    POISONED.function();
    monsterAttackHandler();
    currentRoom.contents.monsters.push(SCOUNDREL, SCOUNDREL, IVAN_STATS);
    currentRoom.contents.items.push(
      LAUGHING_COFFIN_COIN,
      SHADOWSTEP_BOOTS,
      ROWDY_WISP
    );
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
  },
  functionTwo: () => {
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
    IVAN_THE_SCOUNDREL_TWO.summary = `Unveiling Ivan's cache revealed a deceitful ruse. Ambushed, survival demanded a fierce struggle against Ivan and his scoundrels. In the aftermath, amidst the fallen, a mocking gold coin with a laughing skull emerged from Ivan's pocket.`;
    useConsumable("Ivan's Cache Key"); // deletes item from inventory
    currentRoom.contents.monsters.push(SCOUNDREL, SCOUNDREL, IVAN_STATS);
    currentRoom.contents.items.push(
      LAUGHING_COFFIN_COIN,
      SHADOWSTEP_BOOTS,
      ROWDY_WISP
    );
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
  },
};

const SCHOLAR_HENDRA = {
  name: "Scholar Hendra",
  eventType: "NPC",
  description:
    "Upon a bone-forged altar, a desperate woman struggles to shield her grimoire from encroaching skeletal horrors. Her cries for help echo through the chamber. Will you aid her in vanquishing the undead horde or ignore her cries?",
  optionOne: "Help",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    currentRoom.contents.monsters.push(
      DECREPIT_SKELETON,
      SKELETAL_SOLDIER,
      SKELETAL_SOLDIER,
      DECREPIT_SKELETON
    );
    (currentRoom.description =
      "After vanquishing the skeletal horde, Hendra rewards your valor with two precious health potions, then mysteriously fades into the catacombs, her grimoire clutched tightly, leaving you with a sense of foreboding."),
      currentRoom.contents.items.push(POTION, POTION);
    setRoomSummary();
    startBattle();
    monsterAttackHandler();
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
  functionTwo: () => {
    currentRoom.contents.monsters.push(
      DECREPIT_SKELETON,
      SKELETAL_SOLDIER,
      SKELETAL_SOLDIER,
      DECREPIT_SKELETON
    );
    (currentRoom.description =
      "After defeating the skeletal horde, you discover Hendra's lifeless form, her fingers tightly clasping a mysterious grimiore. With solemn determination, you claim the coveted relic as your own."),
      currentRoom.contents.items.push(CURSED_GRIMOIRE);
    setRoomSummary();
    startBattle();
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
  },
};

const FORSAKEN_COMMANDER = {
  name: "Forsaken Commander",
  eventType: "NPC",
  description:
    "A spectral commander, draped in ethereal sorrow, materializes before you. Its mournful plea echoes through the chamber. Will you heed its desperate entreaty.",
  optionOne: "Listen",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    if (attunedItems.includes(WHISPERING_AMULET)) {
      currentRoom.contents.items.push(RESTLESS_WISP);
      LEGIONS_GRACE.function(); // Applies Legion's Grace status effect
      setTimeout(renderRoomSummaryModal, 5000);
      setRoomSummary();
      writeToLogEvent(LOG_NPC_OPTION_ONE, "YES", "ONE");
    } else {
      currentRoom.contents.monsters.push(
        SPECTRAL_SOLDIER,
        SPECTRAL_SOLDIER,
        FORSAKEN_COMMANDER_STATS
      );
      currentRoom.contents.items.push(WRAITHBANE);
      setRoomSummary();
      startBattle();
      writeToLogEvent(LOG_NPC_OPTION_ONE, "YES", "TWO");
    }
  },
  functionTwo: () => {
    currentRoom.contents.monsters.push(
      SPECTRAL_SOLDIER,
      SPECTRAL_SOLDIER,
      FORSAKEN_COMMANDER_STATS
    );
    currentRoom.contents.items.push(WRAITHBANE);
    setRoomSummary();
    startBattle();
    writeToLogEvent(LOG_NPC_OPTION_TWO, "YES");
  },
};

const GRERVIL_THE_BODILESS = {
  name: "Grervil the Bodiless",
  eventType: "NPC",
  description:
    "You find a skull sitting atop a stone sarcophagus. Its chattering teeth almost sound like words. Do you approach to hear better?",
  summary: "", // Outcome depends on choice
  optionOne: "Approach",
  optionTwo: "Ignore",
  functionOne: () => {
    if (attunedItems.includes(WHISPERING_AMULET)) {
      const randomUndeadRoom = findRandomUndeadRoom();
      randomUndeadRoom.contents.monsters.push(GRERVILS_BODY);

      grervilsQuestInterval = setInterval(() => {
        if (currentRoom.contents.monsters[0] === GRERVILS_BODY) {
          currentRoom.description = `You found Grervil's Body while exploring the ${currentRoom.roomName}. Reuniting the skull with its body he gives you a key ring with several keys before running off.`;
          currentRoom.contents.items.push(SKELETON_KEY); // ADD MORE ITEMS FOR REWARD!!!
          playerControlsTimeout(7000);
          useConsumable("Grervil's Head"); // removes item from inventory

          setTimeout(() => {
            fadeOutAnimation(monsterContainer);
            setTimeout(() => {
              checkForMonsters();
              monsterContainer.style.display = "none";
            }, 2000);
          }, 5000);

          setTimeout(setRoomSummary, 7500);
          // writeToLogEvent(LOG_ROOM, 'YES); FIX THIS !!!!!!
          clearInterval(grervilsQuestInterval);
        }
      }, 3000);

      GRERVIL_THE_BODILESS.summary =
        "Grervil the Bodiless joins you on your journey within the catacomb, in search of his wandering body.";
      inventoryItems.push(GRERVILS_HEAD);

      setRoomSummary();
      setTimeout(renderRoomSummaryModal, 5000);
      writeToLogEvent(LOG_NPC_OPTION_ONE, "YES", "ONE");
    } else {
      const randomUndeadRoom = findRandomUndeadRoom();
      randomUndeadRoom.contents.monsters.push(HEADLESS_SKELETON);

      GRERVIL_THE_BODILESS.summary = `Unable to understanding the chattering skull you simply walk away.`;

      setRoomSummary();
      setTimeout(renderRoomSummaryModal, 5000);
      writeToLogEvent(LOG_NPC_OPTION_ONE, "YES", "TWO");
    }
  },
  functionTwo: () => {
    const randomUndeadRoom = findRandomUndeadRoom();
    randomUndeadRoom.contents.monsters.push(HEADLESS_SKELETON);

    GRERVIL_THE_BODILESS.summary = `Unable to understanding the chattering skull you simply walk away.`;

    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 5000);
    writeToLogEvent(LOG_NPC_OPTION_ONE, "YES");
  },
};

// const TRADER_BAZRIM = {
//   // !UNFINISHED!
//   name: "Trader Bazrim",
//   eventType: "NPC",
//   description: "",
//   optionOne: "Accept",
//   optionTwo: "Decline",
//   passValue: null,
//   failDamage: null,
//   functionOne: () => {
//     // opens modal with items
//     // if trade a rare or higher item gives an item of equal value
//   },
//   functionTwo: () => {
//     // writeToLogEvent don’t be greedy
//   },
// };

// const HOZHUL = {
//   // !UNFINISHED!
//   name: "Hozhul, Keeper of Souls",
//   eventType: "NPC",
//   description: "",
//   optionOne: "Accept",
//   optionTwo: "Decline",
//   passValue: null,
//   failDamage: null,
//   functionOne: () => {
//     // opens modal with items
//     // if trade a rare or higher item gives an item of equal value
//   },
//   functionTwo: () => {
//     // writeToLogEvent don’t be greedy
//   },
// };

// const CURATOR_RENVAR = {
//   // !UNFINISHED!
//   name: "Curator Renvar",
//   description: "",
//   optionOne: "Accept",
//   optionTwo: "Decline",
//   passValue: null,
//   failDamage: null,
//   functionOne: () => {
//     // opens trade modal
//     // give key based off item rarity
//     // if no option call functionTwo
//   },
//   functionTwo: () => {
//     // writeToLogEvent maybe next time you’ll have a taste for adventure
//     // after room counter gains 10 re add his room to catacombRooms
//   },
// };

// ===============================
//          Misc. Events
// ===============================

const COFFIN_SPIDER_EVENT = {
  name: "Chest",
  eventType: "MISC",
  description:
    "You find a large ornately decorated coffin. Something valuable may be hidden inside.  What will you do?",
  optionOne: "Open",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    let randomNumber = Math.round(Math.random() * 10);
    if (randomNumber >= 7) {
      getItem("RANDOM");
      setRoomSummary();
      setTimeout(renderRoomSummaryModal, 5000);
      // writeToLogEvent(); Normal Coffin
    } else {
      currentRoom.contents.monsters.push(COFFIN_SPIDER);
      monsterAttackHandler();
      getItem("RANDOM");
      setRoomSummary();
      startBattle();
      // writeToLogEvent(); Coffin Spider
    }
  },
  functionTwo: () => {
    // writeToLogEvent(); Ignore
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const LAUGHING_COFFIN_EVENT = {
  name: "The Laughing Coffin",
  eventType: "MISC",
  description: `The Laughing Coffin tavern, sanctuary for underworld denizens. Its creaking sign, carved with a skeletal grin, entices the bold. Amid dim-lit haze, dubious characters eye you, inviting pay to join their revelry. The air, thick with whispered schemes, hints at the consequences of refusing. Pay the toll or risk the ire of its wicked patrons.`,
  summary: "",
  optionOne: "Pay",
  optionTwo: "Refuse",
  functionOne: () => {
    let patrons = LAUGHING_COFFIN_ROOM.contents.monsters;

    if (
      patrons.includes(IVAN_STATS) &&
      inventoryItems.includes(LAUGHING_COFFIN_COIN)
    ) {
      LAUGHING_COFFIN_EVENT.summary = `After a fierce brawl with Ivan, the Laughing Coffin's patrons swiftly eject you for the disruption. However, in acknowledgment of your coin, they send you off with a drink, the bitter taste of conflict lingering in the air`;
      LAUGHING_COFFIN_ROOM.contents.items.push(BLACKHEART_BREW);
      useConsumable("Laughing Coffin Coin"); // removes coin from inventory
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "ONE");
      setRoomSummary();
      startBattle();
    } else if (inventoryItems.includes(LAUGHING_COFFIN_COIN)) {
      LAUGHING_COFFIN_EVENT.summary = `You pay the toll, exchanging a Laughing Coffin Coin for camaraderie and unexpected relaxation within the infamous tavern.`;
      useConsumable("Laughing Coffin Coin"); // removes coin from inventory
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "TWO");
      healPlayer(calculatePlayerMaxHealth());
      setRoomSummary();
      setTimeout(BLACKHEART_BREW.function, 6500);
      setTimeout(newRoomAnimation, 5000);
      setTimeout(renderRoomSummaryModal, 9000);
    } else {
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "THREE");
      console.log("NO COIN!");
      patrons.push(SCOUNDREL, SCOUNDREL, SCOUNDREL);
      setRoomSummary();
      startBattle();
    }
  },
  functionTwo: () => {
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

// const ECHOING_CHIME = {
//   // !UNFINISHED!
//   name: "Echoing Chime",
//   eventType: "MISC",
//   description: "",
//   optionOne: "Ring",
//   optionTwo: "Ignore",
//   passValue: null,
//   failDamage: null,
//   functionOne: () => {
//     // filters through catacombRooms and adds additional evil spirits to rooms with undead creatures.
//     // adds secret rooms to catacombRooms
//     // adds ghost NPC to rooms
//   },
//   functionTwo: null,
// };

const CRIMSON_COVENANT = {
  name: "Crimson Covenant",
  eventType: "MISC",
  description:
    "Before you, an altar looms, encircled by hooded figures in blood-stained robes. With chilling devotion, they cut their wrists, offering crimson tributes to the ominous altar. Echoing chants fill the catacomb—a haunting invitation. Will you join their sacrificial ritual at the blood altar?",
  summary: "",
  optionOne: "Join",
  optionTwo: "Refuse",
  functionOne: () => {
    if (currentPlayerHealth >= 60) {
      CRIMSON_COVENANT.summary =
        "You partake in the sacrificial ritual of the Crimson Covenant, spilling your blood on the Blood Alter. Although weakened by the experience you feel a surge of vitality throughout your body.";
      bloodSacrificed += 50;

      switch (crimsonCovenantTracker) {
        case 1:
          currentRoom.contents.items.push(SACRIFICIAL_BLADE);
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
      damageFlashAnimation();
      setRoomSummary();
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES");
      setTimeout(renderRoomSummaryModal, 5000);
    }
  },
  functionTwo: () => {
    CRIMSON_COVENANT.summary =
      "You refuse to partake in the sacrificial ritual of the Crimson Covenant.";
    setRoomSummary();
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

// ===============================
//          Locked Rooms
// ===============================

const LOCKED_ROOM = {
  name: "Locked Room",
  eventType: "MISC",
  description: "You discover a locked room. Do you wish to open it.",
  optionOne: "Unlock",
  optionTwo: "Leave",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    if (inventoryItems.includes(SKELETON_KEY)) {
      useConsumable("Skeleton Key"); // removes item from inventory
      lockedRoomHandler();
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "ONE");
    } else {
      writeToLogEvent(LOG_MISC_OPTION_ONE, "YES", "TWO");
      setTimeout(renderRoomSummaryModal, 5000);
    }
  },
  functionTwo: () => {
    writeToLogEvent(LOG_MISC_OPTION_TWO, "YES");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

function lockedRoomHandler() {
  let monsters = currentRoom.contents.monsters;
  let items = currentRoom.contents.items;
  let room = Math.round(Math.random() * 5);

  switch (room) {
    case 0:
      monsters.push(SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON);
      break;

    case 1:
      monsters.push(SKELETAL_SOLDIER, ARMORED_SKELETON, ARMORED_SKELETON);
      break;

    case 2:
      monsters.push(ARMORED_SKELETON, ARMORED_SKELETON, ARMORED_SKELETON);
      break;

    case 3:
      monsters.push(SKELETAL_SOLDIER, ARMORED_SKELETON, ARMORED_SKELETON, ARMORED_SKELETON);
      break;

    case 4:
      monsters.push(ARMORED_SKELETON, BONE_TITAN);
      break;

    case 5:
      monsters.push(BONE_TITAN, BONE_TITAN);
      break;
  }

  items.push(BONE_MARROW_SOUP, POTION, POTION);
  getItem("BONEVAULT");
  startBattle();
  setRoomSummary();
}

// ===============================
//          Event Logic
// ===============================

function trapEventHandler(baseStat, attribute) {
  let event = currentRoom.contents.events;
  let randomNumber = Math.round(Math.random() * 10) + baseStat;

  //ITEM: Evertorch - Increases success chance with traps.
  randomNumber = randomNumber + isItemAttuned(EVERTORCH, 0);

  if (event.eventType === "TRAP") {
    if (randomNumber >= event.passValue) {
      writeToLogEvent(
        LOG_TRAP_PASS,
        "YES",
        attribute 
      );
      if (event.functionOne) {
        event.functionOne();
      }
    } else {
      if (event === SPIDER_WEB) {
        writeToLogEvent(
          LOG_TRAP_FAIL,
          "YES",
          attribute, 
          event.failDamage
        );
        console.log(event);
        console.log(attribute);
        console.log(event.failDamage);
      } else {
        playerHealthBar.value -= event.failDamage;
        currentPlayerHealth -= event.failDamage;
        writeToLogEvent(
          LOG_TRAP_FAIL,
          "YES",
          attribute, 
          event.failDamage
        );
      }
      if (event.functionTwo) {
        event.functionTwo();
      }
    }

    updatePlayerTrackers();
  }

  currentRoom.contents.events = null;
  fadeOutAnimation(eventModal);
  setTimeout(() => {
    eventModal.style.display = "none";
  }, 1900);
  renderRoomSummaryModal(); //Is this needed????!!
}

function generalEventHandler(option) {
  let event = currentRoom.contents.events;

  switch (option) {
    case event.optionOne:
      event.functionOne();
      break;
    case event.optionTwo:
      event.functionTwo();
      break;
  }

  fadeOutAnimation(eventModal, 0000);
  setTimeout(() => {
    eventModal.style.display = "none";
  }, 1900);

  currentRoom.contents.events = null;
  updatePlayerTrackers();
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
        writeToLogEvent(LOG_SAFE_ROOM, "YES");
        currentRoom.contents.events = null;
        break;
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
}

// ===============================
//       Event Listeners
// ===============================

eventButtonOne.addEventListener("click", () => {
  let event = currentRoom.contents.events;
  // Traps
  if (event.eventType === "TRAP") {
    if (eventButtonOne.textContent === "Strength") {
      trapEventHandler(baseStrength, "STRENGTH");
    } else if (eventButtonOne.textContent === "Dexterity") {
      trapEventHandler(baseDexterity, "DEXTERITY");
    } else {
      trapEventHandler(baseFaith, "FAITH");
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
  togglePlayerControls();
});

eventButtonTwo.addEventListener("click", () => {
  let event = currentRoom.contents.events;
  // Traps
  if (event.eventType === "TRAP") {
    if (eventButtonTwo.textContent === "Strength") {
      trapEventHandler(baseStrength, "STRENGTH");
    } else if (eventButtonTwo.textContent === "Dexterity") {
      trapEventHandler(baseDexterity, "DEXTERITY");
    } else {
      trapEventHandler(baseFaith, "FAITH");
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

  togglePlayerControls();
});
