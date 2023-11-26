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

function loadAudio(src, loop = false) {
  const audio = new Audio();
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

// ===============================
//        AUDIO VARIABLES
// ===============================

// Heroes
const daggerSoundFX = loadAudio("audio/Sever Metal Hit 2.mp3");

// Monsters Spawn

// Monster Attack

// Monster Death

// Items 

// Food 

// Drink



// Ambience
const droneDungeon = loadAudio("audio/Drone Dungeon.mp3", true);

// Music
