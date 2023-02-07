import GameEngine from './Game';

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 600;

let game = new GameEngine(CANVAS_WIDTH, CANVAS_HEIGHT);
game.start()
 
function gameLoop(timestamp) {
    const deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

let lastFrameTime = 0;
requestAnimationFrame(gameLoop);