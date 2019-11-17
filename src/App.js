import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ASADAS</h1>
        <ul>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/acueductos">Acueductos</Link>
          </li>
          <li>
            <Link to="/mediciones">Mediciones mensuales</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;