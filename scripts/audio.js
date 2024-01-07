// ===============================
//        AUDIO & SETTINGS
// ===============================

const settingsButton = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeSettingsButton = document.getElementById("closeSettingsBtn");

const volumeUpButton = document.getElementById("volumeUp");
const volumeDownButton = document.getElementById("volumeDown");

function loadAudio(src, id, loop = false) {
  const audio = new Audio();
  audio.id = id;
  audio.src = src;
  audio.loop = loop;

  return audio;
}

function adjustVolume(audio, delta) {
  audio.volume = Math.max(0, Math.min(1, audio.volume + delta));
  updateVolumeDisplay(audio.volume);
}

function updateVolumeDisplay(volume) {
  const volumeProgressBar = document.getElementById("volume");
  volumeProgressBar.value = volume;
}

function soundEffectHandler(object, type) {
  let hero = heroChecker();
  let sound;
  let volume = 0.1;

  switch (type) {
    case "SPAWN":
      if (typeof object.soundEffects.spawn === "function") {
        sound = object.soundEffects.spawn();
      } else {
        sound = object.soundEffects.spawn;
      }
      break;

    case "MONSTER ATTACK":
      if (typeof object.soundEffects.attack === "function") {
        sound = object.soundEffects.attack();
      } else {
        sound = object.soundEffects.attack;
      }
      volume = 0.05;
      break;

    case "MONSTER ABILITY":
      if (typeof object.soundEffects.ability === "function") {
        sound = object.soundEffects.ability();
      } else {
        sound = object.soundEffects.ability;
      }
      volume = 0.05;
      break;

    case "MONSTER DEATH":
      if (typeof object.soundEffects.death === "function") {
        sound = object.soundEffects.death();
      } else {
        sound = object.soundEffects.death;
      }
      break;

    case "MONSTER MISS":
      sound = object;
      break;

    case "PLAYER ATTACK":
      sound = hero.soundEffects.attack();
      break;

    case "PLAYER ABILITY":
      if (typeof object.soundEffects.ability === "function") {
        sound = object.soundEffects.ability();
      } else {
        sound = object.soundEffects.ability;
      }
      break;

    case "PLAYER GUARD":
      sound = hero.soundEffects.guard();
      break;

    case "PLAYER MISS":
      sound = hero.soundEffects.miss();
      break;

    case "ITEM":
      if (object === WHISPERING_SKULL) {
        // Reduces sound of evilSpell1 sound effect
        volume = 0.02;
      }

      sound = object.soundEffect;
      break;

    default:
      if (object === energyPresence4) {
        volume = 0.5;
      }
      sound = object;
  }

  // Check if the AudioContext and GainNode are already created
  if (!object.audioContext) {
    object.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    object.gainNode = object.audioContext.createGain();

    // Create a single MediaElementSourceNode
    object.mediaElementSource = object.audioContext.createMediaElementSource(
      document.createElement("audio")
    );
    object.mediaElementSource.connect(object.gainNode);
    object.gainNode.connect(object.audioContext.destination);
  }

  // Set volume using the gain node
  object.gainNode.gain.setValueAtTime(volume, object.audioContext.currentTime);

  // Set the MediaElementSourceNode's mediaElement property to the current sound
  object.mediaElementSource.mediaElement = sound;

  // Play the audio
  sound.volume = volume;
  sound.play();
}

//
//
//

let currentMusic = null;

function playMusic(music) {
  if (currentMusic) {
    // If there is currently playing music, fade it out
    fadeOut(currentMusic, () => {
      // Callback: Start the new music after the old one has faded out
      playNewMusic(music);
    });
  } else {
    // If no music is currently playing, just start the new one
    fadeIn(music);
  }

  currentMusic = music;
}

function playNewMusic(music) {
  // Set the volume to 0 before playing to allow fading in
  music.volume = 0;
  music.play();

  // Fade in the music
  fadeIn(music);
}

function fadeIn(audio) {
  audio.volume = 0;
  audio.play();

  const fadeInInterval = setInterval(() => {
    audio.volume = Math.min(1, audio.volume + 0.003);

    if (audio.volume >= 0.05) {
      clearInterval(fadeInInterval);
    }
  }, 100);
}

function fadeOut(audio, callback) {
  const fadeOutInterval = setInterval(() => {
    audio.volume = Math.max(0, audio.volume - 0.003);

    if (audio.volume <= 0) {
      clearInterval(fadeOutInterval);
      audio.pause();
      audio.currentTime = 0; // Reset audio position to the beginning
      if (callback) {
        callback();
      }
    }
  }, 100);
}

// =========================================================
//                      AUDIO VARIABLES
// =========================================================

// ===============================
//           MUSIC
// ===============================

// Good Ending
const returnOfTheFallen = loadAudio(
  "audio/music/Return of the Fallen.mp3",
  "returnOfTheFallen"
);

// Curator's Curio
const timeToFaceThem = loadAudio(
  "audio/music/Time to Face Them.mp3",
  "timeToFaceThem",
  true
);
// Undead Heroes Fight
const finalBrigade = loadAudio(
  "audio/music/Final Brigade.mp3",
  "finalBrigade",
  true
);
// Join the Baron
const basementNightmare = loadAudio(
  "audio/music/Basement Nightmares.mp3",
  "basementNightmare"
);
// Baron of Bone Fight

const birthOfaKnight = loadAudio(
  "audio/music/Birth of a Knight.mp3",
  "birthOfaKnight"
);

const theEternalWar = loadAudio(
  "audio/music/The Eternal War.mp3",
  "theEternalWar"
);
// Gnawer
const deepTunnels = loadAudio(
  "audio/music/Deep Tunnels.mp3",
  "deepTunnels",
  true
);
// Skeletons
const edgeOfFear = loadAudio(
  "audio/music/Edge of Fear.mp3",
  "edgeOfFear",
  true
);
const pileOfBones = loadAudio(
  "audio/music/Pile of Bones.mp3",
  "pileOfBones",
  true
);
// Flood of Bones
const passedDanger = loadAudio(
  "audio/music/Passed Danger.mp3",
  "passedDanger",
  true
);
// Spiders
const spiderInvasion = loadAudio(
  "audio/music/Spider Invasion.mp3",
  "spiderInvasion",
  true
);
// Cultists
const fightThrough = loadAudio(
  "audio/music/Fight Through.mp3",
  "fightThrough",
  true
);
// NPCs
const imminentDarkness = loadAudio(
  "audio/music/Imminent Darkness.mp3",
  "imminentDarkness",
  true
);
// Ghosts
const hauntedOutpost = loadAudio(
  "audio/music/Haunted Outpost.mp3",
  "hauntedOutpost",
  true
);
// Scoundrels
const hiddenCapacity = loadAudio(
  "audio/music/Hidden Capacity.mp3",
  "hiddenCapacity",
  true
);
// Candlelight Shrine Event
const mindReading = loadAudio(
  "audio/music/Mind Reading.mp3",
  "mindReading",
  true
);
// Laughing Coffin Event
const unfinishedBusiness = loadAudio(
  "audio/music/Unfinished Business.mp3",
  "unfinishedBusiness",
  true
);
// Fallen Warriors` Vale Event
const weCantStopThem = loadAudio(
  "audio/music/We Can_t Stop Them.mp3",
  "weCantStopThem",
  true
);
// Coffin Event
const threeThousandYearsOld = loadAudio(
  "audio/music/3000 Years Old.mp3",
  "threeThousandYearsOld",
  true
);
// Crimson Covenant Event
const crypta = loadAudio("audio/music/Crypta.mp3", "crypta", true);
// Trap Events
const claustrofobia = loadAudio(
  "audio/music/Claustrofobia.mp3",
  "claustrofobia",
  true
);
// Hag's Hollow
const creepyThoughts = loadAudio(
  "audio/music/Creepy Thoughts.mp3",
  "creepyThoughts",
  true
);
// Start Game
const mazeHeist = loadAudio("audio/music/Maze Heist.mp3", "mazeHeist", true);
// Death
const theEndOfTheWorld = loadAudio(
  "audio/music/The End of the World.mp3",
  "theEndOfTheWorld",
  true
);

// const name = loadAudio("", "", true);

// Misc. Ambiance
const droneDungeon = loadAudio(
  "audio/music/Drone Dungeon.mp3",
  "droneDungeon",
  true
);

const droneDarkHor1 = loadAudio(
  "audio/music/Drone Dark Hor 1.mp3",
  "droneDarkHor1",
  true
);

const droneDarkMys24 = loadAudio(
  "audio/music/Drone Dark Mys 24.mp3",
  "droneDarkMys24",
  true
);

// Low Health Ambiance
const heartbeatFastLow = loadAudio(
  "audio/sound-effects/Heartbeat Fast Low.mp3",
  "heartbeatFastLow",
  true
);

// ===============================
//      Player Sound Effects
// ===============================

// ===============================
//         Guard Weapon
// ===============================

const severMetalHit2 = loadAudio(
  "audio/sound-effects/guard/Sever Metal Hit 2.mp3",
  "severMetalHit2"
);
const swordImpactRock1 = loadAudio(
  "audio/sound-effects/guard/Sword Impact Rock 1.mp3",
  "swordImpactRock1"
);
const swordHit4 = loadAudio(
  "audio/sound-effects/guard/Sword Hit 4.mp3",
  "swordHit4"
);
const swordSwingWhoosh = loadAudio(
  "audio/sound-effects/guard/Sword Swing Whoosh.mp3",
  "swordSwingWhoosh"
);
const swordHit7 = loadAudio(
  "audio/sound-effects/guard/Sword Hit 7.mp3",
  "swordHit7"
);

function guardSounds() {
  let sounds = [
    severMetalHit2,
    swordImpactRock1,
    swordHit4,
    swordSwingWhoosh,
    swordHit7,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//         Heavy Weapon
// ===============================
// Paladin / Undead

const axeChopFlesh1 = loadAudio(
  "audio/sound-effects/heavy/Axe Chop Flesh 1.mp3",
  "axeChopFlesh1"
);
const axeChopFlesh2 = loadAudio(
  "audio/sound-effects/heavy/Axe Chop Flesh 2.mp3",
  "axeChopFlesh2"
);
const axeChopFlesh8 = loadAudio(
  "audio/sound-effects/heavy/Axe Chop Flesh 8.mp3",
  "axeChopFlesh8"
);
const axeChopFlesh10 = loadAudio(
  "audio/sound-effects/heavy/Axe Chop Flesh 10.mp3",
  "axeChopFlesh10"
);
const battleAxeStrike2 = loadAudio(
  "audio/sound-effects/heavy/Battle Axe Strike 2.mp3",
  "battleAxeStrike2"
);
const battleAxeStrike3 = loadAudio(
  "audio/sound-effects/heavy/Battle Axe Strike 3.mp3",
  "battleAxeStrike3"
);
const battleAxeThrow = loadAudio(
  "audio/sound-effects/heavy/Battle Axe Throw.mp3",
  "battleAxeThrow"
);
const axeThrowIntoBody2 = loadAudio(
  "audio/sound-effects/heavy/Axe Throw Into Body 2.mp3",
  "axeThrowIntoBody2"
);
const axeThrowIntoBody3 = loadAudio(
  "audio/sound-effects/heavy/Axe Throw Into Body 3.mp3",
  "axeThrowIntoBody3"
);

function heavyAttackSounds() {
  let sounds = [
    axeChopFlesh1,
    axeChopFlesh10,
    axeChopFlesh2,
    axeChopFlesh8,
    battleAxeStrike2,
    battleAxeStrike3,
    battleAxeThrow,
    axeThrowIntoBody2,
    axeThrowIntoBody3,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//           Flesh Hit
// ===============================

const fleshHit1 = loadAudio(
  "audio/sound-effects/monster/Flesh Hit 1.mp3",
  "fleshHit1"
);
const fleshHit3 = loadAudio(
  "audio/sound-effects/monster/Flesh Hit 3.mp3",
  "fleshHit3"
);
const fleshHit4 = loadAudio(
  "audio/sound-effects/monster/Flesh Hit 4.mp3",
  "fleshHit4"
);
const fleshHit5 = loadAudio(
  "audio/sound-effects/monster/Flesh Hit 5.mp3",
  "fleshHit5"
);
const fleshHit11 = loadAudio(
  "audio/sound-effects/monster/Flesh Hit 11.mp3",
  "fleshHit11"
);

function fleshHitSounds() {
  let sounds = [fleshHit1, fleshHit3, fleshHit4, fleshHit5, fleshHit11];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//           Punches
// ===============================

const impactPunchFace8 = loadAudio(
  "audio/sound-effects/monster/Impact Punch Face 8.mp3",
  "impactPunchFace8"
);
const impactPunchHard = loadAudio(
  "audio/sound-effects/monster/Impact Punch Hard.mp3",
  "impactPunchHard"
);
const punch1 = loadAudio("audio/sound-effects/monster/Punch 1.mp3", "punch1");
const punchFaceMeatyFlesh = loadAudio(
  "audio/sound-effects/monster/Punch Face Meaty Flesh 3.mp3",
  "punchFaceMeatyFlesh"
);

const impactPunchBody2 = loadAudio(
  "audio/sound-effects/monster/Impact Punch Body 2.mp3",
  "impactPunchBody2"
);

function punchSounds() {
  let sounds = [
    impactPunchFace8,
    impactPunchHard,
    punch1,
    punchFaceMeatyFlesh,
    impactPunchBody2,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//         Light Weapon
// ===============================
// Rogue / Scoundrel / Cultists

const knifeSliceFace = loadAudio(
  "audio/sound-effects/light/Knife Slice Face.mp3",
  "knifeSliceFace"
);
const knifeStab1 = loadAudio(
  "audio/sound-effects/light/Knife Stab 1.mp3",
  "knifeStab1"
);
const knifeStab = loadAudio(
  "audio/sound-effects/light/Knife Stab.mp3",
  "knifeStab"
);
const knifeStabFleshWet = loadAudio(
  "audio/sound-effects/light/Knife Stab Flesh Wet.mp3",
  "knifeStabFleshWet"
);
const knifeThrowFlesh = loadAudio(
  "audio/sound-effects/light/Knife Throw Flesh.mp3",
  "knifeThrowFlesh"
);
const swordSlice = loadAudio(
  "audio/sound-effects/light/Sword Slice.mp3",
  "swordSlice"
);
const swordDraw2 = loadAudio(
  "audio/sound-effects/light/Sword Draw 2.mp3",
  "swordDraw2"
);
const swordThrow = loadAudio(
  "audio/sound-effects/light/Sword Throw.mp3",
  "swordThrow"
);

function lightAttackSounds() {
  let sounds = [
    knifeSliceFace,
    knifeStab1,
    knifeStab,
    knifeStabFleshWet,
    knifeThrowFlesh,
    swordSlice,
    swordDraw2,
    swordThrow,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//            Magic
// ===============================
// Priestess / Holy Smite / Fiendsworn / Blazing Skeleton / Baron

const magicSpellFire1 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Fire 1.mp3",
  "magicSpellFire1"
);
const magicSpellFire2 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Fire 2.mp3",
  "magicSpellFire2"
);
const magicSpellHit2 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Hit 2.mp3",
  "magicSpellHit2"
);
const magicSpellHit4 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Hit 4.mp3",
  "magicSpellHit4"
);
const magicSpellImpact = loadAudio(
  "audio/sound-effects/magic/Magic Spell Impact.mp3",
  "magicSpellImpact"
);
const magicWandCast8 = loadAudio(
  "audio/sound-effects/magic/Magic Wand Cast 8.mp3",
  "magicWandCast8"
);
const magicWandCast14 = loadAudio(
  "audio/sound-effects/magic/Magic Wand Cast 14.mp3",
  "magicWandCast14"
);
const magicalSpell = loadAudio(
  "audio/sound-effects/magic/Magical Spell.mp3",
  "magicalSpell"
);

function magicAttackSounds() {
  let sounds = [
    magicSpellFire1,
    magicSpellFire2,
    magicSpellHit2,
    magicSpellHit4,
    magicSpellImpact,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// Guard & Miss
const magicSpellPassBy28 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Pass By 28.mp3",
  "magicSpellPassBy28"
);
const magicSpellWhoosh2 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Whoosh 2.mp3",
  "magicSpellWhoosh2"
);
const magicSpellWhoosh4 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Whoosh 4.mp3",
  "magicSpellWhoosh4"
);
const magicSpellWhoosh9 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Whoosh 9.mp3",
  "magicSpellWhoosh9"
);
const magicSpellWhoosh14 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Whoosh 14.mp3",
  "magicSpellWhoosh14"
);
const magicSpellWhoosh20 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Whoosh 20.mp3",
  "magicSpellWhoosh20"
);
const magicSpellWhoosh22 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Whoosh 22.mp3",
  "magicSpellWhoosh22"
);

function magicGuardSounds() {
  let sounds = [
    magicSpellPassBy28,
    magicSpellWhoosh14,
    magicSpellWhoosh2,
    magicSpellWhoosh20,
    magicSpellWhoosh22,
    magicSpellWhoosh4,
    magicSpellWhoosh9,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//        Armor Clanking
// ===============================

const armorMetalClanksToTheGround = loadAudio(
  "audio/sound-effects/monster/Armor Metal Clanks to Ground.mp3",
  "armorMetalClanksToTheGround"
);

const armorMetalClanksToTheGround2 = loadAudio(
  "audio/sound-effects/monster/Armor Metal Clanks to Ground 2.mp3",
  "armorMetalClanksToTheGround 2"
);

const armorMetalClanksToTheGround3 = loadAudio(
  "audio/sound-effects/monster/Armor Metal Clanks to Ground 3.mp3",
  "armorMetalClanksToTheGround3"
);

function armorSounds() {
  let sounds = [
    armorMetalClanksToTheGround,
    armorMetalClanksToTheGround2,
    armorMetalClanksToTheGround3,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//       Player Abilities
// ===============================

const ghostlyWhoosh = loadAudio(
  "audio/sound-effects/Ghostly Whoosh.mp3",
  "ghostlyWhoosh"
);

// ===============================
//        Monster Sounds
// ===============================

// const name = loadAudio("", "");

// Bites
const biteFleshCrunch1 = loadAudio(
  "audio/sound-effects/monster/Bite Flesh Crunch 1.mp3",
  "biteFleshCrunch1"
);
const biteFleshCrunch2 = loadAudio(
  "audio/sound-effects/monster/Bite Flesh Crunch 2.mp3",
  "biteFleshCrunch2"
);
const biteFleshCrunch4 = loadAudio(
  "audio/sound-effects/monster/Bite Flesh Crunch 4.mp3",
  "biteFleshCrunch4"
);
const spiderBiteFang3 = loadAudio(
  "audio/sound-effects/monster/Spider Bite Fang 3.mp3",
  "spiderBiteFang3"
);
const spiderBiteFang4 = loadAudio(
  "audio/sound-effects/monster/Spider Bite Fang 4.mp3",
  "spiderBiteFang4"
);

function biteSounds() {
  let sounds = [
    biteFleshCrunch1,
    biteFleshCrunch2,
    biteFleshCrunch4,
    spiderBiteFang3,
    spiderBiteFang4,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// Bone Breaks
const boneBreak = loadAudio(
  "audio/sound-effects/monster/Bone Break.mp3",
  "boneBreak"
);
const boneBreak6 = loadAudio(
  "audio/sound-effects/monster/Bone Break 6.mp3",
  "boneBreak6"
);
const boneBreak7 = loadAudio(
  "audio/sound-effects/monster/Bone Break 7.mp3",
  "boneBreak7"
);
const boneBreak8 = loadAudio(
  "audio/sound-effects/monster/Bone Break 8.mp3",
  "boneBreak8"
);
const boneCrunchCrack1 = loadAudio(
  "audio/sound-effects/monster/Bone Crunch Crack 1.mp3",
  "boneCrunchCrack1"
);
const spineBoneBreak1 = loadAudio(
  "audio/sound-effects/monster/Spine Bone Break 1.mp3",
  "spineBoneBreak1"
);
const spineBoneBreak2 = loadAudio(
  "audio/sound-effects/monster/Spine Bone Break 2.mp3",
  "spineBoneBreak2"
);

function boneBreakSounds() {
  let sounds = [
    boneBreak,
    boneBreak6,
    boneBreak7,
    boneBreak8,
    boneCrunchCrack1,
    spineBoneBreak1,
    spineBoneBreak2,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// Human Fight Grunts
const fightGrunt1 = loadAudio(
  "audio/sound-effects/monster/Fight Grunt 1.mp3",
  "fightGrunt1"
);
const fightGrunt2 = loadAudio(
  "audio/sound-effects/monster/Fight Grunt 2.mp3",
  "fightGrunt2"
);
const fightGrunt3 = loadAudio(
  "audio/sound-effects/monster/Fight Grunt 3.mp3",
  "fightGrunt3"
);
const fightGrunt6 = loadAudio(
  "audio/sound-effects/monster/Fight Grunt 6.mp3",
  "fightGrunt6"
);

function fightgruntSounds() {
  let sounds = [fightGrunt1, fightGrunt2, fightGrunt3, fightGrunt6];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// Misc. Abilities
// Crypt Crawler
const spiderWebShoot7 = loadAudio(
  "audio/sound-effects/Spider Web Shoot 7.mp3",
  "spiderWebShoot7"
);

// Broodmother
const larvaEggHatch4 = loadAudio(
  "audio/sound-effects/Larva Egg Hatch 4.mp3",
  "larvaEggHatch4"
);

// Draugr
const iceCrackFreeze = loadAudio(
  "audio/sound-effects/Ice Crack Freeze.mp3",
  "iceCrackFreeze"
);

// ???
const fleshRip1 = loadAudio("audio/sound-effects/Flesh Rip 1.mp3", "fleshRip1");

// Ivan the Scoundrell
const bodyShove = loadAudio("audio/sound-effects/Body Shove.mp3", "bodyShove");

// ===============================
//        Monster Spawn
// ===============================
const ratSqueak30 = loadAudio(
  "audio/sound-effects/Rat Squeaks 30.mp3",
  "ratSqueak30"
);

const ratSqueak9 = loadAudio(
  "audio/sound-effects/Rat Squeaks 9.mp3",
  "ratSqueak9"
);

const swordFromSheath3 = loadAudio(
  "audio/sound-effects/Sword From Sheath 3.mp3",
  "swordFromSheath3"
);

const spiderDaddyLong1 = loadAudio(
  "audio/sound-effects/Spider Daddy Long 1.mp3",
  "spiderDaddyLong1"
);

const spiderDaddyLong2 = loadAudio(
  "audio/sound-effects/Spider Daddy Long 2.mp3",
  "spiderDaddyLong2"
);

const ghostAppearance1 = loadAudio(
  "audio/sound-effects/Ghost Appearance 1.mp3",
  "ghostAppearance1"
);
// Bonevault Demon
const monsterSnarl4 = loadAudio(
  "audio/sound-effects/monster/Monster Snarl 41.mp3",
  "monsterSnarl4"
);

// ===============================
//        Monster Attacks
// ===============================

const skullHitShovel = loadAudio(
  "audio/sound-effects/Skull Hit Shovel.mp3",
  "skullHitShovel"
);

const whooshGhostBy1 = loadAudio(
  "audio/sound-effects/Whoosh Ghost By 1.mp3",
  "whooshGhostBy1"
);

const whooshGhostBy2 = loadAudio(
  "audio/sound-effects/Whoosh Ghost By 2.mp3",
  "whooshGhostBy2"
);

const whooshGhost = loadAudio(
  "audio/sound-effects/Whoosh Ghost.mp3",
  "whooshGhost"
);

const torchPassBy1 = loadAudio(
  "audio/sound-effects/Torch Pass By 1.mp3",
  "torchPassBy1"
);

const fleshStab3 = loadAudio(
  "audio/sound-effects/Flesh Stab 3.mp3",
  "fleshStab3"
);

// ===============================
//         MONSTER DEATH
// ===============================

const alienSpiderWeb3 = loadAudio(
  "audio/sound-effects/Alien Spider Web 3.mp3",
  "alienSpiderWeb3"
);

const insectsSpider3 = loadAudio(
  "audio/sound-effects/Insects Spider.mp3",
  "insectsSpider3"
);

const ghostHowl = loadAudio("audio/sound-effects/Ghost Howl.mp3", "ghostHowl");

const ghostShriekWhoosh = loadAudio(
  "audio/sound-effects/Ghost Shriek Whoosh.mp3",
  "ghostShriekWhoosh"
);
// Bonevault Demon Death
const monsterSnarl3 = loadAudio(
  "audio/sound-effects/monster/Monster Snarl 38.mp3",
  "monsterSnarl3"
);

// ===============================
//           ITEMS
// ===============================

const flameLicks2 = loadAudio(
  "audio/sound-effects/Flame Licks 2.mp3",
  "flameLicks2"
);
const skeletonKeyIn2 = loadAudio(
  "audio/sound-effects/Skeleton Key In 2.mp3",
  "skeletonKeyIn2"
);
const coinFlipLand = loadAudio(
  "audio/sound-effects/Coin Flip Land.mp3",
  "coinFlipLand"
);
const crystalWhoosh = loadAudio(
  "audio/sound-effects/Whoosh Crystal.mp3",
  "crystalWhoosh"
);
// Food
const chewCrackersMouth = loadAudio(
  "audio/sound-effects/Chew Crackers Mouth.mp3",
  "chewCrackersMouth"
);
// Drink
const gulpingWater24 = loadAudio(
  "audio/sound-effects/Gulping Water 24.mp3",
  "gulpingWater24"
);
// Wisp
const ghostBreathWithReverb = loadAudio(
  "audio/sound-effects/Ghostly Breath With Reverb.mp3",
  "ghostBreathWithReverb"
);
// Whispering Skulls
const evilSpell1 = loadAudio(
  "audio/sound-effects/Evil Spell 1.mp3",
  "evilSpell1"
);
// Demonic Grimoire
const energyPresence4 = loadAudio(
  "audio/sound-effects/Energy Presence 4.mp3",
  "energyPresence4"
);

// ===============================
//           EVENTS
// ===============================

// Ivan's Laugh During Traps
const humanLaugh25 = loadAudio(
  "audio/sound-effects/Human Laugh 25.mp3",
  "humanLaugh25"
);

// Swarm of Vermin
const ratsSqueak = loadAudio(
  "audio/sound-effects/Rats Squeak.mp3",
  "ratsSqueak"
);

// Poison Arrows
const bulletsPassBy4 = loadAudio(
  "audio/sound-effects/Bullets Pass By 4.mp3",
  "bulletsPassBy4"
);

const bulletsImpactFlesh26 = loadAudio(
  "audio/sound-effects/Bullet Impact Flesh 26.mp3",
  "bulletsImpactFlesh26"
);

// Spike Pitfall
const crashRockStone = loadAudio(
  "audio/sound-effects/Crash Rock Stone.mp3",
  "crashRockStone"
);

// Gas Chamber
const gasLeakHose3 = loadAudio(
  "audio/sound-effects/Gas Leak Hose 3.mp3",
  "gasLeakHose3"
);

//Pendulum Blades
const metalSqueak21 = loadAudio(
  "audio/sound-effects/Metal Squeak 21.mp3",
  "metalSqueak21"
);

// ===============================
//           MIC
// ===============================

// const name = loadAudio("", "");

// Room Transition
const whooshLowAir = loadAudio(
  "audio/sound-effects/Whoosh Low Air.mp3",
  "whooshLowAir"
);

const cameraBag2 = loadAudio(
  "audio/sound-effects/misc/Camera Bag 2.mp3",
  "cameraBag2"
);

const cameraIntoBag = loadAudio(
  "audio/sound-effects/misc/Camera Into Bag.mp3",
  "cameraIntoBag"
);

const cauldronLargeBoil = loadAudio(
  "audio/sound-effects/misc/Cauldron Large Boil.mp3",
  "cauldronLargeBoil",
  true
);

const evilSpellVoice1 = loadAudio(
  "audio/sound-effects/misc/Evil Spell Voice 1.mp3",
  "evilSpellVoice1"
);

const feedbackSwell4 = loadAudio(
  "audio/sound-effects/misc/Feedback Swell 4.mp3",
  "feedbackSwell4"
);

const ghostEncounter = loadAudio(
  "audio/sound-effects/misc/Ghost Encounter.mp3",
  "ghostEncounter"
);

// Baron of Bone Death
const ghostlyDemonic = loadAudio(
  "audio/sound-effects/misc/Ghostly Demonic.mp3",
  "ghostlyDemonic"
);

// Haunted
const ghostlyMagic = loadAudio(
  "audio/sound-effects/misc/Ghostly Magic.mp3",
  "ghostlyMagic"
);

// const hitImpactDelay2 = loadAudio(
//   "audio/sound-effects/misc/Hit Impact Delay 2.mp3",
//   "hitImpactDelay2"
// );

// Render Room Summary Modal
const hitReverbDark4 = loadAudio(
  "audio/sound-effects/misc/Hit Reverb Dark 4.mp3",
  "hitReverbDark4"
);

// Boon Choice
const shimmerCrystal = loadAudio(
  "audio/sound-effects/misc/Shimmer Crysta.mp3",
  "shimmerCrystal"
);

// Curator "Hmm"
const voiceClipMale226 = loadAudio(
  "audio/sound-effects/misc/Voice Clip Male 226.mp3",
  "voiceClipMale226"
);

// Level Up Modal Render
const magicMetallic = loadAudio(
  "audio/sound-effects/misc/Magical Metallic.mp3",
  "magicMetallic"
);

// Pitfall Spike Stab
const pitchforkBody = loadAudio(
  "audio/sound-effects/Pitchfork Body.mp3",
  "pitchforkBody"
);

// Hag's Hollow Gain Favor
const splashSubmerge2 = loadAudio(
  "audio/sound-effects/misc/Splash Submerge 2.mp3",
  "splashSubmerge2"
);

// Crimson Covenant Join Ritual
const bloodDrips = loadAudio(
  "audio/sound-effects/misc/Blood Drips.mp3",
  "bloodDrips"
);

// Enter Baron of Bone Room
const ominousPresence = loadAudio(
  "audio/sound-effects/misc/Ominous Presence.mp3",
  "ominousPresence"
);
// Locked Door
const doorSecretPassage1 = loadAudio(
  "audio/sound-effects/misc/Door Secret Passage 1.mp3",
  "doorSecretPassage1"
);
