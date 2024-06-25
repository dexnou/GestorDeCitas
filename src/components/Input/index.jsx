import React from 'react';
import { style } from "./style";

const Input = ({ tipo, contenidoAEscribir, label }) => {
    const handleFocus = (event) => {
            event.target.style.opacity = '1';
    };

    const handleBlur = (event) => {
            event.target.style.opacity = '0';
    };

    return (
        <>
                <input
                    type={tipo}
                    ref={contenidoAEscribir}
                    required
                    style={{ ...style.input, ...style.inputDate }}
                    onFocus={handleFocus}
                />
            <label>{label}</label>
        </>
    )
};

export default Input;


