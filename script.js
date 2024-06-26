const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 800;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const tilesUsed = sockets;

const veritcalCells = Math.floor(canvas.height / size);
const horizontalCells = Math.floor(canvas.width / size);
let grid = [];

function collapseAndPropagate(grid, tileToFile) {
  const neighbors = neumannNeighborhood(grid, tileToFile);
  const option =
    tileToFile.options[Math.floor(Math.random() * tileToFile.options.length)];
  grid[tileToFile.y][tileToFile.x].options = [];
  grid[tileToFile.y][tileToFile.x].tile = option.name;
  grid[tileToFile.y][tileToFile.x].collapsed = true;

  for (let j = 0; j < neighbors.length; j++) {
    const cell = neighbors[j].cell;
    const direction = neighbors[j].direction;
    const valid = option.connections[direction];

    if (!grid[cell.y][cell.x].collapsed) {
      const validOptions = grid[cell.y][cell.x].options.filter((entry) => {
        return valid.includes(entry.name);
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

function pickTileWithLowestenthropy(grid) {
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

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let j = 0; j < veritcalCells; j++) {
    for (let i = 0; i < horizontalCells; i++) {
      ctx.beginPath();
      ctx.rect(i * size, j * size, size, size);
      ctx.fill();
    }
  }
}

function recreateGrid() {
  grid = [];
  for (let j = 0; j < veritcalCells; j++) {
    const gridRow = [];
    for (let i = 0; i < horizontalCells; i++) {
      const cell = {
        x: i,
        y: j,
        collapsed: false,
        options: tilesUsed,
        tile: "empty",
      };
      gridRow.push(cell);
    }
    grid.push(gridRow);
  }
}

function drawEmptyGrid() {}
// drawing

function animate() {
  let option = pickTileWithLowestenthropy(grid);
  if (option === null) {
    return;
  } else if (!option.collapsed && option.options.length === 0) {
    recreateGrid();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    option = pickTileWithLowestenthropy(grid);
    const tile = collapseAndPropagate(grid, option);

    tile.tile.draw(ctx, tile.x, tile.y);

    requestAnimationFrame(animate);
  } else {
    const tile = collapseAndPropagate(grid, option);

    tile.tile.draw(ctx, tile.x, tile.y);

    requestAnimationFrame(animate);
  }
}
recreateGrid();
animate();
