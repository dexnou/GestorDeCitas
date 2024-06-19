import Cita from '../../components/Cita'
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useRef } from 'react';

const Formulario = (props) => {
    const mascotaRef = useRef();
    const dueñoRef = useRef();
    const fechaRef = useRef();
    const horaRef = useRef();
    const sintomasRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const mascota = mascotaRef.current.value.trim();
        const dueño = dueñoRef.current.value.trim();
        const fecha = fechaRef.current.value.trim();
        const hora = horaRef.current.value.trim();
        const sintomas = sintomasRef.current.value.trim();

        // Check if any required fields are empty
        if (!mascota || !dueño || !fecha || !hora || !sintomas) {
            alert('Por favor completa todos los campos');
            return;
        }

        

        // Convertir la fecha y hora ingresadas en milisegundos
        const fechaSeleccionada = new Date(fecha + 'T' + hora);
        const ahora = new Date();

        // Comparar la fecha seleccionada con la fecha actual
        if (fechaSeleccionada <= ahora) {
            alert('La fecha y hora deben ser futuras');
            return;
        }

        const id = uuidv4();

        const nuevaCita = {
            id: id,
            mascota: mascota,
            dueño: dueño,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };

        props.agregarCita(nuevaCita); // Call the parent function to add the new cita

        // Optionally, reset the form fields
        mascotaRef.current.value = '';
        dueñoRef.current.value = '';
        fechaRef.current.value = '';
        horaRef.current.value = '';
        sintomasRef.current.value = '';
    };

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" ref={mascotaRef} name="mascota" required />
                    <label>Nombre de la Mascota</label>
                </div>
                <div className="user-box">
                    <input type="text" ref={dueñoRef} name="dueño" required />
                    <label>Nombre del Dueño</label>
                </div>
                <div className="user-box">
                    <input type="date" ref={fechaRef} name="fecha" required />
                    <label>Fecha</label>
                </div>
                <div className="user-box">
                    <input type="time" ref={horaRef} name="hora" required />
                    <label>Hora</label>
                </div>
                <div className="user-box">
                    <textarea ref={sintomasRef} name="sintomas" required />
                    <label>Síntomas</label>
                </div>
                <center>
                    <a href="#" onClick={handleSubmit}>
                        SEND
                        <span></span>
                    </a>
                </center>
            </form>
        </div>
    );
};


export default Formulario;