class Tile {
  constructor(tileSrc, size) {
    this.size = size;
    this.tile = new Image();
    this.tile.src = tileSrc;
    this.isLoaded = false;
    this.tile.onload = () => {
      this.isLoaded = true;
      if (this.onLoadCallback) {
        this.onLoadCallback();
      }
    };
  }

  draw(ctx, x, y) {
    if (this.isLoaded) {
      ctx.drawImage(
        this.tile,
        x * this.size,
        y * this.size,
        this.size,
        this.size
      );
    } else {
      this.onLoadCallback = () => {
        ctx.drawImage(
          this.tile,
          x * this.size,
          y * this.size,
          this.size,
          this.size
        );
      };
    }
  }
}
