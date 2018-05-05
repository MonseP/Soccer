import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';



const columns = [{
  title: 'Producto',
  dataIndex: 'imagen',
}, {
  title: 'Nombre',
  dataIndex: 'name',
}, {
  title: 'Estado',
  dataIndex: 'estado',
}];
const data = [{
  key: '1',
  imagen: <img  id="img" src="http://gethiyu.com/site/wp-content/uploads/2014/05/6627dc70842eb9096aab175aac72e64d.jpg" alt=""/>,
  name: 'Semillas',
  estado: "Comprado",
}];

class Compra extends React.Component {

  render() {

    return (
      <div>

  <Table columns={columns} dataSource={data} size="small"  />

</div>



    );
  }
}
export default Compra;
