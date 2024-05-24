const size = 25;
const circuitPath = "images/circuit";
const tilePath = "images/tiles";
const waterPath = "images/tiles";

const topGGG = [
  "10",
  "13",
  "6",
  "5",
  "11",
  "12",
  "32",
  "33",
  "51",
  "72",
  "81",
  "91",
  "93",
  "101",
  "121",
  "123",
];
const bottomGGG = [
  "13",
  "11",
  "3",
  "6",
  "7",
  "31",
  "52",
  "53",
  "81",
  "91",
  "93",
  "102",
  "103",
  "121",
  "122",
  "123",
];
const leftGGG = [
  "8",
  "3",
  "6",
  "12",
  "33",
  "51",
  "52",
  "78",
  "92",
  "101",
  "102",
  "111",
  "121",
  "122",
  "131",
];
const rightGGG = [
  "10",
  "9",
  "8",
  "6",
  "5",
  "12",
  "31",
  "32",
  "53",
  "71",
  "92",
  "102",
  "111",
  "122",
  "123",
  "131",
];

const topBBB = ["1", "2"];
const bottomBBB = ["1", "22"];
const leftBBB = ["1", "21"];
const rightBBB = ["1", "23"];

const topGYG = [
  "0",
  "9",
  "8",
  "7",
  "4",
  "22",
  "52",
  "53",
  "71",
  "73",
  "103",
  "111",
  "122",
];
const bottomGYG = [
  "0",
  "10",
  "2",
  "8",
  "5",
  "4",
  "12",
  "51",
  "71",
  "72",
  "73",
  "92",
  "101",
  "111",
];
const leftGYG = [
  "01",
  "4",
  "5",
  "7",
  "23",
  "53",
  "71",
  "72",
  "81",
  "91",
  "103",
  "123",
];
const rightGYG = [
  "01",
  "4",
  "7",
  "21",
  "51",
  "52",
  "72",
  "73",
  "81",
  "101",
  "102",
  "121",
];

const topGWG = ["01", "92", "131"];
const bottomGWG = ["01", "9", "131"];
const leftGWG = ["0", "13", "93"];
const rightGWG = ["0", "13", "91"];

const topBGG = ["23", "3"];
const bottomBGG = ["23", "33"];
const leftBGG = ["22", "32"];
const rightBGG = ["22", "33"];

const topGGB = ["21", "31"];
const bottomGGB = ["21", "32"];
const leftGGB = ["2", "31"];
const rightGGB = ["2", "3"];

const waterAdjacent = {
  topGGGGG: ["0", "2", "4", "5", "8", "9", "12", "17", "21", "28", "29", "32"],
  bottomGGGGG: [
    "0",
    "2",
    "6",
    "7",
    "10",
    "11",
    "12",
    "23",
    "24",
    "30",
    "31",
    "34",
  ],
  leftGGGGG: [
    "1",
    "3",
    "5",
    "6",
    "9",
    "10",
    "12",
    "18",
    "22",
    "23",
    "29",
    "30",
    "33",
  ],
  rightGGGGG: [
    "1",
    "3",
    "4",
    "7",
    "8",
    "11",
    "12",
    "20",
    "21",
    "24",
    "28",
    "31",
    "35",
  ],
  topWWWWW: ["25", "26", "27", "34", "38", "39"],
  bottomWWWWW: ["25", "26", "27", "32", "36", "37"],
  leftWWWWW: ["25", "26", "27", "35", "36", "39"],
  rightWWWWW: ["25", "26", "27", "33", "37", "38"],

  leftGCGGG: ["2", "4", "11"],
  rightGCGGG: ["2", "5", "10"],

  topGCCCG: ["1", "3", "6", "7", "10", "11"],
  bottomGCCCG: ["1", "3", "4", "5", "8", "9"],
  leftGCCCG: ["0", "7", "8"],
  rightGCCCG: ["0", "6", "9"],

  leftWCGGG: ["28", "32", "37"],
  rightWCGGG: ["29", "32"],

  topWCCCG: [],
  bottomWCCCG: ["29"],
};

const tiles = [
  {
    tile: new Tile("images/tiles/up.png", size),
    name: "up",
    connections: {
      top: ["down", "left", "right"],
      bottom: ["down", "blank"],
      left: ["up", "down", "right"],
      right: ["up", "down", "left"],
    },
  },
  {
    tile: new Tile("images/tiles/down.png", size),
    name: "down",
    connections: {
      top: ["up", "blank"],
      bottom: ["up", "right", "left"],
      left: ["up", "down", "right"],
      right: ["up", "down", "left"],
    },
  },
  {
    tile: new Tile("images/tiles/left.png", size),
    name: "left",
    connections: {
      top: ["down", "right", "left"],
      bottom: ["up", "right", "left"],
      left: ["up", "down", "right"],
      right: ["right", "blank"],
    },
  },
  {
    tile: new Tile("images/tiles/right.png", size),
    name: "right",
    connections: {
      top: ["down", "right", "left"],
      bottom: ["up", "right", "left"],
      left: ["left", "blank"],
      right: ["up", "down", "left"],
    },
  },
  {
    tile: new Tile("images/tiles/blank.png", size),
    name: "blank",
    connections: {
      top: ["up", "blank"],
      bottom: ["down", "blank"],
      left: ["left", "blank"],
      right: ["right", "blank"],
    },
  },
];

const sockets = [
  {
    tile: new Tile(`${circuitPath}/0.png`, size),
    name: "0",
    connections: {
      top: topGYG,
      bottom: bottomGYG,
      left: leftGWG,
      right: rightGWG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/01.png`, size),
    name: "01",
    connections: {
      top: topGWG,
      bottom: bottomGWG,
      left: leftGYG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/1.png`, size),
    name: "1",
    connections: {
      top: topBBB,
      bottom: bottomBBB,
      left: leftBBB,
      right: rightBBB,
    },
  },
  {
    tile: new Tile(`${circuitPath}/2.png`, size),
    name: "2",
    connections: {
      top: topGYG,
      bottom: bottomBBB,
      left: leftGGB,
      right: rightGGB,
    },
  },
  {
    tile: new Tile(`${circuitPath}/21.png`, size),
    name: "21",
    connections: {
      top: topGGB,
      bottom: bottomGGB,
      left: leftGYG,
      right: rightBBB,
    },
  },
  {
    tile: new Tile(`${circuitPath}/22.png`, size),
    name: "22",
    connections: {
      top: topBBB,
      bottom: bottomGYG,
      left: leftBGG,
      right: rightBGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/23.png`, size),
    name: "23",
    connections: {
      top: topBGG,
      bottom: bottomBGG,
      left: leftBBB,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/3.png`, size),
    name: "3",
    connections: {
      top: topGGG,
      bottom: bottomBGG,
      left: leftGGB,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/31.png`, size),
    name: "31",
    connections: {
      top: topGGG,
      bottom: bottomGGB,
      left: leftGGG,
      right: rightGGB,
    },
  },
  {
    tile: new Tile(`${circuitPath}/32.png`, size),
    name: "32",
    connections: {
      top: topGGB,
      bottom: bottomGGG,
      left: leftGGG,
      right: rightBGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/33.png`, size),
    name: "33",
    connections: {
      top: topBGG,
      bottom: bottomGGG,
      left: leftBGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/4.png`, size),
    name: "4",
    connections: {
      top: topGYG,
      bottom: bottomGYG,
      left: leftGYG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/5.png`, size),
    name: "5",
    connections: {
      top: topGYG,
      bottom: bottomGGG,
      left: leftGGG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/51.png`, size),
    name: "51",
    connections: {
      top: topGYG,
      bottom: bottomGGG,
      left: leftGYG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/52.png`, size),
    name: "52",
    connections: {
      top: topGGG,
      bottom: bottomGYG,
      left: leftGYG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/53.png`, size),
    name: "53",
    connections: {
      top: topGGG,
      bottom: bottomGYG,
      left: leftGGG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/6.png`, size),
    name: "6",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/7.png`, size),
    name: "7",
    connections: {
      top: topGGG,
      bottom: bottomGYG,
      left: leftGYG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/71.png`, size),
    name: "71",
    connections: {
      top: topGYG,
      bottom: bottomGYG,
      left: leftGGG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/72.png`, size),
    name: "72",
    connections: {
      top: topGYG,
      bottom: bottomGGG,
      left: leftGYG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/73.png`, size),
    name: "73",
    connections: {
      top: topGYG,
      bottom: bottomGYG,
      left: leftGYG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/8.png`, size),
    name: "8",
    connections: {
      top: topGYG,
      bottom: bottomGYG,
      left: leftGGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/81.png`, size),
    name: "81",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGYG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/9.png`, size),
    name: "9",
    connections: {
      top: topGWG,
      bottom: bottomGYG,
      left: leftGGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/91.png`, size),
    name: "91",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGWG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/92.png`, size),
    name: "92",
    connections: {
      top: topGYG,
      bottom: bottomGWG,
      left: leftGGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/93.png`, size),
    name: "93",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGYG,
      right: rightGWG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/10.png`, size),
    name: "10",
    connections: {
      top: topGYG,
      bottom: bottomGGG,
      left: leftGGG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/101.png`, size),
    name: "101",
    connections: {
      top: topGYG,
      bottom: bottomGGG,
      left: leftGYG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/102.png`, size),
    name: "102",
    connections: {
      top: topGGG,
      bottom: bottomGYG,
      left: leftGYG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/103.png`, size),
    name: "103",
    connections: {
      top: topGGG,
      bottom: bottomGYG,
      left: leftGGG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/11.png`, size),
    name: "11",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGYG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/111.png`, size),
    name: "111",
    connections: {
      top: topGYG,
      bottom: bottomGYG,
      left: leftGGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/12.png`, size),
    name: "12",
    connections: {
      top: topGYG,
      bottom: bottomGGG,
      left: leftGGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/121.png`, size),
    name: "121",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGYG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/122.png`, size),
    name: "122",
    connections: {
      top: topGGG,
      bottom: bottomGYG,
      left: leftGGG,
      right: rightGGG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/123.png`, size),
    name: "123",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGGG,
      right: rightGYG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/13.png`, size),
    name: "13",
    connections: {
      top: topGGG,
      bottom: bottomGGG,
      left: leftGWG,
      right: rightGWG,
    },
  },
  {
    tile: new Tile(`${circuitPath}/131.png`, size),
    name: "131",
    connections: {
      top: topGWG,
      bottom: bottomGWG,
      left: leftGGG,
      right: rightGGG,
    },
  },
];

const water = [];
for (let i = 0; i < 40; i++) {
  water.push({
    tile: new Tile(`${waterPath}/${i}.png`, size),
    name: `${i}`,
    connections: {
      top: [],
      bottom: [],
      left: [],
      right: [],
    },
  });
}
