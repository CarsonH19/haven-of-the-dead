// ===============================
//        AUDIO & SETTINGS
// ===============================

const settingsButton = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeSettingsButton = document.getElementById("closeSettingsBtn");

const volumeUpButton = document.getElementById("volumeUp");
const volumeDownButton = document.getElementById("volumeDown");

// let music;
// let soundEffects;

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

// function createAudioContext() {
//   return new (window.AudioContext || window.webkitAudioContext)();
// }

// function connectNodes(audioContext, audio) {
//   const gainNode = audioContext.createGain();
//   const source = audioContext.createMediaElementSource(audio);

//   source.connect(gainNode);
//   gainNode.connect(audioContext.destination);

//   return gainNode;
// }

// function fadeIn(audio, duration) {
//   const audioContext = createAudioContext();
//   const gainNode = connectNodes(audioContext, audio);

//   gainNode.gain.setValueAtTime(0, audioContext.currentTime);
//   gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + duration);

//   audio.play();
// }

// function fadeOut(audio, duration) {
//   const audioContext = createAudioContext();
//   const gainNode = connectNodes(audioContext, audio);

//   gainNode.gain.setValueAtTime(1, audioContext.currentTime);
//   gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);

//   setTimeout(() => {
//     audio.pause();
//     audio.src = audio.src; // Workaround for stopping the audio
//   }, duration * 1000);
// }

function soundEffectHandler(object, type) {
  let sound;
  let volume = 0.1;

  switch (type) {
    case "SPAWN":
      sound = object.soundEffects.spawn;
      break;

    case "MONSTER ATTACK":
      sound = object.soundEffects.attack;
      volume = 0.05;
      break;

    case "MONSTER ABILITY":
      sound = object.soundEffects.ability;
      volume = 0.05;
      break;

    case "MONSTER DEATH":
      sound = object.soundEffects.death;
      break;

    case "MONSTER MISS":
      sound = object;
      break;

    case "PLAYER ATTACK":
      sound = object.soundEffects.attack;
      break;

    case "PLAYER ABILITY":
      sound = object.soundEffects.ability;
      break;

    case "PLAYER GUARD":
      sound = object.soundEffects.guard;
      break;

    case "PLAYER MISS":
      sound = object.soundEffects.miss;
      break;

    case "ITEM":
      sound = object.soundEffect;
      break;

    default:
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

// ===============================
//        AUDIO VARIABLES
// ===============================

//

const heartbeatFastLow = loadAudio(
  "audio/sound-effects/Heartbeat Fast Low.mp3",
  "heartbeatFastLow",
  true
);

// Attacks
const severMetalHit2 = loadAudio(
  "audio/sound-effects/Sever Metal Hit 2.mp3",
  "severMetalHit2"
);

const swordImpactRock1 = loadAudio(
  "audio/sound-effects/Sword Impact Rock 1.mp3",
  "swordImpactRock1"
);

const swordImpactRock2 = loadAudio(
  "audio/sound-effects/Sword Impact Rock 2.mp3",
  "swordImpactRock2"
);

const swordDraw2 = loadAudio(
  "audio/sound-effects/Sword Draw 2.mp3",
  "swordDraw2"
);

const magicWandCast14 = loadAudio(
  "audio/sound-effects/Magic Wand Cast 14.mp3",
  "magicWandCast14"
);

// Miss
const swordSwingWhoosh = loadAudio(
  "audio/sound-effects/Sword Swing Whoosh.mp3",
  "swordSwingWhoosh"
);

// Guard
const swordHit4 = loadAudio("audio/sound-effects/Sword Hit 4.mp3", "swordHit4");

// Abilities
const magicSpellWhoosh14 = loadAudio(
  "audio/sound-effects/Magic Spell Whoosh 14.mp3",
  "magicSpellWhoosh14"
);

const magicalSpell = loadAudio(
  "audio/sound-effects/Magical Spell.mp3",
  "magicalSpell"
);

const ghostlyWhoosh = loadAudio(
  "audio/sound-effects/Ghostly Whoosh.mp3",
  "ghostlyWhoosh"
);

// Monsters Spawn

const boneCrunchCrack1 = loadAudio(
  "audio/sound-effects/Bone Crunch Crack 1.mp3",
  "boneCrunchCrack1"
);

const swordFromSheath3 = loadAudio(
  "audio/sound-effects/Sword From Sheath 3.mp3",
  "swordFromSheath3"
);

// Monster Attack
// severMetalHit2

const fleshHit5 = loadAudio("audio/sound-effects/Flesh Hit 5.mp3", "fleshHit5");

const impactPunchBody2 = loadAudio(
  "audio/sound-effects/Impact Punch Body 2.mp3",
  "impactPunchBody2"
);

// Monster Death

const boneBreak7 = loadAudio(
  "audio/sound-effects/Bone Break 7.mp3",
  "boneBreak7"
);

const boneBreak8 = loadAudio(
  "audio/sound-effects/Bone Break 8.mp3",
  "boneBreak8"
);

const armorMetalClanksToTheGround = loadAudio(
  "audio/sound-effects/Armor Metal Clanks to Ground.mp3",
  "armorMetalClanksToTheGround"
);

const fightGrunt6 = loadAudio(
  "audio/sound-effects/Fight Grunt 6.mp3",
  "fightGrunt6"
);

// Items
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

// Rooms

const whooshLowAir = loadAudio(
  "audio/sound-effects/Whoosh Low Air.mp3",
  "whooshLowAir"
);
// const droneDungeon = loadAudio("audio/music/Drone Dungeon.mp3", true);

// Music
