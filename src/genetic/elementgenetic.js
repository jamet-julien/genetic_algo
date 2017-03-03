import DNA      from './dna.js';


class ElementGenetic {

  /**
   *
   */
  static completeDNA( iPos){
    return iPos;
  }

  /**
   *
   */
  static buildDNA(){
    return [];
  }

  /**
   *
   */
  constructor( oDna ) {
    this.fitness = 0;
    this.dna     = oDna || new DNA( [], ElementGenetic.buildDNA);
  }

  /**
   *
   */
  calcFitness(){}

  /**
   *
   */
  update(){
  }

  /**
   *
   */
  draw(){
  }

}

export default ElementGenetic;
