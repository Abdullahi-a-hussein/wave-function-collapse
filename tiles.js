const size = 50;
const path = "images/circuit";
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
    tile: new Tile(`${path}/0.png`, size),
    name: "0",
    connections: {
      top: ["0", "9", "8", "7", "4"],
      bottom: ["0", "10", "2", "8", "5", "4", "12"],
      left: ["0", "13"],
      right: ["0", "13"],
    },
  },
  {
    tile: new Tile(`${path}/10.png`, size),
    name: "10",
    connections: {
      top: ["0", "9", "8", "7", "4"],
      bottom: ["3", "13", "7", "6", "11"],
      left: ["9", "3", "8", "6", "12"],
      right: ["7", "4", "11"],
    },
  },
  {
    tile: new Tile(`${path}/9.png`, size),
    name: "9",
    connections: {
      top: [],
      bottom: ["0", "10", "2", "8", "5", "4", "12"],
      left: ["9", "3", "8", "6", "12"],
      right: ["10", "9", "8", "6", "5", "12"],
    },
  },
  {
    tile: new Tile(`${path}/2.png`, size),
    name: "2",
    connections: {
      top: ["0", "9", "8", "7", "4"],
      bottom: ["1"],
      left: [],
      right: ["3"],
    },
  },
  {
    tile: new Tile(`${path}/3.png`, size),
    name: "3",
    connections: {
      top: ["10", "13", "6", "5", "11", "12"],
      bottom: [],
      left: ["2"],
      right: ["10", "9", "8", "6", "5", "12"],
    },
  },
  {
    tile: new Tile(`${path}/8.png`, size),
    name: "8",
    connections: {
      top: ["0", "9", "8", "7", "4"],
      bottom: ["0", "10", "2", "8", "5", "4", "12"],
      left: ["9", "3", "8", "6", "12"],
      right: ["10", "9", "8", "6", "5", "12"],
    },
  },
  {
    tile: new Tile(`${path}/13.png`, size),
    name: "13",
    connections: {
      top: ["10", "13", "6", "5", "11", "12"],
      bottom: ["3", "13", "7", "6", "11"],
      left: ["0", "13"],
      right: ["0", "13"],
    },
  },
  {
    tile: new Tile(`${path}/7.png`, size),
    name: "7",
    connections: {
      top: ["10", "13", "6", "5", "11", "12"],
      bottom: ["0", "10", "2", "8", "5", "4", "12"],
      left: ["10", "7", "5", "4", "11"],
      right: ["7", "4", "11"],
    },
  },
  {
    tile: new Tile(`${path}/6.png`, size),
    name: "6",
    connections: {
      top: ["10", "13", "6", "5", "11", "12"],
      bottom: ["3", "13", "7", "6", "11"],
      left: ["9", "3", "8", "6", "12"],
      right: ["10", "9", "8", "6", "5", "12"],
    },
  },
  {
    tile: new Tile(`${path}/1.png`, size),
    name: "1",
    connections: {
      top: ["2", "1"],
      bottom: ["1"],
      left: ["1"],
      right: ["1"],
    },
  },
  {
    tile: new Tile(`${path}/5.png`, size),
    name: "5",
    connections: {
      top: ["0", "9", "8", "7", "4"],
      bottom: ["3", "13", "7", "6", "11"],
      left: ["9", "3", "8", "6", "12"],
      right: ["7", "4", "11"],
    },
  },
  {
    tile: new Tile(`${path}/4.png`, size),
    name: "4",
    connections: {
      top: ["0", "9", "8", "7", "4"],
      bottom: ["0", "10", "2", "8", "5", "4", "12"],
      left: ["10", "7", "5", "4", "11"],
      right: ["7", "4", "11"],
    },
  },
  {
    tile: new Tile(`${path}/11.png`, size),
    name: "11",
    connections: {
      top: ["10", "13", "6", "5", "11", "12"],
      bottom: ["3", "13", "7", "6", "11"],
      left: ["10", "7", "5", "4", "11"],
      right: ["7", "4", "11"],
    },
  },
  {
    tile: new Tile(`${path}/12.png`, size),
    name: "12",
    connections: {
      top: ["0", "9", "8", "7", "4"],
      bottom: ["3", "13", "7", "6", "11"],
      left: ["9", "3", "8", "6", "12"],
      right: ["10", "9", "8", "6", "5", "12"],
    },
  },
];
