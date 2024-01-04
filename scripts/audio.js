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

// Curator's Curio
const timeToFaceThem = loadAudio(
  "audio/music/Time to Face Them.mp3",
  "timeToFaceThem",
  true
);

const finalBrigade = loadAudio(
  "audio/music/Final Brigade.mp3",
  "finalBrigade",
  true
);

// Undead Heroes
const successOrDeath = loadAudio(
  "audio/music/Success or Death.mp3",
  "successOrDeath",
  true
);

// Join the Baron
const basementNightmare = loadAudio(
  "audio/music/Basement Nightmares.mp3",
  "basementNightmare"
);

//Baron of Bone
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

// Locked Door
const doorSecretPassage1 = loadAudio(
  "audio/sound-effects/Door Secret Passage 1.mp3",
  "doorSecretPassage1"
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
  "audio/sound-effects/light/Sword Swing Whoosh.mp3",
  "swordSwingWhoosh"
);

function guardSounds() {
  let sounds = [severMetalHit2, swordImpactRock1, swordHit4, swordSwingWhoosh];
  let index = Math.floor(Math.random() * sounds.length);
  console.log(sounds[index]);
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

const impactFleshChop = loadAudio(
  "audio/sound-effects/heavy/Impact Flesh Chop.mp3",
  "impactFleshChop"
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
    impactFleshChop,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  console.log(sounds[index]);
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
  console.log(sounds[index]);
  return sounds[index];
}

// ===============================
//            Magic
// ===============================
// Priestess / Blazing Skeleton / Baron

// Attack & Ability

const magicSpellBuild14 = loadAudio(
  "audio/sound-effects/magic/Magic Spell Build 14.mp3",
  "magicSpellBuild14"
);
const magicSpellBurst = loadAudio(
  "audio/sound-effects/magic/Magic Spell Burst.mp3",
  "magicSpellBurst"
);
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
    magicSpellBuild14,
    magicSpellBurst,
    magicSpellFire1,
    magicSpellFire2,
    magicSpellHit2,
    magicSpellHit4,
    magicSpellImpact,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  console.log(sounds[index]);
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
  console.log(sounds[index]);
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
//        Monster Abilities
// ===============================

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

// Ivan's Traps
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
  "cauldronLargeBoil"
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

const ghostlyDemonic = loadAudio(
  "audio/sound-effects/misc/Ghostly Demonic.mp3",
  "ghostlyDemonic"
);

const ghostlyMagic = loadAudio(
  "audio/sound-effects/misc/Ghostly Magic.mp3",
  "ghostlyMagic"
);

const hitImpactDelay2 = loadAudio(
  "audio/sound-effects/misc/Hit Impact Delay 2.mp3",
  "hitImpactDelay2"
);

const hitReverbDark4 = loadAudio(
  "audio/sound-effects/misc/Hit Reverb Dark 4.mp3",
  "hitReverbDark4"
);

const shimmerCrystal = loadAudio(
  "audio/sound-effects/misc/Shimmer Crysta.mp3",
  "shimmerCrystal"
);

const voiceClipMale226 = loadAudio(
  "audio/sound-effects/misc/Voice Clip Male 226.mp3",
  "voiceClipMale226"
);
