//Super clase mascota
class Mascota {
    //Metodo especial
    //Todas las clases lo tienen
    //Es lo primero en ejecutarse, cuando se haga una instancia

    constructor(nombre, patas) {
        this.nombre = nombre;
        this.patas = patas;
    }

    comer() {
        return `${this.nombre} está comiendo`;

    }
}

//Commonjs
module.export = Mascota;