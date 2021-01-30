const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
   // backgroundImg = loadImage("field.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(500,500,300,10);
    
    ground2 = new Ground(900,300,300,10);
    platform = new Ground(190,350,80,515);

    box1 = new Box(460,470,50,70);
    box2 = new Box(500,370,50,70);
    box6 = new Box(540,470,50,70);
    box7 = new Box(580,370,50,70);
    box8 = new Box(620,470,50,70);
    box9 = new Box(424,370,50,70);
    box3 = new Box(385,440,50,70);
  
   // log1 = new Log(810,260,300, PI/2);

   
    box10 = new Box(783,270,50,70);
    box11 = new Box(824,170,50,70);
    box12 = new Box(860,270,50,70);
    box13 = new Box(900,170,50,70);
    box14 = new Box(940,270,50,70);
    box15 = new Box(970,170,50,70);
    box16 = new Box(1010,240,50,70);

    box17 = new Box(860,100,50,70);
    box18 = new Box(940,100,50,70);

    box19 = new Box(457,300,50,70);
    box20 = new Box(540,300,50,70);

   box21 = new Box(491,200,50,70);
   box22 = new Box(900,20,50,70);


  



    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("orange");
    fill("white")
    textSize(25)
    text("Drag the Angry Bird and release it to hit the blocks",300,50)
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    
    ground.display();
    ground1.display();
    ground2.display();
    platform.display();
   
   
    //log1.display();

    box3.display();
  //  box4.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();

    
   

   
    
    bird.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

