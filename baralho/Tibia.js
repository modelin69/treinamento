const bootsOfHaste = {
    name: 'Boots of Haste',
    imbuementSlots: 1,
    speed: 20,
    weight: 7.50,
    bodyPosition: 'feet',
    tradeableInMarket: true,
    classification: 2
};

const soulBleeder = {
    name: 'Soulbleeder',
    attack: 8,
    hitChance: 5,
    imbuementSlots: 3,
    distanceFighting: 4,
    criticalHitChance: 10,
    criticalExtraDamage: 10,
    protection: {
        holy: 7
    },
    weight: 47.00,
    requiredLevel: 400,
    professions: 'paladins',
    weaponType: 'distance',
    bodyPosition: 'hand',
    tradeableInMarket: true,
    classification: 4
};

const cobraWand = {
    name: 'Cobra Wand',
    imbuementSlots: 2,
    criticalHitChance: 10,
    criticalExtraDamage: 35,
    magicLevel: +2,
    weight: 19.00,
    requiredLevel: 270,
    professions: 'sorcerers',
    weaponType: 'wand',
    bodyPosition: 'hand',
    tradeableInMarket: true,
    classification: 4
};

const magicLongSword = {
    name: 'Magic Long Sword',
    description: "It's the magic Cyclopmania Sword.",
    attack: 55,
    defense: 40,
    weight: 43.00,
    requiredLevel: 140,
    professions: 'knights',
    weaponType: 'sword, two-handed',
    bodyPosition: 'hand',
    tradeableInMarket: true,
    classification: 4
};

const soulTainter = {
    name: 'Soul Tainter',
    imbuementSlots: 2,
    criticalHitChance: 10,
    criticalExtraDamage: 10,
    magicLevel: 5,
    protection: {
        death: 12
    },
    weight: 19.00,
    requiredLevel: 400,
    professions: 'sorcerers',
    weaponType: 'wand',
    bodyPosition: 'hand',
    tradeableInMarket: true,
    classification: 4
};

const gnomeArmor = {
    name: 'Gnome Armor',
    armor: 17,
    imbuementSlots: 2,
    distanceFighting: 3,
    protection: {
        physical: 4,
        energy: 8,
        ice: -2
    },
    weight: 120.00,
    requiredLevel: 200,
    professions: 'paladins',
    bodyPosition: 'body',
    tradeableInMarket: true,
    classification: 3
};

const knightArmor = {
    name: 'Knight Armor',
    armor: 12,
    imbuementSlots: 2,
    weight: 120.00,
    professions: 'knights and paladins',
    bodyPosition: 'body',
    tradeableInMarket: true,
    classification: 2
};

const paladinArmor = {
    name: 'Paladin Armor',
    armor: 12,
    imbuementSlots: 1,
    distanceFighting: 2,
    weight: 65.00,
    professions: 'paladins',
    bodyPosition: 'body',
    tradeableInMarket: true,
    classification: 2
};

const masterMindShield = {
    name: 'Master Mind Shield',
    description: "It's an enchanted shield.",
    defense: 37,
    imbuementSlots: 1,
    weight: 57.00,
    bodyPosition: 'hand',
    tradeableInMarket: true
};

const falconBow = {
    name: 'Falcon Bow',
    attack: 7,
    hitChance: 5,
    imbuementSlots: 3,
    distanceFighting: 2,
    protection: {
        fire: 5
    },
    weight: 35.00,
    requiredLevel: 300,
    professions: 'paladins',
    weaponType: 'distance',
    bodyPosition: 'hand',
    tradeableInMarket: true,
    classification: 4
};


const itens = [
    bootsOfHaste,
    soulBleeder,
    cobraWand,
    magicLongSword,
    soulTainter,
    gnomeArmor,
    knightArmor,
    paladinArmor,
    masterMindShield,
    falconBow
];