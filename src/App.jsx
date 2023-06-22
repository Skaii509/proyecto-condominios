import { useState } from 'react'
import { CondoCard } from './Card_condo.jsx'

import './App.css'
import './Card_condo.css'

//Funciones.


// <<< Inicio >>> //
function App() {
  const [count, setCount] = useState(0)
  const [condoCards, setCondoCards] = useState([]);

  const addCondoCard = () => {
    const newCondoCard = (
      <CondoCard
        name_condo="######"
        id_img={5}
        location="Nueva Ubicación"
        key={condoCards.length + 1}
      />
    );
    setCondoCards([...condoCards, newCondoCard]);
  };

  return (
    <>
      <header>
        <a className="logo" href="index.html">
          <img src="./public/logo.png" alt="" />
          <h2>ESPACIOADMIN</h2>
        </a>

        <div className="nav-right-menu">
          <ul>
              <li><a href="./index.html">Inicio</a></li>
              <li><a href="./src/Reservas.html">Reservar</a></li>
              <li><a href="./src/Pagos.html">Pagar</a></li>
          </ul>
        </div>
        
        <div className="dropdown">
          <button 
            type="button"
            className="btn btn-secondary dropdown-toggle"
            id="profile-dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="true">
              <div id="profile-name"></div>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Mi cuenta</a></li>
            <li><a className="dropdown-item" href="#">Configuración</a></li>
            <li><a className="dropdown-item" href="login.html">Cerrar sesión</a></li>
          </ul>
        </div>
      </header>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button">Edit</button>
        <button className="btn btn-primary" type="button" onClick={addCondoCard}>Add</button>
      </div>

      <div className="wrapper">
        <CondoCard name_condo='Santa Rosa' id_img={1} location="Batuco" />
        <CondoCard name_condo='Santa teresita' id_img={2} location="Colina" />
        <CondoCard name_condo='Santiago' id_img={3} location="Lampa" />
        <CondoCard name_condo='latinoamerica unica grande boca JS' id_img={4} location="Sur" />
        {condoCards}
      </div>
    </>
  )
}

export default App
