const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2,ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={restitution:0.8}
  box1=Bodies.rectangle(400,200,70,70,options);
  World.add(world,box1);
  ground=Bodies.rectangle(400,390,800,20,{isStatic:true});
  World.add(world,ground);
  box2=Bodies.circle(300,200,20,options);
  World.add(world,box2);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,70,70);
  rect(ground.position.x,ground.position.y,800,20);
  ellipse(box2.position.x,box2.position.y,20,20);
}