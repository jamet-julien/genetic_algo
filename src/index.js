
import Phase           from './class/phase.js';
import Timer           from './class/timer.js';


import Population      from './genetic/population.js';
import SearchText      from './class/SearchText.js';

/*********************************************************
 __     ___    ____  ___    _    ____  _     _____ ____
 \ \   / / \  |  _ \|_ _|  / \  | __ )| |   | ____/ ___|
  \ \ / / _ \ | |_) || |  / _ \ |  _ \| |   |  _| \___ \
   \ V / ___ \|  _ < | | / ___ \| |_) | |___| |___ ___) |
    \_/_/   \_\_| \_\___/_/   \_\____/|_____|_____|____/
**********************************************************/

var PHASE         = new Phase('setup'),
    TARGET        = 'On sait depuis longtemps que travailler avec du texte lisible',
    TARGETDOM     = document.getElementById('target'),

    oPopulation   = new Population(
      ()=> new SearchText( TARGET, TARGETDOM), 1000
    ),

    oPhase = {
      setup : fnSetup,
      draw  : fnDraw,
      win   : fnWin
    };


/*********************************************************
  _____ _   _ _   _  ____ _____ ___ ___  _   _
 |  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | |
 | |_  | | | |  \| | |     | |  | | | | |  \| |
 |  _| | |_| | |\  | |___  | |  | | |_| | |\  |
 |_|    \___/|_| \_|\____| |_| |___\___/|_| \_|

**********************************************************/

/**
 * [fnSetup description]
 * @param  {[type]} iTime [description]
 * @return {[type]}       [description]
 */
function fnSetup( iTime){
  console.time('timerName');
  Timer.restart();
  this.setPhase( 'draw');
}


/**
 * [fnDraw description]
 * @param  {[type]} iTime [description]
 * @return {[type]}       [description]
 */
function fnDraw( iTime){

  var self = this, aGene = [], iLen, i = 0, bContinue = true;

  console.count();

  aGene = oPopulation.evaluate();
  iLen  = aGene.length;

  for(; i < iLen; i++){
      if( aGene[ i ].win){
        aGene[ i ].draw();
        console.log( aGene[ i ].dna.gene);
        bContinue = false;
        this.setPhase( 'win');

      }
  }

  if( bContinue){
    oPopulation.selection(
      ( oDna)=> new SearchText( TARGET, TARGETDOM, oDna),
      SearchText.completeDNA
     );

    oPopulation.run();
  }
}


/**
 * [fnDraw description]
 * @param  {[type]} iTime [description]
 * @return {[type]}       [description]
 */
function fnWin( iTime){
  console.timeEnd('timerName')
  Timer.stop();
}



/*********************************************************
   ____ ___  _   _ _____ ___ ____ _   _ ____      _  _____ ___ ___  _   _
  / ___/ _ \| \ | |  ___|_ _/ ___| | | |  _ \    / \|_   _|_ _/ _ \| \ | |
 | |  | | | |  \| | |_   | | |  _| | | | |_) |  / _ \ | |  | | | | |  \| |
 | |__| |_| | |\  |  _|  | | |_| | |_| |  _ <  / ___ \| |  | | |_| | |\  |
  \____\___/|_| \_|_|   |___\____|\___/|_| \_\/_/   \_\_| |___\___/|_| \_|
**********************************************************/

PHASE.computePhase( oPhase);

Timer.setCadence( 12)
     .run( ( iTime) => {
        PHASE.run( iTime);
      }).play();



/*****************************************************************
   ____    _    __  __ _____   ____ _____  _    ____ _____
  / ___|  / \  |  \/  | ____| / ___|_   _|/ \  |  _ \_   _|
 | |  _  / _ \ | |\/| |  _|   \___ \ | | / _ \ | |_) || |
 | |_| |/ ___ \| |  | | |___   ___) || |/ ___ \|  _ < | |
  \____/_/   \_\_|  |_|_____| |____/ |_/_/   \_\_| \_\|_|

*****************************************************************/



document.addEventListener("DOMContentLoaded", ( event) => {
    Timer.start();
});
