class Tree {
    
    constructor(x,y,width,height) {

    var option = {
        isStatic: true
    }  


    this.body = Bodies.rectangle(x,y,width,height,option);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("tree.png");
    World.add(world,this.body)
    }

    display() {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CORNERS);
    image(this.image,0, 0, this.width, this.height);
    pop();
   
    }
}