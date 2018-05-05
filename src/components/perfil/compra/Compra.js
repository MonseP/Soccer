import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import './Compra.css';


const columns = [{
  title: 'Fecha',
  dataIndex: 'fecha',
}, {
  title: '# Pedido',
  dataIndex: 'id',
}, {
  title: 'Productos',
  dataIndex: 'productos',
},{
  title: 'Precio',
  dataIndex: 'precio',

},{
    title: 'Fecha de entrega',
    dataIndex: 'entrega',

}];
const data = [{
  key: '1',
  fecha: '12 Nov 2017',
  id: 'REV12',
  productos: "5",
  precio: '$200.00',
    entrega:"3 Feb 2018",
    description:"Prodcutos resumen"
}];

class Compra extends React.Component {

  render() {

    return (
      <div className="table-compra-actual">

  <Table id="compra-actual" columns={columns} dataSource={data} size="small"
         expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
         dataSource={data}/>

</div>



    );
  }
}
export default Compra;
