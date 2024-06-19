import React, { useEffect, useState, useRef } from "react";
import Cita from "../../components/Cita"
import './style.css';


const Listado = ({ citas, eliminarCita }) => {
    return (
      <>
        <h2>Listado de Citas</h2>
        <div className="citaDiv">
          <ul>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </ul>
        </div>
      </>
    );
  };


export default Listado;



