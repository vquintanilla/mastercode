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

// Subclase / Clase hija
class Gato extends Mascota {
    constructor(nombre, patas, colorOjos) {
      super(nombre, patas);
      this.vidas = 7;
      this.colorOjos = colorOjos;
    }
  
    ronronear() {
        //return `Puuuuurrrrr`;
        return `${this.nombre} esta ronroneando prrrrr`
    }
  }

const gato = new Gato('Pelusa Josefina', 4, 'Verdes');
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());

console.log('---------------------------------');

