//const request = require('request');
import axios from "axios";
import './styles/style.scss'
const URL_BASE = "https://opentdb.com";

let token_session = "";

//CATEGORIAS
var categorias = `${URL_BASE}/api_category.php`;
axios
  .get(categorias)
  .then((response) => {
    let categorias_response = response.data;
    //contenedor para categorias
    //let categoriesList = document.createElement("div");

    //Toma la lista ya creada
    let listElement = document.getElementById("categoria"),
      size_categories = response.data.trivia_categories.length;
    let index_category = 0;

    while (index_category < size_categories) {
      //crear cada item de la lista
      let listItem = document.createElement("option");

      //añadir el item al text
      listItem.value = response.data.trivia_categories[index_category].id;
      listItem.innerHTML = response.data.trivia_categories[index_category].name;

      //añadir list item a list element
      listElement.appendChild(listItem);

      index_category++;
    }
  })
  .catch((error) => {
    console.log(`Error en categorías ${error}`);
  });

//Listener de evento change para capturar lo seleccionado
let categoria_seleccionada = ''

document.getElementById("categoria")
  .addEventListener("change", (e) =>
    categoria_seleccionada = document.getElementById("categoria").value
    //console.log(document.getElementById("categoria").value)

  );

//DIFICULTAD

//Listener de evento change para capturar lo seleccionado
let dificultad_seleccionada = ''

document.getElementById("dificultad")
  .addEventListener("change", (e) =>
    dificultad_seleccionada = document.getElementById("dificultad").value
  );

console.log(dificultad_seleccionada);
//TIPO
//Listener de evento change para capturar lo seleccionado
let tipo_seleccionado = ''

document.getElementById("tipo_respuesta")
  .addEventListener("change", (e) => {
    tipo_seleccionado = document.getElementById("tipo_respuesta").value;
//console.log("url lista"+`${URL_BASE}api.php?amount=10&category=${categoria_seleccionada}&difficulty=${dificultad_seleccionada}&type=${tipo_seleccionado}`)
    axios
      .get(`${URL_BASE}/api.php?amount=10&category=${categoria_seleccionada}&difficulty=${dificultad_seleccionada}&type=${tipo_seleccionado}`)
      .then((response) => {
        //let listPreguntas = document.getElementById("preguntas");
        let index_preguntas = 0;
        var preguntas = document.getElementById("preguntas");
        var size_preguntas = response.data.results.length;
        
     //   console.log(size_preguntas);
       // console.log(response); 
        var titulo = document.createElement('h1');
        titulo.innerText = "Preguntas";
        preguntas.appendChild(titulo);


        while (index_preguntas <size_preguntas) {
          //crear cada item de la lista
//solución https://getbutterfly.com/generate-html-list-from-javascript-array/
          //añadir el item al text
         // console.log(response); 
          //console.log(response.data.results[index_preguntas].question); 

         // console.log(response.data.results[index_preguntas].question); 
          //console.log("response.data.results[index_preguntas]"); 

          var pregunta = document.createElement('p');
          pregunta.innerText = response.data.results[index_preguntas].question;
          preguntas.appendChild(pregunta);

          var respuesta = document.createElement('input');
          respuesta.type = "Escriba su respuesta";
          preguntas.appendChild(respuesta);
       /*    ul.innerHTML = response.data.results[index_preguntas].question;
          let li = document.createElement('li');
          li.textContent(document.createTextNode(response.data.results[index_preguntas]));
          ul.appendChild(li);
 */

          index_preguntas++;
        }
      })
      .catch((error) => {
        console.log(`Error en preguntas ${error}`);
      });

  }
  );



//https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple

/* axios
  .get(preguntas)
  .then((response) => {
    let preguntas_response = response.data;
    let listPreguntas = document.getElementById("preguntas");
    let index_preguntas = 0;

    while (index_preguntas< 10) {
      //crear cada item de la lista

      //añadir el item al text
      listPreguntas.innerHTML = response.data.results[index_preguntas].question;


      index_preguntas++;
    }
  })
  .catch((error) => {
    console.log(`Error en preguntas ${error}`);
  }); */

/*
axios.get(`${URL_BASE}/api.php?amount=10&`, function (error, response, body) {
  if (response.statusCode === 200) {
    const json_token = JSON.parse(body);
    token_session = json_token.token;  } else {
    console.log("Ocurrio un error en la peticion...");
  }
});
 */

//setTimeout(function(){console.log(`Token:  ${token_session}`); }, 1000);

/*
  const preguntas = `${URL_BASE}/api.php?amount=10&token=${token_session}`;

  const init = () => {
    axios.get(preguntas)
      .then(response => {
        //console.log('veamos que onda') aqui se impirmen preguntas
          //  console.log(response)
        })
};

init(); */
// leer todas las categorías

/*   axios.get(categorias)
  .then(response => {

    let categorias_response = response.data;
    //contenedor para categorias
    let categoriesList = document.createElement('div');

    //Hacer la lista
    let listElement = document.createElement('select'),


     size_categories = response.data.trivia_categories.length;
     let index_category = 0;

    //añadir a la página
    document.getElementsByTagName('body')[0].appendChild(categoriesList);
    categoriesList.appendChild(listElement);

    while (index_category < size_categories) {

      //crear cada item de la lista
      let listItem = document.createElement('option');

      //añadir el item al text
      listItem.innerHTML = response.data.trivia_categories[index_category].name;

      //añadir list item a list element
      listElement.appendChild(listItem);

      index_category++;
  }


  })
  .catch(error => {
    console.log("error");
  }); */
