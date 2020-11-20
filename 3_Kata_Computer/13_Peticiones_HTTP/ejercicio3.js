//3.- Hacer una petición por autor y devolver la lista de sus libros http://openlibrary.org/search.json?author=asimov

const request = require('request');

const getLibroByName = (name) => {
    //name = name.replace(/ /g, "+");
    
    request.get(`http://openlibrary.org/search.json?author=${name}`, function (error, response, body) {

    if (response.statusCode === 200) {
        const json = JSON.parse(body);
        const size = json.docs.length
        //console.log(size);
        let index = 0;
        while (index < size) {
                let autorBuscado = json.docs[index].author_name;
              //  console.log(autorBuscado);
               // console.log(name);
             //  console.log(json.docs[index].title_suggest);
            for (let i = 0; i < autorBuscado.length; i++) { 
               // console.log("Es igual: "+autorBuscado[i]+" == "+name.toLowerCase() )
                if ((autorBuscado[i].toLowerCase()).includes(name.toLowerCase())) {
                    //console.log(index);
                    console.log(json.docs[index].title_suggest);
              } 
            }
              index++;
        };
    } else {
      console.log("Ocurrio un error en la peticion..");
    }
  });
}


getLibroByName("asimov");