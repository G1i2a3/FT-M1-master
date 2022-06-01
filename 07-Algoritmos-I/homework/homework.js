'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let div = 2;
  while (num !== 1){       
  if (num % div === 0){
    array.push(div); 
    num = num/div;       
  }
  else {
    div ++
  }
  }
  return array
}  // la factorizacion termina cuando el ultimo numero es primo (en este caso 5), osea que solo se puede dividir por si mismo o por cero.

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let count = array.length;
  while (count > 1){
    for (let i = 0; i < count; i++){
      if(array[i] > array[i+1]) {
        let max = array[i];
        let min = array[i+1];
        array[i+1] = max;
        array[i] = min;
      }
    }
    count--;
  }
  return array
}
// while es un bulce (bucle 1)
// for es un bucel (bucle 2)
// if NO es un bucle
// cada bucle es un "n"
// entonces este algoritmo seria n*n (n^2)

// OPCION 2:
  // function bubbleSort(array) {  
  // let swap;
	// do {
	// 	swap = false;
	// 	for (let i = 0; i < array.length; i++) {
	// 		if (array[i] > array[i + 1]) {
	// 			let aux = array[i];
	// 			array[i] = array[i + 1];
	// 			array[i + 1] = aux;
	// 			swap = true;
	// 		}
	// 	}
	// } while (swap);
	// return array;
  // }



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let aux = array[i]
    while (j >= 0 && array[j] > aux) { 
      array[j + 1] = array[j]
      j--
    }
    array[j+1] = aux
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i = 0; i < array.length; i++) {
      // Encontrar un numero en el array que sea mas chico que el "min"
      let min = i;
      for(let j = i+1; j < array.length; j++){
          if(array[j] < array[min]) {
              min=j; 
          }
       }
       if (min != i) {
           // Una vez que encontre uno mas chico lo swapeo por el nuevo "min"
           let aux = array[i]; 
           array[i] = array[min];
           array[min] = aux;      
      }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
