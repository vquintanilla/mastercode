import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  /*
  {
    "mali":"nali",
    "age": 22
  }
  */
  //Este constructor lo comentamos por el warning en la terminal cuando corrimos react / levantamos el servidor de React
/*   constructor(props) {
   super(props);
  } */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter title="El primer contador" init="0"/>
          <Counter init="20"/>
          <Counter init="10"/>
        </header>
      </div>
    )
  }
}
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;