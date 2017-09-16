import {map} from '../lib/utility.js';


class Population {

  /**
   *
   */
  constructor( fGetElement, popsize){

    this.element = [];
    this.maxfit  = 0;
    this.popsize = popsize || 25;

    for (var i = 0; i < this.popsize; i++) {
      this.element[i] = fGetElement();
    }

  }

  /**
   *
   */
  evaluate(){

    var i                  = 0,
        iValue             = 0,
        maxFitArray        = [],
        maxFitArrayConvert = [];

    this.maxfit = 0;

    for (; i < this.popsize; i++){
      this.element[ i ].calcFitness();
      maxFitArray.push( this.element[ i ].fitness);
    }

    this.maxfit = Math.max.apply( null, maxFitArray);

    return this.element;


  }

  /**
   *
   */
  _getRandomElement(){
    var oElement,
        iRand, iRandValue, iMax = 10000000, iFitness = 0,
        iLen = this.element.length-1;

    while( true){

      iRand      = Math.round( map( Math.random(), 0, 1, 0, iLen));
      iRandValue = Math.random();
      iFitness   = map( this.element[ iRand ].fitness, 0, this.maxfit, 0, 1);

      if( iRandValue < iFitness){
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
  selection( fFactoryElement, fUpdateDNA) {

    var element = [], oParentA ,  oParentB,  oDNAchild, i = 0;

    for (; i < this.element.length; i++) {

      oParentA = this._getRandomElement();
      oParentB = this._getRandomElement();

      oDNAchild   = oParentA.dna.crossover( oParentB.dna);
      oDNAchild.mutation( fUpdateDNA);

      element[ i ] = fFactoryElement( oDNAchild);
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
