'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  var suma = 0;

  // num = num.split("").reverse().join("")    //O doy vuelta el numero antes y despues lo potencio a la posicion (i)

  // for (let i = 0; i<num.length; i++){
  // suma += num[i] * (2**i);
  // }
 
  for (let i = 0; i<num.length; i++){
    suma += num[i] * 2 **(num.length -1 -i);   // O lo tengo que potenciar a la (num.length -1 -i) 
  }                                            // para que la pocision sea de der a izq

  return suma;

  // return parseInt(num, 2); // esto reemplaza a todo el codigo anterior 

}
/*
function BinarioADecimal(num) {
  // tu codigo aca
  let numero = num.split("").reverse()
  let decimal = 0;
  for (let i =0; i < numero.length; i ++){
    decimal = decimal + (numero[i]*2**i)
  }
  return decimal;
}
*/


function DecimalABinario(num) {
  // tu codigo aca
  var numBinario = "";

  while (num > 0){
    numBinario = num % 2 + numBinario // Esto es para que el resto de num/2 se agregue adelante del numero existente y no al final 
    num = Math.floor(num/2);          // Tambien podria declarar la var numBinario como un array y hacer unshift de (num % 2) 
                                      // Despues haria numBinario.join("") para pasar array a string

    }
    
    return numBinario;

  // return numBinario.split("").reverse().join(""); // si haria (numBinario += num % 2) en vez de (numBinario = num % 2 + numBinario)
                                                     // podria hacer esto para dar vuelta el numero final
                                                     
  // return num.toString(2); // esto reemplaza a todo el codigo anterior 


}
/*
function DecimalABinario(num) {
  // tu codigo aca
  let binario = [];
  while (num > 0){
    binario.unshift(num % 2);
    num = Math.floor(num/2);
  }
  return binario.join("")
}
*/


// 14 / 2     7 | 0
//  7 / 2     3 | 1
//  3 / 2     1 | 1
//  1 / 2     0 | 1   
//  
// "14" -->  "1110"


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}