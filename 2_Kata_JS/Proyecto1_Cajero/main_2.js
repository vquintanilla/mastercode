/**
 * Constantes del aplicativo
 */
var OPERACIONCONSULTA = 1;
var OPERACIONABONO = 2;
var OPERACIONRETIRO = 3;
var OPERACIONLISTA = 4;
var OPERACIONSALIR = 5;
var usuarioMali = { nombre: "Mali", saldo: 200, password: 'helloworld' };
var usuarioGera = { nombre: "Gera", saldo: 290, password: 'l33t' };
var usuarioMaui = { nombre: "Maui", saldo: 67, password: '123' };
var cuentas = [
    usuarioMali,
    usuarioGera,
    usuarioMaui
];
var tiraAuditora = "";
/**
 * Loop inicial colgado al input del usuario
 *
 */
function iniciaLoop() {
    console.log("Bienvenido al ATM");
    tiraAuditora += "\nBienvenido al ATM";
    pistaAuditoria();
    var usuarioLogin = prompt("¿Quien eres? Ingresa tu usuario.");
    var validaPassword = prompt("Introduce tu password:");
    var respuestaValidaLogin = validaLogin(usuarioLogin, validaPassword);
    if (respuestaValidaLogin.tieneAcceso) {
        var usuario = respuestaValidaLogin.usuario;
        consultarUsuario(usuario);
        var operacionEnCajero = prompt("¿Qué operación quieres realizar? Ingresa la opción deseada: \n1 - Para consulta.\n2 - Para abono.\n3 - Para retiro.\n4 - Para consultar usuarios.\n5 - Para salir.");
        console.log(typeof operacionEnCajero);
        console.log(operacionEnCajero);
        console.log((parseInt(operacionEnCajero) !== parseInt(OPERACIONSALIR)));
        if (parseInt(operacionEnCajero) !== parseInt(OPERACIONSALIR)) {
            if (parseInt(operacionEnCajero) === parseInt(OPERACIONCONSULTA)) { //Consulta
                consultarUsuario(usuario);
            } else if (parseInt(operacionEnCajero) === parseInt(OPERACIONABONO)) { //Abono
                if (validaOperacion(usuario)) {
                    var abono = prompt("Introduce la cantidad a abonar:");
                    abonar(usuario, abono);
                    consultarUsuario(usuario);
                }
            } else if (parseInt(operacionEnCajero) === parseInt(OPERACIONRETIRO)) { //Retiro
                if (validaOperacion(usuario)) {
                    var retiro = prompt("Introduce la cantidad a retirar:");
                    retirar(usuario, retiro);
                    consultarUsuario(usuario);
                }
            } else if (parseInt(operacionEnCajero) === parseInt(OPERACIONLISTA)) { //Consultar todos
                consultarTodos();
            }
            iniciaLoop();
        } else {
            console.log("Gracias por visitarnos.");
            tiraAuditora += "\nGracias por visitarnos.";
            pistaAuditoria();
        }
    } else {
        console.log("El usuario o contraseña son incorrectos.");
        tiraAuditora += "\nEl usuario o contraseña son incorrectos.\n usuario: " + usuarioLogin + "\npassword:" + validaPassword;
        pistaAuditoria();
        iniciaLoop();
    }
}
/**
 * Valida el login, que el usuario exista y que la contrasenia sea correcta
 *
 * @param {*} usuarioLogin
 * @param {*} validaPassword
 * @returns
 */
function validaLogin(usuarioLogin, validaPassword) {
    for (var x = 0; x < cuentas.length; x++) {
        if (cuentas[x].nombre === usuarioLogin && cuentas[x].password === validaPassword) {
            return { tieneAcceso: true, usuario: cuentas[x] };
        }
    }
    return { tieneAcceso: false, usuario: undefined };
}
/**
 * Validaciones de negocio
 *
 * @param {*} usuario
 * @returns
 */
function validaOperacion(usuario) {
    if (usuario.saldo > 990) {
        console.log("Lo sentimos has superado los $990 permitidos por este Banco.");
        tiraAuditora += "\nLo sentimos has superado los $990 permitidos por este Banco.";
        pistaAuditoria();
        return false;
    } else if (usuario.saldo < 10) {
        console.log("Lo sentimos saldo minimo permitido por este Banco es de $10.");
        tiraAuditora += "\nLo sentimos saldo minimo permitido por este Banco es de $10.";
        pistaAuditoria();
        return false;
    } else {
        return true;
    }
}
/**
 * Abono a cuenta con validacion de regla de negocio antes de realizar la operacion
 *
 * @param {*} usuario
 * @param {*} abono
 */
function abonar(usuario, abono) {
    if ((parseFloat(usuario.saldo) + parseFloat(abono)) <= 990) {
        tiraAuditora += "\nAbono en cuenta antes: $" + parseFloat(usuario.saldo);
        pistaAuditoria();
        usuario.saldo = parseFloat(usuario.saldo) + parseFloat(abono);
        tiraAuditora += "\nAbono en cuenta ahora: $" + parseFloat(usuario.saldo);
        pistaAuditoria();
    } else {
        tiraAuditora += "\nNo es posible abonar, el maximo a mantener en la cuenta es de $990 : " + parseFloat(usuario.saldo);
        pistaAuditoria();
    }
}
/**
 * Retiro por usuario con validacion  de regla de negocio antes de realizar la operacion
 *
 * @param {*} usuario
 * @param {*} retiro
 */
function retirar(usuario, retiro) {
    if ((parseFloat(usuario.saldo) - parseFloat(retiro)) >= 10) {
        tiraAuditora += "\nRetiro en cuenta antes: $" + parseFloat(usuario.saldo);
        usuario.saldo = parseFloat(usuario.saldo) - parseFloat(retiro);
        tiraAuditora += "\nRetiro en cuenta ahora: $" + parseFloat(usuario.saldo);
        pistaAuditoria();
    } else {
        tiraAuditora += "\nNo es posible retirar, no cuentas con fondos, el minimo a mantener en la cuenta es de $10 : " + parseFloat(usuario.saldo);
        pistaAuditoria();
    }
}
/**
 * Consulta todos los usuarios
 *
 */
function consultarTodos() {
    for (var x = 0; x < cuentas.length; x++) {
        consultarUsuario(cuentas[x]);
    }
}
/**
 * Recibe un usuario a consultar
 *
 * @param {*} usuario
 */
function consultarUsuario(usuario) {
    tiraAuditora += "\nTu información es la siguiente: \nNombre:" + usuario.nombre + "\nSaldo: $" + usuario.saldo;
    pistaAuditoria();
    console.log("Tu información es la siguiente: ");
    console.log("Nombre: ");
    console.log(usuario.nombre);
    console.log("Saldo: $");
    console.log(usuario.saldo);
}
/**
 *Genera un elemento de pista auditoria
 *
 */
function pistaAuditoria() {
    tiraAuditora += " - " + new Date().toLocaleString() + "\n";
    document.getElementById("consola").innerText = tiraAuditora;
}
//Invocacion inicial
iniciaLoop();