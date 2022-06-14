'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array
  }
	var pivote = array[Math.floor(Math.random() * array.length)]
  var izq = []
  var iguales = []
  var der = []

  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivote){
      izq.push(array[i])
    } 
    else if(array[i] > pivote){
      der.push(array[i])
    }
    else if(array[i] === pivote){
      iguales.push(array[i])
    }
  }
  return quickSort(izq).concat(iguales).concat(quickSort(der))
}


function merge(left,right){
  let leftIndex  = 0;
  let rightIndex = 0;
  let array = [];

  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1){
    return array
  }

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
