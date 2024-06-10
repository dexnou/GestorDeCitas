import './style.css'

const Cita = (props) => {
    const eliminarCita = () => {
        const eliminar = window.confirm('Esta cita se eliminara, ¿Está seguro de esta acción?');
        if (eliminar){
            eliminar(props.key); /*no existe cita.id XDD*/
        }

    };
    
    return (
        <div class="cita">
            <p>Mascota: <span>{props.cita.mascota}</span></p>
            <p>Dueño: <span>{props.cita.dueño}</span></p>
            <p>Fecha: <span>{props.cita.fecha}</span></p>
            <p>Hora: <span>{props.cita.hora}</span></p>
            <p>Sintomas: <span>{props.cita.sintomas}</span></p>
            <button onClick={eliminarCita} className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
};

export default Cita;