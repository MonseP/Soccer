import React, { Component } from 'react';
import './Admin.css';
import Boton from './Boton.js';
import {Link, NavLink} from 'react-router-dom';
import { Tabs } from 'antd';
import { Modal, Button } from 'antd';
import { Table } from 'antd';
import firebase from '../../firebase';
import toastr from 'toastr';
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




    remove = (id) =>{
        if(window.confirm("¿Seguro de Eliminar todo?")){
            firebase.database().ref("product")
            .child(id)

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
                <h2>Panel de Administrador</h2>
                <div className="panel_admin">

                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Órdenes" key="1">
                                <h3 className="tab_name">Órdenes</h3>
                                <Table  dataSource={products} >

                                  <Column
                                       render={(text, record) => (
                                        <span>
                                  <Button onClick></Button>

                                        </span>
                                                )}
                                        />
                                  <Column
                                       title= "Nombre del producto"
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

                            </TabPane>
                            <TabPane tab="Productos" key="2">
                                <h3 className="tab_name">Lista de Productos</h3>
                                <Table dataSource={products}>

                                        <Column

                                            title="Nombre del Producto"
                                            dataIndex="name"
                                            key="name"
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



                                    <Button type="primary" onClick={this.showModal}>Agregar</Button>
                                      <Button type="primary" onClick={this.remove} > Eliminar </Button>
                                <Modal
                                    title="Agregar un nuevo producto"
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
                            <TabPane tab="Historial" key="3">Historial</TabPane>
                        </Tabs>
                    </div>
            </div>
       );
    }
}

export default AdminDisplay;
