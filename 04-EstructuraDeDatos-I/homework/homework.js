'use strict'

const { queue } = require("@11ty/eleventy-cache-assets");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) 
es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, 
como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será 
el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {

  var num=0;
  if (n > -1 && n < 1){
    num = 1
  }
  else if (n<1){
    num = 0
  }
  else {
    num = (n * nFactorial(n-1));
  } 
  return num; 
}

// function nFibonacci(n) {
//   var num = 0;
//   if (n === 0){
//     num = 0 
//   }
//   else if (n === 1){
//     num = 1
//   }
//   else {
//     num = ((nFibonacci (n-1))+(nFibonacci(n-2))) 
//   }
//   return num;
// }

function nFibonacci(n) {

  if (n === 0){
   return 0 
  }
  else if (n === 1){
    return 1
  }
  else {
    return (nFibonacci (n-1)+nFibonacci(n-2))
  }
  
}
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa 
es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la 
  queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {      // funcion constructora de clase, por eso se usa el this. Seria la equivalencia a la clase
  this.array = [];
}

Queue.prototype.enqueue = function(item) {
  this.array.push(item)
}                                                  // clase.prototype.nombredelmetodo(que es el nombre de la funcion) = funcion 

Queue.prototype.dequeue = function() {      // no recibe ningun argumento, saca el 1er item de la lista FIFO
  return this.array.shift()                         // .pop sacaria el ultimo item y lo retorna
}

Queue.prototype.size = function() {
  return this.array.length
}

// class Queue {         // CLASE
//   constructor() {
//     this.array = [];
//   }
//   enqueue(item) {
//     this.array.push(item);
//   }
//   dequeue() {
//     return this.array.shift(); 
//   }
//   size() {
//     return this.array.length;
//   }
// }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
