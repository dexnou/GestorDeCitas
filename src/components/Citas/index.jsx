import './style.css'

const Citas = (props) => {
    return (
        <div class="cita">
            <p>Mascota: <span>{props.nombre.mascota}</span></p>
            <p>Dueño: <span>{props.nombre.dueño}</span></p>
            <p>Fecha: <span>{props.fecha.fecha}</span></p>
            <p>Hora: <span>{props.fecha.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
};

export default Citas;