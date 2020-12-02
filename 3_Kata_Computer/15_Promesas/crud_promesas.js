/* Escribe el código que permita hacer las operaciones elementales
CRUD de la siguiente API genérica:
     https://goodreads-devf-aaron.herokuapp.com/docs/

Recuerda probar con Postman o con Insomnia cómo hay que hacer las peticiones a la API     para ver qué y cómo responde el servidor.

1.- Escribe una función que reciba como parámetros nombre,
    nacionalidad, biografía, género y edad para hacer una
    petición a la API para crear un autor nuevo. 
    La función debe retornar el autor nuevo en una promesa. 

2.- Escribe una función que reciba como parámetro un ID
    para realizar una petición a la API para hallar un 
    autor con el ID especificado. La función debe retornar
    una promesa con la respuesta del servidor. 

3.- Escribe una función que reciba como parámetros nombre,
    nacionalidad, biografía, género y edad para hacer una
    petición a la API para modificar un autor existente.
    Al ejecutar La función, esta debe retornar el autor 
    modificado en una promesa.

4.- Escribe una función que reciba como parámetro un ID
    para realizar una petición a la API para eliminar un
    autor con el ID especificado. La función debe retornar
    una promesa con la respuesta del servidor.

PARA PROBAR QUE TUS PROMESAS FUNCIONAN:
5.- Encadenando promesas, es decir, usando las funciones
    que escribiste en los puntos previos, debes:
crear, modificar y eliminar un autor. */
const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

/*
  CRUD Peticiones:
  - CREATE
  - READ
  - UPDATE
  - DELETE
*/

// CREATE
const createAuthor = (name, lastName, nacionalidad, biography, gender, age, isAlive) => {
  const URL_POST = `${URL_BASE}/api/v1/authors/`;
  const jsonSend = {
    "name": name,
    "last_name": lastName,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age,
    "is_alive": isAlive
  };

    return new Promise((resolve, reject) => {
        request.post(URL_POST, { form: jsonSend }, (err, res, body) => {
            if (res.statusCode === 201) {
              const newAuthor = JSON.parse(body);
                resolve(newAuthor);
            } else {
                reject(new (Error("Could not create author")));
            }
          });
    })
}

// createAuthor("José", "Saramago", "USA", "Escritor de muchos libros", "M", 95, false);

// READ ALL
const findAllAuthors = () => {
    const URL_GET = `${URL_BASE}/api/v1/authors/`;
    
 return new Promise((resolve, reject) => { 
  request.get(URL_GET, (err, res, body) => {
    if (res.statusCode === 200) {
        resolve(json);
    } else {
        reject(new Error("Could no retrieve all authors"));
    }
  });
})
}

// findAllAuthors();

// READ ONE
const findOneAuthorById = (id) => {
    const URL_GET_ONE = `${URL_BASE}/api/v1/authors/${id}/`;
    return new Promise((resolve, reject) => { 
         request.get(URL_GET_ONE, (err, res, body) => {
    if (res.statusCode === 200) {
      resolve(json);
    } else {
        reject(new Error("Could no retrieve Author by id"));
    }
  }); 
    })

}

// findOneAuthorById(12818);

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

    return new Promise((resolve, reject) => { 
    return request.put(URL_PUT, { form: jsonSend }, (err, res, body) => {
    if (res.statusCode === 200) {
      const updatedAuthor = JSON.parse(body);
      resolve (updatedAuthor);
    } else {
        reject(new Error("Could no update Author by id"));
    }
  });

    })

}

// updateAuthor(12818, "Elías", "Saramago", "USA", "Escritor de mucho código", "F", 371, true);

// DELETE ONE
const deleteAuthorById = (id) => {
    const URL_DELETE_ONE = `${URL_BASE}/api/v1/authors/${id}/`;
    
    return new Promise((resolve, reject) => { 
    request.delete(URL_DELETE_ONE, (err, res, body) => {
        if (res.statusCode === 204) {
        resolve (`Usuario con id ${id} fue eliminado`);
        } else {
            reject(new Error("Could not delete user by id"));
        }
    });

    })

}

// Crear, actualizar y borrar (el mismo autor)
// Forma no tan chida

// createAuthor("Fulanito", "DeTal", "USA", "Es un fulanito que anda por ahi", "M", 39, true)
//   .then(newAuthor => {
//     console.log('Autor creado', newAuthor);
//     updateAuthor(newAuthor.id, "Fulanita", "OfSuch", "USA", "Una fulanita", "F", 40, false)
//       .then(updatedAuthor => {
//         console.log('Autor actualizado', updatedAuthor);
//         deleteAuthorById(updatedAuthor.id)
//           .then(message => console.log(message));
//       })
//   })
//   .catch(error => console.log(error));

// findOneAuthorById(13298)
//   .then(author => console.log(author))
//   .catch(err => console.log("No lo encontré :P"))

// Forma chida

createAuthor("Fulanito", "DeTal", "USA", "Es un fulanito que anda por ahi", "M", 39, true)
  .then(newAuthor => {
    console.log('Autor creado:', newAuthor.name)
    return updateAuthor(newAuthor.id, "Fulanita", "OfSuch", "USA", "Una fulanita", "F", 40, false)
  })
  .then(updatedAuthor => deleteAuthorById(updatedAuthor.id))
  .then(() => console.log("Autor eliminado"))
  .catch(error => console.log(error))
  .finally(() => console.log('Terminaron de ejecutarse todas las peticiones :}'));

/*
  Usualmente no trabajamos con el paquete 'request',
  es más común trabajar con 'axios'. 
  Este paquete ya devuelve todo como si fuera una promesa
*/