//3.- Hacer una petición por autor y devolver la lista de sus libros http://openlibrary.org/search.json?author=asimov

const request = require('request');

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

getLibroByName("Robotics");