import React, {Component} from 'react';
import { Table, Icon, Popconfirm, message } from 'antd';
import firebase from '../../firebase';


const columns = [
    {
      title:'Nombre del Producto',
      dataIndex:'name',
      key:'name'

    },
    {
      title:'Etiqueta',
      dataIndex:'info',
      key:'info',
},


    {

    title: 'Precio',
    dataIndex: 'price',
    key:'price'

},
{

  title:'Cantidad',
  dataIndex:'cant',
  key:'cant'

},

{
    title: 'Eliminar',
    key: 'action',
    render: (text, record) => (
        <span>
      <span className="ant-divider" />
      <Popconfirm onConfirm={()=>borrarItem(record)} title="¿Estás seguro？" okText="Sí" cancelText="No">
    <a>Borrar</a>
  </Popconfirm>

      <span className="ant-divider" />

    </span>
    ),
}];

const borrarItem = (r) => {
    console.log(r);
    let updates = {};
    updates['/productos/' + r.key] = null;
    firebase.database().ref().update(updates);
    message.warning("Se ha borrado el ingreso");

};



class ShowTable extends Component{

    state = {
        bordered: false,
        //loading: false,
        pagination: true,
        size: 'default',
        rowSelection: {},
        scroll: undefined,
        total:0

    };

    componentWillMount(){

    }



    render(){
                const {products, errors} = this.state;
        return(
            <div>

                    <Table
                        bordered={true}
                        style={{minWidth:'1000px'}}
                        {...this.state}

                        columns={columns}
                        dataSource={products}
                        expandedRowRender={record => <p>{record.description}</p>}
                        rowSelection={{onChange:(sr,srk)=>{
                            console.log("rows: ", sr);
                            console.log("keys: ", srk);
                            let total = 0;
                            for (let k in srk){
                                console.log(srk[k].cantidad);
                                total += parseInt(srk[k].cantidad);
                            }
                            this.setState({total});
                            //return total;
                        }}}

                    />


                    




            </div>
        );
    }
}



export default ShowTable;
