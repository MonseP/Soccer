import React, { Component } from 'react';
import './Direccion.css';




class Dirección extends React.Component {

  render() {
    return (


<div className="container">
  <form>
    <ul className="flex-outer">
      <li>
        <label for="first-name">Nombre/Quien recibe:</label>
        <input type="text" id="first-name" placeholder="Nombre"/>
      </li>
      <li>
        <label for="last-name">País</label>
        <input type="text" id="last-name" placeholder="País"/>
      </li>
      <li>
        <label for="estado">Estado</label>
        <input type="text" id="estado" placeholder="Estado"/>
      </li>
      <li>
        <label for="estado">Municipio</label>
        <input type="text" id="Municipio" placeholder="Municipio"/>
      </li>
      <li>
        <label for="numero">Número interior</label>
        <input type="number" id="phone" placeholder="Int."/>
      </li>
      <li>
        <label for="numero">Número exterior</label>
        <input type="number" id="phone" placeholder="Ext."/>
      </li>
      <li>
        <label for="codigo">Código Postal</label>
        <input type="number" id="phone" placeholder="C.P"/>
      </li>
      <li>
        <label for="message">Descripción</label>
        <textarea rows="refe" id="message" placeholder="Referencias"></textarea>
      </li>

      <li className="btn-direccion" >
        <button type="submit">Guardar</button>

      </li>
    </ul>
  </form>
</div>


    );
  }
}

export default Dirección;
