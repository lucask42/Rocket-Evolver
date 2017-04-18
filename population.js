function Population(){
  this.rockets = [];
  this.popsize = 25;
  this.matingpool = [];
}

Population.prototype.createInitialPop = function(){
  for (let i = 0; i < this.popsize; i++){
    let rocket = new Rocket();
    this.rockets[i] = rocket;
  }
  console.log(this.matingpool);
}

Population.prototype.breedRockets = function(){
  for (var i = 0; i < this.popsize; i++){
    var n = this.rockets[i].fitness * 100;
    for (var j = 0; j < n; j++){
      this.matingpool.push(this.rockets[i]);
    }
  }
  console.log(this.matingpool);
}
Population.prototype.evaluate = function(){
    let maxfit = 0;
    for (let i = 0; i < this.popsize; i++){
      this.rockets[i].calcFitness
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }
  }
Population.prototype.createP = function(maxfit){
  for (var i = 0; i < this.popsize; i++){
    this.rockets[i].fitness /= maxfit;
  }
}
Population.prototype.selection = function(){
  var newRockets = [];
  for (var i = 0; i < this.rockets.length; i++) {
    console.log(this.matingpool);
    var parentA = random(this.matingpool).dna;
    var parentB = random(this.matingpool).dna;
    var child = parentA.crossover(parentB);
    //child.mutate();
    newRockets[i] = new Rocket(child);
  }
  this.rockets = newRockets;
}
Population.prototype.run = function(){
  for (var i = 0; i < this.popsize; i++){
    this.rockets[i].applyForce;
    this.rockets[i].update;
    this.rockets[i].show;
  }
}
