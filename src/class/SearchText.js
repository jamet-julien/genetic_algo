import ElementGenetic  from '../genetic/elementgenetic.js';
import DNA             from '../genetic/dna.js';


class SearchText extends ElementGenetic {

    /**
     *
     */
    static completeDNA( iPos){

      var sLib = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789,.:éè";
      return sLib.charAt(Math.floor(Math.random() * sLib.length));

    }

    /**
     *
     */
    constructor( sTarget, oTargetDom, oDna){

      super( oDna);

      this.fitness   = 0;
      this.win       = false;
      this.targetDom = oTargetDom;
      this.target    = sTarget;
      this.dna       = oDna || new DNA( [], this.buildDNA.bind(this));
    }

    /**
     *
     */
    buildDNA(){
      var iLen    = this.target.length,
          aLetter = [];

      for(;iLen--;){
        aLetter.push( SearchText.completeDNA());
      }

      return aLetter;
    }


    /**
     *
     */
    calcFitness(){
      var iLen    = this.target.length, score = 0;

      this.fitness = 0;
      this.win     = false;

      for(;iLen--;){
        if( this.target.charAt( iLen ) == this.dna.gene[ iLen ]){
          score++;
        }
      }

      this.fitness = Math.pow( score, 4);
      this.win     = (this.target.length == score);

    }

    /**
     *
     */
    update(){
    }

    /**
     *
     */
    draw(){
      this.targetDom.textContent = this.dna.gene.join('');
    }

}

export default SearchText;
