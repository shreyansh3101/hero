const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,Ground,hero,rope;
var engine,world;
function preload() {
//preload the images here
bg=loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  // create sprites here
Ground=new ground(0,400,1500,10)
hero=new Hero(200,250)
rope=new con(hero.body,{x:200,y:200})

}

function draw() {
 
  background(bg);
  
Ground.display()
hero.display()
rope.display()
}

function mouseDragged(){
    
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  rope.fly();
  
}