import {randomInt} from '../lib/utility.js';

class DNA {

  /**
   *
   */
  constructor( aGene, fgetValue){

    var _fgetValue = fgetValue || function(){return [];};

    this.gene = aGene || [];

    if( !aGene.length){
      this.gene = _fgetValue();
    }

  }


  /**
   *
   */
  crossover( oDNAPartner){
    var aNewGene = [],
        iMid     = randomInt( 0, this.gene.length - 1);

    aNewGene = this.gene.slice( 0, iMid)
                        .concat( oDNAPartner.gene.slice( iMid, oDNAPartner.gene.length) );

    return new DNA( aNewGene);
  }


  /**
   *
   */
  mutation( fgetValue, iProba){
    var i     = 0,
      _iProba = iProba || .01;

    for (; i < this.gene.length; i++) {
      if( Math.random() < _iProba) {
        this.gene[ i ] = fgetValue();
      }
    }

  }

}

export default DNA;
