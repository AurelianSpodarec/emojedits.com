import GameEngine from './Game';

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 1024;
const GAME_HEIGHT = 600;

let game = new GameEngine(GAME_WIDTH, GAME_HEIGHT);
game.start()
 
function gameLoop(timestamp) {
    const deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

let lastFrameTime = 0;
requestAnimationFrame(gameLoop);
