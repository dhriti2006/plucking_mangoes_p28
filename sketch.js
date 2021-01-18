
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render= Matter.Render;

function preload()
{
  
  boyImage= loadImage("Plucking mangoes/boy.png")
  treeImage= loadImage("Plucking mangoes/tree.png")
 

}

function setup() {
	createCanvas(800, 700);
  
  boySprite=createSprite(140,625,50,100);
  boySprite.addImage(boyImage);
  boySprite.scale=0.1

  treeSprite=createSprite(550,400,500,500);
  treeSprite.addImage(treeImage);
  treeSprite.scale=0.5

 

	engine = Engine.create();
	myworld = engine.world;

   ground = new Ground(800,700,1700,30)
  // tree = new Tree(330,150,10,10);
   mango1=new Mango(490,210,40,40);
   mango2=new Mango(600,210,40,40);
   mango3=new Mango(545,270,40,40);
   mango4=new Mango(400,300,40,40);
   mango5=new Mango(460,350,40,40);
   mango6=new Mango(600,330,40,40);
   mango7=new Mango(690,300,40,40);
   stone =new Stone(70,545,25,25);
  launcher=new Launcher(stone.body,{x:80, y:565});
 
   
var render = Render.create
({ element: document.body,
   engine: engine, 
   options: { width: 1300, height: 600, wirestonePames: false } });
Render.run(render);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();



  ground.display()
 // tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  stone.display()
  launcher.display()
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   Matter.Body.applyForce(stone.body,stone.body.position,{x:40,y:-80})
    launcher.fly();
}

function collision(stone,mango){
  mangoP=mango.body.position
  stoneP=stone.body.position

  mangoR=mango.body.circleRadius
  stoneR=stone.body.circleRadius

  if(mangoP.x-stoneP.x < mangoR + stoneR &&
     stoneP.x-mangoP.x < mangoR + stoneR &&
     stoneP.y-mangoP.y < mangoR + stoneR &&
     mangoP.y-stoneP.y < mangoR + stoneR){

     Matter.Body.setStatic(mango.body,false);
    

    }

}



