/* let = programa = "Master en coding";
programa = "Cinta blanca";  

console.log(programa); */

const programa = {
    nombre: "Master en coding",
    sensei: "Mali"
}

let edad = 25;

programa.sensei = "Maui";
edad = 26;

console.log(programa);
console.log(edad);

//Spread operator

/* function master(programa, ...senseis) {
    console.log("Bienvenido al programa" + programa);
console.log(senseis);
} */

function master(programa, ...senseis) {
    console.log(`Bienvenido al programa ${ programa}`);
    console.log(senseis);
    console.log (`Senseis: ${senseis[0]}, ${senseis[1]}, ${senseis[2]}`)
}

master("Master en coding", "Mali", "Maui", "Gera");

//Cuando invocamos a la función

function suma(x, y, z){
    console.log(x+y+z);
}

const numeros = [1, 2, 3];

//suma(1, 2, 3);
suma(...numeros);

//.............................

//Arrow functions

//Manera tradicional
/* function resta(a, b) {
    return a - b;
} */

//ES6
const resta = (a, b) => a - b;

console.log(resta(2, 1));
