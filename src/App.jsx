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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Logout</li>
          </ul>
        </aside>
        {/* contenido */}
        <main className='con_Der'>
          <h1>Contenido</h1>
          <div className="contenedor-img">
            <img 
              className="img1" 
              src="https://tse4.mm.bing.net/th/id/OIP.SJ-apyHOz4ufWEsvgY9fYQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="React Background" 
            />
          </div>
          <p>
            El mundo del desarrollo web evoluciona constantemente, y frameworks como React 
            permiten crear interfaces dinámicas, modernas y eficientes. Esta plataforma ofrece 
            a los desarrolladores la posibilidad de construir aplicaciones escalables y atractivas.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;