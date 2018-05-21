import React, { Component } from 'react';
import './Admin.css';
import Boton from './Boton.js';
import {Link, NavLink} from 'react-router-dom';
import { Tabs } from 'antd';
import { Modal, Button } from 'antd';
import { Table } from 'antd';
import firebase from '../../../firebase';
import toastr from 'toastr';
import FontAwesome from 'react-fontawesome';
import PartidosForm from './PartidosForm';


const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
const { Column } = Table;



class PartidosDisplay extends Component {



    state = {
        file:null,
        errors:null,
        newPartido:{

        },

        partidos: [

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
        let partidos = this.state.partidos;
        firebase.database().ref("partidos")
            .on("child_added", snap=>{
                let nino = snap.val();
                nino["id"] = snap.key;
                partidos.push(nino);
                this.setState({partidos});
            });
        firebase.database().ref("partido")
            .on("child_removed", snap =>{
                let id = snap.key;
                partidos = partidos.filter(p=>p.id !==id);
                this.setState({partidos});
            });
    };




    remove = () =>{
        if(window.confirm("¿Seguro de Eliminar todo?")){
            firebase.database().ref("partidos")
              .child()


                .remove()

                .then(r=>toastr.warning("eliminado"))
                .catch(e=>{
                    toastr.error("no se puede")});
        }
    };
    onChangeForm = (e) => {
        let newPartido = this.state.newPartido;
        const field = e.target.name;
        const value = e.target.value;
        newPartido[field] = value;
        this.setState({newPartido});
        console.log(newPartido);
    };
    onChangeFile = (e) => {
        const file = e.target.files[0];
        this.setState({file});
    };

    validateForm = () => {
        let newPartido = this.state.newPartido;
        console.log(newPartido)
        let errors = this.state.errors;
        let isOk = true;
        return isOk;
    };
    onSave = (e) =>{
        e.preventDefault()
        if(this.validateForm()){
            firebase.database().ref("partidos")
                .push(this.state.newPartido)
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
                                let newPartido = this.state.newPartido;
                                newPartido["photos"] =[link];
                                updates[`/partidos/${r.key}`] = newPartido;
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


        const {partidos, errors} = this.state;

    return (
        <div>

                <div>




                                <h3 className="tab_name">Partidos</h3>
                                <Table dataSource={partidos}>

                                        <Column

                                            title="Equipo"
                                            dataIndex="nameone"
                                            key="nameone"
                                            render={(text, record) => (

                                            <span >

                                          <Link  to="/partidosdetalle">  <p style={{color:"#0066b0", textDecoration:"underline"}}>{record.nameone}</p></Link>

                                            </span>
                                                    )}
                                        />


                                        <Column

                                            title="Equipo Contrincante"
                                            dataIndex="nametwo"
                                            key="nametwo"
                                            
                                        />




                                    <Column
                                        title=" Tipo de partido"
                                        dataIndex="info"
                                        key="info"
                                    />
                                    <Column
                                        title="Fecha"
                                        dataIndex="fecha"
                                        key="fecha"
                                    />



                                    <Column
                                        title="Horario"
                                        dataIndex="horario"
                                        key="horario"
                                    />


                                    <Column
                                        title="Cancha"
                                        dataIndex="cancha"
                                        key="cancha"
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
                                    <PartidosForm
                                        onChangeFile={this.onChangeFile}
                                        partidos={partidos}
                                        partido={this.state.newPartido}
                                        onChangeForm={this.onChangeForm}
                                        errors={errors}
                                        onSave={this.onSave}
                                        />
                                </Modal>

                    </div>
            </div>
       );
    }
}

export default PartidosDisplay;
