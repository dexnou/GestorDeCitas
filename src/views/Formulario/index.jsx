import Cita from '../../components/Cita'
import './style.css';

const Formulario = (props) => {
    function aa(){
        
    }

    return (
        <div class="form-box">
 
            <form>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Nombre de la Mascota</label>
                </div>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Nombre del Dueño</label>
                </div>
                <div class="user-box">
                <input type="date" name="" required=""/>
                <label>Fecha</label>
                </div>
                <div class="user-box">
                <input type="time" name="" required=""/>
                <label>Hora</label>
                </div>
                <div class="user-box">
                <textarea name="" required=""/>
                <label>Sintomas</label>
                </div><center>
                <a href="#">
                    SEND
                <span></span>
                </a></center>
            </form>
        </div>
    )};

export default Formulario;