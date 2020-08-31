//alert("Fuciona");
//Declarando a la función
/* function myFunction() {
    console.log("MyFunction");
    return ("Master en coding");
}
//Estamos invocando a la función
//myFunction();
function transformaMayus(texto) {
    var resultado = texto.toUpperCase();
    return resultado;
}

var nombre = "Valeria";

var x = transformaMayus(nombre);

console.log(x);

function farengeitToCelsius(f, city) {
    var celsius = (f - 32) / 1.8;
    var resultado = "En " + city + " la temperatura es " + celsius + " grados";
    return resultado;
};

console.log(farengeitToCelsius(90, "Quito")); */
/* 
function comer() {
    var fruta = "Piña";
    return "Estoy comiendo " + fruta;
}

function lavar() {
    var fruta = "Sandía";
    if (true) {
        return "Estoy lavando una " + fruta;
    }
    
}

console.log(fruta);
console.log(comer());
console.log(lavar());
console.log(this);
 */

 // Crea una función llamada sum que reciba dos parametros "a" y "b" y regrese la suma de ambos números. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return

function sum(a, b) {
    var suma = (a + b);
    return "El valor de la suma de: " + a +" + " +  b +" es: " + suma;
}
 
console.log(sum(2, 3));


//Crea una función llamada subs que reste dos parametros "a" y "b" y regrese su resultado. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return

function sub(c, d) {
    var resta = (c - d);
    return "El valor de la resta de: " + c +" - " +  d +" es: " + resta;
}

console.log(sub(6, 4));

// Crea una función que se llame mayorDeEdad, reciba una edad como parametro y regrese si el usuario es "Mayor de edad" o es "Menor de edad"
function mayorDeEdad(e) {
    if (e >= 18) {
        return "El usuario es mayor de edad";
    } else {
        return "El usuario e menor de edad";
    }
}

console.log(mayorDeEdad(15));

//Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
//"Positivo" si el número es positivo.
//"Negativo" si el número es negativo.
//"Cero" si el número es cero.

function evaluate(f) {
    if (f > 0) {
        return "El número es positivo.";
    } else if (f<0) {
        return "El número es negativo.";
    } else {
        return "El número es cero";
    }
}

console.log(evaluate(-3));