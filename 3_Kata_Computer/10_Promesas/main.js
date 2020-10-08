//Cumpleaños de Armando 8 de Diciembre
//Si tengo dinero

//Normalmente cunado las promesas no se cumplen
//viene con una razón (pretexto)

const promesaCumple = new Promise((resolve, reject) => {
    const dinero = Math.floor(Math.random() * 1000);
    console.log('Esperando al cumple de Armando...');
    console.log(dinero);
    
    setTimeout(() =>
        dinero >= 500
            ? resolve('Feliz cumpleaños 🐱‍🐉') //true
            : reject('No tuve dinero 😒') //false
        , 3000)
   
});

//console.log(promesaCumple);

promesaCumple
    .then(result => console.log(result))
    .catch(error => console.log(error));

//En forma de función

const MyFunction = (dinero) => {
    return new Promise((resolve, reject) =>{
        console.log('Esperando el cumple de Armando..');

        setTimeout(() =>
        dinero >= 500
            ? resolve('Feliz cumpleaños 🐱‍🐉') //true
            : reject('No tuve dinero 😒') //false
        , 3000)
    });
}