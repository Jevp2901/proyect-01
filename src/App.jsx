import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='contenedor-principal'>
        {/* Barra superior */}
        <header className='header'>
          <h1>Proyecto 01 utilizando el framework de React</h1>
        </header>

        {/* Menú */}
        <div className='cuerpo-inferior'>
          <aside className='con_Izq'>
            <h2>Menú</h2>
            <ul className='menu'>
              {/* Usamos Link en lugar de <a> para evitar recargar la página */}
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/botones">Ejercicios con botones</Link></li>
            </ul>
          </aside>

          {/* Contenido Dinámico */}
          <main className='contenido'>
            <Routes>
              {/* Ruta Principal */}
              <Route path="/" element={
                <>
                  <h1>CONTENIDO</h1>
                  <p>
                    Primer pagina desarrollada por Johannes Emanuel Vargas Pinzon utilizando el framework de React 
                    como ejemplo de desarrollo. En esta pagina se encontrara ejemplos de componentes, estilos y estructura basica de una aplicacion desarrollada con React.
                  </p>
                  <div className='div-card'>
                    <h3>Creador: Emanuel Vargas</h3><br/>
                    <img className='perfil' src='src/assets/foto1.jpg' alt="Perfil" />
                    <p>Aprendiz SENA:</p>
                    <p>Programa: ADSO</p>
                    <p>Ficha: 3160037</p>
                    <p>Trimestre: 6</p>
                    <button className='btn-perfil'>
                      <a href='https://github.com/Jevp2901' target="_blank" rel='noopener noreferrer'>
                        Ver Perfil
                      </a>
                    </button>
                  </div>
                </>
              } />

              {/* Define aquí las rutas para tus otras páginas */}
              <Route path="/app" element={<h1>Sección de Contacto</h1>} />
              <Route path="/botones" element={<h1>Sección de Botones</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;