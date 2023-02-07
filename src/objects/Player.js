import InputManager from "./../core/InputManager";

class Player {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.radius = 8;
        this.width = 16;
        this.height = 16;
        this.speedY = 0;
        this.acceleration = 0.2;

        this.image = new Image();
        this.image.src = "https://i.imgur.com/XmKOkU5.png";

        this.inputManager = new InputManager(this.player);
    }

    moveUp() {
        this.position.y -= 5;
    }

    moveRight() {
        this.position.x += 5;
    }

    moveDown() {
        this.position.y += 5;
    }

    moveLeft() {
        this.position.x -= 5;
    }

    draw(ctx) {
        ctx.beginPath();
        // ctx.arc(this.position.x + this.radius, this.position.y + this.radius, this.radius, 0, 2 * Math.PI, false);
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }

    update(delta, gameGrid) {    
        this.speedY += this.acceleration;
        this.position.y += this.speedY;

        if (this.position.y + this.height > 500) {
            this.position.y = 500 - this.height;
            this.speedY = 0;
        }

        if (this.inputManager.isKeyDown( this.inputManager.keys.w ) ||
            this.inputManager.isKeyDown( this.inputManager.keys.upArrow)) {
            this.moveUp();
        } else if (this.inputManager.isKeyDown( this.inputManager.keys.d ) ||
            this.inputManager.isKeyDown( this.inputManager.keys.rightArrow)) {
            this.moveRight();
        } else if (this.inputManager.isKeyDown( this.inputManager.keys.s ) ||
            this.inputManager.isKeyDown( this.inputManager.keys.downArrow)) {
            this.moveDown();
        } else if (this.inputManager.isKeyDown( this.inputManager.keys.a ) ||
            this.inputManager.isKeyDown( this.inputManager.keys.leftArrow)) {
            this.moveLeft();
        }

    }
}

export default Player;