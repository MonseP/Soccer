import React, {Component} from 'react';

class DropDownList extends Component{
    render(){
        const {data,nombre,etiqueta, handleChange} = this.props;
        const dataMap = data.map((r) =>
            <option key={r.name} value={r.name}>{r.name}</option>
        );
        return(
            <div>
                <label htmlFor={nombre}>{nombre}</label>
                <select  id={nombre} name={nombre} onChange={handleChange} >
                    {dataMap}
                </select>
            </div>
        );
    }
}

export default DropDownList;