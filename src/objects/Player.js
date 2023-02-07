import InputManager from "./../core/InputManager";

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 8;
        this.width = 16;
        this.height = 16;
        this.speedY = 0;
        this.image = new Image();
        this.image.src = "https://i.imgur.com/XmKOkU5.png";

        this.inputManager = new InputManager(this.player);
    }

    moveUp() {
        this.y -= 5;
    }

    moveRight() {
        this.x += 5;
    }

    moveDown() {
        this.y += 5;
    }

    moveLeft() {
        this.x -= 5;
    }

    draw(ctx) {
        ctx.beginPath();
        // ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI, false);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }

    update(delta, gameGrid) {    
        this.speedY += 0.2;
        this.y += this.speedY;

        if (this.y + this.height > 500) {
            this.y = 500 - this.height;
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