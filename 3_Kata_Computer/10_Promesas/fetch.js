const buscaPokemon = (nombre) => {
    const pokeName = nombre.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
        console.log(response);
        if (response.status == 200) {;
            response.json()
/*                 .then((pokemon) => console.log(name))({
                    name: pokemon.name.id: pokemon.id,
                    height: pokemon.height
                    para el buscador se puede hacer con un objeto
                }) */
        .then((pokemon) => console.log(pokemon))
        .catch ((err) => console.log(err))
        } else {
            console.log('Pokemon no encontrado');
        }
    })
    .catch((error) => console.log(error));
}
    
buscaPokemon('eevee');
buscaPokemon('Gengar');
buscaPokemon('Pikachu');
buscaPokemon('perro');