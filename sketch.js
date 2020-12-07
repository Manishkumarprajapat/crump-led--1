
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

	dustbinn=new dustbin()
	paperObject=new paper(200,450,40);
	groundObject=new ground();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("mediumTurquoise");
  dustbinn.display()
  paperObject.display();
  groundObject.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});  
	}
}





