function neumannNeighborhood(cells, cell) {
  maxCell = cells[cells.length - 1][cells[cells.length - 1].length - 1];
  const neighbors = [];
  if (cell.x < maxCell.x) {
    neighbors.push({ cell: cells[cell.y][cell.x + 1], direction: "right" });
  }
  if (cell.y < maxCell.y) {
    neighbors.push({ cell: cells[cell.y + 1][cell.x], direction: "bottom" });
  }
  if (cell.x > 0) {
    neighbors.push({ cell: cells[cell.y][cell.x - 1], direction: "left" });
  }
  if (cell.y > 0) {
    neighbors.push({ cell: cells[cell.y - 1][cell.x], direction: "top" });
  }
  return neighbors;
}
