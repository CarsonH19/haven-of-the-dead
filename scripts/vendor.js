const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');

const attackBtn = document.getElementById('attack-btn');
const guardBtn = document.getElementById('guard-btn');
const specialBtn = document.getElementById('special-btn');
const potionBtn = document.getElementById('potion-btn');
const fleeBtn = document.getElementById('flee-btn');


function adjustPlayerHealthBar(maxLife) {
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function adjustMonsterHealthBar(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.round(Math.random() * damage);
  return dealtDamage;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.round(Math.random() * damage);
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}



// Opens modal to choose a hero

function openChooseHeroModal() {
  document.getElementById('heroChoiceModal').style.display = 'block';
}

openChooseHeroModal();

window.addEventListener('click', function(event) {
  const siggurd = document.getElementById('siggurd');
  const riven = document.getElementById('riven');
  const liheth = document.getElementById('liheth');

  if (event.target === siggurd || riven || lihet ) {
      document.getElementById('heroChoiceModal').style.display = 'none';
  }

  if (event.target === siggurd) {
    setPaladinStats();
  } else if (event.target === riven) {
    setRogueStats();
  } else {
    setPriestessStats();
  }
});


