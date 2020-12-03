
const Mascota = require('./Mascota');

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
  
module.exports = Gato;