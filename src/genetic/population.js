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

    var maxfit = 0,  i = 0, iValue = 0, maxFitArray = [], maxFitArrayConvert = [];

    for (; i < this.popsize; i++){
      this.element[ i ].calcFitness();
      maxFitArray.push( this.element[ i ].fitness);
    }

    maxfit = Math.max.apply( null, maxFitArray);
    i      = 0;


    for (; i < this.popsize; i++) {
      iValue = map( this.element[ i ].fitness, 0, maxfit, 0, 1);
      maxFitArrayConvert.push(iValue)
      this.element[ i ].fitness = iValue;
    }

    return this.element;


  }

  /**
   *
   */
  _getRandomElement(){
    var oElement,
        iRand, iRandValue, iMax = 10000000,
        iLen = this.element.length-1;

    while( true){

      iRand      = randomInt( 0, iLen);
      iRandValue = Math.random();

      if( iRandValue <= this.element[ iRand ].fitness){
        return this.element[ iRand ];
      }

      if(iMax <= 0){
        return { dna : null };
      }

      iMax--;

    }
  }

  /**
   *
   */
  selection( fGetElement, fCompleteDNA) {

    var element = [], oParentA ,  oParentB,  oDNAchild, i = 0;

    for (; i < this.element.length; i++) {

      oParentA = this._getRandomElement();
      oParentB = this._getRandomElement();

      oDNAchild   = oParentA.dna.crossover( oParentB.dna);
      oDNAchild.mutation( fCompleteDNA);

      element[ i ] = fGetElement( oDNAchild);
    }

    this.element = element;

    return this.element;
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
