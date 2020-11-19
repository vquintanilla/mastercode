//1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.  https://pokeapi.co/

const request = require('request');

// request.get('https://pokeapi.co/api/v2/pokemon/ditto', function (error, response, body) {
//   if (response.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(json.abilities[0].ability.name);
//   } else {
//     console.log("Ocurrio un error en la peticion...");
//   }
// });

const getPokemonByName = (name) => {
  request.get(`https://pokeapi.co/api/v2/pokemon/${name}`, function (error, response, body) {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      //console.log(json.abilities);
      console.log(json.types);
    } else {
      console.log("Ocurrio un error en la peticion...");
    }
  });
}

getPokemonByName("porygon");