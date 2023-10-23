// This file holds the array of objects detailing each room within the catacomb.
// Rooms are selected at random.
// When a room is completed it is removed from the array.
// If a player flees from the room it is not removed from the array.

const roomNameElement = document.getElementById("catacombRoomName");

const catacombEntrance = {
  roomName: "Catacomb Entrance",
  backgroundImage: null,
  music: null,
  contents: {
    monsters: [],
    npcs: null,
    items: [],
    consumables: [],
    traps: null,
  },
};

let currentRoom = catacombEntrance;

let catacombRooms = [
  {
    roomName: "Bonevault",
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [CRYPT_CRAWLER, SKELETAL_SOLDIER, ARMORED_SKELETON],
      npcs: null,
      items: [],
      consumables: [],
      traps: null,
    },
  },
  {
    roomName: "Gnawer's Nest",
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [GNAWER, GNAWER, GNAWER],
      npcs: null,
      items: [],
      consumables: null,
      traps: null,
    },
  },
  {
    roomName: "Skull-lined Corridor",
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [BONE_TITAN, FLOOD_OF_BONES],
      npcs: null,
      items: [],
      consumables: null,
      traps: null,
    },
  },
  {
    roomName: "Sinister Sacristy",
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [],
      npcs: null,
      items: [],
      consumables: null,
      traps: null,
    },
  },
  {
    roomName: "Malevolent Chapel",
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [],
      npcs: null,
      items: [],
      consumables: null,
      traps: null,
    },
  },
  {
    roomName: "Veiled Crypt",
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [],
      npcs: null,
      items: [],
      consumables: null,
      traps: null,
    },
  }
];

// Gets a random index and sets currentRoom to that index.
function getRandomRoom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  currentRoom = array[randomIndex];
}

function startBattle(room) {
  renderMonsterStatBlock(room.contents.monsters[0]);
}

function nextMonsterCheck() {
  currentRoom.contents.monsters.shift();

  if (currentRoom.contents.monsters.length > 0) {
    startBattle(currentRoom);
    console.log("Another Monster!");
  } else {
    renderContinueButton();
    togglePlayerControls();
  }
}
