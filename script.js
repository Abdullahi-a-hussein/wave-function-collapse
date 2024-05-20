const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 800;
const cellSize = 50;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const veritcalCells = Math.floor(canvas.height / cellSize);
const horizontalCells = Math.floor(canvas.width / cellSize);
let grid = [];

for (let j = 0; j < veritcalCells; j++) {
  const gridRow = [];
  for (let i = 0; i < horizontalCells; i++) {
    const cell = {
      x: i,
      y: j,
      collapsed: false,
      options: tiles,
      tile: "empty",
    };
    gridRow.push(cell);
  }
  grid.push(gridRow);
}

function fillTileAndUpdateGrid(grid, tileToFile) {
  const neighbors = neumannNeighborhood(grid, tileToFile);
  const option =
    tileToFile.options[Math.floor(Math.random() * tileToFile.options.length)];
  grid[tileToFile.y][tileToFile.x].options = [];
  grid[tileToFile.y][tileToFile.x].tile = option.name;
  grid[tileToFile.y][tileToFile.x].collapsed = true;
  const valid = reduceOptions(option);

  for (let j = 0; j < neighbors.length; j++) {
    const cell = neighbors[j].cell;
    const direction = neighbors[j].direction;

    if (!grid[cell.y][cell.x].collapsed) {
      const validOptions = grid[cell.y][cell.x].options.filter((entry) => {
        return valid[direction].includes(entry.name);
      });
      grid[cell.y][cell.x].options = validOptions;
    }
  }
  return {
    x: tileToFile.x,
    y: tileToFile.y,
    tile: option.tile,
  };
}

function pickTile(grid) {
  let minOptions = null;

  // First, find an initial non-collapsed cell to start with
  for (let j = 0; j < veritcalCells; j++) {
    for (let i = 0; i < horizontalCells; i++) {
      if (!grid[j][i].collapsed) {
        minOptions = grid[j][i];
        break;
      }
    }
    if (minOptions !== null) {
      break;
    }
  }

  // If all cells are collapsed, return null
  if (minOptions === null) {
    return null;
  }

  // Find a non-collapsed cell with the minimum number of options
  for (let j = 0; j < veritcalCells; j++) {
    for (let i = 0; i < horizontalCells; i++) {
      if (
        !grid[j][i].collapsed &&
        grid[j][i].options.length < minOptions.options.length
      ) {
        minOptions = grid[j][i];
      }
    }
  }

  // Collect all non-collapsed cells with the same number of minimum options
  const sameSize = [];
  for (let j = 0; j < veritcalCells; j++) {
    for (let i = 0; i < horizontalCells; i++) {
      if (
        !grid[j][i].collapsed &&
        grid[j][i].options.length === minOptions.options.length
      ) {
        sameSize.push(grid[j][i]);
      }
    }
  }

  // Return a random cell among those with the same minimum number of options
  return sameSize[Math.floor(Math.random() * sameSize.length)];
}

for (let j = 0; j < veritcalCells; j++) {
  for (let i = 0; i < horizontalCells; i++) {
    ctx.beginPath();

    ctx.strokeStyle = "white";
    ctx.rect(i * cellSize, j * cellSize, cellSize, cellSize);
    ctx.stroke();
  }
}

function drawGrid() {
  for (let j = 0; j < veritcalCells; j++) {
    for (let i = 0; i < horizontalCells; i++) {
      ctx.beginPath();

      ctx.strokeStyle = "white";
      ctx.rect(i * cellSize, j * cellSize, cellSize, cellSize);
      ctx.stroke();
    }
  }
}
function reduceOptions(tile) {
  const validOptions = {};
  switch (tile.name) {
    case "up":
      validOptions.top = ["down", "left", "right"];
      validOptions.bottom = ["down", "blank"];
      validOptions.left = ["up", "down", "right"];
      validOptions.right = ["up", "down", "left"];
      break;
    case "down":
      validOptions.top = ["up", "blank"];
      validOptions.bottom = ["up", "right", "left"];
      validOptions.left = ["up", "down", "right"];
      validOptions.right = ["up", "down", "left"];
      break;
    case "left":
      validOptions.top = ["down", "right", "left"];
      validOptions.bottom = ["up", "right", "left"];
      validOptions.left = ["up", "down", "right"];
      validOptions.right = ["right", "blank"];
      break;

    case "right":
      validOptions.top = ["down", "right", "left"];
      validOptions.bottom = ["up", "right", "left"];
      validOptions.left = ["left", "blank"];
      validOptions.right = ["up", "down", "left"];
      break;
    case "blank":
      validOptions.top = ["up", "blank"];
      validOptions.bottom = ["down", "blank"];
      validOptions.left = ["left", "blank"];
      validOptions.right = ["right", "blank"];
      break;
  }
  return validOptions;
}

// drawing

function animate() {
  let option = pickTile(grid);
  if (option === null) {
    return;
  } else {
    const tile = fillTileAndUpdateGrid(grid, option);

    tile.tile.draw(ctx, tile.x, tile.y);

    requestAnimationFrame(animate);
  }
}
animate();

// else if (!option.collapsed && option.options.length === 0) {
//     grid = [];
//     for (let j = 0; j < veritcalCells; j++) {
//       const gridRow = [];
//       for (let i = 0; i < horizontalCells; i++) {
//         const cell = {
//           x: i,
//           y: j,
//           collapsed: false,
//           options: tiles,
//           tile: "empty",
//         };
//         gridRow.push(cell);
//       }
//       grid.push(gridRow);
//     }
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawGrid();
//     option = pickTile(grid);
//     const tile = fillTileAndUpdateGrid(grid, option);

//     tile.tile.draw(ctx, tile.x, tile.y);

//     requestAnimationFrame(animate);
