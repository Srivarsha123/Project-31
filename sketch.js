const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionheight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10)

  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionheight/2, 10, divisionheight))
  }

  for(var i = 40; i <=width; i = i+50){
    plinkos.push(new Plinko(i,75))
  }


  for(var i = 10; i <=width-10; i = i+50){
    plinkos.push(new Plinko(i,175))
  }

  for (var i = 40; i <=width; i=i+50){
     plinkos.push(new Plinko(i,275));
  }

   for (var i = 10; i <=width-10; i=i+50) {
    plinkos.push(new Plinko(i,375));
  }

}

function draw() {
  Engine.update(engine);
  background(0); 
  console.log(frameCount);

  if(frameCount%60 === 0){
    console.log("inside if")
    particles.push(new Particle(random(width/2-10, width/2+10), 10));
  }
  
  for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display(); 
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  ground.display();
}