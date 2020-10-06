//Pure function
const sumaUnoAlNumero = (numero) => numero + 1;
//console.log(sumaUnoAlNumero(7));

//Avoid side effect / Esta función tiene un efecto secundario
const sumaNumeroRandom = (numero) => numero + Math.random();
//console.log(sumaNumeroRandom(7));

var temperatura = 21;
const dimeTemperatura = () => `La temperatura es ${temperatura}`;
//console.log(dimeTemperatura());

//Function composition
const realizaOperacion = (a, b, operacion) => operacion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;

/* console.log(realizaOperacion(5, 3, suma));
console.log(realizaOperacion(10, 7, resta));
console.log(realizaOperacion(10, 7, mult)); */

//Avoid mutating state
const sensei = Object.freeze ({//object.freeze no me permite cambiar el dato del objeto

    nombre: 'Gera',
  programa: 'Master en Coding',
  equipo: Object.freeze({
    modelo: 'ASUS',
    ram: 12
  })
});

sensei.nombre = 'Mali';
sensei.programa = 'Cinta Roja';
sensei.equipo.modelo = 'Macbook';
sensei.equipo.ram = 6;


//console.log(sensei);

const empleados = [
    ['Luis Torres', 25000],
    ['Maria Arriaga', 42000]
]

const copiaEmpleados = (empleados) => {
    let newEmpleados = new Array();
    //empleados.forEach((empleados) => console.log([...empleado])) //... dentro de un arreglo imprima todos los elementos de manera ordenada
    empleados.forEach((empleado) => newEmpleados.push(empleado))
    return newEmpleados;
}

const cambiarSalario = (empleados, aumento) => {
    let copEmpleados = copiaEmpleados(empleados);
    copEmpleados.forEach((empleado) => {
        empleado[1] = empleado[1] + aumento;
    });

    return copEmpleados;
}

const empleadosFelices = cambiarSalario(empleados, 10000);

console.log(empleadosFelices);