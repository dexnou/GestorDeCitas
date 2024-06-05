import Citas from '../../components/Citas'
import './style.css';

const Formulario = (props) => {
    function aa(){

    }

    return (
        <div>
            <form class="form">
                <ul class="wrapper">
                    <li style={{'--i': '4'}}><input className="input" type="text" placeholder="Name" required=""/></li>
                    <li style={{'--i': '3'}}><input className="input" placeholder="Phone number" required="" name="phone"/></li>
                    <li style={{'--i':'2'}}><input className="input" type="email" placeholder="E-mail" required="" name="email"/></li>
                    <button style={{'--i':'1'}}>Submit</button>
                    <h1>assssssssssss</h1>
                </ul>
            </form>

        </div>
    
)};

export default Formulario;