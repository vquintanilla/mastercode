class Largometraje {

    constructor(titulo, duracion, director) {
        this.titulo = titulo;
        this.duracion = duracion + ' minutos';
        this.director = director;
        this.precio = 10 + ' USD';
    }
}

class Pelicula extends Largometraje {
    constructor(titulo, duracion, director, genero) {
        super(titulo, duracion, director);
        this.precio = 15 + ' USD';
        this.genero = genero;
    }
}

class Documental extends Largometraje {

    constructor(titulo, duracion, director, narrador) {
        super(titulo, duracion, director);
        this.precio = 8 + ' USD';
        this.narrador = narrador;
    }
}

let halloween = new Pelicula("Halloween Pandemia", 189, "John Carpenter", "Terror");
let donFKillCats = new Documental("Don't F**k with cats", 56, "Mark Lewis", "Jhon Green");

class Cine {
    constructor(nsalas, nombre) {
        this.nsalas = nsalas + ' salas';
        this.nombre = nombre;
    }

    isDocumental(projeccion) {
        return projeccion instanceof Documental;
}
    reproducir(largometraje) { //return boolean
        //metodo que imprima en consola el tipo de clase que estoy ocupando
        if (!this.isDocumental(largometraje)) {
            return console.log(`Es peli bro, titulo: ${largometraje.titulo}`)
        }

        return console.log(`Es Documental bro, titulo: ${largometraje.titulo}`)
        
        //console.log(largometraje);
    }
}

let laGranVia = new Cine("10", "La Gran Vía")
laGranVia.reproducir(halloween);
laGranVia.reproducir(donFKillCats);
