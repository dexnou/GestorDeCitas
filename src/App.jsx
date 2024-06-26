import logo from './logo.svg';
import React, { useEffect, useState, useRef } from "react";
import './App.css';
import Formulario from './views/Formulario'
import Listado from './views/Listado';

function App() {
  const [citas, setCitas] = useState([]);

  // Cargar citas desde localStorage al iniciar
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas(citasGuardadas);
  }, []);

  // Función para agregar una nueva cita
  const agregarCita = (nuevaCita) => {
    const confirmarAgregar = window.confirm('Esta cita se agregará, ¿Está seguro de esta acción?')
        if (confirmarAgregar) {
          const citasActualizadas = [...citas, nuevaCita];
          setCitas(citasActualizadas);
          localStorage.setItem('citas', JSON.stringify(citasActualizadas));

          return true;
        }
        return false;

  };

  // Función para eliminar una cita
  const eliminarCita = (id) => {
    const confirmarEliminar = window.confirm('Esta cita se eliminará, ¿Está seguro de esta acción?');
        if (confirmarEliminar) {
          const citasActualizadas = citas.filter(cita => cita.id !== id);
          setCitas(citasActualizadas);
          localStorage.setItem('citas', JSON.stringify(citasActualizadas));
        }
  };

  return (
      <>
      <h1>Administración de Pacientes</h1>
        <div className='App'>
            <div className='subDiv'>
                <Formulario agregarCita={agregarCita} />
            </div>
            <div className='subDiv'>
                <Listado citas={citas} setCitas={setCitas} eliminarCita={eliminarCita} />
            </div>
          </div>
      </>
  );
}

export default App;
