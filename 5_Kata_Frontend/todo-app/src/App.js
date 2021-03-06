/* import React from 'react';
import './App.css';
import HolaMundo from './components/HolaMundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo App
         <HolaMundo texto="Hola desde App.js"/> {/*le estoy pasando texto al componente }
      </header>
    </div>
  );
}

export default App; */

// Ejercicio:
/* return (
  <main className="main">
    <Navbar /> - Colocar una navbar sencilla
    <Content /> 
      - Una lista de contactos (pueden colocar los nombres y correos de tres personas)
      - Tiene que ocupar todo el espacio disponible entre el navbar y el footer
      - Tiene que centrar el contenido horizontal y verticalmente
    <Footer /> - Colocar un footer sencillo que siempre esté pegado al final de la página, independientemente del contenido
  </main>
)
*/

import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos />
      </header>
    </div>
  );
}

export default App;