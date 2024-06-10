import React, { useEffect, useState, useRef } from "react";
import Cita from "../../components/Cita"
import './style.css';


const Listado = ({citas, setCitas}) =>{
    return(
        <>
        <h2>Listado de Citas</h2>
        <div className="citaDiv">
            <ul>
                {
                    (citas || []).map((cita, index) => (
                        <Cita key={index} cita={cita}/>
                    ))
                }
            </ul>
        </div>
        </>
    )
};

export default Listado;



