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

    case "TAKE DAMAGE":
      sound = object.soundEffects.takeDamage;
      break;

    case "MONSTER DEATH":
      sound = object.soundEffects.death;
      break;

    case "PLAYER ATTACK":
      break;

    case "PLAYER GUARD":
      break;

    case "SPECIAL":
      break;

    case "ITEM":
      sound = object.soundEffect;
      break;
  }

  // Check if the AudioContext and GainNode are already created
  if (!object.audioContext) {
    object.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    object.gainNode = object.audioContext.createGain();

    // Create a single MediaElementSourceNode
    object.mediaElementSource = object.audioContext.createMediaElementSource(document.createElement('audio'));
    object.mediaElementSource.connect(object.gainNode);
    object.gainNode.connect(object.audioContext.destination);
  }

  // Set volume using the gain node
  object.gainNode.gain.setValueAtTime(volume, object.audioContext.currentTime);

  // Set the MediaElementSourceNode's mediaElement property to the current sound
  object.mediaElementSource.mediaElement = sound;

  // Play the audio
  sound.play();
}

// ===============================
//        AUDIO VARIABLES
// ===============================

// Heroes
const severMetalHit2 = loadAudio(
  "audio/Sever Metal Hit 2.mp3",
  "severMetalHit2"
);

// Monsters Spawn

// Monster Attack

// Monster Death

// Items
const flameLicks2 = loadAudio("audio/Flame Licks 2.mp3", "flameLicks2");

// Food
const chewCrackersMouth = loadAudio(
  "audio/Chew Crackers Mouth.mp3",
  "chewCrackersMouth"
);

// Drink
const gulpingWater24 = loadAudio(
  "audio/Gulping Water 24.mp3",
  "gulpingWater24"
);

// Ambience
const droneDungeon = loadAudio("audio/Drone Dungeon.mp3", true);

// Music
