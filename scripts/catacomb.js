// This file holds the array of objects detailing each room within the catacomb.
// Rooms are selected at random.
// When a room is completed it is removed from the array.
// If a player flees from the room it is not removed from the array.

let catacombRooms = [
  // {
  //   roomName: "Rodents' Roost",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [GNAWER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Clawed Caverns",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [GNAWER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Vermins' Vestibule",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [GNAWER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Gnawers' Nest",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [GNAWER, SHADE, HAUNTING_SPIRIT, GRUDGE],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Pestilent Pit",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: SPIKE_PITFALL
  //   }
  // },
  // {
  //   roomName: "Webspun Passage",
  //   description: "",
  //   backgroundImage: "styles/images/corridor-two.png",
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: GRAVEROBBER_EARVER,
  //   },
  // },
  // // {
  // //   roomName: "Creeping Coffins",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-two.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [COFFIN_SPIDER, COFFIN_SPIDER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // {
  //   roomName: "Cobwebbed Crypt",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: GAS_CHAMBER
  //   },
  // },
  // // {
  // //   roomName: "The Hatchery",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-two.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // // {
  // //   roomName: "Broodmother's Nest",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-two.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [CRYPT_CRAWLER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // // {
  // //   roomName: "Skull-lined Corridor",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [SKELETAL_SOLDIER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  {
    roomName: "Bone-laden Passage",
    description: '',
    backgroundImage: 'styles/images/corridor-one.png',
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER],
      items: [],
      events: null
    },
  },
  {
    roomName: "Bone-forged Alter",
    description: '',
    backgroundImage: 'styles/images/corridor-one.png',
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SCHOLAR_HENDRA
    },
  },
  // // {
  // //   roomName: "Skeletons' Rest",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [SKELETAL_SOLDIER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // // {
  // //   roomName: "Skeletonarium",
  // //   description: '',
  // //   backgroundImage: 'styles/images/chamber-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [SKELETAL_SOLDIER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // {
  //   roomName: "Bonevault",
  //   description: '',
  //   backgroundImage: 'styles/images/chamber-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [BONEMAIL],
  //     events: PENDULUM_BLADES
  //   },
  // },
  // // {
  // //   roomName: "Skeletal Sepulcher",
  // //   description: '',
  // //   backgroundImage: 'styles/images/chamber-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [SKELETAL_SOLDIER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // {
  //   roomName: "Marrowrest Tomb",
  //   description: '',
  //   backgroundImage: 'styles/images/chamber-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: SWARM_OF_VERMIN
  //   },
  // },
  // // {
  // //   roomName: "Ivory Crypt",
  // //   description: '',
  // //   backgroundImage: 'styles/images/chamber-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [SKELETAL_SOLDIER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // // {
  // //   roomName: "Skullcarver's Passage",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [SKELETAL_SOLDIER],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // // {
  // //   roomName: "Candlelight Shrine",
  // //   description: '',
  // //   backgroundImage: 'styles/images/chamber-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [],
  // //     items: [],
  // //     events: CANDLELIGHT_SHRINE
  // //   },
  // // },
  // // {
  // //   roomName: "Haunted Hall",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [HAUNTING_SPIRIT],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // // {
  // //   roomName: "Echoing Vestibule",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [HAUNTING_SPIRIT],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // // {
  // //   roomName: "Forgotten Passage",
  // //   description: '',
  // //   backgroundImage: 'styles/images/corridor-two.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [SHADE, SHADE],
  // //     items: [],
  // //     events: null
  // //   },
  // // },
  // {
  //   roomName: "Bone Whisperer's Hollow",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [SHADE],
  //     items: [WHISPERING_AMULET],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Rattling Hollow",
  //   description: '',
  //   backgroundImage: 'styles/images/rattling-hollow.png',
  //   music: null,
  //   contents: {
  //     monsters: [SKELETAL_SOLDIER, ARMORED_SKELETON],
  //     items: [],
  //     events: null
  //   },
  // }
];

// ===============================
//     NPC Catacomb Rooms
// ===============================

const GRAVEROBBER_EARVER_ROOM_TWO = {
  roomName: "Gilded Sarcophagus",
  description: "A large stone sarcophagus.",
  backgroundImage: "",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: GRAVEROBBER_EARVER_EVENT_TWO,
  },
};

const GRAVEROBBER_EARVER_ROOM_THREE = {
  roomName: "Crypt of the Fallen King",
  description: "A gilded door of a seemingly wealthy person in life.",
  backgroundImage: "",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: GRAVEROBBER_EARVER_EVENT_THREE,
  },
};


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
