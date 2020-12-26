const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var engine,world;

var ground;
var box ;
var box1 ;
var pig1 ;
var log1 ;

var box2 ;
var box3 ;
var pig2 ;
var log2 ;

var box4;
var log3;
var log4;

var bird ;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,350,1200,10);

 box = new Box(700,300,70,70);

 pig1 = new Pig(800,300);

 box1 = new Box(900,300,70,70);

 log1 = new Log(800,240,300,PI/2);



 box2 = new Box(700,220,70,70);

 pig2 = new Pig(800,220);

 box3 = new Box(900,220,70,70);

 log2 = new Log(800,180,300,PI/2);


 box4 = new Box(800,160,70,70);

 log3 = new Log(730,140,140,PI/5);

 log4 = new Log(870,140,140,-PI/5);

 bird = new Bird(100,200)

}

function draw() {
  background("black");  
  Engine.update(engine);

 box.display();

 box1.display();

 ground.display();

 pig1.display();

 log1.display();


 box2.display();

 box3.display();

 pig2.display();

 log2.display();


 box4.display();

 log3.display();

 log4.display();

 bird.display();

}

// https://github.com/whitehatjr/p5.play-boilerplate
//17:55
//Guest
//https://youtu.be/UZDykka-SpY
//Would you like to open this document inside the room for everyone?
//Yes, open for everyone
//No thanks