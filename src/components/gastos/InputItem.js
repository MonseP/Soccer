import React, {Component} from 'react';

class InputItem extends Component{
    render(){

        const {value, tipo,nombre,etiqueta,handleChange, max, required, signo, placeholder, min, maxLength, className} = this.props;
        return(
            <div>
                <label htmlFor={nombre}>{etiqueta}</label>
                <input
                    required={required}
                    max={max}
                    min={min}
                    maxlength={maxLength}
                    value={value}
                    type={tipo}
                    name={nombre}
                    id={nombre}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={className}
                />
            </div>
        );
    }
}

export default InputItem;