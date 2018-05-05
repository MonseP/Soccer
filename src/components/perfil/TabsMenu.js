import React, { Component } from 'react';
import { Tabs } from 'antd';
import Compra from './compra/Compra.js';
import PerfilPedidos from './perfildatos/PerfilPedidos.js';
import Direccion from '../carro/direccion/DireccionPago';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';

class TabsMenu extends React.Component {
  render() {

    const TabPane = Tabs.TabPane;

    function callback(key) {
      console.log(key);
    }
    return (
        <div className="tabs" >
            <div >
                  <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="Última orden" key="1"> <Compra/> </TabPane>
                      <TabPane tab="Historial" key="3"> <PerfilPedidos/> </TabPane>
                      <TabPane tab="Información de envío" key="2"><Direccion/> </TabPane>
                  </Tabs>
            </div>
        </div>
    );
  }
}

export default TabsMenu;
