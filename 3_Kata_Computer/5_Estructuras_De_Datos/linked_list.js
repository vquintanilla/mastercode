/* const lista = {
    head: "loquesea",
    length: 0

} */

//El nodo es la información del elemento y su apuntador (o enlace) al siguiente elemento.

class Node {
    constructor(data) {
        //en data guardamos cualquier objeto que queremos
        this.data = data;
        //es quien nos indica el siguiente nodo, por defecto es null
        this.next = null;
    }
}

//Linked list
//Una lista ligada debe de tener una cabecera (head)
//Nos va a indicar el inicio de la lista.
//El tamaño de la lista (length)

//Las listas tienen dos comportamientos esenciales,
//insertar (add)
//borrar (delete)

class LinkedList{
    constructor() {
        this.head = null;
        this.length = 0;
    }

//estos son los métodos o comportamientos de mi lista

    add(data) {
        const node = new Node(data); //{data: data, next : null}
        this.head = node;
        this.leng++;
}
}

const listaDeAlumnos = new LinkedList();
listaDeAlumnos.add('Valeria');
console.log(listaDeAlumnos);