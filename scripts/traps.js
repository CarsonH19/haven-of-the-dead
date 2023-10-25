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
  console.log('Trap: ' + randomNumber);
  trapModal.style.display = 'none';
  currentRoom.contents.traps = null;
  renderContinueButton();
}
