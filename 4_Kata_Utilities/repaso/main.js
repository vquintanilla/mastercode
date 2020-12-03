const Gato = require('./clases/Gato');
import camaleon from './Camaleon'; 
//const Camaleon = require('./clases/Camaleon'); esto es en js
console.log("hola soy el main");

const gato = new Gato('Pelusa Josefina', 4, 'Verdes');
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());

const camaleon = new Camaleon('Rango', 4);
console.log(camaleon);
console.log(camaleon.comer());
camaleon.setColor('rojo');
console.log(camaleon);