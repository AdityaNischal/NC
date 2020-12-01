
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,300,30);
	
	bob1 = new Bob(300,450,80);

	bob2 = new Bob(350,450,80);

	bob3 = new Bob(400,450,80);

	bob4 = new Bob(450,450,80);

	bob5 = new Bob(500,450,80);

	rope1 = new Rope(bob1.body,roof.body,50,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();

  bob1.display();

  bob2.display();

  bob3.display();

  bob4.display();

  bob5.display();

  rope1.display();

  drawSprites();
 
}



