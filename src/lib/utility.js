export function map(  iValue,  repereMin, repereMax, scopeMin, scopeMax) {
  return ( ( iValue - repereMin) / (repereMax - repereMin) ) * ( scopeMax - scopeMin ) + scopeMin;
}
