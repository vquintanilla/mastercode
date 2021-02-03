/* 
1. El componente inicia con mayuscula
2. Siempre debemos de importar React valor dado en el padre
3. El componente y el archivo se llaman igual
*/
import React from 'react';
import './counter.css'
// un class-based component debe de heredar de React Component

class Counter extends React.Component {
    //Ya que heredamos de una clase, tenemos un constructor
    constructor(props) {//init="0" valor dado por el padre, si está entre comillas es una cadena
        //El constructor recibe de argumento los props
        //Propiedades en el componente
        //Atributos que asignamos cuando lo estamos llamando en un componente padre
        super(props);
        //el estado es la data que controla que es lo que se ve en la vista
        this.state = {
            count: parseInt(props.init),
        }

    }
    render() {
        return (<>
            {/* en jsx la apertura de llaves significa que dentro hay codigo de javascript que devuelve algo */}
            <h2>{this.props.title}</h2>
            <h4>{this.state.count}</h4>
            <div className="counter-container">
            <button className="counter-btn" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Sumar</button> {/* //this state es la unica forma de modificar los estados */}
            <button className="counter-btn" onClick={() => { this.setState({count: this.state.count - 1 }) }}>Restar</button>
            </div>

        </>)
    }
}

export default Counter;