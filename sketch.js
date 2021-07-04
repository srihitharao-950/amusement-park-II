
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dground, tree,treeimg;
var boy, boyimg;
var boy2 , boyImg2;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;
var bg

function preload(){
	treeimg=loadImage("table.png");
	boyimg=loadImage("girl_2.png");
	boyImg2=loadImage("girl_1.png");
	bg = loadImage("night.jpg")
}

function setup() {
	createCanvas(1500, 650);

	engine = Engine.create();
	world = engine.world;

	
	stones=new Stone(100,460,35);
	mango1=new Mango(1210,470,34);
	mango2=new Mango(1230,480,35);
	mango3=new Mango(1250,490,35);
	mango4=new Mango(1270,500,35);
	mango5=new Mango(1260,470,36);
	mango6=new Mango(1240,460,35);
	mango7=new Mango(1220,450,33);
	mango8=new Mango(1250,440,35);
	mango9=new Mango(1230,430,35);
	mango10=new Mango(1240,410,35);

	attach=new Throw(stones.body,{x:600,y:485});

	tree=createSprite(1255,548);
	tree.addImage(treeimg);
	tree.scale=0.45;

	boy=createSprite(650,520);
	boy.addImage(boyimg);;

    boy2=createSprite(650,520);
	boy2.addImage(boyImg2);;
	boy2.visible=false;
	boy2.scale=0.7;

	dground=new Ground();
	


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(bg);

  fill("black");
  textSize(18);
  

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boy.visible=false;
	boy2.visible=true;
	attach.fly();
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
		boy.visible=true;
	    boy2.visible=false;
	}
}