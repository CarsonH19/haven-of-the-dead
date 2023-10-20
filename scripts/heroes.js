// ===============================
//        Hero Variables
// ===============================
let baseAttack;
let baseCritChance = 1.5 + dexterityCritIncrease;
let baseMaxHealth;
let maxHealth = baseMaxHealth + strengthBonusHealth;

// Strength
let baseStrength; //add strength to bonus damage after random number
let strengthBonusHealth = baseStrength * 10;

// Dexterity
let baseDexterity; // add deterity to guard protection after random number
let dexterityCritIncrease = 0.3 * baseDexterity;

// Faith
let baseFaith; // add faith to flee function after random number
let findItemChance; // use when items are finished

// Special & Abilities
let specialAbility;
let passiveAbility;

// ===============================
//        Hero: Paladin
// ===============================
let holySmiteTracker =0;
let radiantAuraTracker = 0;
let paladin = {
    name: 'Holy Warrior Siggurd',
    level: 1,
    attack: 10,
    maxHealth: 120,
    strength: 2,
    dexterity: 0,
    faith: 1,
    special: paladinHolySmite(),
    passive: paladinRadiantAura()
};

// Palading Special & Passive 
function setPaladinStats() {
    baseAttack = paladin.attack;
    baseMaxHealth = paladin.maxHealth;
    baseStrength = paladin.strength;
    baseDexterity = paladin.dexterity;
    baseFaith = paladin.faith;
    specialAbility = paladin.special;
    passiveAbility = paladin.passive;
}

function paladinHolySmite() {}
function paladinRadiantAura() {}


// ===============================
//        Hero: Rogue
// ===============================
let shadowStrikeTracker = 0;
let evasionTracker = 0;
let rogue = {
    name: 'Shadowcloak Riven',
    level: 1,
    attack: 12,
    maxHealth: 100,
    strength: 1,
    dexterity: 2,
    faith: 0,
    special: rogueShadowStrike(),
    passive: rogueEvasion()
};

// Palading Special & Passive 
function setrogueStats() {
    baseAttack = rogue.attack;
    baseMaxHealth = rogue.maxHealth;
    baseStrength = rogue.strength;
    baseDexterity = rogue.dexterity;
    baseFaith = rogue.faith;
    specialAbility = rogue.special;
    passiveAbility = rogue.passive;
}

function rogueShadowStrike() {}
function rogueEvasion() {}

// ===============================
//        Hero: Priestess
// ===============================
let greaterPrayerTracker = 0;
let guidingLightTracker = 0;
let priestess = {
    name: 'Priestess Liheth',
    level: 1,
    attack: 8,
    maxHealth: 90,
    strength: 0,
    dexterity: 1,
    faith: 2,
    special: priestessGreaterPrayer(),
    passive: priestessGuidingLight()
};

// Palading Special & Passive 
function setPriestessStats() {
    baseAttack = priestess.attack;
    baseMaxHealth = priestess.maxHealth;
    baseStrength = priestess.strength;
    baseDexterity = priestess.dexterity;
    baseFaith = priestess.faith;
    specialAbility = priestess.special;
    passiveAbility = priestess.passive;
}

function priestessGreaterPrayer() {}
function priestessGuidingLight() {}


// ===============================
//        Boons & Leveling
// ===============================
let availableBoons = [];

// randomly choose a boon
// discard chosen boon from list
// apply boon to hero
