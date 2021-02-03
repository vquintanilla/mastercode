/* import React, { Component } from 'react';

class HolaMundo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '¡Hola desde el componente!'
    }
  }

  componentDidMount() {
    console.log('Se montó el componente!');
    // Simulemos una petición a la base de datos
    setTimeout(
      () => {
        this.setState(
          {
            texto: 'Se actualizó...'
          }
        )
      },
      3000
    )
  }

  render() {
    console.log('RENDER');
    return (
      <React.Fragment> 
        <h1> Componente HolaMundo </h1>
        <h2> {this.state.texto} </h2>
      </ React.Fragment>
    );
  }
}

export default HolaMundo; */
import { useState } from 'react'; //{ useState }  hook
function HolaMundo(props) {
    //Para manejar el estado en una función usamos  el hook 'useState'
    //const [texto, setTexto] = useState('Hola desde el componente');
    const [texto, setTexto] = useState(props.texto);
    const [edad, setEdad] = useState(0);
    console.log( '🙋' , props);
    return (
        <>
            <h1>Componente Hola Mundo - Edad {edad}</h1>
            <h2>{texto}</h2>
            <input
                placeholder="Cambia el texto"
                type="text"
                onChange={e => setTexto(e.target.value)}
            />
            <input
                placeholder="Cambia la edad"
                type="number"
                onChange={e => setEdad(e.target.value)}
            />
            </>
    )
}

export default HolaMundo;