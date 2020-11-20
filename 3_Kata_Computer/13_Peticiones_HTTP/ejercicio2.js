/* 2.- Hacer una funcion que haga una petición (Ejemplo: peticionLibro(“i robot”);
Buscar un libro y traer el o los autores del primer libro
http://openlibrary.org/search.json?q=i+robot)  */
const request = require('request');

/* con busqueda lineal
const getLibroByName = (name) => {
  request.get(`http://openlibrary.org/search.json?q=i+robot`, function (error, response, body) {
    if (response.statusCode === 200) {
        const json = JSON.parse(body);
        const size = json.docs.length
        //console.log(size);
        let index = 0;
            while(index < size) {
              let libroBuscado = json.docs[index].title_suggest;
                if (libroBuscado === name) {
                    console.log(index);
                    console.log(json.docs[index].author_name);
                    return -1;
              } 
              index++;
        };
        console.log("Ese libro no existe");
    } else {
      console.log("Ocurrio un error en la peticion..");
    }
  });
}

getLibroByName("Robotics"); */

const getAuthorByBook = (bookName) => {
    bookName = bookName.replace(/ /g, "+");
    request.get(`http://openlibrary.org/search.json?q=${bookName}`, function (error, response, body) {
        const json = JSON.parse(body);
        if (response.statusCode === 200) {
           // console.log(json.docs[0].author_name[0])
          // (json.docs[0].author_name.forEach(author => {console.log(author)}))
           // json.docs[0].author_name.forEach(author => console.log(author));
            json.docs.forEach (book => console.log(book.title_suggest)) //ejercicio 3
            /*
                TODO: Buscar qué es y cómo funciona
                -map
                -filter
                -reduce
            */
        } else {
            console.log("Ocurrio un error en la peticion..");
        }
    });

}


getAuthorByBook("El Olvido que seremos");
