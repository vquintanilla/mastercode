//commonJS - forma que lee node 
//Forma que lee Babel o ecma2015, o ecma6
import greeting from './greeting'; //para buscar en archivos que están afuera de mi raiz ./../xxx
import './styles/style.scss';
//usar la función
console.log(greeting('generacion 2'));
console.log(greeting('hola estoy igualandome'));
console.log(greeting('ya instalé babel'));