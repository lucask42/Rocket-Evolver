function DNA(genes){
  if (genes){
    this.genes = genes;
  } else{
    this.genes = [];
    this.genes[0] = p5.Vector.random2D();

    for (var i = 1; i < lifespan; i ++){
      this.genes[i] = this.genes[i-1].rotate(random(1));
      this.genes[i].setMag(0.02);
    }
  }
  this.crossover = function(partner){
    var newdna = [];
    var mid = floor(random(this.genes.length));
    var mutationsite = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++){
      if (i > mid){
        newdna[i] = this.genes[i];
      } else{
        newdna[i] = partner.genes[i];
      }
    }
    //newdna[mutationsite] = p5.Vector.random2D();
    //newdna[mutationsite].setMag(0.02)
    newdna[mutationsite].rotate(random(1));
    return new DNA(newdna);
  }
}
