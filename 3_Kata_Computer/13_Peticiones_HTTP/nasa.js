6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta el día de ayer.
                    https://api.nasa.gov/
*/
                          
const getGlobalExtinction = (startDate, endDate) => {
  const API_KEY = 'ulbFuhWeOyIt1V9o8KeSc1e8AXt8rfX4a03dOUoo';
  const NASA_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;

  request.get(NASA_URL, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      // json.near_earth_objects.2015-09-08[n].is_potentially_hazardous_asteroid (pueden ser muchas fechas)
      const dates = Object.keys(json.near_earth_objects);
      dates.forEach(date => {
        console.log('\n', date);
        json.near_earth_objects[date]
          .forEach(asteroid => {
            const name = asteroid.name;
            const magnitude = asteroid.absolute_magnitude_h;
            const isHazardous = asteroid.is_potentially_hazardous_asteroid;

            if (isHazardous) {
              console.log(`${name} with magnitude ${magnitude} is hazardous? ${isHazardous}`);
            }
          });
      }); 
    }
  });
}

getGlobalExtinction("2020-11-01", "2020-11-08");

/*
7.- Traer los primeros 151 pokemon de la primera generacion y 
    devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
    y peso.
                    https://pokeapi.co/
*/