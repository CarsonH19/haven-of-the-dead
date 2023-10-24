const spikeTrap = {
  name: "Spike Trap",
  optionOne: "STRENGTH",
  optionTwo: "DEXTERITY",
  description:
    "Spikes emerge from the chambers walls and begin closing in around you.",
  passValue: 7,
  failDamage: 30,
};

function trapHandler(attribute) {
  let trap = currentRoom.contents.traps;
  let randomNumber = (Math.floor(Math.random() * 10) + attribute);

  if (randomNumber > trap.passValue) {
    writeToLog(
      LOG_EVENT_TRAP_PASS,
      'You',
      'escape'
    )
  } else {
    playerHealthBar.value -= trap.failDamage;
    currentPlayerHealth -= trap.failDamage;
    writeToLog(
      LOG_EVENT_TRAP_FAIL,
      'You',
      trap.failDamage
    )
  }

  trapModal.style.display = 'none';
  currentRoom.contents.traps = null;
  renderContinueButton();
}
