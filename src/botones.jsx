import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Botones.css';
import './App.jsx';
function Botones() {
  return (
    <div className='contenedor-principal'>
      {/* barra superior */}
      <header className='header'>
        <h1>Proyecto 01 utilizando el framework de React</h1>
      </header>

      {/* Menu */}
      <div className='cuerpo-inferior'>
        <aside className='con_Izq'>
          <h2>Menú</h2>
          <ul className='menu'>
            <li><a link href='App.jsx'>Contacto</a></li>
            <li><a link href='botones.jsx'>Ejercicios con botones</a></li>
          </ul>
        </aside>
        {/* contenido */}
        <main className='contenido'>
          <h1>CONTENIDO</h1>
        </main>
      </div>
    </div>
  );
}

export default App;