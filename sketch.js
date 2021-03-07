var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground1,box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 50, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground1 = new Ground(200,400,400,20);
    box1 = new Box(135,350,20,100);
    box2 = new Box(265,350,20,100);
    box3 = new Box(200,390,150,30);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 50 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;
	
    box3.display();
	box2.display();
    box1.display();
    ground1.display();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
	
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



