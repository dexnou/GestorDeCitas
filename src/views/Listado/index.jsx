import React, { useEffect, useState, useRef } from "react";
import Citas from "../../components/Citas"
import './style.css';


const Listado = (props) =>{
    return(
        <>
        <div className="citaDiv">
            <Citas/>
        </div>
        </>
    )
};

export default Listado;



