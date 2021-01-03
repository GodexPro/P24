
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;
var side1,side2,side3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,660,1000,10);

	paper = new Paper(50,640,20);

	side1 = new Dustbin(800,645,200,20);
	side2 = new Dustbin(695,595,20,130);
	side3 = new Dustbin(905,595,20,130);
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  side1.display();
  side2.display();
  side3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:2.4,y:-5});
	}


}



