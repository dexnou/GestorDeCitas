import React from 'react';

function FormComp({nombreMascota, nombreDueño, fecha, hora, sintomas, error, setNombreMascota, setNombreDueño, setFecha, setHora, setSintomas, handleSubmit}) {
    return(
        <div class="form-box">
            <h1>Formulario de Citas</h1>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                <input type="text" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} required=""/>
                <label>Nombre de la Mascota</label>
                </div>
                <div class="user-box">
                <input type="text" value={nombreDueño} onChange={(e) => setNombreDueño(e.target.value)} required=""/>
                <label>Nombre del Dueño</label>
                </div>
                <div class="user-box">
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required=""/>
                <label>Fecha</label>
                </div>
                <div class="user-box">
                <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required=""/>
                <label>Hora</label>
                </div>
                <div class="user-box">
                <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} required=""/>
                <label>Sintas</label>
                </div><center>
                <a href="#">
                    SEND
                <span></span>
                </a></center>
            </form>
        </div>
    );

}