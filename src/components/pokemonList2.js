const pokemonList = [
  {
    name: 'bulbasaur',
    id: 1,
    type: 'grass poison'
  },  {
    name: 'ivysaur',
    id: 2,
    type: 'grass poison'
  },  {
    name: 'venusaur',
    id: 3,
    type: 'grass poison'
  },  {
    name: 'charmander',
    id: 4,
    type:'fire'
  },  {
    name: 'charmeleon',
    id: 5,
    type: 'fire'
  },  {
    name: 'charizard',
    id: 6,
    type: 'fire'
  },  {
    name: 'squirtle',
    id: 7,
    type: 'water'
  },  {
    name: 'wartortle',
    id: 8,
    type: 'water'
  },  {
    name: 'blastoise',
    id: 9,
    type: 'water'
  },  {
    name: 'caterpie',
    id: 10,
    type: 'bug'
  },  {
    name: 'metapod',
    id: 11,
    type: 'bug'
  },  {
    name: 'butterfree',
    id: 12,
    type: 'bug flying'
  },  {
    name: 'weedle',
    id: 13,
    type: 'bug poison'
  },  {
    name: 'kakuna',
    id: 14,
    type: 'bug poison'
  },  {
    name: 'beedrill',
    id: 15,
    type: 'bug poison'
  },  {
    name: 'pidgey',
    id: 16,
    type: 'normal flying'
  },  {
    name: 'pidgeotto',
    id: 17,
    type: 'normal flying'
  },  {
    name: 'pidgeot',
    id: 18,
    type: 'normal flying'
  },  {
    name: 'rattata',
    id: 19,
    type: 'normal'
  },  {
    name: 'raticate',
    id: 20,
    type: 'normal'
  },  {
    name: 'spearow',
    id: 21,
    type: 'normal flying'
  },  {
    name: 'fearow',
    id: 22,
    type: 'normal flying'
  },  {
    name: 'ekans',
    id: 23,
    type: 'poison'
  },  {
    name: 'arbok',
    id: 24,
    type: 'poison'
  },  {
    name: 'pikachu',
    id: 25,
    type: 'electric'
  },  {
    name: 'raichu',
    id: 26,
    type: 'electric'
  },  {
    name: 'sandshrew',
    id: 27,
    type: 'ground'
  },  {
    name: 'sandslash',
    id: 28,
    type: 'ground'
  },  {
    name: 'nidoran',
    id: 29,
    type: 'poison'
  },  {
    name: 'nidorina',
    id: 30,
    type: 'poison'
  },  {
    name: 'nidoqueen',
    id: 31,
    type: 'poison ground'
  },  {
    name: 'nidoran',
    id: 32,
    type: 'poison'
  },  {
    name: 'nidorino',
    id: 33,
    type: 'poison'
  },  {
    name: 'nidoking',
    id: 34,
    type: 'poison ground'
  },  {
    name: 'clefairy',
    id: 35,
    type: 'fairy'
  },  {
    name: 'clefable',
    id: 36,
    type: 'fairy'
  },  {
    name: 'vulpix',
    id: 37,
    type: 'fire'
  },  {
    name: 'ninetails',
    id: 38,
    type: 'fire'
  },  {
    name: 'jigglypuff',
    id: 39,
    type: 'normal fairy'
  },  {
    name: 'wigglytuff',
    id: 40,
    type: 'normal fairy'
  },  {
    name: 'zubat',
    id: 41,
    type: 'poison flying'
  },  {
    name: 'golbat',
    id: 42,
    type: 'poison flying'
  },  {
    name: 'oddish',
    id: 43,
    type: 'grass poison'
  },  {
    name: 'gloom',
    id: 44,
    type: 'grass poison'
  },  {
    name: 'vileplume',
    id: 45,
    type: 'grass poison'
  },  {
    name: 'paras',
    id: 46,
    type: 'bug grass'
  },  {
    name: 'parasect',
    id: 47,
    type: 'bug grass'
  },  {
    name: 'venonat',
    id: 48,
    type: 'bug poison'
  },  {
    name: 'venomoth',
    id: 49,
    type: 'bug poison'
  },  {
    name: 'diglet',
    id: 50,
    type: 'ground'
  },  {
    name: 'dugtrio',
    id: 51,
    type: 'ground'
  },  {
    name: 'meowth',
    id: 52,
    type: 'normal'
  },  {
    name: 'persian',
    id: 53,
    type: 'normal'
  },  {
    name: 'psyduck',
    id: 54,
    type: 'water'
  },  {
    name: 'golduck',
    id: 55,
    type: 'water'
  },  {
    name: 'mankey',
    id: 56,
    type: 'fighting'
  },  {
    name: 'primape',
    id: 57,
    type: 'fighting'
  },  {
    name: 'growlithe',
    id: 58,
    type: 'fire'
  },  {
    name: 'arcanine',
    id: 59,
    type: 'fire'
  },  {
    name: 'poliwag',
    id: 60,
    type: 'water'
  },  {
    name: 'poliwhirl',
    id: 61,
    type: 'water'
  },  {
    name: 'poliwrath',
    id: 62,
    type: 'water fighting'
  },  {
    name: 'abra',
    id: 63,
    type: 'psychic'
  },  {
    name: 'kadabra',
    id: 64,
    type: 'psychic'
  },  {
    name: 'alakazam',
    id: 65,
    type: 'psychic'
  },  {
    name: 'machop',
    id: 66,
    type: 'fighting'
  },  {
    name: 'machoke',
    id: 67,
    type: 'fighting'
  },  {
    name: 'machamp',
    id: 68,
    type: 'fighting'
  },  {
    name: 'bellsprout',
    id: 69,
    type: 'grass poison'
  },  {
    name: 'weepinbell',
    id: 70,
    type: 'grass poison'
  },  {
    name: 'victreebel',
    id: 71,
    type: 'grass poison'
  },  {
    name: 'tentacool',
    id: 72,
    type: 'water poison'
  },  {
    name: 'tentacruel',
    id: 73,
    type: 'water poison'
  },  {
    name: 'geodude',
    id: 74,
    type: 'rock ground'
  },  {
    name: 'graveler',
    id: 75,
    type: 'rock ground'
  },  {
    name: 'golem',
    id: 76,
    type: 'rock ground'
  },  {
    name: 'ponyta',
    id: 77,
    type: 'fire'
  },  {
    name: 'rapidash',
    id: 78,
    type: 'fire'
  },  {
    name: 'slowpoke',
    id: 79,
    type: 'water psychic'
  },  {
    name: 'slowbro',
    id: 80,
    type: 'water psychic'
  },  {
    name: 'magnemite',
    id: 81,
    type: 'electric steel'
  },  {
    name: 'magneton',
    id: 82,
    type: 'electric steel'
  },  {
    name: 'farfetch\'d',
    id: 83,
    type: 'normal flying'
  },  {
    name: 'doduo',
    id: 84,
    type: 'normal flying'
  },  {
    name: 'dodrio',
    id: 85,
    type: 'normal flying'
  },  {
    name: 'seel',
    id: 86,
    type: 'water'
  },  {
    name: 'dewgong',
    id: 87,
    type: 'water ice'
  },  {
    name: 'grimer',
    id: 88,
    type: 'poison'
  },  {
    name: 'muk',
    id: 89,
    type: 'poison'
  },  {
    name: 'shellder',
    id: 90,
    type: 'water'
  },  {
    name: 'cloyster',
    id: 91,
    type: 'water ice'
  },  {
    name: 'gastly',
    id: 92,
    type: 'ghost poison'
  },  {
    name: 'haunter',
    id: 93,
    type: 'ghost poison'
  },  {
    name: 'gengar',
    id: 94,
    type: 'ghost poison'
  },  {
    name: 'onix',
    id: 95,
    type: 'rock ground'
  },  {
    name: 'drowzee',
    id: 96,
    type: 'psychic'
  },  {
    name: 'hypno',
    id: 97,
    type: 'psychic'
  },  {
    name: 'krabby',
    id: 98,
    type: 'water'
  },  {
    name: 'kingler',
    id: 99,
    type: 'water'
  },  {
    name: 'voltorb',
    id: 100,
    type: 'electric'
  },  {
    name: 'electrode',
    id: 101,
    type: 'electric'
  },  {
    name: 'exeggcute',
    id: 102,
    type: 'grass psychic'
  },  {
    name: 'exeggutor',
    id: 103,
    type: 'grass psychic'
  },  {
    name: 'cubone',
    id: 104,
    type: 'ground'
  },  {
    name: 'marrowak',
    id: 105,
    type: 'ground'
  },  {
    name: 'hitmonlee',
    id: 106,
    type: 'fighting'
  },  {
    name: 'hitmonchan',
    id: 107,
    type: 'fighting'
  },  {
    name: 'lickitung',
    id: 108,
    type: 'normal'
  },  {
    name: 'koffing',
    id: 109,
    type: 'poison'
  },  {
    name: 'weezing',
    id: 110,
    type: 'poison'
  },  {
    name: 'rhyhorn',
    id: 111,
    type: 'ground rock'
  },  {
    name: 'rhydon',
    id: 112,
    type: 'ground rock'
  },  {
    name: 'chansey',
    id: 113,
    type: 'normal'
  },  {
    name: 'tangela',
    id: 114,
    type: 'grass'
  },  {
    name: 'kangaskhan',
    id: 115,
    type: 'normal'
  },  {
    name: 'horsea',
    id: 116,
    type: 'water'
  },  {
    name: 'seadra',
    id: 117,
    type: 'water'
  },  {
    name: 'goldeen',
    id: 118,
    type: 'water'
  },  {
    name: 'seaking',
    id: 119,
    type: 'water'
  },  {
    name: 'staryu',
    id: 120,
    type: 'water'
  },  {
    name: 'starmie',
    id: 121,
    type: 'water psychic'
  },  {
    name: 'mr. mime',
    id: 122,
    type: 'psychic'
  },  {
    name: 'scyther',
    id: 123,
    type: 'bug flying'
  },  {
    name: 'jynx',
    id: 124,
    type: 'ice psychic'
  },  {
    name: 'electabuzz',
    id: 125,
    type: 'electric'
  },  {
    name: 'magmar',
    id: 126,
    type: 'fire'
  },  {
    name: 'pinsir',
    id: 127,
    type: 'bug'
  },  {
    name: 'tauros',
    id: 128,
    type: 'normal'
  },  {
    name: 'magikarp',
    id: 129,
    type: 'water'
  },  {
    name: 'gyrados',
    id: 130,
    type: 'water flying'
  },  {
    name: 'lapras',
    id: 131,
    type: 'water ice'
  },  {
    name: 'ditto',
    id: 132,
    type: 'normal'
  },  {
    name: 'eevee',
    id: 133,
    type: 'normal'
  },  {
    name: 'vaporeon',
    id: 134,
    type: 'water'
  },  {
    name: 'jolteon',
    id: 135,
    type: 'electric'
  },  {
    name: 'flareon',
    id: 136,
    type: 'fire'
  },  {
    name: 'porygon',
    id: 137,
    type: 'normal'
  },  {
    name: 'omanyte',
    id: 138,
    type: 'rock water'
  },  {
    name: 'omastar',
    id: 139,
    type: 'rock water'
  },  {
    name: 'kabuto',
    id: 140,
    type: 'rock water'
  },  {
    name: 'kabutops',
    id: 141,
    type: 'rock water'
  },  {
    name: 'aerodactyl',
    id: 142,
    type: 'rock flying'
  },  {
    name: 'snorlax',
    id: 143,
    type: 'normal'
  },  {
    name: 'articuno',
    id: 144,
    type: 'ice flying'
  },  {
    name: 'zapdos',
    id: 145,
    type: 'electric flying'
  },  {
    name: 'moltres',
    id: 146,
    type: 'fire flying'
  },  {
    name: 'dratini',
    id: 147,
    type: 'dragon'
  },  {
    name: 'dragonair',
    id: 148,
    type: 'dragon'
  },  {
    name: 'dragonite',
    id: 149,
    type: 'dragon flying'
  },  {
    name: 'mewtwo',
    id: 150,
    type: 'psychic'
  },  {
    name: 'mew',
    id: 151,
    type: 'psychic'
  }
];

export default pokemonList;