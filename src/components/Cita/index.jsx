import './style.css'

const Cita = ({ cita, eliminarCita }) => {

    const handleEliminar = () => {
        eliminarCita(cita.id);
    };

    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueño}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button onClick={handleEliminar} className="button eliminar u-full-width">Eliminar ×</button>
        </div>
    )
};

export default Cita;