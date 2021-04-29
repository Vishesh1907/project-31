var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;


var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for(var k = 0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 75;j<=width-20;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background("black");
  textSize(15)
  Engine.update(engine);
  ground.display();
  for(var a = 0;a<plinkos.length;a++){
    plinkos[a].display();
  }
            

      
      
    if(frameCount%60 === 0){
      particles.push(new Particle( random(width/2-10,width/2+10),10,10));
    }

    for(var j = 0;j<particles.length;j++){
      particles[j].display();
    }
    for(var j = 0;j<divisios.length;j++){
      divisions[j].display();
    }
    


  
  
}