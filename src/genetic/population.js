import {randomInt, map} from '../lib/utility.js';


class Population {

  /**
   *
   */
  constructor( fGetElement, popsize){

    this.element = [];
    this.popsize = popsize || 25;

    for (var i = 0; i < this.popsize; i++) {
      this.element[i] = fGetElement();
    }

  }

  /**
   *
   */
  evaluate(){

    var maxfit = 0,  i = 0, maxFitArray = [];

    for (; i < this.popsize; i++){
      this.element[i].calcFitness();
      maxFitArray.push( this.element[i].fitness)
    }

    maxfit = Math.max.apply( null, maxFitArray);
    i      = 0;

    for (; i < this.popsize; i++) {
      this.element[ i ].fitness = map( this.element[ i ].fitness, 0, maxfit, 0, 1);
    }

  }

  /**
   *
   */
  getRandomElement(){
    var oElement,
        iRand, iMax = 100000,
        iLen = this.element.length - 1;

    while( true){

      iRand = randomInt( 0, iLen);

      if( Math.random() < this.element[ iRand ].fitness){
        return this.element[ iRand ];
      }

      if(iMax <= 0){
        return {dna:null};
      }

      iMax--;

    }
  }

  /**
   *
   */
  selection( fGetElement) {

    var element = [], oParentA ,  oParentB,  oDNAchild, i = 0;

    for (; i < this.element.length; i++) {

      oParentA = this.getRandomElement();
      oParentB = this.getRandomElement();

      oDNAchild   = oDNAparentA.dna.crossover( oDNAparentB.dna);
      oDNAchild.mutation( fGetElement);

      element[ i ] = fGetElement( oDNAchild);
    }

    this.element = element;
  }

  /**
   *
   */
  run() {
    var i = 0;

    for (; i < this.popsize; i++) {
      this.element[ i ].update();
      this.element[ i ].draw();
    }

  }

}

export default Population;
