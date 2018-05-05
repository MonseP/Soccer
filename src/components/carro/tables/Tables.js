import React, { Component } from 'react';
import './Tables.css';
import FontAwesome from 'react-fontawesome';

class Tables extends React.Component {
  render() {
    return (
        <div className="tab_box">
          <h3 style={{textAlign:"center"}}>Resumen</h3>
          <br/>
          <div className="table">
              <table>
                <tr>
                  <th>Producto</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>
                <tr>
                  <td><img src="http://territorioinformativo.com/wp-content/uploads/2016/03/Miel_inicial.jpg" alt=""/></td>
                  <td>Miel de abeja</td>
                  <td>$100</td>
                  <td><input id="minus1" type="button" value="-"/> <input id="minus2" type="text" value="2"/> <input  id="minus3" type="button" value="+"/></td>
                  <td className="icon_delete"><FontAwesome  name="trash" size="2x"/></td>
                </tr>
                <tr>
                  <td><img src="https://linwoodshealthfoods.com/es/wp-content/uploads/sites/3/2016/07/Sunflower-Seeds-768x550.png" alt=""/></td>
                  <td>Semillas de girasol</td>
                  <td>$130</td>
                  <td><input id="minus1" type="button" value="-"/> <input id="minus2" type="text"/> <input  id="minus3" type="button" value="+"/></td>
                  <td className="icon_delete"><FontAwesome  name="trash" size="2x"/></td>
                </tr>
              </table>
          </div>
          <div className="box_total">
            <div className="data_total">
              <div className="fl_total">
                <p>Total de productos: </p>
                <p>$199.00</p>
              </div>
              <div className="fl_total">
                <p>Envío: </p>
                <p>$199.00</p>
              </div>
              <div className="fl_total">
                <h3>Total a pagar</h3>
                <h3>$398.00</h3>
              </div>
            </div>
          </div>
        </div>
    );
  }
}




export default Tables;
