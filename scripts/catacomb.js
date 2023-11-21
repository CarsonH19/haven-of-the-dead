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
  {
      roomName: "TEST ROOM", // !FINISHED!
      description: 'TEST =)',
      backgroundImage: 'styles/images/corridor-two.png',
      music: null,
      contents: {
        monsters: [BROODMOTHER, BROODMOTHER, BROODMOTHER],
        items: [],
        events: null,
      },
    },
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
  //   description: 'The Cobwebbed Crypt, unfolds like a silken labyrinth. Walls draped in glistening spider webs weave a treacherous path, ready to ensnare the unsuspecting. Each step risks entanglement in the sticky embrace of arachnid artistry. A chilling hush prevails as the crypt silently awaits its unwitting visitors.',
  //   summary: '',
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
  // {
  //   roomName: "Bonevault",
  //   description: '',
  //   backgroundImage: 'styles/images/rattling-hollow.png',
  //   music: null,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: LOCKED_ROOM
  //   },
  // },
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
  //     monsters: [BONE_TITAN],
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
    summary: "",
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
    summary: "",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SPIKE_PITFALL,
    },
  },
  {
    roomName: "Pile of Skulls", // !FINISHED!
    description: "A chamber with a large pile of skulls in the center.",
    summary: "",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: GRERVILS_HEAD
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
  summary: "",
  backgroundImage: "styles/images/corridor-one.png",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: SAFE_ROOM
  },
};

// ===============================
//          Misc. Rooms
// ===============================

const LOST_LEGIONS_VALE = {
  roomName: "Lost Legions Vale",
  description: `A desolate vale in the catacomb's heart, where the whispers of forgotten warriors echo through the cold stone. Rusted armor and tattered banners line the silent path, revealing the untold tales of legions lost to time.`,
  backgroundImage: "styles/images/corridor-one.png",
  music: null,
  contents: {
    monsters: [],
    items: [SOULREAVER],
    events: null,
  },
  function: () => {
    setTimeout(() => {
      writeToLog(LOG_EVENT_ROOM, LOST_LEGIONS_VALE);
    }, 1500);
  }
}

const LAUGHING_COFFIN_ROOM = { 
  roomName: "The Laughing Coffin Tavern", 
  description: "The Laughing Coffin tavern stands as a sanctuary, welcoming scoundrels and coin-bearers alike. Here, amid the shadows, an unexpected haven emerges—a place to relax, where whispered secrets and clinking coins intertwine in the dim-lit embrace of this clandestine refuge.",
  backgroundImage: "styles/images/corridor-two.png",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: LAUGHING_COFFIN_EVENT
  },
};

const BLOOD_ALTER = {
  roomName: "Blood Alter",
  description: "The altar, carved from the cold, black stone native to the catacombs, stands in a chamber illuminated only by the eerie glow of blood-red torches. The walls are adorned with morbid murals, depicting the Lord of Crimson, the deity of blood and life.",
  summary: "",
  backgroundImage: "styles/images/corridor-one.png",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: CRIMSON_COVENANT
  },
};

// ===============================
//     NPC Catacomb Rooms
// ===============================

// Graverobber Earver

const GRAVEROBBER_EARVER_ROOM_TWO = {
  roomName: "Gilded Sarcophagus",
  description: "A large stone sarcophagus.",
  summary: "",
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
  summary: "",
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
  roomName: "Ivan's Hidden Cache",
  description: "Ivan's Hidden Cache, a clandestine chamber within the catacombs, echoes with whispered secrets and the scent of ill-gotten gains. Anticipation hangs thick in the air as tales of treasures untold circulate. At the heart of the room, a mysterious chest guards the spoils, tempting fate with promises of riches waiting to be unveiled.",
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

function findRandomUndeadRoom() {
  let randomRoom;

  do {
    const randomIndex = Math.floor(Math.random() * catacombRooms.length);
    randomRoom = catacombRooms[randomIndex];
  } while (
    !randomRoom.contents.monsters[0] ||
    randomRoom.contents.monsters[0].type !== "UNDEAD"
  );

  return randomRoom;
}

function checkCurrentRoom() {
  const roomMonsters = currentRoom.contents.monsters;
  
  // Check if player is haunted
  if (roomMonsters[0].type === 'UNDEAD' && HAUNTED.duration !== null) {
    let randomSpirits = Math.round(Math.random() * 2);
    console.log('UNDEAD FOUND');
    console.log(randomSpirits);

    switch (randomSpirits) {
      case 0:
        roomMonsters.unshift(SHADE);
        break;

      case 1:
        roomMonsters.unshift(SHADE, SHADE);
       break;

      case 2:
        roomMonsters.unshift(HAUNTING_SPIRIT);
       break;

    }
  }
}

// ===============================
//    Catacomb Entrance Modal
// ===============================

function closeCatacombsEntranceModal() {
  catacombEntranceModal.style.display = "none";
}
