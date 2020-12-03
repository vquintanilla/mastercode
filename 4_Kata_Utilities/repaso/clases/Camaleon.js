const Mascota = require('./Mascota');
//camaleon una instancia de mascota
class Camaleon extends Mascota {
    constructor(nombre, patas) {
      super(nombre, patas);
      this.color = 'verde';
    }
  
    setColor(nuevoColor) {
      this.color = nuevoColor;
    }
}
  
module.exports = Camaleon;