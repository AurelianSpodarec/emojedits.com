import GameGrid from "./objects/GameGrid";
import Player from "./objects/Player";



export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        
        this.player = new Player(0, 0);
        this.gameGrid = new GameGrid(1000, 500);
    }

    draw(ctx) {
        this.gameGrid.draw(ctx);
        this.player.draw(ctx);
    }

    update(delta) {
        this.player.update(delta);
    }
    
    start() {
        
    }

}
