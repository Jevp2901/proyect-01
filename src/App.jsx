import React from 'react';
import './App.css';

function App() {
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
            <li>Contacto</li>
            <li>About</li>
          </ul>
        </aside>
        {/* contenido */}
        <main className='contenido'>
          <h1>CONTENIDO</h1>
          <p>
            Primer pagina desarrollada por Johannes Emanuel Vargas Pinzon utlizando el framework de React 
            como ejemplo de desarrollo. En esta pagina se encontrara ejemplos de componentes, estilos y estructura basica de una aplicacion desarrollada con React.
          </p>
          <div className='div-card'>
            <h3>Creador: Emanuel Vargas</h3><br/>
            <img className='perfil' src='src/assets/foto1.jpg' alt="" />
            <p>Aprendiz SENA:</p>
            <p>Programa: ADSO</p>
            <p>Ficha: 3160037</p>
            <p>Trimestre: 6</p>
            <button className='btn-perfil'>
              <a href='https://github.com/Jevp2901' rel='noopener noreferrer'>
                Ver Perfil
              </a>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;