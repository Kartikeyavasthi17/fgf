
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var tree1,boy1,shot,ball;

var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree1 =new Tree(900,350,500,700);

   boy1 =new Boy(400,500,200,300);

   ball =new Stone(350,530,60);

   shot =new SlingShot(ball.body,{x:350,y:430});
  
   mango1 =new Mango(900,200,60);

   mango2 =new Mango(900,100,60);

   mango3 =new Mango(1050,280,60);

   mango4 =new Mango(800,300,60);

   mango5 =new Mango(750,200,60);

   mango6 =new Mango(1050,150,60);

}


function draw() {

  background("white");
  Engine.update(engine);

  tree1.display();
  boy1.display();
  ball.display();
  shot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
  shot.fly();
  }

  function keyPressed()
{

if(keyCode === 32)
{
  Matter.Body.setPosition(ball.body,{x:350,y:430});
  shot.attach(ball.body);
}
}

function detectcollision(Lball,Lmango){
 mangoBodyPosition =lmango.body.position;
 ballBodyPosition =lball.body.position;

 var distance =dist(ballBodyPosition.x,ballBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

 if(distance<-lmango.r+lstone.r)
  {
  Matter.Body.setStatic(lmango.body,false);
  }
 
}