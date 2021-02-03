import React from 'react';
import './App.css';
import HolaMundo from './components/HolaMundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo App
         <HolaMundo texto="Hola desde App.js"/> {/*le estoy pasando texto al componente */}
      </header>
    </div>
  );
}

export default App;