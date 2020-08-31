var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

console.log("Las cuentas disponibles son:");

for (i = 0; i < cuentas.length; i++) {

    console.log(cuentas[i].nombre);
};

var nombre = prompt("Seleccione una cuenta");
var opciones = ["1. Consultar saldo", "2. Ingresar Monto", "3. Retirar Monto"];

do {
    if (nombre == "Mali" || nombre == "Gera" || nombre == "Maui") {
        validacion = 1;
        var psswd = prompt("Ingrese su contraseña");
        if (nombre === "Mali") {
            for (j = 1; j <= 3; j++) {
                if (nombre === "Mali" && psswd === "helloworld") {
                    alert(opciones.join('\n'));
                    var opcion = prompt("Elija una opción");
                    j = 4;
                    var opc = 0;
                    //valida que solo sea números
                    if (isNaN(opcion)) {
                        do {
                            alert("solo se aceptan opciones numéricas del 1 al 3");
                            var opcion = prompt("Elija una opción");
                        } while (isNaN(opcion));
                        //valida que solo sea la opcion 1, 2 o 3 y le va a pedir que ingrese la opción hasta que cumpla 1 o 2 o 3
                        do {
                        if ((opcion) > 0 && parseInt(opcion) < 4) {
                            val = 1;
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } else {
                                alert("Solo se permiten las opciones del 1 al 3, vuelva a intentar")
                                var opcion = prompt("Elija una opción");
                                var val = 2;
                            }
                        }  while (val===2);//finaliza validación de opcion de la 1 a la 3 desde validación de que sea número
                    } else {
                        //valida que solo sea la opcion 1, 2 o 3 y le va a pedir que ingrese la opción hasta que cumpla 1 o 2 o 3
                        if (parseInt(opcion) > 0 && parseInt(opcion) < 4) {
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } else {
                            do {
                                alert("Solo se permiten las opciones del 1 al 3, vuelva a intentar")
                                var opcion = prompt("Elija una opción");
                            } while (parseInt(opcion) <= 0 || parseInt(opcion) > 3);
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } //finaliza validación de opcion de la 1 a la 3
                    }
                }
                //si la contraseña es incorrecta
                else {
                    alert("La clave es incorrecta, volver a intentar");
                    var psswd = prompt("Ingrese su contraseña");
                };
            };
            //fin Mali
        } else if (nombre === "Gera") {
            for (j = 1; j <= 3; j++) {
                if (nombre === "Gera" && psswd === "l33t") {
                    alert(opciones.join('\n'));
                    var opcion = prompt("Elija una opción");
                    j = 4;
                    var opc = 1;
                    //valida que solo sea números
                    if (isNaN(opcion)) {
                        do {
                            alert("solo se aceptan opciones numéricas del 1 al 3");
                            var opcion = prompt("Elija una opción");
                        } while (isNaN(opcion));
                        //valida que solo sea la opcion 1, 2 o 3 y le va a pedir que ingrese la opción hasta que cumpla 1 o 2 o 3
                        if ((opcion) > 0 && parseInt(opcion) < 4) {
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } else {
                            do {
                                alert("Solo se permiten las opciones del 1 al 3, vuelva a intentar")
                                var opcion = prompt("Elija una opción");
                            } while (parseInt(opcion) <= 0 || parseInt(opcion) > 3);
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } //finaliza validación de opcion de la 1 a la 3 desde validación de que sea número
                    } else {
                        //valida que solo sea la opcion 1, 2 o 3 y le va a pedir que ingrese la opción hasta que cumpla 1 o 2 o 3
                        if (parseInt(opcion) > 0 && parseInt(opcion) < 4) {
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } else {
                            do {
                                alert("Solo se permiten las opciones del 1 al 3, vuelva a intentar")
                                var opcion = prompt("Elija una opción");
                            } while (parseInt(opcion) <= 0 || parseInt(opcion) > 3);
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } //finaliza validación de opcion de la 1 a la 3
                    }
                }
                //si la contraseña es incorrecta
                else {
                    alert("La clave es incorrecta, volver a intentar");
                    var psswd = prompt("Ingrese su contraseña");
                };
            };
            //fin Gera
        } else if (nombre === "Maui") {
            for (j = 1; j <= 3; j++) {
                if (nombre === "Maui" && psswd === "123") {
                    alert(opciones.join('\n'));
                    var opcion = prompt("Elija una opción");
                    j = 4;
                    var opc = 2;
                    //valida que solo sea números
                    if (isNaN(opcion)) {
                        do {
                            alert("solo se aceptan opciones numéricas del 1 al 3");
                            var opcion = prompt("Elija una opción");
                        } while (isNaN(opcion));
                        //valida que solo sea la opcion 1, 2 o 3 y le va a pedir que ingrese la opción hasta que cumpla 1 o 2 o 3
                        if ((opcion) > 0 && parseInt(opcion) < 4) {
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } else {
                            do {
                                alert("Solo se permiten las opciones del 1 al 3, vuelva a intentar")
                                var opcion = prompt("Elija una opción");
                            } while (parseInt(opcion) <= 0 || parseInt(opcion) > 3);
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } //finaliza validación de opcion de la 1 a la 3 desde validación de que sea número
                    } else {
                        //valida que solo sea la opcion 1, 2 o 3 y le va a pedir que ingrese la opción hasta que cumpla 1 o 2 o 3
                        if (parseInt(opcion) > 0 && parseInt(opcion) < 4) {
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } else {
                            do {
                                alert("Solo se permiten las opciones del 1 al 3, vuelva a intentar")
                                var opcion = prompt("Elija una opción");
                            } while (parseInt(opcion) <= 0 || parseInt(opcion) > 3);
                            if (parseInt(opcion) === 1) {
                                alert("su saldo es:" + consultarSaldo(opc));
                            } else if (parseInt(opcion) === 2) {
                                alert("su saldo actuales:" + ingreseMonto(opc));
                            } else {
                                alert("su saldo actuales:" + retirarMonto(opc));
                            }
                        } //finaliza validación de opcion de la 1 a la 3
                    }
                }
                //si la contraseña es incorrecta
                else {
                    alert("La clave es incorrecta, volver a intentar");
                    var psswd = prompt("Ingrese su contraseña");
                };
            };
        };
    } else {
        alert("usuario no existe, vuelva a ingresar");
        var nombre = prompt("Ingrese el nombre de la cuenta");
        var validacion = 2;
    }
} while (validacion==2);


//FUNCIONES
function consultarSaldo(opc) {
    return (cuentas[opc].saldo);
}

function ingreseMonto(opc) {
    var cta_ini = cuentas[opc].saldo;
    var monto = prompt("Ingrese monto a depositar");
    var total = cta_ini + parseInt(monto);
    if (parseInt(total) > 999) {
        do {
            alert("El saldo no puede ser mayor a 999, y su saldo inicial era de: " + cta_ini + " más el valor depositado de: " + monto + " supera el límite de 999, por favor vuelva a ingresar el valor");
            var monto = prompt("Ingrese monto a depositar");
            var total = cta_ini + parseInt(monto);
        } while (parseInt(total) > 999);
    } else {
        return (total);
    }
    return (total);
}


function retirarMonto(opc) {
    var cta_ini = cuentas[opc].saldo;
    var monto = prompt("Ingrese monto a retirar");
    var total = cta_ini - parseInt(monto);
    if (parseInt(total) < 10) {
        do {
            alert("El saldo no puede ser menor a 10, y su saldo inicial era de: " + cta_ini + " menos el valor retirado de: " + monto + " supera el monto mínimo de 10, por favor vuelva a ingresar el valor");
            var monto = prompt("Ingrese monto a depositar");
            var total = cta_ini - parseInt(monto);
        } while (parseInt(total) < 10);
    } else {
        return (total);
    }
    return (total);
}