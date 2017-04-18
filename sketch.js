
var rocket;
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
  // create a single new rocket
  // rocket =  new Rocket;
  // log that rocket to the console
  // console.log(rocket);
  // create a new population
  population = new Population();
  // run function to add rockets to population
  population.createInitialPop();
  console.log(population);
  // uhh I forget what lifeP is - and I forget why two things are set by it
  // lifeP = population.createP
  // firstposition = population.createP;
  target = createVector(width/2, 50);
}
function draw(){
  background(0);
  population.run();

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.breedRockets();
    population.selection();
    population = new Population();
    count = 0;
  }

  // rocket.update
  // rocket.show
  fill(255);
  ellipse(target.x, target.y, 16, 16);
  rect(100, 150, 200, 10);
}
