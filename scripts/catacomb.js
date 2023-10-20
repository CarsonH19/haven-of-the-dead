// This file holds the array of objects detailing each room within the catacomb.
// Rooms are selected at random.
// When a room is completed it is removed from the array.
// If a player flees from the room it is not removed from the array.

let catacombRooms = [
    {
        roomName: 'Bonevault',
        backgroundImage: null,
        music: null,
        contents: {
            monsters: [],
            npcs: null,
            items: [bonemail],
            consumables: [null],
            traps: null
        }
    },
    {
        roomName: '',
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
        roomName: '',
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