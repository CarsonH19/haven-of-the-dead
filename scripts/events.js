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
// Scholar Hendra

// MISC Events
// Coffin Spider
// The Laughing Coffin

// ===============================
//         Safe Room
// ===============================

const SAFE_ROOM = {
  name: "Candlelight Shrine",
  eventType: "SAFE ROOM",
  description:
    "You find a Candlelight Shrine. Evil can't enter this holy place. You are free to rest.",
  optionOne: null,
  optionTwo: null,
  passValue: null,
  failDamage: null,
  functionOne: () => {
    healPlayer(calculatePlayerMaxHealth());
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
  passValue: 99,
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
    writeToLog(LOG_EVENT_NPC_OPTION_ONE, "Earver");
  },
  functionTwo: () => {
    writeToLog(LOG_EVENT_NPC_OPTION_TWO, "Earver", "you");
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
    writeToLog(LOG_EVENT_NPC_OPTION_ONE, "Earver", "you");
  },
  functionTwo: () => {
    writeToLog(LOG_EVENT_NPC_OPTION_TWO, "Earver", "you");
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
    writeToLog(LOG_EVENT_NPC_OPTION_ONE, "Earver", "you");
  },
  functionTwo: () => {
    currentRoom.contents.items.push(ETHEREAL_CROWN);
    setRoomSummary();
    writeToLog(LOG_EVENT_NPC_OPTION_TWO, "Earver", "you");
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const IVAN_THE_SCOUNDREL = {
  name: "Ivan the Scoundrel",
  eventType: "NPC",
  description: `
  Trapped, a scoundrel ensnared in a spider's web begs, "Release me, and treasures hidden in these catacombs shall be yours." Dare you free the scoundrel, confronting the unknown horrors lurking nearby?`,
  summary: '',
  optionOne: "Release",
  optionTwo: "Leave",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    writeToLog(LOG_EVENT_NPC_OPTION_ONE);
    currentRoom.summary = `Amidst the severed limbs of the defeated arachnid, the scoundrel, grateful yet wary, hands over a cryptic key. "Treasures await within my hidden cache," he smirks. "Take what's yours."`
    IVAN_THE_SCOUNDREL.summary = `You saved Ivan the Scoundrel from a terrible fate and he rewarded you with the key to his hidden cache.`;
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
    writeToLog(LOG_EVENT_NPC_OPTION_TWO);
    currentRoom.summary = `Ivan's spiteful gaze follows your retreating figure as you press on, his vow of revenge echoing through the catacomb. The air thickens with malice as you leave him dangling in the shadows, the taste of impending retribution lingering in the abyss.`;
    IVAN_THE_SCOUNDREL.summary = `You abandoned Ivan the Scoundrel, leaving him to perish in the spider's web. He will not forget this.`;
    let addRoom = roomCounter + 5; // start room counter for to add traps
    let ivanInterval = setInterval(() => {
      if (roomCounter > addRoom) {
        catacombRooms.push(
          IVAN_TRAP_ROOM_ONE,
          IVAN_TRAP_ROOM_TWO,
          IVAN_TRAP_ROOM_THREE
        );        clearInterval(ivanInterval);
      }
    }, 60000);
   
    LAUGHING_COFFIN_ROOM.contents.monsters.push(IVAN_STATS);
    setRoomSummary();
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const IVAN_THE_SCOUNDREL_EVENT_TWO = {
  //!UNFINISHED!
  name: "Ivan the Scoundrel",
  eventType: "NPC",
  description: "You find Ivan's hidden cache. You have the key to open it.",
  optionOne: "Open",
  optionTwo: "Don't Open",
  functionOne: () => {
    //writeToLog(); Poison smoke billows, its an ambush!
    useConsumable("Ivan's Cache Key"); // deletes item from inventory
    POISONED.function();
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
    // writeToLog
    // add Ivan to the Laughing Coffin Room
    LAUGHING_COFFIN_ROOM.contents.monsters.push(IVAN_STATS);
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const LAUGHING_COFFIN_EVENT = {
  name: "The Laughing Coffin Tavern",
  eventType: "MISC",
  description:
    "A group of scoundrels demand you pay a Laughing Coffin Coin before you can the tavern.",
  optionOne: "Pay",
  optionTwo: "Refuse",
  functionOne: () => {
    let patrons = LAUGHING_COFFIN_ROOM.contents.monsters;

    if (
      patrons.includes(IVAN_STATS) &&
      inventoryItems.includes(LAUGHING_COFFIN_COIN)
    ) {
      // writeToLog() you enter the tavern and find Ivan. Surprised to find you here -> you'll pay for leaving me to die!
      useConsumable(LAUGHING_COFFIN_COIN); // deletes the coin from inventory
      LAUGHING_COFFIN_ROOM.contents.items.push(BLACKHEART_BREW);
      setRoomSummary();
      startBattle();
      // change roomSummary no fighting! Take your drink and get out!
    } else if (
      patrons.includes(IVAN_STATS) &&
      !inventoryItems.includes(LAUGHING_COFFIN_COIN)
    ) {
      // writeToLog() So you're a liar and you left me to die ... get him boys!
      patrons.push(SCOUNDREL, SCOUNDREL, SCOUNDREL);
      setRoomSummary();
      startBattle();
    } else if (inventoryItems.includes(LAUGHING_COFFIN_COIN)) {
      //writeToLog() The scoundrels welcome you to have a drink
      healPlayer(calculatePlayerMaxHealth());
      renderStatusEffects(BLACKHEART_BREW);
      setRoomSummary();
      setTimeout(newRoomAnimation, 2000);
      setTimeout(renderRoomSummaryModal, 7000);
    } else {
      // writeToLog() If you don't have coin, don't waste our time!
      console.log('NO COIN!');
      patrons.push(SCOUNDREL, SCOUNDREL, SCOUNDREL);
      setRoomSummary();
      startBattle();
    }
  },
  functionTwo: () => {
    let patrons = LAUGHING_COFFIN_ROOM.contents.monsters;

    if (
      patrons.includes(IVAN_STATS) &&
      inventoryItems.includes(CACHE_KEY)
    ) {
      // writeToLog() You should have just opened the cache, now we have to do this the hard way.
      patrons.push(SCOUNDREL, SCOUNDREL, SCOUNDREL);
      setRoomSummary();
      startBattle();
    } else if (patrons.includes(IVAN_STATS)) {
      // writeToLog() You're gonna wish I died in that web!
      patrons.push(SCOUNDREL, SCOUNDREL, SCOUNDREL);
      setRoomSummary();
      startBattle();
    } else {
      // writeToLog() If your not hear to spend your coin then move along before you get hurt.
      setTimeout(renderRoomSummaryModal, 5000);
    }
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
    writeToLog(LOG_EVENT_NPC_OPTION_ONE, "They", "you");
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
    writeToLog(LOG_EVENT_NPC_OPTION_TWO, "Hendra", "you");
  },
};

const GRERVIL_THE_BODILESS = {
  // !UNFINISHED!
  name: "Grervil the Bodiless",
  description: "",
  optionOne: "Speak",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    // if Whispering Amulet is attuned you will learn to search for his body.
    // add Grervil’s body room to catacomb array
    // add Grervil’s Head as an item
  },
  functionTwo: () => {
    // add Grervil’s body room but the player destroys the body.
  },
};

const TRADER_BAZRIM = {
  // !UNFINISHED!
  name: "Trader Bazrim",
  eventType: "NPC",
  description: "",
  optionOne: "Accept",
  optionTwo: "Decline",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    // opens modal with items
    // if trade a rare or higher item gives an item of equal value
  },
  functionTwo: () => {
    // writeToLog don’t be greedy
  },
};

const HOZHUL = {
  // !UNFINISHED!
  name: "Hozhul, Keeper of Souls",
  eventType: "NPC",
  description: "",
  optionOne: "Accept",
  optionTwo: "Decline",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    // opens modal with items
    // if trade a rare or higher item gives an item of equal value
  },
  functionTwo: () => {
    // writeToLog don’t be greedy
  },
};

const CURATOR_RENVAR = {
  // !UNFINISHED!
  name: "Curator Renvar",
  description: "",
  optionOne: "Accept",
  optionTwo: "Decline",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    // opens trade modal
    // give key based off item rarity
    // if no option call functionTwo
  },
  functionTwo: () => {
    // writeToLog maybe next time you’ll have a taste for adventure
    // after room counter gains 10 re add his room to catacombRooms
  },
};

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
      // writeToLog(); Normal Coffin
    } else {
      currentRoom.contents.monsters.push(COFFIN_SPIDER);
      monsterAttackHandler();
      getItem("RANDOM");
      setRoomSummary();
      startBattle();
      // writeToLog(); Coffin Spider
    }
  },
  functionTwo: () => {
    // writeToLog(); Ignore
    setTimeout(renderRoomSummaryModal, 5000);
  },
};

const BONEVAULT = {
  // !UNFINISHED!
  name: "Bonevault",
  eventType: "MISC",
  description: "",
  optionOne: "",
  optionTwo: "",
  passValue: null,
  failDamage: null,
  functionOne: () => {},
  functionTwo: () => {},
};

const ECHOING_CHIME = {
  // !UNFINISHED!
  name: "Echoing Chime",
  eventType: "MISC",
  description: "",
  optionOne: "Ring",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    // filters through catacombRooms and adds additional evil spirits to rooms with undead creatures.
    // adds secret rooms to catacombRooms
  },
  functionTwo: null,
};

const BLOOD_SIGIL = {
  // !UNFINISHED!
  name: "Blood Sigil",
  eventType: "MISC",
  description: "",
  optionOne: "Sacrifice",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: null,
  functionTwo: null,
};

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
      writeToLog(
        LOG_EVENT_TRAP_PASS,
        "you",
        attribute // Dictates descriptive trap pass text. ${value}
      );
      if (event.functionOne) {
        event.functionOne();
      }
    } else {
      if (event === SPIDER_WEB) {
        writeToLog(
          LOG_EVENT_TRAP_FAIL,
          attribute, // Dictates descriptive trap fail text. ${name}
          event.failDamage
        );
        console.log(event);
        console.log(attribute);
        console.log(event.failDamage);
      } else {
        playerHealthBar.value -= event.failDamage;
        currentPlayerHealth -= event.failDamage;
        writeToLog(
          LOG_EVENT_TRAP_FAIL,
          attribute, // Dictates descriptive trap fail text. ${name}
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
  fadeOutAnimation(eventModal, 0000);
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
  // renderRoomSummaryModal(); Commented out for Graverobber Earver's Option One Event
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
        console.log("Safe Room");
        SAFE_ROOM.functionOne();
        //writeToLog()
        currentRoom.contents.events = null;
        setTimeout(renderContinueButton, 5000);
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
