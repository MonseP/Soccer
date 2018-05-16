import React, {Component} from 'react';
import { Table, Icon } from 'antd';

const { Column, ColumnGroup } = Table;

class TablaGastos extends Component{
    listaGastos = this.props.datos;

    componentWillMount(){
    }
    render(){
        const table = {
            margin: "20px",

        };
        return(
          <div className="tabla-home">
            <div style={table}>
                <Table pagination={{defaultPageSize:10}}  dataSource={this.listaGastos}>

                  <Column
                      title="Nombre Completo"
                      dataIndex="name"
                      key="name"
                  />

                    <Column
                        title="Precio"
                        dataIndex="precio"
                        key="precio"
                    />
                    <Column
                        title="Fecha"
                        dataIndex="fecha"
                        key="fecha"
                    />

                    <Column
                        title="Descripción"
                        dataIndex="descripcion"
                        key="descripcion"
                    />
                    <Column
                        title="Categoría"
                        dataIndex="categoria"
                        key="categoria"
                    />
                    <Column
                        title="Tipo"
                        dataIndex="tipoPago"
                        key="tipoPago"
                    />

                    {/*<Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a href="#">Action 一 {record.name}</a>
                                <span className="ant-divider" />
                                <a href="#">Delete</a>
                                <span className="ant-divider" />
                                <a href="#" className="ant-dropdown-link">
                                More actions <Icon type="down" />
                                </a>
                            </span>
                        )}
                    />*/}
                </Table>

            </div>

            </div>
        );
    }
}

export default TablaGastos;
