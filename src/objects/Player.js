class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, false);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();
    }
}

export default Player;