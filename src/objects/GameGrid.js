class GameGrid {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tileSize = 16;
    this.grid = [];

        for (let i = 0; i < this.height; i += this.tileSize) {
            for (let j = 0; j < this.width; j += this.tileSize) {
                this.grid.push({ x: j, y: i });
            }
        }
    }

    draw(ctx) {
        for (let i = 0; i <= this.width; i += this.tileSize) {
            for (let j = 0; j <= this.height; j += this.tileSize) {
                ctx.fillStyle = 'black';
                ctx.fillRect(i, j, this.tileSize, this.tileSize);
                ctx.strokeStyle = 'gray';
                ctx.lineWidth = 1;
                ctx.strokeRect(i, j, this.tileSize, this.tileSize);
            }
        }
    }

    getTiles() {
        return this.grid;
    }
}

export default GameGrid;