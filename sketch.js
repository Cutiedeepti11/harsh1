const Engine= Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;


var engine , world;
var ground,ball;
function setup()
{
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
  var options ={
    isStatic:true
  }
  ground=Bodies.rectangle(200,600,1000,30,options);
  World.add(world,ground);
  console.log(ground);
  console.log(ground.position.x)
  console.log(ground.position.y)
  
  var ball_op ={
    restitution:1
  }

ball=Bodies.circle(200,100,30,ball_op);
World.add(world,ball);

}
function draw()
{
  Engine.update(engine);
  background(0);
 
rectMode(CENTER);
 rect(ground.position.x,ground.position.y,1500,30)
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,30);
 



} 


