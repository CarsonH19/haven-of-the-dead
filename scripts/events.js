// ===============================
//         Trap Events
// ===============================

const spikeTrap = {
  name: "Spike Trap",
  eventType: "TRAP",
  description:
    "Spikes emerge from the chambers walls and begin closing in around you.",
  optionOne: "STRENGTH",
  optionTwo: "DEXTERITY",
  passValue: 7,
  failDamage: 30,
  functionOne: null,
  functionTwo: null,
};

const spiderWeb = {
  name: "Spider Web",
  eventType: "TRAP",
  description: "",
  optionOne: "STRENGTH",
  optionTwo: "FAITH",
  passValue: 7,
  failDamage: 0,
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
    "While venturing through the catacombs you find a peculiar man attempting to open a sealed tomb. He says if you aid him in opening the tomb he will share with you the rewards inside. What will you do?",
  optionOne: "Accept",
  optionTwo: "Refuse",
  functionOne: () => {
    console.log('Hello');
  },
  functionTwo: () => {
    console.log('Goodbye!');
  },
};

// ===============================
//          Misc. Events
// ===============================

const MIMIC_CHEST = {
  name: "Chest",
  eventType: "MISC",
  description: "",
  optionOne: "Yes",
  optionTwo: "No",
  passValue: null,
  failDamage: null,
  functionOne: () => {
    let randomNumber = Math.round(Math.random() * 10) + baseFaith;
    if (randomNumber >= 7) {
      addItemToInventory(EVERTORCH);
      currentRoom.contents.items.push(EVERTORCH);
      setRoomSummary();
      // writeToLog();
    } else {
      currentRoom.contents.monsters.push(GRUDGE);
      addItemToInventory(EVERTORCH);
      currentRoom.contents.items.push(EVERTORCH);
      setRoomSummary();
      startBattle();
    }
  },
  functionTwo: () => {
    // writeToLog();
  },
};

// app.js renderCurrentRoom

function trapEventHandler(baseStat, attribute) {
  let event = currentRoom.contents.events;
  let randomNumber = Math.round(Math.random() * 10) + baseStat;
  console.log(`randomNumber: ${randomNumber}`);

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
      console.log([randomNumber, event.passValue])
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

  eventModal.style.display = "none";
  event = null;
  renderRoomSummaryModal();
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

  eventModal.style.display = "none";
  event = null;
  renderRoomSummaryModal();
}

// ===============================
//          Trap Modal
// ===============================

function renderEvent(event) {
  eventModal.style.display = "block";

  switch (event.eventType) {
    case "TRAP":
      if (event.optionOne === "STRENGTH") {
        eventButtonOne.textContent = "Strength";
      } else if (event.optionOne === "DEXTERITY") {
        eventButtonOne.textContent = "Dexterity";
      } else {
        eventButtonOne.textContent = "Faith";
      }

      if (event.optionTwo === "STRENGTH") {
        eventButtonTwo.textContent = "Strength";
      } else if (event.optionTwo === "DEXTERITY") {
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
});
