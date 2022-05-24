'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0;
  var numReverse = num.split("").reverse().join("");

  for (let i = 0; i<numReverse.length; i++){
    sum = sum + numReverse[i] * 2 **i;

  }
  return sum;

}


function DecimalABinario(num) {
  // tu codigo aca
  let numBinario = [];
  while (num !== 0){
    let residuo = (num%2);
    num = Math.floor(num/2);
    numBinario = numBinario + residuo.toString()

    }

    
  return numBinario.split("").reverse().join("");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}