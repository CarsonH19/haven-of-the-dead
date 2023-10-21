// This file holds the array of objects detailing each room within the catacomb.
// Rooms are selected at random.
// When a room is completed it is removed from the array.
// If a player flees from the room it is not removed from the array.

const roomNameElement = document.getElementById('catacombRoomName');

function getRandomRoom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    enterRoom(array[randomIndex]);
}

function enterRoom(room) {
    roomNameElement.textContent = room.roomName;

    // renderMonsterStatBlock(room.contents.monsters);
}


let catacombRooms = [
    {
        roomName: "Bonevault",
        backgroundImage: null,
        music: null,
        contents: {
            monsters: [CRYPT_CRAWLER],
            npcs: null,
            items: [],
            consumables: [],
            traps: null
        }
    },
    {
        roomName: "Gnawer's Nest",
        backgroundImage: null,
        music: null,
        contents: {
            monsters: [],
            npcs: null,
            items: [],
            consumables: null,
            traps: null
        }
    },
    {
        roomName: "Skull-lined Corridor",
        backgroundImage: null,
        music: null,
        contents: {
            monsters: [],
            npcs: null,
            items: [],
            consumables: null,
            traps: null
        }
    }
]

