class Stone {

    constructor(x, y, radius) {
        var stone_option = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, stone_option)
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}