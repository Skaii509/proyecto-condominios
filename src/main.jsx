import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx' //Botton contador
import './index.css'        //Estilos de index

//Configurando ruta.
const root = ReactDOM.createRoot(document.getElementById('root'))

// <<< Inicio >>> //
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
)
