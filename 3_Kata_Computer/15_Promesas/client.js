const { resolve } = require("path");
const request = require("request");

const AoE_API = 'https://age-of-empires-2-api.herokuapp.com';

/* const getAllCivilizations = () => {
  const CIVILIZATIONS = '/api/v1/civilizations';
  const GET_CIVILIZATIONS = `${AoE_API}${CIVILIZATIONS}`;

  request.get(GET_CIVILIZATIONS, (err, res, body) => {
    // res.statusCode === 200 //operador ternario y solo se usa cuando se tiene una línea de código
    //  ? console.log(body)
    //  : console.log('Error en la petición'); 
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      getOneCivilization(json);
    }
  });
}

const getOneCivilization = (json) => {
  const civilizationName = json.civilizations[3].name;
  const ONE_CIVILIZATION = `/api/v1/civilization/${civilizationName}`
  const GET_ONE_CIVILIZATION = `${AoE_API}${ONE_CIVILIZATION}`;

  request.get(GET_ONE_CIVILIZATION, (err, res, body) => {
    if (res.statusCode == 200) {
      console.log(JSON.parse(body));
    }
  })
} */

// getAllCivilizations(); con promesas

const getAllCivilizations = () => {
  const GET_CIVILIZATIONS = `${AoE_API}/api/v1/civilizations`;
 
  return new Promise((resolve, reject) => {
  
    request.get(GET_CIVILIZATIONS, (err, res, body) => {

          if (res.statusCode === 200) {
            const json = JSON.parse(body);
            resolve(json);
      }
     // reject("Error obteniendo todas las civilizaciones");
      reject(new Error("No se completo la peticion"));
        });
  })
 // return promesa;
}

getAllCivilizations()
.then(exito => console.log(exito))
.catch(error => console.log(error))  ;
/* 
const getOneCivilization = (json) => {
  const civilizationName = json.civilizations[3].name;
  const ONE_CIVILIZATION = `/api/v1/civilization/${civilizationName}`
  const GET_ONE_CIVILIZATION = `${AoE_API}${ONE_CIVILIZATION}`;

  request.get(GET_ONE_CIVILIZATION, (err, res, body) => {
    if (res.statusCode == 200) {
      console.log(JSON.parse(body));
    }
  })
} */