/*Escribe el código que permita hacer las operaciones elementales CRUD

CREATE (crear)
READ (leer)
UPDATE (actualizar)
DELETE (borrar)

de la siguiente API genérica:
         https://goodreads-devf-aaron.herokuapp.com/docs/

   Recuerda probar con Postman o con Insomnia cómo hay que hacer las peticiones a la API para ver qué y cómo responde el servidor.

POST
    1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. */

const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

/* const createAuthor = (name, lastName, nationality, bio, gender, age) => {
  const URL_POST = `${URL_BASE}/api/v1/authors/`;
  const jsonSend = {
    "name": name,
    "last_name": lastName,
    "nacionalidad": nationality,
    "biography": bio,
    "gender": gender,
      "age": age,
    "is_alive": "true"
    
  };

  request.post(URL_POST, { form: jsonSend }, (err, res, body) => {
    if (res.statusCode === 201) {
      const json = JSON.parse(body);
      console.log(json);
    } else {
      console.log(res.statusCode);
    }
  });
}

createAuthor("Vale", "Quintanilla", "MX", "busco trabajo", "F", 34);

/*GET
    2.- Escribe una función para realizar una petición a la API para

hallar obtener la lista de todos los autores


const findAllAuthors = () => {
  const URL_GET = `${URL_BASE}/api/v1/authors/`;

  request.get(URL_GET, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      console.log(json);
    } else {
      console.log(res.statusCode);
    }
  });
}

findAllAuthors(); */


/*    3.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para hallar un 
        autor con el ID especificado.

PUT*/
const findOneAuthorById = (id) => {
    const URL_GET = `${URL_BASE}/api/v1/authors/`;
  
    request.get(URL_GET, (err, res, body) => {
      if (res.statusCode === 200) {
        const json = JSON.parse(body);
        console.log(json);
      } else {
        console.log(res.statusCode);
      }
    });
  }
  
  findOneAuthorById(12818);

  // Este es un típico error ocasionado por la asincronicidad de las peticiones HTTP mediante AJAX
// const newAuthor = createAuthor("José", "Saramago", "USA", "Escritor de muchos libros", "M", 95, false);
// findOneAuthorById(newAuthor.id);

// UPDATE ONE
const updateAuthor = (id, name, lastName, nacionalidad, biography, gender, age, isAlive) => {
    const URL_PUT = `${URL_BASE}/api/v1/authors/${id}/`;
    const jsonSend = {
      "name": name,
      "last_name": lastName,
      "nacionalidad": nacionalidad,
      "biography": biography,
      "gender": gender,
      "age": age,
      "is_alive": isAlive
    };
  
    return request.put(URL_PUT, { form: jsonSend }, (err, res, body) => {
      if (res.statusCode === 200) {
        const updatedAuthor = JSON.parse(body);
        console.log(updatedAuthor);
        return updatedAuthor;
      } else {
        console.log(res.statusCode);
      }
    });
  }
  
  // updateAuthor(12818, "Elías", "Saramago", "USA", "Escritor de mucho código", "F", 371, true);
  
  // DELETE ONE
  const deleteAuthorById = (id) => {
    const URL_DELETE_ONE = `${URL_BASE}/api/v1/authors/${id}/`;
    request.delete(URL_DELETE_ONE, (err, res, body) => {
      if (res.statusCode === 204) {
        console.log(`Usuario con id ${id} fue eliminado`);
      } else {
        console.log(res.statusCode);
      }
    });
  }
  
  // createAuthor("José", "Saramago", "USA", "Escritor de muchos libros", "M", 95, false);
  // deleteAuthorById(13257);
  // findOneAuthorById(13257);