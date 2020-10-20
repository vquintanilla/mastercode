/* 1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’] */


function legumbritas(legumbres2, numero) {
    console.log(legumbres2);
    for (i = 0; i < numero; i++){
        console.log(legumbres2[i]);
    }
}

let legumbres = [];
console.log(legumbres.push('Manzana'));
console.log(legumbres.push('Cebolla'));
console.log(legumbres.push('Apio'));
console.log(legumbres.push('Naranja'));
console.log(legumbres.push('Papaya'));
console.log(legumbres.push('Sandía'));
console.log(legumbres.push('Melon')); 

legumbritas(legumbres, 2);