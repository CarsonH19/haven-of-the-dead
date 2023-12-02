// ===============================
//          TESTING
// ===============================

// let catacombRooms = [
//   {
//       roomName: "TEST ROOM", // !FINISHED!
//       description: 'TEST =)',
//       backgroundImage: 'styles/images/corridor-two.png',
//       music: null,
//       contents: {
//         monsters: [CRYPT_CRAWLER, CRYPT_CRAWLER, CRYPT_CRAWLER],
//         items: [],
//         events: null,
//       },
//     },
//   //   {
//   //   roomName: "TEST ROOM TWO", // !FINISHED!
//   //   description: 'TEST =)',
//   //   backgroundImage: 'styles/images/corridor-two.png',
//   //   music: null,
//   //   contents: {
//   //     monsters: [BROODMOTHER],
//   //     items: [],
//   //     events: null,
//   //   },
//   // },
// ];

// ===============================
//        CATACOMB ENTRANCE
// ===============================

const catacombEntrance = {
  roomName: "Catacomb Entrance",
  backgroundImage: "styles/images/catacomb-entrance.png",
  music: droneDarkHor1,
  contents: {
    monsters: [],
    items: [],
    events: null,
  },
};

let currentRoom = catacombEntrance;

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
    roomName: "Clawed Caverns",
    description:
      "The Clawed Caverns echo with the sinister skittering of unseen claws. Jagged stalactites hang like fangs, ready to pierce the unwary.",
    backgroundImage: "styles/images/backgrounds/rat-room-1.jpg",
    music: deepTunnels,
    contents: {
      monsters: [GNAWER, GNAWER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Vermins' Vestibule",
    description:
      "The Vermins' Vestibule teems with shadowy shapes, a breeding ground for swarms of relentless vermin. The air is thick with anticipation, as unseen forces prepare to unleash their tiny terrors upon intruders.",
    backgroundImage: "styles/images/backgrounds/rat-room-2.jpg",
    music: deepTunnels,
    contents: {
      monsters: [],
      items: [],
      events: SWARM_OF_VERMIN,
    },
  },
  {
    roomName: "Gnawers' Nest",
    description:
      "In the Gnawers' Nest, the scent of fur and decay hangs heavy. A multitude of gnawers skulk, eyes gleaming in the darkness. The air resonates with the unsettling symphony of their hungry whispers.",
    backgroundImage: "styles/images/backgrounds/rat-room-2.jpg",
    music: deepTunnels,
    contents: {
      monsters: [GNAWER, GNAWER, GNAWER, GNAWER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Webspun Passage",
    description:
      "The Webspun Passage, a silken maze woven by colossal spiders. Threads glisten, hinting at unseen arachnid architects. Each step stirs a web, the air pulsating with the potential of an eight-legged guardian's descent.",
    backgroundImage: "styles/images/backgrounds/spider-room-1.jpg",
    music: spiderInvasion,
    contents: {
      monsters: [],
      items: [],
      events: SPIDER_WEB,
    },
  },
  {
    roomName: "Creeping Coffin",
    description:
      "Within the Creeping Coffin, ancient sarcophagi loom like silent sentinels. Coffin spiders, their legs tapping a macabre rhythm, await an unsuspecting intruder. The air is heavy with the scent of ancient dread.",
    backgroundImage: "styles/images/corridor-two.png",
    music: spiderInvasion,
    contents: {
      monsters: [],
      items: [],
      events: COFFIN_SPIDER_EVENT,
    },
  },
  {
    roomName: "Sneakshade Sanctum",
    description:
      "The Sneakshade Sanctum conceals rogue figures in the shadows. Sinister scoundrels lurk, their eyes glinting with mischief. The sanctum exudes an eerie calm, belying the imminent threat of unseen daggers.",
    summary: "",
    backgroundImage: "styles/images/backgrounds/scoundrel-room-3.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL, SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Devious Alvove",
    description:
      "The Devious Alvove conceals its secrets in shadows. A lone scoundrel lurks, eyes gleaming with mischief. A tempting aroma of Blackheart Brew wafts through the air, promising both delight and danger to those who venture forth.",
    summary: "",
    backgroundImage: "styles/images/backgrounds/scoundrel-room-1.jpg",
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
    summary: "",
    backgroundImage: "styles/images/backgrounds/scoundrel-room-2.jpg",
    music: hiddenCapacity,
    contents: {
      monsters: [SCOUNDREL, SCOUNDREL, SCOUNDREL],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Cobwebbed Crypt",
    description:
      "The Cobwebbed Crypt, unfolds like a silken labyrinth. Walls draped in glistening spider webs weave a treacherous path, ready to ensnare the unsuspecting. Each step risks entanglement in the sticky embrace of arachnid artistry. A chilling hush prevails as the crypt silently awaits its unwitting visitors.",
    summary: "",
    backgroundImage: "styles/images/backgrounds/spider-room-1.jpg",
    music: spiderInvasion,
    contents: {
      monsters: [],
      items: [],
      events: IVAN_THE_SCOUNDREL,
    },
  },
  {
    roomName: "The Hatchery",
    description:
      "The Hatchery pulsates with an eerie hum. Walls, lined with unhatched eggs, house a crawling horde of crypt crawlers. The air is thick with the anticipation of countless tiny legs skittering across the cold stone floor.",
    backgroundImage: "styles/images/backgrounds/spider-room-1.jpg",
    music: spiderInvasion,
    contents: {
      monsters: [
        CRYPT_CRAWLER,
        CRYPT_CRAWLER,
        CRYPT_CRAWLER,
        CRYPT_CRAWLER,
        CRYPT_CRAWLER,
      ],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Broodmother's Nest",
    description:
      "The Broodmother's Nest looms with arachnid grace. A colossal web, woven with uncanny precision, cradles the monstrous broodmother. Her presence sends shivers, and the air is thick with the scent of impending danger.",
    backgroundImage: "styles/images/backgrounds/spider-room-1.jpg",
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
    backgroundImage: "styles/images/backgrounds/passage-1.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [DECREPIT_SKELETON, SKELETAL_SOLDIER, DECREPIT_SKELETON],
      items: [GUIDING_LIGHT],
      events: null,
    },
  },
  {
    roomName: "Bone-laden Passage",
    description:
      "The Bone-laden Passage exudes the stench of ancient decay. Shadows dance on walls adorned with skeletal remains. Skeletal soldiers stand guard, wielding rusty weapons, while a decrepit skeleton cradles a precious lesser soulstone.",
    backgroundImage: "styles/images/backgrounds/skeleton-room-1.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SKELETAL_SOLDIER, DECREPIT_SKELETON],
      items: [ROTBANE_FERN],
      events: null,
    },
  },
  {
    roomName: "Skeletons' Rest",
    description:
      "In Skeletons' Rest, decrepit skeletons lie in silent repose. The air is thick with the musty scent of gravebloom, a prized possession amidst the remains. An eerie tranquility belies the dormant threat within the bones.",
    backgroundImage: "styles/images/backgrounds/skeleton-room-2.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [DECREPIT_SKELETON, DECREPIT_SKELETON, DECREPIT_SKELETON],
      items: [GRAVEBLOOM],
      events: null,
    },
  },
  {
    roomName: "Skeletonarium",
    description:
      "The Skeletonarium echoes with the metallic clank of skeletal soldiers. Armor-clad and relentless, they guard this chamber of bones. A skeleton key glimmers amid the remains.",
    backgroundImage: "styles/images/backgrounds/skeleton-room-2.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [SKELETON_KEY, GHOSTLIGHT_LILY],
      events: null,
    },
  },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/rattling-hollow.png",
    music: droneDarkHor1,
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
    backgroundImage: "styles/images/rattling-hollow.png",
    music: droneDarkHor1,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
  {
    roomName: "Skeletal Sepulcher",
    description:
      "Within the Skeletal Sepulcher, shadows dance on crumbling bone. Decrepit skeletons stir, guarding their final resting place. A chill pervades as skeletal soldiers stand sentinel.",
    backgroundImage: "styles/images/backgrounds/skeleton-room-4.jpg",
    music: edgeOfFear,
    contents: {
      monsters: [DECREPIT_SKELETON, DECREPIT_SKELETON, SKELETAL_SOLDIER],
      items: [BONE_MARROW_SOUP],
      events: null,
    },
  },
  {
    roomName: "Marrowrest Tomb",
    description:
      "The Marrowrest Tomb exhales an eerie silence. No living soul stirs, yet the air shivers with the unseen presence of the Graverobber Earver. Unhallowed secrets lie waiting to be unearthed in this solemn sepulcher.",
    backgroundImage: "styles/images/chamber-one.png",
    music: imminentDarkness,
    contents: {
      monsters: [],
      items: [],
      events: GRAVEROBBER_EARVER,
    },
  },
  {
    roomName: "Ivory Crypt",
    description:
      "In the Ivory Crypt, delicate filigree adorns crypt walls. An ethereal silence lingers, broken only by the occasional skittering. The air is charged with the unsettling energy of the crypt's secrets.",
    backgroundImage: "styles/images/chamber-one.png",
    music: threeThousandYearsOld,
    contents: {
      monsters: [],
      items: [],
      events: COFFIN_SPIDER_EVENT,
    },
  },
  {
    roomName: "Skullcarver's Passage",
    description:
      "Skullcarver's Passage winds through the heart of bone. A colossal bone titan looms, its presence carving fear into the marrow of adventurers.",
    backgroundImage: "styles/images/backgrounds/skeleton-room-4.jpg",
    music: passedDanger,
    contents: {
      monsters: [BONE_TITAN],
      items: [SKELETON_KEY],
      events: null,
    },
  },
  {
    roomName: "Haunted Hall",
    description:
      "The Haunted Hall breathes with ethereal whispers, its walls adorned with drifting specters. A chilling presence lingers, and the air shivers with the haunting melody of unseen spirits.",
    backgroundImage: "styles/images/backgrounds/ghost-room-1.jpg",
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
    backgroundImage: "styles/images/backgrounds/ghost-room-2.jpg",
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
    backgroundImage: "styles/images/backgrounds/passage-1.jpg",
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
    backgroundImage: "styles/images/backgrounds/ghost-room-4.jpg",
    music: imminentDarkness,
    contents: {
      monsters: [SHADE],
      items: [WHISPERING_AMULET],
      events: null,
    },
  },
  {
    roomName: "Rattling Hollow",
    description:
      "Within the Rattling Hollow, bones assemble in macabre unity. An unsettling rattle permeates the air as a flood of bones, animated and vengeful, guards this chamber. Brave souls may find rare treasures amidst the bone-strewn chaos.",
    backgroundImage: "styles/images/backgrounds/flood-of-bones.jpg",
    music: passedDanger,
    contents: {
      monsters: [FLOOD_OF_BONES],
      items: [],
      events: null,
    },
  },
];

// ===============================
//         Tier Two Rooms
// ===============================

// Unlock at level 3
// Monsters:
// - Evil Spirits: Shades, Haunting Spirit
// Events:
// -

let tierTwoRooms = [
  {
    roomName: "Ribcage Retreat",
    description: "Within Ribcage Retreat, the scent of ancient bones fills the chamber. Skeletal soldiers stand sentinel, their bony fingers poised on ghostly blades. An armored skeleton, a relic of forgotten battles, awaits with an eerie stillness.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER, SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [],
      events: null,
      function: () => {
        getItem('CONSUMABLE');
      }
    },
  },
  {
    roomName: "Ghostlight Vale",
    description: "In Ghostlight Vale, spectral shades drift through a meadow of ethereal flowers. The blooms exude an otherworldly glow, casting an unsettling radiance on the lone path. The air shivers with the haunting whispers of unseen spirits.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [SHADE],
      items: [GHOSTLIGHT_LILY, GHOSTLIGHT_LILY, GHOSTLIGHT_LILY],
      events: null,
    },
  },
  {
    roomName: "Morbid Mausoleum",
    description: "Within the Morbid Mausoleum, haunting spirits linger, their mournful wails echoing through the cold, still air. The oppressive weight of the mausoleum hints at the somber tales interred within.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [HAUNTING_SPIRIT, HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Ossuary Outpost",
    description: "The Ossuary Outpost, a desolate haven of bone and armor, resonates with the haunting clatter of skeletal soldiers. Amidst the silent echoes, armored skeletons stand guard, their sockets gleaming with an otherworldly intent.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER, ARMORED_SKELETON],
      items: [ROTBANE_FERN],
      events: null,
    },
  },
  {
    roomName: "Vile Cavern",
    description: "The Vile Cavern emanates an eerie green glow, casting twisted shadows. Gnawers prowl in the half-light, their hunger almost tangible in this vile expanse.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [GNAWER, GNAWER, GNAWER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Darkened Fane",
    description: "The Darkened Fane, a solemn sanctuary veiled in shadow, echoes with the whispers of unseen shades. The air is charged with a spectral energy as shades drift silently, haunting the sacred space with their ethereal presence.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [SHADE, SHADE, SHADE],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Skeletal Spire",
    description: "Ascending the Skeletal Spire, skeletal soldiers stand sentinel alongside decrepit skeletons. The air is imbued with the musty scent of ancient bones, and the spire whispers with the echoes of battles long forgotten.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [
        SKELETAL_SOLDIER,
        SKELETAL_SOLDIER,
        DECREPIT_SKELETON,
        DECREPIT_SKELETON,
      ],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Banshee's Boneyard",
    description: "Within Banshee's Boneyard, mournful wails intertwine with the eerie clatter of spectral bones. An evil spirit, draped in ethereal veils, await intruders with chilling whispers and ghostly apparitions.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [GRUDGE],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Ghostwalk Bridge",
    description: "Ghostwalk Bridge stretches over an abyss of fog. Wisps of ethereal mist cling to skeletal structures, and haunting spirits drift silently. Crossing is a journey through whispers of the departed.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [HAUNTING_SPIRIT, HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Gravemist Hall",
    description: "Gravemist Hall, veiled in a perpetual fog, echoes with the melancholic echoes of the deceased. Shadows dance among gravestones as a lone shade guards the entrance, its eyes gleaming with spectral vigilance.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Skullshade Sanctum",
    description: "Skullshade Sanctum exudes an ominous aura. Shades, skeletal soldiers, and the clinking of bone armor create an unholy symphony. The air is thick with the whispers of the fallen, warning intruders of impending doom.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [SHADE, SKELETAL_SOLDIER, SHADE, SKELETAL_SOLDIER],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Bonescar Hollow",
    description: "Bonescar Hollow, a realm of desolation, echoes with the ominous footsteps of the Bone Titan. Shadows dance on the skeletal remains, whispering tales of forgotten battles and the relentless guardian that now prowls.",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [BONE_TITAN],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Reaper's Charnel",
    description: "In the Reaper's Charnel, decrepit skeletons assemble in macabre formation. The air is tainted with the scent of ancient decay, as the skeletal sentinels stand guard, silent witnesses to the passage of time and intruders alike.",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [
        DECREPIT_SKELETON,
        DECREPIT_SKELETON,
        DECREPIT_SKELETON,
        DECREPIT_SKELETON,
      ],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Desolate Crypt",
    description: "The Desolate Crypt stands as a solemn monument to the forgotten. Within, a malevolent grudge lingers, casting a pall over the decaying memories held by the crypt's cold, stone embrace.",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [GRUDGE],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Grim Marrow Hall",
    description: "Grim Marrow Hall, a haunting spectacle, echoes with the spectral moans of skeletal soldiers and haunting spirits. The decrepit skeletons, like forgotten guardians, stir as intruders disturb their eternal vigil.",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [SKELETAL_SOLDIER, HAUNTING_SPIRIT, DECREPIT_SKELETON],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Ghastly Gallery",
    description: "The Ghastly Gallery unveils a spectral exhibition. Ethereal shades and haunting spirits drift through the shadows. Whispers of the departed echo, while a mysterious function hints at acquiring a coveted wisp.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [SHADE, HAUNTING_SPIRIT, SHADE],
      items: [],
      events: null,
      function: () => {
        getItem("WISP");
      },
    },
  },
  {
    roomName: "Haunted Hallow",
    description: "In the Haunted Hallow, haunting spirits materialize, their ghostly forms flickering in the dim light. The air is charged with otherworldly energy, as the ethereal inhabitants silently observe intruders.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [HAUNTING_SPIRIT, HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Grim Garrison",
    description: "The Grim Garrison stands in eerie silence. A forsaken commander, a wretched specter, commands unseen forces. The weight of forgotten battles lingers, as the restless commander awaits in the shadows.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: FORSAKEN_COMMANDER,
    },
  },
  {
    roomName: "Dreadbone Chamber",
    description: "The Dreadbone Chamber resonates with the echoes of skeletal hands. Bone-white appendages emerge from the darkness, reaching for the living.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SKELETAL_HANDS,
    },
  },
  {
    roomName: "Bloodstained Bridge",
    description: "The Bloodstained Bridge spans a chasm filled with bone. Crimson stains mark the way, leading to a perilous path where pendulum blades swing ominously. An unsettling quiet shrouds the impending danger.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: PENDULUM_BLADES,
    },
  },
  {
    roomName: "Cadaver Crypt",
    description: "Within the Cadaver Crypt, stone walls encase a macabre gallery of lifeless forms. The air is heavy with the scent of decay, and the distant scrape of spike walls signals impending danger to intruders.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: SPIKE_WALLS,
    },
  },
  {
    roomName: "Haunting Bloodcellar",
    description: "In the Haunting Bloodcellar, ethereal spirits drift through crimson-hued mist. Haunting whispers linger, an unsettling symphony accompanying the ghostly presence. The air itself seems to mourn the forgotten souls trapped within.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [HAUNTING_SPIRIT, HAUNTING_SPIRIT],
      items: [],
      events: null,
    },
  },
  {
    roomName: "The Laughing Coffin Tavern",
    description:
      "The Laughing Coffin tavern stands as a sanctuary, welcoming scoundrels and coin-bearers alike. Here, amid the shadows, an unexpected haven emerges—a place to relax, where whispered secrets and clinking coins intertwine in the dim-lit embrace of this clandestine refuge.",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: LAUGHING_COFFIN_EVENT,
    },
  },
  {
    roomName: "Bone-forged Altar",
    description: "The Bone-forged Altar exudes an eerie tranquility. Skeletal remains, meticulously arranged, form a macabre mosaic.",
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
    roomName: "Pestilent Pit",
    description: "Within the Pestilent Pit, a noxious mist clings to the walls, harboring unseen dangers. The ground trembles beneath, hinting at the lurking menace of a spike-laden pitfall, ready to ensnare the unwary explorer.",
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
    roomName: "Pile of Skulls",
    description: "A chamber draped in an unsettling aura, dominated by a sprawling pile of skulls. Each skull tells a tale of doom and demise. Grervil the Bodiless, emerges from the bone-strewn depths.",
    summary: "",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: GRERVIL_THE_BODILESS,
    },
  },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/rattling-hollow.png",
    music: null,
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
    backgroundImage: "styles/images/rattling-hollow.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
];

// ===============================
//         Tier Three Rooms
// ===============================

// Unlock at level 5

let tierThreeRooms = [
  {
    roomName: "Blood Alter",
    description:
      "The altar, carved from the cold, black stone native to the catacombs, stands in a chamber illuminated only by the eerie glow of blood-red torches. The walls are adorned with morbid murals, depicting the Lord of Crimson, the deity of blood and life.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: CRIMSON_COVENANT,
    },
  },
  {
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
        // writeToLog(LOG_EVENT_ROOM, LOST_LEGIONS_VALE);  // NEED TO FIX!!!
      }, 1500);
    },
  },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/rattling-hollow.png",
    music: null,
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
    backgroundImage: "styles/images/rattling-hollow.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: LOCKED_ROOM,
    },
  },
];

// ===============================
//         Tier Four Rooms
// ===============================

// Unlock at level 7

let tierFourRooms = [
  {
    roomName: "Bastion of Bone", // !FINISHED!
    description: "A chamber with a large pile of skulls in the center.",
    summary: "",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Malevolent Shrine", // !FINISHED!
    description: "A chamber with a large pile of skulls in the center.",
    summary: "",
    backgroundImage: "styles/images/corridor-two.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Vileblood Vestibule",
    description: "",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: CRIMSON_COVENANT,
    },
  },
  {
    roomName: "Forsaken Bloodhold",
    description: "",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: null,
    },
  },
  {
    roomName: "Blood Alter",
    description:
      "The altar, carved from the cold, black stone native to the catacombs, stands in a chamber illuminated only by the eerie glow of blood-red torches. The walls are adorned with morbid murals, depicting the Lord of Crimson, the deity of blood and life.",
    summary: "",
    backgroundImage: "styles/images/corridor-one.png",
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: CRIMSON_COVENANT,
    },
  },
  {
    roomName: "Bonevault",
    description:
      "Bonevaults stand as silent repositories of forgotten horrors. Their entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.",
    backgroundImage: "styles/images/rattling-hollow.png",
    music: null,
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
    backgroundImage: "styles/images/rattling-hollow.png",
    music: null,
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
  description: "A safe place.",
  summary: "",
  backgroundImage: "styles/images/corridor-one.png",
  music: null,
  contents: {
    monsters: [],
    items: [],
    events: SAFE_ROOM,
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
      // writeToLog(LOG_EVENT_ROOM, LOST_LEGIONS_VALE);  // NEED TO FIX!!!
    }, 1500);
  },
};

const LAUGHING_COFFIN_ROOM = {
  roomName: "The Laughing Coffin Tavern",
  description:
    "The Laughing Coffin tavern stands as a sanctuary, welcoming scoundrels and coin-bearers alike. Here, amid the shadows, an unexpected haven emerges—a place to relax, where whispered secrets and clinking coins intertwine in the dim-lit embrace of this clandestine refuge.",
  backgroundImage: "styles/images/backgrounds/laughing-coffin.jpg",
  music: unfinishedBusiness,
  contents: {
    monsters: [],
    items: [],
    events: LAUGHING_COFFIN_EVENT,
  },
};

const BLOOD_ALTER = {
  roomName: "Blood Alter",
  description:
    "The altar, carved from the cold, black stone native to the catacombs, stands in a chamber illuminated only by the eerie glow of blood-red torches. The walls are adorned with morbid murals, depicting the Lord of Crimson, the deity of blood and life.",
  summary: "",
  backgroundImage: "styles/images/backgrounds/crimson-covenant.jpg",
  music: imminentDarkness,
  contents: {
    monsters: [],
    items: [],
    events: CRIMSON_COVENANT,
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
  description:
    "Ivan's Hidden Cache, a clandestine chamber within the catacombs, echoes with whispered secrets and the scent of ill-gotten gains. Anticipation hangs thick in the air as tales of treasures untold circulate. At the heart of the room, a mysterious chest guards the spoils, tempting fate with promises of riches waiting to be unveiled.",
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
//         Boss Rooms
// ===============================

const THRONE_OF_THE_ETERNAL = {
  roomName: "Thrown of the Eternal",
  description: "",
  backgroundImage: "",
  music: null,
  contents: {
    monsters: [BARON_OF_BONE],
    items: [],
    events: null,
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
  if (roomMonsters[0].type === "UNDEAD" && HAUNTED.duration !== null) {
    let randomSpirits = Math.round(Math.random() * 2);
    console.log("UNDEAD FOUND");
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

function checkForNewTier() {
  // Tier Two Rooms
  setTimeout(() => {
    if (roomCounter === 25) {
      catacombRooms = catacombRooms.concat(tierTwoRooms);
    }
  });

  // Tier Three Rooms
  setTimeout(() => {
    if (roomCounter === 50) {
      catacombRooms = catacombRooms.concat(tierThreeRooms);
    }
  });

  // Tier Four Rooms
  setTimeout(() => {
    if (roomCounter === 75) {
      catacombRooms = catacombRooms.concat(tierFourRooms);
    }
  });

  // Boss Room
  setTimeout(() => {});
  if (roomCounter === 100) {
    catacombRooms.push(THRONE_OF_THE_ETERNAL);
  }
}

// ===============================
//    Catacomb Entrance Modal
// ===============================

function closeCatacombsEntranceModal() {
  catacombEntranceModal.style.display = "none";
}
