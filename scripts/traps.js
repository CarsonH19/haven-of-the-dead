const spikeTrap = {
  name: "Spike Trap",
  optionOne: "STRENGTH",
  optionTwo: "DEXTERITY",
  description:
    "Spikes emerge from the chambers walls and begin closing in around you.",
  passValue: 7,
  failDamage: 30,
};

function trapHandler(baseStat, attribute) {
  let trap = currentRoom.contents.traps;
  let randomNumber = (Math.floor(Math.random() * 10) + baseStat);
  
  //ITEM: Evertorch - Increases success chance with traps.
  randomNumber = randomNumber + isItemAttuned(EVERTORCH);

  if (randomNumber > trap.passValue) {
    writeToLog(
      LOG_EVENT_TRAP_PASS,
      'you',
      attribute // Dictates descriptive trap pass text. ${value}
    )
  } else {
    playerHealthBar.value -= trap.failDamage;
    currentPlayerHealth -= trap.failDamage;
    writeToLog(
      LOG_EVENT_TRAP_FAIL,
      attribute, // Dictates descriptive trap fail text. ${name}
      trap.failDamage
    )
  }

  trapModal.style.display = 'none';
  currentRoom.contents.traps = null;
  renderRoomSummaryModal();
}

// ===============================
//          Trap Modal
// ===============================

trapModal.style.display = "none";

function renderTrap(trap) {
  // console.log("renderTrap Called!");

  trapModal.style.display = "block";

  if (trap.optionOne === "STRENGTH") {
    trapButtonOne.textContent = "Strength";
  } else if (trap.optionOne === "DEXTERITY") {
    trapButtonOne.textContent = "Dexterity";
  } else {
    trapButtonOne.textContent = "Faith";
  }

  if (trap.optionTwo === "STRENGTH") {
    trapButtonTwo.textContent = "Strength";
  } else if (trap.optionTwo === "DEXTERITY") {
    trapButtonTwo.textContent = "Dexterity";
  } else {
    trapButtonTwo.textContent = "Faith";
  }
}

// ===============================
//          Event Listeners
// ===============================

trapButtonOne.addEventListener("click", () => {
  if (trapButtonOne.textContent === "Strength") {
    trapHandler(baseStrength, "STRENGTH");
  } else if (trapButtonOne.textContent === "Dexterity") {
    trapHandler(baseDexterity, "DEXTERITY");
  } else {
    trapHandler(baseFaith, "FAITH");
  }

  isGameOver();
});

trapButtonTwo.addEventListener("click", () => {
  if (trapButtonTwo.textContent === "Strength") {
    trapHandler(baseStrength, "STRENGTH");
  } else if (trapButtonTwo.textContent === "Dexterity") {
    trapHandler(baseDexterity, "DEXTERITY");
  } else {
    trapHandler(baseFaith, "FAITH");
  }

  isGameOver();
});

