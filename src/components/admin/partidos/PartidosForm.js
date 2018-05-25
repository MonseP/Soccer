import React, {Component} from 'react';
import './Admin.css';
import {Form, Input, Upload, Icon, message,} from 'antd';
import DropDownList from './DropDownList';
import firebase from '../../../firebase';

const {TextArea} = Input

const Dragger = Upload.Dragger;

const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',

    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.success(`${info.file.name} file upload failed.`);

        }
    },

};


class PartidosForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tiposPagoLista: [],
        }
    }

    componentWillMount() {
        this.recuperarEquipos();
    }

    recuperarEquipos = () => {

        firebase.database().ref('products')
            .once('value')
            .then(
                (r) =>{
                    console.log(r.val());
                    const {tiposPagoLista} = this.state;
                    for (let key in r.val()){
                        console.log(r.val()[key]);
                        tiposPagoLista.push(r.val()[key]);
                        console.log(tiposPagoLista);
                    }
                }
            ).catch(
            (error) => {
                console.log(error)
            }
        );

    };

    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
    }

    render() {
        const {tiposPagoLista} = this.state;
        return (


            <Form onSubmit={this.handleSubmit} className="login-form">

                <p>Equipos que se enfrentan</p>


                

                <DropDownList
                    ref="drop1"
                    data={tiposPagoLista}
                    name="name"
                    onChange={this.props.onChangeForm}
                       value={this.props.partido.name}
       

                  
                />






                <Input name="nametwo"
                       style={{margin: "10px 0"}}
                       onChange={this.props.onChangeForm}
                       value={this.props.partido.nametwo}
                       prefix={<Icon type="smile-o"
                                     style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Real Madrid"/>
                <p> Tipo de Partido</p>


                <Input name="info"
                       style={{margin: "10px 0"}}
                       value={this.props.partido.info}
                       onChange={this.props.onChangeForm}
                       prefix={<Icon type="copy" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="Amistoso/Liga/Campeonato"/>

                <p>Fecha y horario</p>


                <Input name="fecha"
                      type="date"
                       style={{margin: "10px 0"}}
                       value={this.props.partido.fecha}
                       onChange={this.props.onChangeForm}
                       prefix={<Icon type="calendar" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="12 de Mayo 2018"/>

                <Input name="horario"
                       style={{margin: "10px 0"}}
                       value={this.props.partido.horario}
                       onChange={this.props.onChangeForm}
                       prefix={<Icon type="clock-circle-o" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="12:00 am"/>


                <p> Cancha</p>

                <Input name="cancha"
                       style={{margin: "10px 0"}}
                       value={this.props.partido.cancha}
                       onChange={this.props.onChangeForm} prefix={<Icon type="tag" style={{color: 'rgba(0,0,0,.25)'}}/>}
                       placeholder="Cancha los portales"/>


                <TextArea name="desc"
                          style={{margin: "10px 0"}}
                          value={this.props.partido.desc}
                          onChange={this.props.onChangeForm}
                          prefix={<Icon type="copy" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Descripción"/>

                <input name="photo"
                       style={{margin: "10px 0"}}
                       type="file"
                       onChange={this.props.onChangeFile}
                       hintText="Foto"
                />


            </Form>
        );
    }
}

export default PartidosForm;
