
var population;
var lifespan = 200;
var lifeP;
var count = 0
var target;
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup(){
  createCanvas(600, 400);
  rocket =  new Rocket;
  population = new Population();
  population.createInitialPop();
  lifeP = population.createP
  firstposition = population.createP;
  target = createVector(width/2, 50);
}
function draw(){
  background(0);
  population.run();
  count++;
  console.log(rocket.dna)
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    population = new Population();
    count = 0;
  }
  fill(255);
  ellipse(target.x, target.y, 16, 16);
  rect(100, 150, 200, 10);
}
