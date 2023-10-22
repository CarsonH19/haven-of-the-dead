const monsterNameElement = document.getElementById('monster-info');


const CRYPT_CRAWLER = {
  name: 'Crypt Crawler',
  skulls: 1
}

const DECREPIT_SKELETON = {
  name: 'Decrepit Skeleton',
  skulls: 1
}

const SKELETAL_SOLDIER = {
  name: 'Skeletal Soldier',
  skulls: 2
}

const ARMORED_SKELETON = {
  name: 'Armored Skeleton',
  skulls: 3
}

const BLAZING_SKELETON = {
  name: 'Blazing Skeleton',
  skulls: 3
}

const DRAUGR = {
  name: 'Draugr',
  skulls: 6
}

const BONE_TITAN = {
  name: 'Bone Titan',
  skulls: 7
}

const FLOOD_OF_BONES = {
  name: 'Flood of Bones',
  skulls: 8
}

const BARON_OF_BONE = {
  name: 'Baron of Bone',
  skulls: 9
}

const SHADE = {
  name: 'Shade',
  skulls: 1
}

const GHOST = {
  name: 'Ghost',
  skulls: 3
}

const GRUDGE = {
  name: 'Grudge',
  skulls: 5
}

const GNAWER = {
  name: 'Gnawer',
  skulls: 1
}

const COFFIN_SPIDER = {
  name: 'Coffin Spider',
  skulls: 2
}

const SCOUNDREL = {
  name: 'Scoundrel',
  skulls: 2
}

function monsterSkullLevel(level) {
  switch (level) {
    case 1:
      monsterMaxHealth = 20;
      monsterAttackValue = 3;
      break;
    case 2:
      monsterMaxHealth = 30;
      monsterAttackValue = 4;
      break;
    case 3:
      monsterMaxHealth = 40;
      monsterAttackValue = 5;
      break;
    case 4:
      monsterMaxHealth = 50;
      monsterAttackValue = 6;
      break;
    case 5:
      monsterMaxHealth = 70;
      monsterAttackValue = 8;
      break;
    case 6:
      monsterMaxHealth = 90;
      monsterAttackValue = 10;
      break;
    case 7:
      monsterMaxHealth = 110;
      monsterAttackValue = 12;
      break;
    case 8:
      monsterMaxHealth = 150;
      monsterAttackValue = 15;
      break;
    case 9:
      monsterMaxHealth = 200;
      monsterAttackValue = 18;
      break;
  }
}


function renderMonsterStatBlock(monster) {
  console.log(monster);

  monsterSkullLevel(monster.skulls);

  monsterNameElement.textContent = monster.name;
  console.log(monster.name);
  
  setMonsterHealth(monsterMaxHealth);
}

function setMonsterHealth(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
}





