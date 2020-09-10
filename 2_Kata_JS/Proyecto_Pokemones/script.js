function showCards(pokemon) {
   // console.log(pokemon);
//codigo para la tarjeta
var card = document.createElement('div');
    card.className = "card col-2 multicolor btn-sm btn-outline-dark";
    
   // card.addEventListener('click', function () {
//         //alert("funciono");
//         var x = event.target;
 // document.getElementById("myModal").innerHTML = "Pokemon ";

//  })

card.addEventListener("click", pokeDescription);

function pokeDescription() {
    desc = pokemon.description;
    document.getElementById("descrip").innerHTML = desc;
    
    var imagenPoke = document.getElementById("img2");
    imagenPoke.className = "img2";
    imagenPoke.src = pokemon.art_url;
/*     function evolucionarPoke() {

        var imagenPoke = document.getElementById("img2");
        imagenPoke.src = pokemon.art_url;
       // console.log(imagenPoke.src);
    } */

//imagen agrandada


    var modal = document.getElementById("myModal");
//cerrar ventana de modal
    var span = document.getElementsByClassName("close")[0];

    card.onclick = function () {
        modal.style.display = "block";
    }
    //si da clic en donde sea
    span.onclick = function () {
            modal.style.display = "none";
          }

          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            } 
          }
}

//codigo para el contenedor
var cardContainer = document.getElementById('card-container');
cardContainer.appendChild(card);

//codigo para la imagen
    var img = document.createElement('img');
    img.className = "card-img-top rotar";
    img.src = pokemon.art_url;

    card.appendChild(img);


//codigo para el card body
var cardBody = document.createElement('div');
cardBody.className = "card-body";

//codigo para el titulo
var title = document.createElement('h5');
title.className = "card-title h5";
title.innerHTML = pokemon.name;

card.appendChild(cardBody);
    cardBody.appendChild(title);
}

for (var i = 0; i < pokedex.length; i++)
{
    showCards(pokedex[i]);
}

