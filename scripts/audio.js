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
    playNewMusic(music);
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
    audio.volume = Math.min(1, audio.volume + 0.005);

    if (audio.volume >= 0.05) {
      clearInterval(fadeInInterval);
    }
  }, 100);
}

function fadeOut(audio, callback) {
  const fadeOutInterval = setInterval(() => {
    audio.volume = Math.max(0, audio.volume - 0.05);

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

// Boss

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

// Ghost

const fightThrough = loadAudio(
  "audio/music/Fight Through.mp3",
  "fightThrough",
  true
);

const imminentDarkness = loadAudio(
  "audio/music/Imminent Darkness.mp3",
  "imminentDarkness",
  true
);

const hauntedOutpost = loadAudio(
  "audio/music/Haunted Outpost.mp3",
  "hauntedOutpost",
  true
);

// Scoundrel

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

// Lost Legion Vale Event
const weCantStopThem = loadAudio(
  "audio/music/We Can't Stop Them.mp3",
  "weCantStopThem",
  true
);

// Coffin Spider Event
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

const droneHaunting1 = loadAudio(
  "audio/music/Drone Haunting 1.mp3",
  "droneHaunting1",
  true
);

// Low Health Ambiance

const heartbeatFastLow = loadAudio(
  "audio/sound-effects/Heartbeat Fast Low.mp3",
  "heartbeatFastLow",
  true
);

// ===============================
//        Player Attacks
// ===============================

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

// ===============================
//             Miss
// ===============================

const swordSwingWhoosh = loadAudio(
  "audio/sound-effects/Sword Swing Whoosh.mp3",
  "swordSwingWhoosh"
);

// ===============================
//            Guard
// ===============================

const swordHit4 = loadAudio("audio/sound-effects/Sword Hit 4.mp3", "swordHit4");

// ===============================
//       Player Abilities
// ===============================

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

// ===============================
//        Monster Abilities
// ===============================

const magicSpellFire1 = loadAudio(
  "audio/sound-effects/Magic Spell Fire 1.mp3",
  "magicSpellFire1"
);

const spiderWebShoot7 = loadAudio(
  "audio/sound-effects/Spider Web Shoot 7.mp3",
  "spiderWebShoot7"
);

const larvaEggHatch4 = loadAudio(
  "audio/sound-effects/Larva Egg Hatch 4.mp3",
  "larvaEggHatch4"
);

const iceCrackFreeze = loadAudio(
  "audio/sound-effects/Ice Crack Freeze.mp3",
  "iceCrackFreeze"
);

const fleshRip1 = loadAudio("audio/sound-effects/Flesh Rip 1.mp3", "fleshRip1");

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

const boneCrunchCrack1 = loadAudio(
  "audio/sound-effects/Bone Crunch Crack 1.mp3",
  "boneCrunchCrack1"
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

// ===============================
//        Monster Attacks
// ===============================

const impactFleshChop = loadAudio(
  "audio/sound-effects/Impact Flesh Chop.mp3",
  "impactFleshChop"
);

const fleshHit5 = loadAudio("audio/sound-effects/Flesh Hit 5.mp3", "fleshHit5");

const impactPunchBody2 = loadAudio(
  "audio/sound-effects/Impact Punch Body 2.mp3",
  "impactPunchBody2"
);

const spiderBiteFang3 = loadAudio(
  "audio/sound-effects/Spider Bite Fang 3.mp3",
  "spiderBiteFang3"
);

const spiderBiteFang4 = loadAudio(
  "audio/sound-effects/Spider Bite Fang 4.mp3",
  "spiderBiteFang4"
);

const knifeStab = loadAudio("audio/sound-effects/Knife Stab.mp3", "knifeStab");

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

// Whispering Skulls
const evilSpell1 = loadAudio(
  "audio/sound-effects/Evil Spell 1.mp3",
  "evilSpell1"
);

// Room Transition
const whooshLowAir = loadAudio(
  "audio/sound-effects/Whoosh Low Air.mp3",
  "whooshLowAir"
);

// Music
