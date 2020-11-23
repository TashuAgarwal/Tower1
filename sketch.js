const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, 
box13, box14, box15;
var ground, stand, sling, polygon, polygonimg;
var gameState = "onSling";

function preload() {
   polygonimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    polygon = createCanvas(50, 200, 15, 15);
    var options = {'restitution':0.8, 'friction':1,'density':1.0 }
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
    polygon.addImage(polygonimg)

    ground = new Ground(300, height, 600, 20);
    stand = new Ground(350, 300, 100, 20);

    box1 = new Box(355, 305, 20, 20);
    box2 = new Box(365, 305, 20, 20);
    box3 = new Box(375, 305, 20, 20);
    box4 = new Box(385, 305, 20, 20);
    box10 = new Box(395, 305, 20, 20);
    box5 = new Box(360, 315, 20, 20);
    box6 = new Box(370, 315, 20, 20);
    box7 = new Box(380, 315, 20, 20);
    box8 = new Box(390, 315, 20, 20);
    box9 = new Box(365, 325, 20, 20);   
    box11 = new Box(375, 325, 20, 20);
    box12 = new Box(385, 325, 20, 20);
    box13 = new Box(370, 335, 20, 20);
    box14 = new Box(380, 335, 20, 20);
    box15 = new Box(375, 345, 20, 20);
    
    sling = new SlingShot(polygon.body,{x:50, y:200});
}

function draw(){
        background(0);
    
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.score();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.score();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ground.display();
    sling.display();   
     
  drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
