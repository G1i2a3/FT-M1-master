"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value){
  this.value = value,
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function(value){
  let tree = new BinarySearchTree(value); 
  if (value > this.value){
    if (!this.right){
    this.right = tree;
    }
    else {
      this.right.insert(value);
    }
  }
  else {
    if (!this.left){
    this.left = tree;
    }
    else {
      this.left.insert(value)
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value){
    return true;
  }
  if (value > this.value){
    if (this.right){
    return this.right.contains(value)}
  }
  if (value < this.value){
    if(this.left){
    return this.left.contains(value)}
  }
  return false;
}
//"post-order" : ABAJO --> ARRIBA Y  IZQ --> DER  (IZQ - DER - NODO)
BinarySearchTree.prototype.depthFirstForEach = function(cb, argumento){  
  if (argumento === "post-order"){  
    if (this.left){                
      this.left.depthFirstForEach(cb, argumento);
    }
    if (this.right){
      this.right.depthFirstForEach(cb, argumento);
    }    
    cb(this.value)    // En este caso el cb lo pushea a un array (porque asi lo dice el test)
      
  }
//"pre-order": ARRIBA --> ABAJO y IZQ --> DER (NODO - IZQ - DER)
  if (argumento === "pre-order"){
    cb(this.value);
    if (this.left){                
      this.left.depthFirstForEach(cb, argumento);
    }
    if (this.right){
      this.right.depthFirstForEach(cb, argumento);
    }    
  }

//"in-order": IZQUIERDA --> NODO --> DERECHA
  if (argumento === "in-order" || argumento === undefined){ 
    if (this.left){               
      this.left.depthFirstForEach(cb, argumento);
    }
    cb(this.value);
    if (this.right){
      this.right.depthFirstForEach(cb, argumento);
    }
  }
}
// breadthFirstForEach ES POR FILAS DE ARRIBA A ABAJO Y DE IZQ A DER 
BinarySearchTree.prototype.breadthFirstForEach = function(cb, value = []){
  if(this.left !== null){
    value.push(this.left)
  }
  
  if(this.right !== null){
    value.push(this.right)
  }

  cb(this.value);

  if (value.length > 0){
    value.shift().breadthFirstForEach(cb, value)
  }
  
   

}

BinarySearchTree.prototype.size = function(){
let count = 1;
if (this.right){
   count += this.right.size();
 }
 if (this.left) {
   count += this.left.size();
 }

 return count;

//OPCION 2:!!!!!!!!!!!!!!!!!!!!!
//  BinarySearchTree.prototype.size = function(){
//  if(!this.left && !this.right) return 1;
//  if(!this.left && this.right) return 1 + this.right.size();
//  if(this.left && !this.right) return 1 + this.left.size();
//  if(this.left && this.right) return 1 + this.left.size() + this.right.size()}  
 
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
