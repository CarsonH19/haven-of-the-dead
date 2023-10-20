const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');

const attackBtn = document.getElementById('attack-btn');
const guardBtn = document.getElementById('guard-btn');
const specialBtn = document.getElementById('special-btn');
const healBtn = document.getElementById('heal-btn');
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
