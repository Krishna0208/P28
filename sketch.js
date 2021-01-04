const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5,
    mango6, mango7, mango8, mango9, mango10;
var ground;
var chain;
var stone;
var boy;

function preload() {
    boy = loadImage("boy.png");
    treeImg = loadImage("tree1.png");
}

function setup() {
    createCanvas(1500, 820);


    engine = Engine.create();
    world = engine.world;

   

    mango1 = new Mango(1000, 380, 1);
    mango2 = new Mango(1050, 420, 1);
    mango3 = new Mango(1200, 300, 1);
    mango4 = new Mango(1100, 320, 1);
    mango5 = new Mango(1150, 380, 1);
    mango6 = new Mango(950, 450, 1);
    mango7 = new Mango(1160, 450, 1);
    mango8 = new Mango(1300, 380, 1);
    mango9 = new Mango(1380, 430, 1);
    mango10 = new Mango(1250, 450, 1);

    ground = new Ground(800, 800, 1600, 55);

    boy = new Boy(320,700,1,1);
    stone = new Stone(200, 500, 100);

    chain = new Chain(stone.body, { x: 200, y: 600 })




    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(treeImg);



    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();

   
    ground.display();
    boy.display();
    stone.display();
    chain.display();

    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);
    detectCollision(stone, mango5);
    detectCollision(stone, mango6);
    detectCollision(stone, mango7);
    detectCollision(stone, mango8);
    detectCollision(stone, mango9);
    detectCollision(stone, mango10);



}

function mouseDragged() {
    Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    chain.fly();
}

function keyPressed() {
    if(keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x: 200, y: 600});
    chain.attach(stone.body);
    }
}

function detectCollision(lstone, lmango) {
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

    if (distance <= lmango.radius + lstone.radius) {
        Matter.Body.setStatic(lmango.body, false);
    }
}