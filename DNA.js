function DNA(genes){
  this.genome = [];
  if (genes){
    this.genome = genes;
  } else{
    this.genome[0] = p5.Vector.random2D();
    for (var i = 1; i < lifespan; i ++){
      this.genome[i] = p5.Vector.random2D();
      //this.genome[i] = this.genome[i - 1].random2D();
      this.genome[i].setMag(0.02);
    }
  }
}

DNA.prototype.writeGenes = function(genes) {

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
