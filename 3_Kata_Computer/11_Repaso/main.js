/* const miFuncion = () => { return 'Hola soy la funcion';}


console.log(1);
console.log(2);
for (let i = 0; i < 10000; i++){
    console.log("For en el indice: ", i);
}
console.log(miFuncion());
setTimeout(() => { console.log(3)}, 3000);
console.log(4);
console.log(5); */

/* const despuesDeMil = () => {
    console.log("Primer timeout!");
};

const despuesDeQuinientos = () => {
    console.log("Segundo timeout!");
}

const despuesDeDoscientos = () => {
    console.log("Tercer timeout!");
}

console.log("Inicio");
setTimeout(despuesDeMil, 1000);
setTimeout(despuesDeQuinientos, 500);
setTimeout(despuesDeDoscientos, 200);
setTimeout(() => { console.log("Ya!") }, 0);
console.log("Fin"); */

/*Callbacks & Higher Order Functions
setTimeout
1) Un callback
2) Tiempo que debe esperar antes de ejecutar el callback
*/

//setTimeout es una función de orden superior
//porque recibe un callback como argumento
//setTimeout(() => { }, 2000);

/*
Caso didáctico y cero práctico
*/

const texto = "texto";
const booleano = true;
const miFuncion = () => { };

const ejecutaOperacionConDosNumeros = (num1, num2, operacion) => { 
    console.log("hora de ejecutar la operación!")
    return operacion(num1, num2);
};

const sumarDosNumeros = (a, b) => a + b; //se omite el return en función flecha

//const resultado = ejecutaOperacionConDosNumeros(5, 7, sumarDosNumeros); //sumarDosNumeros se conoce como callback, es un parametro
const resultado = ejecutaOperacionConDosNumeros(5, 7, (x,y) => x-y);
console.log(resultado);