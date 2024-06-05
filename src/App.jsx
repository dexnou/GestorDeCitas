import logo from './logo.svg';
import React, { useEffect, useState, useRef } from "react";
import './App.css';
import Formulario from './views/Formulario'
import Listado from './views/Listado';

function App() {
  
  const [citas, setCitas] = useState([]);
  return (

    <>    

    <h2>Saludos</h2>  
    <div className="App">
      <div className='formularioDiv'>
        <Formulario setCitas={setCitas}/>
      </div>
      <div className='listadoDiv'>
        <Listado citas={citas} setCitas={setCitas} />
      </div>      
    </div>
    </>
  );
}

export default App;