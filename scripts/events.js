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
  optionOne: "Strength", // break free
  optionTwo: "Faith", // burn away
  passValue: 6,
  failDamage: 0,
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
  optionOne: "Strength", // hold breath
  optionTwo: "Faith", // breathe normally
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
  optionOne: "Strength", //Stomp and scare them away
  optionTwo: "Faith", // feed them
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
  optionOne: "Strength", // crush
  optionTwo: "Dexterity", // avoid
  passValue: 6,
  failDamage: 25,
  functionOne: null,
  functionTwo: null,
};

const SPIKE_PITFALL = {
  name: "Spike Pitfall",
  eventType: "TRAP",
  description:
    "he ground beneath your feet gives way suddenly, leaving you in a freefall. Your heart races as you plummet into the darkness, catching glimpses of jagged spikes gleaming below. The air rushes past you, carrying the scent of damp earth and impending danger.",
  optionOne: "Dexterity", //grasp the side
  optionTwo: "Faith", //fall but avoid spikes
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
  optionOne: "Dexterity", // dodge
  optionTwo: "Faith", // walk through
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
    "While venturing through the catacombs you find a peculiar man attempting to open a sealed tomb. He says if you aid him in opening the tomb he will share with you the rewards inside.",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    console.log("Hello");
  },
  functionTwo: () => {
    console.log("Goodbye!");
  },
};

const IVAN_THE_SCOUNDREL = {
  name: "Ivan the Scoundrel",
  eventType: "NPC",
  description: "",
  optionOne: "Set Free",
  optionTwo: "Leave",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    // writeToLog thanks you
    // gives you key to secret area with treasure
    // key leads to trapped room where he tries to kill you and steal your items
    // drops map of scoundrel hideouts
    // add hideouts to catacombRooms
  },
  functionTwo: () => {
    // writeToLog angry says you won’t leave the catacombs alive!
    // adds additional trap rooms to catacomb array.
  },
};

const SCHOLAR_HENDRA = {
  name: "Scholar Hendra",
  description: "",
  optionOne: "Help",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: () => {},
  functionTwo: () => {},
};

const GRERVIL_THE_BODILESS = {
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

const MIMIC_CHEST = {
  name: "Chest",
  eventType: "MISC",
  description: "You find a large ornately decorated chest. What will you do?",
  optionOne: "Open",
  optionTwo: "Ignore",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    let randomNumber = Math.round(Math.random() * 10) + baseFaith;
    if (randomNumber >= 7) {
      currentRoom.contents.items.push(EVERTORCH);
      setRoomSummary();
      // writeToLog();
    } else {
      currentRoom.contents.monsters.push(GRUDGE);
      currentRoom.contents.items.push(EVERTORCH);
      setRoomSummary();
      startBattle();
    }
  },
  functionTwo: () => {
    // writeToLog();
  },
};

const ECHOING_CHIME = {
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
      playerHealthBar.value -= event.failDamage;
      currentPlayerHealth -= event.failDamage;
      writeToLog(
        LOG_EVENT_TRAP_FAIL,
        attribute, // Dictates descriptive trap fail text. ${name}
        event.failDamage
      );
      if (event.functionTwo) {
        event.functionTwo();
      }
    }
  }

  fadeOutAnimation(eventModal);
  setTimeout(() => {
    eventModal.style.display = "none";
  }, 7000);

  currentRoom.contents.events = null;

  setTimeout(renderRoomSummaryModal, 8000);
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

  fadeOutAnimation(eventModal);
  setTimeout(() => {
    eventModal.style.display = "none";
  }, 7000);

  event = null;
  renderRoomSummaryModal();
}

// ===============================
//          Trap Modal
// ===============================

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
        if (event === GRAVEROBBER_EARVER) {
          eventButtonOne.textContent = event.optionOne;
          eventButtonTwo.textContent = event.optionTwo;
        }
        break;

      case "MISC":
        if (event === MIMIC_CHEST) {
          eventButtonOne.textContent = event.optionOne;
          eventButtonTwo.textContent = event.optionTwo;
        }
        break;
    }
    
    fadeInAnimation(eventModal);
    eventModal.style.display = "block";
  }, 2000);
}

//
// Event Listeners from app.js
//

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
