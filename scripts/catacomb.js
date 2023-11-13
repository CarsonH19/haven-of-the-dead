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
// Mimic Chest
// Spider Web
// Swarm of Vermin

let catacombRooms = [
  // {
  //   roomName: "Clawed Caverns", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [GNAWER, GNAWER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Vermins' Vestibule", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: SWARM_OF_VERMIN
  //   },
  // },
  // {
  //   roomName: "Gnawers' Nest", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [GNAWER, GNAWER, GNAWER, GNAWER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Webspun Passage", // !FINISHED!
  //   description: "",
  //   backgroundImage: "styles/images/corridor-two.png",
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: SPIDER_WEB,
  //   },
  // },
  // {
  //   roomName: "Creeping Coffins", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: COFFIN_SPIDER_EVENT
  //   },
  // },
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
  // {
  //   roomName: "The Hatchery", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Broodmother's Nest", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [BROODMOTHER], // Broodmother's ability !UNFINISHED!
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Skull-lined Corridor", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [DECREPIT_SKELETON, SKELETAL_SOLDIER, DECREPIT_SKELETON],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Bone-laden Passage", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [SKELETAL_SOLDIER, DECREPIT_SKELETON],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Skeletons' Rest", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [DECREPIT_SKELETON, DECREPIT_SKELETON, DECREPIT_SKELETON],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Skeletonarium", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/chamber-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON],
  //     items: [],
  //     events: null
  //   },
  // },
  // // {
  // //   roomName: "Bonevault",
  // //   description: '',
  // //   backgroundImage: 'styles/images/chamber-one.png',
  // //   music: null,
  // //   contents: {
  // //     monsters: [],
  // //     items: [],
  // //     events: BONEVAULT
  // //   },
  // // },
  // {
  //   roomName: "Skeletal Sepulcher", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/chamber-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [DECREPIT_SKELETON, DECREPIT_SKELETON, SKELETAL_SOLDIER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Marrowrest Tomb", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/chamber-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: GRAVEROBBER_EARVER
  //   },
  // },
  // {
  //   roomName: "Ivory Crypt",
  //   description: '',
  //   backgroundImage: 'styles/images/chamber-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: COFFIN_SPIDER_EVENT
  //   },
  // },
  // {
  //   roomName: "Skullcarver's Passage", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [TOMB_RAIDER],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Haunted Hall",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [HAUNTING_SPIRIT],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Echoing Vestibule",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-one.png',
  //   music: null,
  //   contents: {
  //     monsters: [HAUNTING_SPIRIT],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Forgotten Passage",
  //   description: '',
  //   backgroundImage: 'styles/images/corridor-two.png',
  //   music: null,
  //   contents: {
  //     monsters: [SCOUNDREL, SCOUNDREL],
  //     items: [],
  //     events: null
  //   },
  // },
  // {
  //   roomName: "Whispering Hollow", // !FINISHED!
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
  //   roomName: "Rattling Hollow", // !FINISHED!
  //   description: '',
  //   backgroundImage: 'styles/images/rattling-hollow.png',
  //   music: null,
  //   contents: {
  //     monsters: [FLOOD_OF_BONES],
  //     items: [],
  //     events: null
  //   },
  // }
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
    roomName: "Bone-forged Alter", // !FINISHED!
    description: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SCHOLAR_HENDRA,
    },
  },
  {
    roomName: "Pestilent Pit", // !FINISHED!
    description: "",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SPIKE_PITFALL,
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
  description: "A safe place.",
  backgroundImage: "styles/images/corridor-one.png",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: SAFE_ROOM,
  },
};

let laughingCoffinRoom = { 
  roomName: "The Laughing Coffin", 
  description: "Tavern within the catacombs ran by scoundrels.",
  backgroundImage: "styles/images/corridor-two.png",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: LAUGHING_COFFIN_EVENT
  },
};

// ===============================
//     NPC Catacomb Rooms
// ===============================

// Graverobber Earver

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

// Ivan the Scoundrel
const IVANS_CACHE = {
  roomName: "Ivan's Cache",
  description: "",
  backgroundImage: "",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: IVAN_THE_SCOUNDREL_EVENT_TWO,
  },
};

const IVAN_TRAP_ROOM_ONE = {
  roomName: "",
  description: "",
  backgroundImage: "",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: GAS_CHAMBER,
  },
};

const IVAN_TRAP_ROOM_TWO = {
  roomName: "",
  description: "",
  backgroundImage: "",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: PENDULUM_BLADES,
  },
};

const IVAN_TRAP_ROOM_THREE = {
  roomName: "",
  description: "",
  backgroundImage: "",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: SPIKE_PITFALL,
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
