class GameGrid {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tileSize = 16;

    this.image = new Image();
    this.image.src = "https://i.imgur.com/HA0byil.png";

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
                ctx.drawImage(this.image, i, j, this.tileSize, this.tileSize);
            }
        }
    }

    getTiles() {
        console.log(this.grid);
        return this.grid;
    }
}

export default GameGrid;


// GameGrid
// - Save; gives a 2D array grid
// - Load; loads a 2D array gird 
// - Download grid: Gives a 2D array grid
// 
// 
// 
// 
// 