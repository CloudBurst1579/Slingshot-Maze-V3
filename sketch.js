const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4, target1,target2;
var platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Barrier(600,400,1200,20);
    platform1 = new Barrier(810,150,350,10);
    platform2 = new Barrier(150,330,300,120);
    wall1 = new Barrier(1200,200,10,400);
    wall2 = new Barrier(0,200,10,400);
    ceiling = new Barrier(600,0,1200,10);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    target1 = new Target(810, 350);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    target2 = new Target(810, 300);

    box5 = new Box(700,110,70,70);
    box6 = new Box(920,110,70,70);
    target3 = new Target(810,120);

    projectile = new Projectile(100,100);
    
    slingshot = new Slingshot(projectile.body,{x:230,y:180});
}

function draw(){
    background("white");
    
    textSize(35)
    fill("black")
    text("Score: " + score, width-300, 50)

    Engine.update(engine);

    ground.display();
    platform1.display();
    platform2.display();

    box1.display();
    box2.display();
    target1.display();
    target1.score();

    box3.display();
    box4.display();
    target2.display();
    target2.score();

    box5.display();
    box6.display();
    target3.display();
    target3.score();

    projectile.display();
    slingshot.display();

    fill("brown");
    rect(230,225,10,90);    
        
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(projectile.body,{x:230,y:180});
        slingshot.attach(projectile.body);
        gameState = "onSling";
    }
}