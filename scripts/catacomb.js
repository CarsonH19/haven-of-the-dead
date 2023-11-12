// ===============================
//         Tier One Rooms
// ===============================

// Starting Rooms: 
// Monsters:
// - Rats: Gnawers 
// - Spiders: Crypt Crawlers, Coffin Spiders
// -- Boss: Broodmother
// - Skeletons: Decrepit Skeletons, Skeletal Soldiers
// --Boss: Flood of Bones

// Events:
// Graverobber Earver
// Ivan the Scoundrel
// Spider Web
// Swarm of Vermin 


let catacombRooms = [
  {
    roomName: "Clawed Caverns",
    description: '',
    backgroundImage: 'styles/images/corridor-two.png',
    music: null,
    contents: {
      monsters: [GNAWER, GNAWER],
      items: [],
      events: null
    },
  },
  {
    roomName: "Vermins' Vestibule",
    description: '',
    backgroundImage: 'styles/images/corridor-two.png',
    music: null,
    contents: {
      monsters: [SWARM_OF_VERMIN],
      items: [],
      events: null
    },
  },
  {
    roomName: "Gnawers' Nest",
    description: '',
    backgroundImage: 'styles/images/corridor-two.png',
    music: null,
    contents: {
      monsters: [GNAWER, GNAWER, GNAWER, GNAWER],
      items: [],
      events: null
    },
  },
  {
    roomName: "Pestilent Pit",
    description: '',
    backgroundImage: 'styles/images/corridor-two.png',
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SPIKE_PITFALL
    }
  },
  {
    roomName: "Webspun Passage",
    description: "",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SPIDER_WEB,
    },
  },
  {
    roomName: "Creeping Coffins",
    description: '',
    backgroundImage: 'styles/images/corridor-two.png',
    music: null,
    contents: {
      monsters: [COFFIN_SPIDER, COFFIN_SPIDER],
      items: [],
      events: null
    },
  },
  // {
  //   roomName: "Cobwebbed Crypt",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: IVAN_THE_SCOUNDREL 
  //   },
  // },
  {
    roomName: "The Hatchery",
    description: '',
    backgroundImage: 'styles/images/corridor-two.png',
    music: null,
    contents: {
      monsters: [CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER],
      items: [],
      events: null
    },
  },
  // {
  //   roomName: "Broodmother's Nest",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [BROODMOTHER],
  //     items: [],
  //     events: null
  //   },
  // },
  {
    roomName: "Skull-lined Corridor",
    description: '',
    backgroundImage: 'styles/images/corridor-one.png',
    music: null,
    contents: {
      monsters: [DECREPIT_SKELETON, SKELETAL_SOLDIER, DECREPIT_SKELETON],
      items: [],
      events: null
    },
  },
  {
    roomName: "Bone-laden Passage",
    description: '',
    backgroundImage: 'styles/images/corridor-one.png',
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER, DECREPIT_SKELETON],
      items: [],
      events: null
    },
  },
  {
    roomName: "Skeletons' Rest",
    description: '',
    backgroundImage: 'styles/images/corridor-one.png',
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER],
      items: [],
      events: null
    },
  },
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
  //     items: [],
  //     events: BONEVAULT
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
  // },
  // {
  //   roomName: "Forgotten Passage",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [BONE_TITAN],
  //     items: [],
  //     events: null
  //   },
  // },
  {
    roomName: "Whispering Hollow",
    description: '',
    backgroundImage: 'styles/images/corridor-one.png',
    music: null,
    contents: {
      monsters: [SHADE],
      items: [WHISPERING_AMULET],
      events: null
    },
  },
  {
    roomName: "Rattling Hollow",
    description: '',
    backgroundImage: 'styles/images/rattling-hollow.png',
    music: null,
    contents: {
      monsters: [FLOOD_OF_BONES],
      items: [],
      events: null
    },
  }
];

// ===============================
//         Tier Two Rooms
// ===============================

// Unlock at level 3
// Monsters:
// - Evil Spirits: Shades, Haunting Spirit
// Events:
// -

const TIER_TWO_ROOMS = [
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
];


// ===============================
//         Tier Three Rooms
// ===============================

// Unlock at level 5

const TIER_THREE_ROOMS = [];

// ===============================
//         Tier Four Rooms
// ===============================

// Unlock at level 7

const TIER_FOUR_ROOMS = [];

// ===============================
//          Safe Rooms 
// ===============================


const CANDLELIGHT_SHRINE = {
  roomName: "Candlelight Shrine",
  description: 'A safe place.',
  backgroundImage: 'styles/images/corridor-one.png',
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: SAFE_ROOM
  },
}

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


// ===============================
//     Catacomb Room Logic
// ===============================

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
