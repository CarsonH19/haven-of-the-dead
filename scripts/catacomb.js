// This file holds the array of objects detailing each room within the catacomb.
// Rooms are selected at random.
// When a room is completed it is removed from the array.
// If a player flees from the room it is not removed from the array.

let catacombRooms = [
  {
    roomName: "Bonevault",
    description: '"The Bonevault is a macabre chamber, its walls lined with ancient, weathered bones, arranged in grim displays of artistry. Dim torchlight flickers, casting eerie shadows across the floor, where piles of skeletal remains create an unsettling mosaic of mortality."',
    backgroundImage: 'styles/images/rattling-hollow.png',
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [],
      events: null
    },
  }
  // {
  //   roomName: "Sinister Sacristy",
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: GRAVEROBBER_EARVER
  //   },
  // },
  // {
  //   roomName: "Malevolent Chapel",
  //   backgroundImage: 'styles/images/hall-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: GAS_CHAMBER
  //   },
  // },
  // {
  //   roomName: "Veiled Crypt",
  //   backgroundImage: 'styles/images/chamber-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: MIMIC_CHEST
  //   },
  // }
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