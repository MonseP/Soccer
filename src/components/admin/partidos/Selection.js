import React, { Component } from 'react';
import { Table } from 'antd';
import firebase from '../../../firebase';
const { Column } = Table;


class Detalle extends Component {
    render() {
        const {partidos} = this.state;
        return (
          <div>
          <Table  dataSource={partidos} >


            <Column
                 title= "Partido"
                dataIndex="name"
                  key="name"
                  render={(text, record) => (
                  <span>
                  <a href="./">{record.name}</a>

                  </span>
                          )}
                  />

              <Column
                  title="Etiqueta"
                  dataIndex="info"
                  key="info"
              />

              <Column
                  title="Precio"
                  dataIndex="price"
                  key="price"
              />
              <Column
                  title="Cantidad"
                  dataIndex="cant"
                  key="cant"
              />

          </Table>
        </div>
      );
  }
}

export default Detalle;
