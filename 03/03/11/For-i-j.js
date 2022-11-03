// const lista = [1, 2, 3, 4, 5];

// for (let i = 0, j = 0; i < lista.length; i++, j++) {
//  console.log(lista[i] + j); 
// }

//1
//3
//5
//7
//9


// const lista = [1, 2, 3, 4, 5];
// let soma = 0;

// for (let elemento of lista) {
//  soma += elemento;
// }

// console.log(soma) //15

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15