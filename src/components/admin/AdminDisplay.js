import React, { Component } from 'react';
import './Admin.css';
import Boton from './Boton.js';
import {Link, NavLink} from 'react-router-dom';
import { Tabs } from 'antd';
import { Modal, Button } from 'antd';
import { Table } from 'antd';
import firebase from '../../firebase';
import toastr from 'toastr';
import Partidos from './partidos/Partidos';
import FontAwesome from 'react-fontawesome';
import ProductForm from './ProductForm';


const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
const { Column } = Table;



class AdminDisplay extends Component {



    state = {
        file:null,
        errors:null,
        newProduct:{

        },

        products: [

        ],
        visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    componentWillMount(){
        let products = this.state.products;
        firebase.database().ref("products")
            .on("child_added", snap=>{
                let nino = snap.val();
                nino["id"] = snap.key;
                products.push(nino);
                this.setState({products});
            });
        firebase.database().ref("product")
            .on("child_removed", snap =>{
                let id = snap.key;
                products = products.filter(p=>p.id !==id);
                this.setState({products});
            });
    };




    remove = () =>{
        if(window.confirm("¿Seguro de Eliminar todo?")){
            firebase.database().ref("products")
              .child()


                .remove()

                .then(r=>toastr.warning("eliminado"))
                .catch(e=>{
                    toastr.error("no se puede")});
        }
    };
    onChangeForm = (e) => {
        let newProduct = this.state.newProduct;
        const field = e.target.name;
        const value = e.target.value;
        newProduct[field] = value;
        this.setState({newProduct});
        console.log(newProduct);
    };
    onChangeFile = (e) => {
        const file = e.target.files[0];
        this.setState({file});
    };

    validateForm = () => {
        let newProduct = this.state.newProduct;
        console.log(newProduct)
        let errors = this.state.errors;
        let isOk = true;
        return isOk;
    };
    onSave = (e) =>{
        e.preventDefault()
        if(this.validateForm()){
            firebase.database().ref("products")
                .push(this.state.newProduct)
                .then(r=>{
                    console.log(r.key)
                    if(this.state.file){
                        let updates = {};
                        firebase.storage()
                            .ref(r.key)
                            .child(this.state.file.name)
                            .put(this.state.file)
                            .then(s=>{
                                const link = s.downloadURL;
                                let newProduct = this.state.newProduct;
                                newProduct["photos"] =[link];
                                updates[`/products/${r.key}`] = newProduct;
                                firebase.database().ref().update((updates));

                            });
                    }
                    toastr.success("Si guarde" + r.key)


                })
                .catch(e=>{
                    toastr.error("asi no:", e.message);
                });
        }else{
            alert("no se puede");
        };
        const hideModal = this.setState({
                visible: false,
            });

    };





    render() {


        const {products, errors} = this.state;

    return (
        <div className="admin">
                <h2  style={{color:"white"}} >Panel de Administrador</h2>
                <div className="panel_admin">

                  <Tabs  onChange={callback} type="card">


                                 <TabPane tab="Agregar equipos" key="1">

                                <h3  style={{color:"white"}}  className="tab_name">Lista de los equipos</h3>
                                <Table  style={{background:"white"}}  dataSource={products}>

                                        <Column

                                            title="Nombre del equipo"
                                            dataIndex="name"
                                            key="name"
                                            render={(text, record) => (

                                            <span >

                                          <Link  to="/players">  <p style={{color:"#0066b0", textDecoration:"underline"}}>{record.name}</p></Link>

                                            </span>
                                                    )}
                                        />


                                    <Column
                                        title="No.Títulos"
                                        dataIndex="price"
                                        key="price"
                                    />
                                    <Column
                                        title="Copas"
                                        dataIndex="cant"
                                        key="cant"
                                    />

                                    <Column
                                        title="Ciudad y Estado"
                                        dataIndex="info"
                                        key="info"
                                    />

                                    <Column
                                        title="Descripción"
                                        dataIndex="desc"
                                        key="desc"
                                    />





                                </Table>
                                <Button type="primary"  style={{margin:"10px"}} onClick={this.showModal}>Agregar</Button>




                                      <Button type="primary" onClick={this.remove} > Eliminar </Button>
                                <Modal
                                    title="Agregar un nuevo equipo"
                                    visible={this.state.visible}
                                    onOk={this.onSave}
                                    onCancel={this.hideModal}
                                    okText="Guardar"
                                    cancelText="Cancelar"
                                >
                                    <ProductForm
                                        onChangeFile={this.onChangeFile}
                                        products={products}
                                        product={this.state.newProduct}
                                        onChangeForm={this.onChangeForm}
                                        errors={errors}
                                        onSave={this.onSave}
                                        />
                                </Modal>

                                </TabPane>


                                <TabPane tab="Agregar partidos" key="2">


                        <Partidos/>



                                </TabPane>

                                  </Tabs>

                    </div>
            </div>
       );
    }
}

export default AdminDisplay;
