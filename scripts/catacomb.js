// ===============================
//          TESTING
// ===============================

// let catacombRooms = [
//   {
//     roomName: "Throne of the Eternal",
//     backgroundImage: "styles/images/backgrounds/event-rooms/eternal-throne.jpg",
//     music: finalBrigade,
//     contents: {
//       monsters: [],
//       items: [],
//       events: null,
//     },
//     function: () => {
//       let hero = heroChecker();
//       let room = currentRoom.contents.monsters;

//       setTimeout(() => {
//         switch (hero) {
//           case paladin:
//             room.push(UNDEAD_LIHETH, UNDEAD_RIVEN);
//             break;

//           case priestess:
//             room.push(UNDEAD_SIGGURD, UNDEAD_RIVEN);
//             break;

//           case rogue:
//             room.push(UNDEAD_LIHETH, UNDEAD_SIGGURD);
//             break;
//         }

//         startBattle();
//         setRoomSummary();
//       }, 6000);

//       setTimeout(() => {
//         writeToLogOther(LOG_OTHER, "YES", "UNDEAD HEROES");
//       }, 2000);
//     },
//   },
// ];

// // ===============================
// //        CATACOMB ENTRANCE
// // ===============================

const catacombEntrance = {
  roomName: "Catacomb Entrance",
  backgroundImage: "styles/images/backgrounds/catacomb-entrance-2.jpg",
  music: droneDarkHor1,
  contents: {
    monsters: [],
    items: [],
    events: null,
  },
};

let currentRoom = catacombEntrance;

// // ===============================
// //         Tier One Rooms
// // ===============================

let catacombRooms = [
  {
    roomName: "Clawed Caverns",
    backgroundImage: "styles/images/backgrounds/tier-one/clawed-cavern.jpg",
    music: deepTunnels,
    contents: {
      monsters: [GNAWER, GNAWER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Gnawers' Nest",
    backgroundImage: "styles/images/backgrounds/tier-one/gnawers-nest.jpg",
    music: deepTunnels,
    contents: {
      monsters: [GNAWER, GNAWER, GNAWER, GNAWER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Sneakshade Sanctum",
    backgroundImage:
      "styles/images/backgrounds/tier-one/sneakshade-sanctum.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL, SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Devious Alvove",

    backgroundImage: "styles/images/backgrounds/tier-one/devious-alcove.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Rogue's Refuge",
    description:
      "In the Rogue's Refuge, whispers of ill intent fill the air. Multiple scoundrels, masters of deception, plot amidst the concealed corners.",

    backgroundImage: "styles/images/backgrounds/tier-one/rogues-refuge.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL, SCOUNDREL, SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "The Hatchery",
    description:
      "The Hatchery pulsates with an eerie hum. Walls, lined with unhatched eggs, house a crawling horde of crypt crawlers. The air is thick with the anticipation of countless tiny legs skittering across the cold stone floor.",
    backgroundImage: "styles/images/backgrounds/tier-one/the-hatchery.jpg",
    music: spiderInvasion,
    contents: {
      monsters: [CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Broodmother's Nest",
    description:
      "The Broodmother's Nest looms with arachnid grace. A colossal web, woven with uncanny precision, cradles the monstrous broodmother. Her presence sends shivers, and the air is thick with the scent of impending danger.",
    backgroundImage: "styles/images/backgrounds/tier-one/broodmothers-nest.jpg",
    music: spiderInvasion,
    contents: {
      monsters: [BROODMOTHER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Skull-lined Corridor",
    description:
      "The Skull-lined Corridor echoes with the rattling steps of skeletal sentinels. Walls adorned with grimacing skulls watch as decrepit skeletons and skeletal soldiers patrol with an eerie, mechanical precision.",
    backgroundImage:
      "styles/images/backgrounds/tier-one/skull-lined-corridor.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [DECREPIT_SKELETON, SKELETAL_SOLDIER, DECREPIT_SKELETON],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Bone-laden Tunnel",
    description:
      "The Bone-laden Tunnel exudes the stench of ancient decay. Shadows dance on walls adorned with skeletal remains. Skeletal soldiers stand guard, wielding rusty weapons, while a decrepit skeleton cradles a precious lesser soulstone.",
    backgroundImage:
      "styles/images/backgrounds/tier-one/bone-laden-passage.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SKELETAL_SOLDIER, DECREPIT_SKELETON],
      items: [ROTBANE_FERN],
      events: null,
    },
  },
  {
    roomName: "Darkened Fane",
    description:
      "The Darkened Fane, a solemn sanctuary veiled in shadow, echoes with the whispers of unseen shades. The air is charged with a spectral energy as shades drift silently, haunting the sacred space with their ethereal presence.",

    backgroundImage: "styles/images/backgrounds/tier-two/darkened-fane.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [SHADE, SHADE, SHADE, SHADE],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Skull-cluttered Path",
    description: "",
    backgroundImage: "styles/images/backgrounds/tier-one/skeletonarium.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [GHOSTLIGHT_LILY],
      events: null,
    },
  },
  {
    roomName: "Skeletal Sepulcher",
    description:
      "Within the Skeletal Sepulcher, shadows dance on crumbling bone. Skeletons stir, guarding their final resting place. A chill pervades as skeletal soldiers stand sentinel.",
    backgroundImage:
      "styles/images/backgrounds/tier-one/skeletal-sepulcher.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [DECREPIT_SKELETON, DECREPIT_SKELETON, SKELETAL_SOLDIER],
      items: [WHISPERING_SKULL],
      events: null,
    },
  },

  {
    roomName: "Haunted Hall",
    description:
      "The Haunted Hall breathes with ethereal whispers, its walls adorned with drifting specters. A chilling presence lingers, and the air shivers with the haunting melody of unseen spirits.",
    backgroundImage: "styles/images/backgrounds/tier-one/haunted-hall.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Echoing Vestibule",
    description:
      "Within the Echoing Vestibule, shadows seem to converse in ghostly murmurs. A lone haunting spirit glides through the mist, leaving echoes of melancholy. The air is heavy with the presence of lingering sorrow.",
    backgroundImage: "styles/images/backgrounds/tier-one/echoing-vestibule.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [HAUNTING_SPIRIT],
      items: [GHOSTLIGHT_LILY],
      events: null,
    },
  },
  {
    roomName: "Forgotten Passage",
    description:
      "The Forgotten Passage is cloaked in darkness, a haven for lurking scoundrels. Their eyes gleaming with mischief.",
    backgroundImage: "styles/images/backgrounds/tier-one/forgotten-passage.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL, SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Whispering Hollow",
    description:
      "The Whispering Hollow breathes with an eerie hush. Shadows dance, concealing elusive shades. Faint whispers beckon, emanating from a lone shade guarding a mysterious whispering amulet, its power shrouded in enigma.",
    backgroundImage: "styles/images/backgrounds/tier-one/whispering-hollow.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [SHADE],
      items: [AMULET_OF_WHISPERS],
      events: null,
    },
  },
  {
    roomName: "Flood of Bones",
    description:
      "Bones assemble in horrifying unity. An unsettling rattle permeates the air as a flood of bones, animated and vengeful, it surges towards the living like a macabre tidal wave. Brave souls may find the source of this monstrosity amidst the bone-strewn chaos.",
    backgroundImage: "styles/images/backgrounds/tier-one/flood-of-bones.jpg",
    music: passedDanger,
    contents: {
      monsters: [FLOOD_OF_BONES],
      items: [BONE_AMALGAM],
      events: null,
    },
  },
  {
    roomName: "Vermins' Vestibule",
    description:
      "The Vermins' Vestibule teems with shadowy shapes, a breeding ground for swarms of relentless vermin. The air is thick with anticipation, as unseen forces prepare to unleash their tiny terrors upon intruders.",
    backgroundImage: "styles/images/backgrounds/tier-one/vermin-vestibule.jpg",
    music: claustrofobia,
    contents: {
      monsters: [],
      items: [],
      events: SWARM_OF_VERMIN,
    },
    function: () => {
      setTimeout(() => {
        soundEffectHandler(ratsSqueak);
      }, 1000);
    },
  },
  {
    roomName: "Sealed Tomb",
    backgroundImage:
      "styles/images/backgrounds/event-rooms/earver-event-one.jpg",
    music: claustrofobia,
    contents: {
      monsters: [],
      items: [],
      events: GRAVEROBBER_EARVER,
    },
  },
  {
    roomName: "Webspun Passage",
    description:
      "The Webspun Passage, a silken maze woven by colossal spiders. Threads glisten, hinting at unseen arachnid architects. Each step stirs a web, the air pulsating with the potential of an eight-legged guardian's descent.",
    backgroundImage: "styles/images/backgrounds/tier-one/webspun-passage.jpg",
    music: claustrofobia,
    contents: {
      monsters: [],
      items: [],
      events: SPIDER_WEB,
    },
  },
  {
    roomName: "Ornate Coffin",
    description: "",
    backgroundImage: "styles/images/backgrounds/event-rooms/coffin-2.jpg",
    music: threeThousandYearsOld,
    contents: {
      monsters: [],
      items: [],
      events: COFFIN_EVENT,
    },
  },
  {
    roomName: "Ornate Coffin",
    description: "",
    backgroundImage: "styles/images/backgrounds/event-rooms/coffin-1.jpg",
    music: threeThousandYearsOld,
    contents: {
      monsters: [],
      items: [],
      events: COFFIN_EVENT,
    },
  },
  {
    roomName: "Cobwebbed Crypt",
    description:
      "The Cobwebbed Crypt, unfolds like a silken labyrinth. Walls draped in glistening spider webs weave a treacherous path, ready to ensnare the unsuspecting. Each step risks entanglement in the sticky embrace of arachnid artistry. A chilling hush prevails as the crypt silently awaits its unwitting visitors.",

    backgroundImage: "styles/images/backgrounds/tier-one/cobbwebbed-crypt.jpg",
    music: spiderInvasion,
    contents: {
      monsters: [],
      items: [],
      events: IVAN_THE_SCOUNDREL,
    },
  },
];

// ===============================
//         Tier Two Rooms
// ===============================

let tierTwoRooms = [
  {
    roomName: "Desecrated Shrine",
    description: "",
    backgroundImage:
      "styles/images/backgrounds/tier-two/desecrated-shrine-two.jpg",
    music: fightThrough,
    contents: {
      monsters: [CULTIST, CULTIST, CULTIST, FIENDSWORN_CULTIST],
      items: [],
      events: null,
    },
    function: () => {
      getItem("CANDLE");
    },
  },
  {
    roomName: "Titan's Tunnel",
    description:
      "Skullcarver's Passage winds through the heart of bone. A colossal bone titan looms, its presence carving fear into the marrow of adventurers.",
    backgroundImage: "styles/images/backgrounds/tier-one/skullcarvers-pass.jpg",
    music: passedDanger,
    contents: {
      monsters: [BONE_TITAN],
      items: [SKELETON_KEY],
      events: null,
    },
  },
  {
    roomName: "Skull-wall Pass",
    description:
      "Within Skull Wall Pass, the scent of ancient bones fills the chamber. Skeletal soldiers stand sentinel, their bony fingers poised on ghostly blades. An armored skeleton, a relic of forgotten battles, awaits with an eerie stillness.",

    backgroundImage: "styles/images/backgrounds/tier-two/skull-wall-pass.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Ghostlight Vale",
    description:
      "In Ghostlight Vale, spectral shades drift through a meadow of ethereal flowers. The blooms exude an otherworldly glow, casting an unsettling radiance on the lone path. The air shivers with the haunting whispers of unseen spirits.",

    backgroundImage: "styles/images/backgrounds/tier-two/ghostlight-vale.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [SHADE, SHADE, SHADE, GRUDGE],
      items: [GHOSTLIGHT_LILY],
      events: null,
    },
  },
  {
    roomName: "Morbid Mausoleum",
    description:
      "Within the Morbid Mausoleum, haunting spirits linger, their mournful wails echoing through the cold, still air. The oppressive weight of the mausoleum hints at the somber tales interred within.",

    backgroundImage: "styles/images/backgrounds/tier-two/morbid-mausoleum.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [HAUNTING_SPIRIT, HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Ossuary Outpost",
    description:
      "The Ossuary Outpost, a desolate haven of bone and armor, resonates with the haunting clatter of skeletal soldiers. Amidst the silent echoes, armored skeletons stand guard, their sockets gleaming with an otherworldly intent.",

    backgroundImage: "styles/images/backgrounds/tier-two/ossuary-outpost.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [ROTBANE_FERN],
      events: null,
    },
  },
  {
    roomName: "Vile Cavern",
    description:
      "The Vile Cavern emanates an eerie green glow, casting twisted shadows. Gnawers prowl in the half-light, their hunger almost tangible in this vile expanse.",

    backgroundImage: "styles/images/backgrounds/tier-two/vile-cavern.jpg",
    music: deepTunnels,
    contents: {
      monsters: [GNAWER, GNAWER, GNAWER, GNAWER],
      items: [WICKED_WISP],
      events: null,
    },
  },
  {
    roomName: "Banshee's Boneyard",
    description:
      "Within Banshee's Boneyard, mournful wails intertwine with the eerie clatter of spectral bones. An evil spirit, draped in ethereal veils, await intruders with chilling whispers and ghostly apparitions.",
    backgroundImage: "styles/images/backgrounds/tier-two/banshees-boneyard.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [GRUDGE],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Gravemist Hall",
    description:
      "Gravemist Hall, veiled in a perpetual fog, echoes with the melancholic echoes of the deceased. Shadows dance among gravestones as a lone shade guards the entrance, its eyes gleaming with spectral vigilance.",

    backgroundImage: "styles/images/backgrounds/tier-two/gravemist-hall.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [HAUNTING_SPIRIT, HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Skullshade Sanctum",
    description:
      "Skullshade Sanctum exudes an ominous aura. The clinking of bone armor create an unholy symphony. The air is thick with the whispers of the fallen, warning intruders of impending doom.",

    backgroundImage:
      "styles/images/backgrounds/tier-two/skullshade-sanctum.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SHADE, SKELETAL_SOLDIER, SHADE, SKELETAL_SOLDIER],
      items: [WHISPERING_SKULL],
      events: null,
    },
  },
  {
    roomName: "Bonescar Pass",
    description: "",
    backgroundImage: "styles/images/backgrounds/tier-two/bonescar-hollow.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Reaper's Charnel",
    description:
      "In the Reaper's Charnel, decrepit skeletons assemble in macabre formation. The air is tainted with the scent of ancient decay, as the skeletal sentinels stand guard, silent witnesses to the passage of time and intruders alike.",
    backgroundImage:
      "styles/images/backgrounds/tier-one/skeletal-sepulcher.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [
        DECREPIT_SKELETON,
        DECREPIT_SKELETON,
        DECREPIT_SKELETON,
        DECREPIT_SKELETON,
      ],
      items: [WHISPERING_SKULL],
      events: null,
    },
  },
  {
    roomName: "Desolate Crypt",
    description:
      "The Desolate Crypt stands as a solemn monument to the forgotten. Within, a malevolent grudge lingers, casting a pall over the decaying memories held by the crypt's cold, stone embrace.",
    backgroundImage: "styles/images/backgrounds/tier-two/desolate-crypt.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [GRUDGE, HAUNTING_SPIRIT],
      items: [CURIOUS_WISP],
      events: null,
    },
  },
  {
    roomName: "Grim Marrow Hall",
    backgroundImage: "styles/images/backgrounds/tier-two/grim-marrow-hall.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL, SCOUNDREL, SCOUNDREL, SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Ghastly Gallery",
    backgroundImage: "styles/images/backgrounds/tier-two/ghastly-gallery.jpg",
    music: fightThrough,
    contents: {
      monsters: [CULTIST, CULTIST, CULTIST],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Haunted Hallow",
    backgroundImage: "styles/images/backgrounds/tier-two/haunted-hallow.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [
        HAUNTING_SPIRIT,
        HAUNTING_SPIRIT,
        HAUNTING_SPIRIT,
        HAUNTING_SPIRIT,
      ],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Haunted Bloodcellar",
    backgroundImage:
      "styles/images/backgrounds/tier-two/haunted-blood-cellar.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [HAUNTING_SPIRIT, HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Dreadbone Chamber",
    description:
      "The Dreadbone Chamber resonates with the echoes of skeletal hands. Bone-white appendages emerge from the darkness, reaching for the living.",
    backgroundImage: "styles/images/backgrounds/event-rooms/skeletal-hands.jpg",
    music: claustrofobia,
    contents: {
      monsters: [],
      items: [],
      events: SKELETAL_HANDS,
    },
  },
  {
    roomName: "Cadaver Crypt",
    description:
      "Within the Cadaver Crypt, stone walls encase a macabre gallery of lifeless forms. The air is heavy with the scent of decay, and the distant scrape of spike walls signals impending danger to intruders.",
    backgroundImage: "styles/images/backgrounds/event-rooms/spiked-room.jpg",
    music: claustrofobia,
    contents: {
      monsters: [],
      items: [],
      events: SPIKE_WALLS,
    },
  },
  // {
  //   roomName: "Bone-forged Altar",
  //   description:
  //     "The Bone-forged Altar exudes an eerie tranquility. Skeletal remains, meticulously arranged, form a macabre mosaic.",
  //
  //   backgroundImage:
  //     "styles/images/backgrounds/tier-four/malevolent-shrine.jpg",
  //   music: imminentDarkness,
  //   contents: {
  //     monsters: [],
  //     items: [],
  //     events: SCHOLAR_HENDRA,
  //   },
  // },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/backgrounds/event-rooms/bonevault.jpg",
    music: pileOfBones,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/backgrounds/event-rooms/bonevault.jpg",
    music: pileOfBones,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
  {
    roomName: "Ornate Coffin",
    description: "",
    backgroundImage: "styles/images/backgrounds/event-rooms/coffin-3.jpg",
    music: threeThousandYearsOld,
    contents: {
      monsters: [],
      items: [],
      events: COFFIN_EVENT,
    },
  },
  {
    roomName: "Pilferer's Passage",
    description: "",
    backgroundImage: "styles/images/backgrounds/event-rooms/ivans-stache.jpg",
    music: unfinishedBusiness,
    contents: {
      monsters: [],
      items: [],
      events: ITEM_ROBBERY,
    },
  },
];

// ===============================
//         Tier Three Rooms
// ===============================

let tierThreeRooms = [
  {
    roomName: "Desecrated Shrine",
    backgroundImage:
      "styles/images/backgrounds/tier-three/desecrated-shrine.jpg",
    music: fightThrough,
    contents: {
      monsters: [FIENDSWORN_CULTIST, FIENDSWORN_CULTIST, CULTIST, CULTIST],
      items: [],
      events: null,
    },
    function: () => {
      getItem("CANDLE");
    },
  },
  {
    roomName: "Raided Tomb",
    backgroundImage: "styles/images/backgrounds/tier-one/marrowrest-tomb.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL, SCOUNDREL, SCOUNDREL, SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/backgrounds/event-rooms/bonevault.jpg",
    music: pileOfBones,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
  {
    roomName: "Frozen Door",
    description: `A locked frozen door exudes a chilling aura, icy tendrils creeping outward. Magical frost emanates, freezing the air. Delicate icicles dangle, hinting at the frigid mysteries concealed beyond.`,
    backgroundImage:
      "styles/images/backgrounds/event-rooms/frozen-locked-door.jpg",
    music: pileOfBones,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
  {
    roomName: "Molten Door",
    description: `A sealed door glows with red-hot intensity, its molten metal surface emanating heat. The distant crackle of flames hints at a fiery abyss beyond it.`,
    backgroundImage:
      "styles/images/backgrounds/event-rooms/red-hot-locked-door.jpg",
    music: pileOfBones,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
  {
    roomName: "Ornate Coffin",
    description: "",
    backgroundImage: "styles/images/backgrounds/event-rooms/coffin-4.jpg",
    music: threeThousandYearsOld,
    contents: {
      monsters: [],
      items: [],
      events: COFFIN_EVENT,
    },
  },
];

// ===============================
//         Tier Four Rooms
// ===============================

let tierFourRooms = [
  {
    roomName: "Desecrated Shrine",
    backgroundImage:
      "styles/images/backgrounds/tier-two/desecrated-shrine-two.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [
        FIENDSWORN_CULTIST,
        FIENDSWORN_CULTIST,
        FIENDSWORN_CULTIST,
        FIENDSWORN_CULTIST,
      ],
      items: [],
      events: null,
    },
    function: () => {
      getItem("CANDLE");
    },
  },
  {
    roomName: "Bastion of Bone",
    description: "A chamber with a large pile of skulls in the center.",

    backgroundImage: "styles/images/backgrounds/tier-four/bastion-of-bone.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [BONE_TITAN, BONE_TITAN],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Malevolent Shrine",
    description: "A chamber with a large pile of skulls in the center.",

    backgroundImage:
      "styles/images/backgrounds/tier-four/malevolent-shrine.jpg",
    music: hauntedOutpost,
    contents: {
      monsters: [GRUDGE, GRUDGE],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Vileblood Vestibule",
    backgroundImage:
      "styles/images/backgrounds/tier-four/vileblood-vestibule.jpg",
    music: deepTunnels,
    contents: {
      monsters: [GNAWER, GNAWER, GNAWER, GNAWER, GNAWER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Unhallowed Bloodhold",
    backgroundImage:
      "styles/images/backgrounds/tier-four/frosaken-bloodhold.jpg",
    music: fightThrough,
    contents: {
      monsters: [CULTIST, CULTIST, CULTIST],
      items: [BLEEDING_WISP],
      events: null,
    },
  },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/backgrounds/event-rooms/bonevault.jpg",
    music: pileOfBones,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
];

// ===============================
//          Safe Rooms
// ===============================

const CANDLELIGHT_SHRINE = {
  roomName: "Candlelight Shrine",
  description:
    "Bathed in ethereal glow, this sanctuary emanates serenity. Carved by devoted candlelight priestesses, Candlelight Shrines shield the virtuous from malevolent forces. Soft whispers of prayers linger, intertwining with the flickering flames that dance upon ancient, sacred altars.",
  backgroundImage:
    "styles/images/backgrounds/event-rooms/candlelight-shrine.jpg",
  music: mindReading,
  contents: {
    monsters: [],
    items: [],
    events: SAFE_ROOM,
  },
  function: () => {
    CANDLELIGHT_SHRINE.contents.items = [];
    getItem("CANDLE");
    setRoomSummary();
  },
};

// ===============================
//          Misc. Rooms
// ===============================

const FALLEN_WARRIORS_VALE = {
  roomName: "Fallen Warriors' Vale",
  description: `A desolate vale in the catacomb's heart, where the whispers of forgotten warriors echo through the cold stone. Rusted armor and tattered banners line the silent battlefield, revealing the untold tales of warriors lost to time.`,
  backgroundImage:
    "styles/images/backgrounds/event-rooms/lost-legions-vale.jpg",
  music: droneDarkHor1,
  contents: {
    monsters: [],
    items: [],
    events: BATTLEFIELD,
  },
};

const LAUGHING_COFFIN_ROOM = {
  roomName: "The Laughing Coffin Tavern",
  description:
    "The Laughing Coffin tavern stands as a sanctuary, welcoming scoundrels and coin-bearers alike. Here, amid the shadows, an unexpected haven emerges—a place to relax, where whispered secrets and clinking coins intertwine in the dim-lit embrace of this clandestine refuge.",
  backgroundImage: "styles/images/backgrounds/event-rooms/laughing-coffin.jpg",
  music: unfinishedBusiness,
  contents: {
    monsters: [],
    items: [],
    events: LAUGHING_COFFIN_EVENT,
  },
};

const BLOOD_ALTER = {
  roomName: "The Crimson Covenant",
  description:
    "The altar, carved from the cold, black stone native to the catacombs, stands in a chamber illuminated only by the eerie glow of blood-red torches. The walls are adorned with morbid murals, depicting the Lord of Crimson, the deity of blood and life.",

  backgroundImage: "styles/images/backgrounds/event-rooms/crimson-covenant.jpg",
  music: crypta,
  contents: {
    monsters: [],
    items: [],
    events: CRIMSON_COVENANT,
  },
};

const BONEVAULT = {
  roomName: "Bonevault",
  description:
    "The entrance to a Bonevault, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
  backgroundImage: "styles/images/backgrounds/event-rooms/bonevault.jpg",
  music: pileOfBones,
  contents: {
    monsters: [],
    items: [],
    events: LOCKED_ROOM,
  },
};

const FROZEN_DOOR = {
  roomName: "Frozen Door",
  description: `A locked frozen door exudes a chilling aura, icy tendrils creeping outward. Magical frost emanates, freezing the air. Delicate icicles dangle, hinting at the frigid mysteries concealed beyond.`,
  backgroundImage:
    "styles/images/backgrounds/event-rooms/frozen-locked-door.jpg",
  music: pileOfBones,
  contents: {
    monsters: [],
    items: [],
    events: LOCKED_ROOM,
  },
};

const MOLTEN_DOOR = {
  roomName: "Molten Door",
  description: `A sealed door glows with red-hot intensity, its molten metal surface emanating heat. The distant crackle of flames hints at a fiery abyss beyond it.`,
  backgroundImage:
    "styles/images/backgrounds/event-rooms/red-hot-locked-door.jpg",
  music: pileOfBones,
  contents: {
    monsters: [],
    items: [],
    events: LOCKED_ROOM,
  },
};

// ===============================
//     NPC Catacomb Rooms
// ===============================

// Graverobber Earver

const GRAVEROBBER_EARVER_ROOM_TWO = {
  roomName: "Giant Sarcophagus",
  backgroundImage: "styles/images/backgrounds/event-rooms/earver-event-two.jpg",
  music: imminentDarkness,
  contents: {
    monsters: [],
    items: [],
    events: GRAVEROBBER_EARVER_EVENT_TWO,
  },
};

const GRAVEROBBER_EARVER_ROOM_THREE = {
  roomName: "Crypt of the Lost King",
  backgroundImage:
    "styles/images/backgrounds/event-rooms/earver-event-three.jpg",
  music: imminentDarkness,
  contents: {
    monsters: [],
    items: [],
    events: GRAVEROBBER_EARVER_EVENT_THREE,
  },
};

// Ivan the Scoundrel
const IVANS_CACHE = {
  roomName: "Ivan's Hidden Cache",
  description:
    "Ivan's Hidden Cache, a clandestine chamber within the catacombs, echoes with whispered secrets and the scent of ill-gotten gains. Anticipation hangs thick in the air as tales of treasures untold circulate. At the heart of the room, a mysterious chest guards the spoils, tempting fate with promises of riches waiting to be unveiled.",
  backgroundImage: "styles/images/backgrounds/event-rooms/ivans-stache.jpg",
  music: claustrofobia,
  contents: {
    monsters: [],
    items: [],
    events: IVAN_THE_SCOUNDREL_EVENT_TWO,
  },
};

const IVAN_TRAP_ROOM_ONE = {
  roomName: "Bloodstained Bridge",
  description:
    "The Bloodstained Bridge spans a chasm filled with bone. Crimson stains mark the way, leading to a perilous path where pendulum blades swing ominously. The unsettling creaking metal shrouds the impending danger set by Ivan the Scoundrel.",

  backgroundImage:
    "styles/images/backgrounds/event-rooms/bloodstained-bridge.jpg",
  music: claustrofobia,
  contents: {
    monsters: [],
    items: [],
    events: PENDULUM_BLADES,
  },
  function: () => {
    ivansRevengeTracker();
    setTimeout(() => {
      soundEffectHandler(metalSqueak21);
    }, 3000);
    setTimeout(() => {
      soundEffectHandler(humanLaugh25);
      writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "IVAN");
    }, 6000);
  },
};

const IVAN_TRAP_ROOM_TWO = {
  roomName: "False Path",
  description:
    "Along the False Path, the ground trembles beneath heavy steps, hinting at the lurking spike-laden pitfall. Built by Ivan the Scoundrel to kill you and exact his revenge for abandoning him. ",
  backgroundImage: "styles/images/backgrounds/event-rooms/crumbling-path.jpg",
  music: claustrofobia,
  contents: {
    monsters: [],
    items: [],
    events: SPIKE_PITFALL,
  },
  function: () => {
    ivansRevengeTracker();
    setTimeout(() => {
      soundEffectHandler(crashRockStone);
    }, 3000);
    setTimeout(() => {
      soundEffectHandler(humanLaugh25);
      writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "IVAN");
    }, 6000);
  },
};

const IVAN_TRAP_ROOM_THREE = {
  roomName: "Dead End Chamber",
  backgroundImage: "styles/images/backgrounds/event-rooms/dead-end-chamber.jpg",
  music: claustrofobia,
  contents: {
    monsters: [],
    items: [],
    events: GAS_CHAMBER,
  },
  function: () => {
    ivansRevengeTracker();
    setTimeout(() => {
      soundEffectHandler(gasLeakHose3);
    }, 3000);
    setTimeout(() => {
      soundEffectHandler(humanLaugh25);
      writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "IVAN");
    }, 6000);
  },
};

const IVANS_REVENGE = {
  roomName: "Rogue's Revenge",
  backgroundImage: "styles/images/backgrounds/event-rooms/rogues-revenge.jpg",
  music: claustrofobia,
  contents: {
    monsters: [],
    items: [LAUGHING_COFFIN_COIN, LAUGHING_COFFIN_COIN],
    events: IVANS_AMBUSH,
  },
  function: () => {
    ivansRevengeTracker();
    setTimeout(() => {
      soundEffectHandler(bulletsPassBy4);
    }, 3000);
    setTimeout(() => {
      soundEffectHandler(humanLaugh25);
      writeToLogEvent(LOG_NPC_DIALOGUE, "YES", "IVAN");
    }, 6000);
  },
};

const SKULL_CHAMBER = {
  roomName: "Skull-filled Chamber",
  backgroundImage: "styles/images/backgrounds/event-rooms/skull-chamber.jpg",
  music: imminentDarkness,
  contents: {
    monsters: [],
    items: [],
    events: GRERVIL_THE_BODILESS,
  },
  function: () => {
    grervilTracker = "STARTED";
  },
};

const GRIM_GARRISON = {
  roomName: "Grim Garrison",
  backgroundImage: "styles/images/backgrounds/tier-two/grim-garrison.jpg",
  music: imminentDarkness,
  contents: {
    monsters: [],
    items: [],
    events: FORSAKEN_COMMANDER,
  },
  function: () => {
    commanderTracker = "STARTED";
  },
};

const HAGS_HOLLOW = {
  roomName: "Hag's Hollow",
  backgroundImage: "styles/images/backgrounds/event-rooms/hags-hollow.jpg",
  music: creepyThoughts,
  contents: {
    monsters: [],
    items: [],
    events: HAG_TRADER,
  },
  function: () => {
    previousHagFavor = "HAVE NOT TRADED";
    hagItems = [];
    hagItems = [
      POTION,
      POTION,
      POTION,
      TROLLBLOOD_TONIC,
      NECROTIC_NECTAR,
      HEXBANE_BREW,
    ];

    soundEffectHandler(cauldronLargeBoil);
  },
};

const CURATORS_CURIO = {
  roomName: "Curator's Curio",
  backgroundImage: "styles/images/backgrounds/event-rooms/curators-curio.jpg",
  music: timeToFaceThem,
  contents: {
    monsters: [],
    items: [],
    events: CURATOR_TRADER,
  },
  function: () => {
    // Add Items to Curator's Inventory the Player Doesn't Have.
    curatorItems = [];
    commonArray = [];
    rareArray = [];
    epicArray = [];
    junkArray = [SKELETON_KEY, LAUGHING_COFFIN_COIN];

    // Find Common Items
    function findCommonItem() {
      for (let i = 0; i < commonCuratorArray.length; i++) {
        if (
          !attunedItems.includes(commonCuratorArray[i]) &&
          !inventoryItems.includes(commonCuratorArray[i]) &&
          !curatorItems.includes(commonCuratorArray[i])
        ) {
          commonArray.push(commonCuratorArray[i]);
        }
      }

      if (commonArray.length > 0) {
        let index = Math.floor(Math.random() * commonArray.length);
        curatorItems.push(commonArray[index]);
      } else {
        let index = Math.floor(Math.random() * junkArray);
      }
    }

    // Find Rare Items
    function findRareItem() {
      for (let i = 0; i < rareCuratorArray.length; i++) {
        if (
          !attunedItems.includes(rareCuratorArray[i]) &&
          !inventoryItems.includes(rareCuratorArray[i]) &&
          !curatorItems.includes(rareCuratorArray[i])
        ) {
          rareArray.push(rareCuratorArray[i]);
        }
      }

      if (rareArray.length > 0) {
        let index = Math.floor(Math.random() * rareArray.length);
        curatorItems.push(rareArray[index]);
        rareArray.splice(index, 1);
      } else {
        findCommonItem();
      }
    }

    function findEpicItem() {
      // Find Epic Items
      for (let i = 0; i < epicCuratorArray.length; i++) {
        if (
          !attunedItems.includes(epicCuratorArray[i]) &&
          !inventoryItems.includes(epicCuratorArray[i]) &&
          !curatorItems.includes(rareCuratorArray[i])
        ) {
          epicArray.push(epicCuratorArray[i]);
        }
      }

      if (epicArray.length > 0) {
        let index = Math.floor(Math.random() * epicArray.length);
        curatorItems.push(epicArray[index]);
      } else {
        findRareItem();
      }
    }

    findCommonItem();
    findRareItem();
    findRareItem();
    findEpicItem();
  },
};

// ===============================
//         Boss Rooms
// ===============================

const THRONE_OF_THE_ETERNAL = {
  roomName: "Throne of the Eternal",
  description: "",
  backgroundImage: "styles/images/backgrounds/event-rooms/eternal-throne.jpg",
  music: birthOfaKnight,
  contents: {
    monsters: [],
    items: [],
    events: null,
  },
  function: () => {
    let hero = heroChecker();
    let room = currentRoom.contents.monsters;

    setTimeout(() => {
      switch (hero) {
        case paladin:
          room.push(UNDEAD_LIHETH, UNDEAD_RIVEN);
          break;

        case priestess:
          room.push(UNDEAD_SIGGURD, UNDEAD_RIVEN);
          break;

        case rogue:
          room.push(UNDEAD_LIHETH, UNDEAD_SIGGURD);
          break;
      }

      startBattle();
      setRoomSummary();
    }, 6000);

    setTimeout(() => {
      writeToLogOther(LOG_OTHER, "YES", "UNDEAD HEROES");
    }, 2000);
  },
};

const BARON_OF_BONE_BOSS_ROOM = {
  roomName: "Throne of the Eternal",
  backgroundImage: "styles/images/backgrounds/event-rooms/baron-of-bone.jpg",
  music: basementNightmare,
  contents: {
    monsters: [],
    items: [],
    events: JOIN_THE_BARON,
  },
  function: () => {
    soundEffectHandler(ominousPresence);
  },
};

// ===============================
//     Catacomb Room Logic
// ===============================

function getRandomRoom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  roomIndex = randomIndex;
  currentRoom = array[roomIndex];

  return currentRoom;
}

function removeCurrentRoom() {
  if (
    currentRoom !== catacombEntrance &&
    currentRoom !== CANDLELIGHT_SHRINE &&
    currentRoom !== FALLEN_WARRIORS_VALE &&
    currentRoom !== LAUGHING_COFFIN_ROOM &&
    currentRoom !== HAGS_HOLLOW &&
    currentRoom !== CURATORS_CURIO
  ) {
    console.log(`${currentRoom.roomName} Removed`);
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
  //ROOMS
  // Add Bonevault After First 5 Rooms
  if (roomCounter === 5) {
    catacombRooms.push(BONEVAULT);
  }

  // Adds new rooms during tier 3 & tier 4
  if (catacombRooms.length < 20 && roomCounter >= 50 && roomCounter <= 80) {
    console.log("NEW ROOM");
    createNewRoom();
  }

  // NPCS

  // ITEMS
  // Check if War Torn Banner is Attuned
  if (
    attunedItems.includes(WAR_TORN_BANNER) &&
    roomMonsters[0].type === "UNDEAD"
  ) {
    let randomSkeleton = Math.round(Math.random() * 1);

    switch (randomSkeleton) {
      case 0:
        roomMonsters.unshift(LEGIONNAIRE);
        break;

      case 1:
        roomMonsters.unshift(LEGIONNAIRE, LEGIONNAIRE);
        break;
    }
  }

  // STATUS EFFECTS
  // Check if Player is Haunted
  if (roomMonsters[0].type === "UNDEAD" && HAUNTED.duration !== null) {
    let randomSpirits = Math.round(Math.random() * 2);

    switch (randomSpirits) {
      case 0:
        break;

      case 1:
        roomMonsters.unshift(HAUNTING_SPIRIT);
        break;

      case 2:
        roomMonsters.unshift(HAUNTING_SPIRIT, HAUNTING_SPIRIT);
        break;
    }
  }
}

function checkForNewTier() {
  // Tier Two Rooms
  if (roomCounter === 20 && tierTwoRoomsTracker === null) {
    tierTwoRoomsTracker === "ADDED";
    catacombRooms = catacombRooms.concat(tierTwoRooms);
  }

  // Tier Three Rooms
  if (roomCounter === 45 && tierThreeRoomsTracker === null) {
    tierThreeRoomsTracker === "ADDED";
    catacombRooms = catacombRooms.concat(tierThreeRooms);
  }

  // Tier Four Rooms
  if (roomCounter === 70 && tierFourRoomsTracker === null) {
    tierFourRoomsTracker === "ADDED";
    catacombRooms = catacombRooms.concat(tierFourRooms);
  }

  // Boss Room
  if (catacombRooms.length === 1) {
    catacombRooms.push(THRONE_OF_THE_ETERNAL);
  }
}

function createNewRoom() {
  let roomType = Math.floor(Math.random() * 4) + 1;
  let beastType; // to decern Gnawers or Spiders

  let newRoom = {
    roomName: "",
    backgroundImage: "",
    music: "",
    contents: {
      monsters: [],
      items: [],
      events: null,
    },
  };

  function getRoomDetails(roomType) {
    let roomDetails = Math.floor(Math.random() * 4) + 1;

    switch (roomType) {
      case 1:
        // SKELETON
        if (roomDetails === 1) {
          newRoom.roomName = "Skull-lined Corridor";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-one/skull-lined-corridor.jpg";
        } else if (roomDetails === 2) {
          newRoom.roomName = "Skeletal Sepulcher";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-one/skeletal-sepulcher.jpg";
        } else if (roomDetails === 3) {
          newRoom.roomName = "Skullshade Sanctum";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/skullshade-sanctum.jpg";
        } else if (roomDetails === 4) {
          newRoom.roomName = "Ossuary Outpost";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/ossuary-outpost.jpg";
        } else {
          newRoom.roomName = "Gravemist Hall";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/gravemist-hall.jpg";
        }

        newRoom.music = edgeOfFear;
        break;

      case 2:
        // GHOST
        if (roomDetails === 1) {
          newRoom.roomName = "Haunted Hall";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-one/haunted-hall.jpg";
        } else if (roomDetails === 2) {
          newRoom.roomName = "Echoing Vestibule";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-one/echoing-vestibule.jpg";
        } else if (roomDetails === 3) {
          newRoom.roomName = "Haunted Bloodcellar";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/haunted-blood-cellar.jpg";
        } else if (roomDetails === 4) {
          newRoom.roomName = "Haunted Hallow";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/haunted-hallow.jpg";
        } else {
          newRoom.roomName = "Morbid Mausoleum";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/morbid-mausoleum.jpg";
        }

        newRoom.music = hauntedOutpost;
        break;

      case 3:
        // CULTIST
        if (roomDetails === 1) {
          newRoom.roomName = "Ghastly Gallery";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/ghastly-gallery.jpg";
          newRoom.music = null;
        } else if (roomDetails === 2) {
          newRoom.roomName = "Desecrated Shrine";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-three/desecrated-shrine.jpg";
          newRoom.music = null;
        } else if (roomDetails === 3) {
          newRoom.roomName = "Desecrated Shrine";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/desecrated-shrine-two.jpg";
          newRoom.music = null;
        } else if (roomDetails === 4) {
          newRoom.roomName = "Unhallowed Bloodhold";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-four/frosaken-bloodhold.jpg";
          newRoom.music = null;
        } else {
          newRoom.roomName = "Ghastly Gallery";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-two/ghastly-gallery.jpg";
        }

        newRoom.music = fightThrough;
        break;

      case 4:
        // EVENT
        if (roomDetails === 1) {
          newRoom.roomName = "Webspun Passage";
          newRoom.backgroundImage =
            "styles/images/backgrounds/tier-one/webspun-passage.jpg";
          newRoom.music = claustrofobia;
          newRoom.contents.events = SPIDER_WEB;
        } else if (roomDetails === 2) {
          newRoom.roomName = "Cadaver Crypt";
          newRoom.backgroundImage =
            "styles/images/backgrounds/event-rooms/spiked-room.jpg";
          newRoom.music = claustrofobia;
          newRoom.contents.events = SPIKE_WALLS;
        } else if (roomDetails === 3) {
          newRoom.roomName = "Dreadbone Chamber";
          newRoom.backgroundImage =
            "styles/images/backgrounds/event-rooms/skeletal-hands.jpg";
          newRoom.music = claustrofobia;
          newRoom.contents.events = SKELETAL_HANDS;
        } else if (roomDetails === 4) {
          newRoom.roomName = "Dreadbone Chamber";
          newRoom.backgroundImage =
            "styles/images/backgrounds/event-rooms/skeletal-hands.jpg";
          newRoom.music = claustrofobia;
          newRoom.contents.events = SKELETAL_HANDS;
        } else {
          newRoom.roomName = "Ivory Coffin";
          newRoom.backgroundImage =
            "styles/images/backgrounds/event-rooms/coffin-2.jpg";
          newRoom.music = threeThousandYearsOld;
          newRoom.contents.events = COFFIN_EVENT;
        }

        break;
    }
  }

  function getRoomMonsters(roomType) {
    let numberOfEnemies;

    // Get Threat Level
    if (roomCounter >= 70) {
      numberOfEnemies = 6;
    } else if (roomCounter >= 60) {
      numberOfEnemies = 5;
    } else if (roomCounter >= 50) {
      numberOfEnemies = 4;
    }

    skeletonMonsters = [
      ARMORED_SKELETON,
      ARMORED_SKELETON,
      BONE_TITAN,
      DEATH_KNIGHT,
    ];
    let ghostMonsters = [HAUNTING_SPIRIT, HAUNTING_SPIRIT, GRUDGE, WRAITH];
    let cultistMonsters = [CULTIST, CULTIST, FIENDSWORN_CULTIST, CRYPT_FIEND];

    if (roomType !== 6) {
      let monsterType;
      switch (roomType) {
        case 1:
          monsterType = skeletonMonsters;
          break;

        case 2:
          monsterType = ghostMonsters;
          break;

        case 3:
          monsterType = cultistMonsters;
          break;
      }

      for (let i = 0; i < numberOfEnemies; i++) {
        let randomIndex = Math.floor(Math.random() * monsterType.length);
        newRoom.contents.monsters.push(monsterType[randomIndex]);
      }
    }
  }

  getRoomDetails(roomType);
  getRoomMonsters(roomType);
  catacombRooms.push(newRoom);
  console.log(`New Room Added: ${newRoom}`);
}
