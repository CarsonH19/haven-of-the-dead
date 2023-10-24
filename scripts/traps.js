const spikeTrap = {
    name: 'Spike Trap',
    optionOne: 'STRENGTH',
    optionTwo: 'DEXTERITY',
    description: 'Spikes emerge from the chambers walls and begin closing in around you.',
    passValue: 7,
    failDamage: 30
}


trapModal.style.display = 'none';

function renderTrap(trap) {
  const trapOptionOne = document.getElementById('trap-btn-one');
  const trapOptionTwo = document.getElementById('trap-btn-two');
  
  console.log("renderTrap Called!");
 
  trapModal.style.display = "block";
 
  if (trap.optionOne === 'STRENGTH') {
    trapOptionOne.textContent = 'Strength';
  } else if (optionOne === 'DEXTERITY') {
    trapOptionOne.textContent = 'Dexterity'; 
  } else {
    trapOptionOne.textContent = 'Faith';
  }

  if (trap.optionTwo === 'STRENGTH') {
      trapOptionTwo.textContent = 'Strength';
    } else if (optionTwo === 'DEXTERITY') {
      trapOptionTwo.textContent = 'Dexterity'; 
    } else {
      trapOptionTwo.textContent = 'Faith';
    }
}


  
function trapHandler(attribute){
    let trap = currentRoom.contents.traps
    
    let randomNumber = Math.floor((Math.random() * 10 ) + attribute);

    
    // make rolls and add modifiers to determine success or failure
    // deal damage
    // remove buttons
    // write to log the outcome
    // render continue button
}

trapButtonOne.addEventListener('click', () => {

    if (trapButtonOne.textContent === 'Strength') {
        trapHandler(baseStrength);
    } else if (trapButtonOne.textContent === 'Dexterity') {
        trapHandler(baseDexterity);
    } else {
        trapHandler(baseFaith)
    }
})

trapButtonTwo.addEventListener('click', )
  