/*

//destructuración de objetos
const objeto = {a:8, b:3};
const {a}  = objeto;
const {a} = {a:8, b:3}; //a b no le hace caso

const {b}  = objeto; //permite utilizar b donde sea

a //permitía utilizar a donde sea
//para poder llamarla desde cualquier lugar se lo hace con una variable

//commonJS
//saludo.js
const greeting2 = (name) => `Hola $ {name}, bienvenido al ecma6`; //no voy a poder acceder desde index.js porque no lo estoy exportando
module.exports = {
    message: "Hola",
    greeting2
};

//index.js                              saludo.js
const {message, greeting} = require('ruta/del/archivo');
message //"Hola"
greeting2 //(name) => `Hola $ {name}, bienvenido al ecma6`
*/

const greeting = (name) => `Hola ${name}, bienvenido al ecma6`;

//exportar module permite exportar una función y llamarla desde cualquier lugar
//Forma que lee Babel o ecma2015, o ecma6
export default greeting;

//forma que lee node - commonJS
//module.export = greeting;