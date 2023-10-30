// This file holds the array of objects detailing each room within the catacomb.
// Rooms are selected at random.
// When a room is completed it is removed from the array.
// If a player flees from the room it is not removed from the array.

let catacombRooms = [
  {
    roomName: "Bonevault",
    description: '"The Bonevault is a macabre chamber, its walls lined with ancient, weathered bones, arranged in grim displays of artistry. Dim torchlight flickers, casting eerie shadows across the floor, where piles of skeletal remains create an unsettling mosaic of mortality."',
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [],
      events: null
    },
  },
  // {
  //   roomName: "Gnawer's Nest",
  //   backgroundImage: null,
  //   music: null,
  //   contents: {
  //     monsters: [GNAWER, GNAWER, GNAWER],
  //     NPCs: null,
  //     items: [],
  //     consumables: null,
  //     traps: null,
  //   },
  // },
  // {
  //   roomName: "Skull-lined Corridor",
  //   backgroundImage: null,
  //   music: null,
  //   contents: {
  //     monsters: [BONE_TITAN],
  //     NPCs: null,
  //     items: [],
  //     consumables: null,
  //     traps: null,
  //   },
  // },
  // {
  //   roomName: "Sinister Sacristy",
  //   backgroundImage: null,
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     NPCs: null,
  //     items: [],
  //     consumables: null,
  //     traps: null,
  //   },
  // },
  // {
  //   roomName: "Malevolent Chapel",
  //   backgroundImage: null,
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     NPCs: null,
  //     items: [],
  //     consumables: null,
  //     traps: null,
  //   },
  // },
  {
    roomName: "Veiled Crypt",
    backgroundImage: null,
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: MIMIC_CHEST
    },
  }
];

// Gets a random index and sets currentRoom to that index.
function getRandomRoom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  roomIndex = randomIndex;
  currentRoom = array[roomIndex];
}

function removeCurrentRoom() {
  if (currentRoom !== catacombEntrance) {
    catacombRooms.splice(roomIndex, 1);
  }
}

// ===============================
//    Catacomb Entrance Modal
// ===============================

function closeCatacombsEntranceModal() {
  catacombEntranceModal.style.display = "none";
}