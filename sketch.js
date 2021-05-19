
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObject = Bodies.rectangle(300,200,300,50,{isStatic:true});
	World.add(world,roofObject);

    bobObject1 = new Bob(330,450,30);

	rope1 = new Rope(bobObject1.body,{x:330,y:225});

	bobObject2 = new Bob(390,450,30);
	
	rope2 = new Rope(bobObject2.body,{x:390,y:225});

	bobObject3 = new Bob(450,450,30);

	rope3 = new Rope(bobObject3.body,{x:450,y:225});
	
	bobObject4 = new Bob(510,450,30);
	
	rope4 = new Rope(bobObject4.body,{x:510,y:225});
	
	bobObject5 = new Bob(570,450,30);    
    
	rope5 = new Rope(bobObject5.body,{x:570,y:225});

	Engine.run(engine);
  
}


function draw() {
  
  background(145);
  Engine.update(engine);
  
  fill("brown");
  rect(roofObject.position.x,roofObject.position.y,300,50);

  bobObject1.display();
  rope1.display();

  bobObject2.display();
  rope2.display();

  bobObject3.display();
  rope3.display();

  bobObject4.display();
  rope4.display();

  bobObject5.display();
  rope5.display();

  keyPressed();
}

function keyPressed(){
  if(keyDown("space")){
	Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50,y:-10});
  }
}



