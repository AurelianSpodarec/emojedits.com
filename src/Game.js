import Player from "./objects/Player";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        
        this.player = new Player(gameWidth / 2, gameHeight / 2);
    }

    draw(ctx) {
        this.player.draw(ctx);
    }

    update(delta) {
        // this.player.update(delta);
    }
    
    start() {
        
    }

}
