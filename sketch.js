const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, ball, ground, ground1, ground2, slingshot1;
var backgroundImg;
var score = 0;

function preload() {
  getTime();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = new poly();

  ground = new Ground(400, 390, 800, 20);
  ground1 = new Ground (350, 290, 240, 20);
  ground2 = new Ground (630, 190, 200, 20);

  // 1st pyramid 4th layer
  block = new blocks(260,265);
  block1 = new blocks(290, 265);
  block2 = new blocks(320, 265);
  block3 = new blocks(350, 265);
  block4 = new blocks(380, 265);
  block5 = new blocks(410, 265);
  block6 = new blocks(440,265); 

  // 1st pyramid 3rd layer
  block7 = new blocks(290,230);
  block8 = new blocks(320, 230);
  block9 = new blocks(350, 230);
  block10 = new blocks(380, 230);
  block11 = new blocks(410,230);

  // 1st pyramd 2nd layer
  block12 = new blocks(320,195);
  block13 = new blocks(350, 195);
  block14 = new blocks(380,195);

  // 1st pyramid 1st layer
  block15 = new blocks(350,160);

  // 2nd pyramid 3rd layer
  blocks1= new blocks(570, 160);
  blocks2= new blocks(600, 160);
  blocks3= new blocks(630, 160);
  blocks4= new blocks(660, 160);
  blocks5= new blocks(690, 160);

  // 2nd pyramid 2nd layer
  blocks6 = new blocks(600, 125);
  blocks7 = new blocks(630, 125);
  blocks8 = new blocks(660, 125);

  // 2nd pyramid 1st layer
  blocks9 = new blocks(630, 90);

  slingshot = new slingshot(polygon.body,{x:100, y:150});

}

function draw() {
  rectMode(CENTER);
  if(backgroundImg) {
    background(backgroundImg); 
  }

  textSize(20);
  fill("orangered");
  text("Press Space to reattatch",280,50);
  text("SCORE: "+ score,600,40);

  polygon.display();
  slingshot.display();
  
  fill("skyblue");
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  fill("pink");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  fill("lime");
  block12.display();
  block13.display();
  block14.display();

  fill("grey");
  block15.display();

  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("pink");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("lime");
  blocks9.display();

  block.score();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

  ground.display();
  ground1.display();
  ground2.display();

  Engine.update(engine);

  drawSprites();
}

function mouseDragged(){
  push();
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  pop();
}

function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x: 75 , y: 200});
    slingshot.attatch(polygon.body);
  }
}

function mouseReleased(){
  slingshot.fly();
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var resjson = await response.json();
  var dt = resjson.datetime;
  var hr = dt.slice(11,13);
  if(hr >= 06 && hr <= 18) {
    bg = "bg.png";
  }else {
    bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(hr);
}