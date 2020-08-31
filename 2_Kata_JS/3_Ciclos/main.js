//Variables
//Entradas
//Salidas
//Tipos de Datos

//Estructuras de Control - Condiciones

/*
Estructuras de Control
CiclosFor
*/

/* console.log(1);
console.log(2); */

/* for (var i = 0; i < 5; i++) {
    console.log("Hola a todos");
    console.log(i);
} */

/* i < 11
i <= 11 */

//diferencia de == y ===
// 1 == 1 true          es la forma mas permisiva de comparar cosas
//0 == false  true
 //"1" === 1 false compara identidades porque son diferentes tipos
//

/* for (var i = 1; i <= 10; i++) {
    //¿El número al dividirlo entre dos, me da residuo cero y si me da cero lo muestro porque es par
    //si no me da cero no lo muestro porque es impar

    if (i % 2 === 0) {
        console.log(i);
    }
};

for (var i = 2; i <= 10; i+=2) {
    //¿El número al dividirlo entre dos, me da residuo cero y si me da cero lo muestro porque es par
    //si no me da cero no lo muestro porque es impar

        console.log(i);
}; */

/* var arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);
console.log(arreglo[3]);
console.log(typeof arreglo); */

/* var listaBiblioteca = [
    "Jose Emilio Pacheco",
    37,
    false
];

var frutas = [
    "mango",
    "pera",
    "manzana",
    "uva"
]

console.log(frutas.length);

for (var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}; */

/* EJERCICIO Ciclos FOR

Crea un arreglo que contenga los siguientes platillos:

) Enchiladas
) Taco
) Tamal
) Pozole
) Barbacoa
) Guacamole
) Quesadillas de Papa


Mediante un ciclo FOR, muestra todos los platillos (recuerda la propiedad length)
Mediante ciclo FOR y condicional IF, muestra solo el pozole y la barbacoa.
Mediante ciclo FOR y condicional IF, muestra solo los elementos impares.
Mediante únicamente un ciclo FOR, muestra los elementos que sean pares. */


//Mediante un ciclo FOR, muestra todos los platillos (recuerda la propiedad length)
/* var comidas = ["enchiladas", "taco", "tamal", "pozole", "barbacoa", "guacamole", "quesadilla de papa"];
for (var i = 0; i < comidas.length; i++){
    console.log(comidas[i]);
};  

//Mediante ciclo FOR y condicional IF, muestra solo el pozole y la barbacoa.
var comidas = ["enchiladas", "taco", "tamal", "pozole", "barbacoa", "guacamole", "quesadilla de papa"];
for (var i = 0; i < comidas.length; i++){
    if (comidas[i] === "pozole" || comidas[i] === "barbacoa")
    {
        console.log(comidas[i]);
    };
};  
 */
//Mediante ciclo FOR y condicional IF, muestra solo los elementos impares.
/* var comidas = ["enchiladas", "taco", "tamal", "pozole", "barbacoa", "guacamole", "quesadilla de papa"];
for (var i = 0; i < comidas.length; i++){
    if (i % 2 === 0){
        console.log(comidas[i]);
    }
};   */

//Mediante únicamente un ciclo FOR, muestra los elementos que sean pares.
/* var comidas = ["enchiladas", "taco", "tamal", "pozole", "barbacoa", "guacamole", "quesadilla de papa"];
for (var i = 1; i < comidas.length; i+=2){
    console.log(comidas[i]);
};  */