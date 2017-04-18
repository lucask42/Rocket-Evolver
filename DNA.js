function DNA(){
  this.genome = [];
}

DNA.prototype.writeGenes = function(genes){
  if (genes){
    this.genome = genes;
  } else{
    this.genome = [];
    this.genome[0] = p5.Vector(0,1);

    for (var i = 1; i < lifespan; i ++){
      this.genome[i] = this.genome[i-1].rotate(random(1));
      this.genome[i].setMag(0.02);
    }
  }
}

//DNA.protoype.mutation = function(){

//}

DNA.prototype.crossover = function(partner){
    var newdna = [];
    var mid = floor(random(this.genome.length));
    var mutationsite = floor(random(this.genome.length));
    for (var i = 0; i < this.genome.length; i++){
      if (i > mid){
        newdna[i] = this.genome[i];
      } else{
        newdna[i] = partner.genome[i];
      }
    }
    //newdna[mutationsite] = p5.Vector.random2D();
    //newdna[mutationsite].setMag(0.02)
    newdna[mutationsite].rotate(random(1));
    return new DNA(newdna);
  }
