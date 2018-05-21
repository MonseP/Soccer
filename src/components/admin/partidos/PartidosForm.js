import React, { Component } from 'react';
import './Admin.css';
import { Form, Input, Upload, Icon, message,  } from 'antd';
const { TextArea } = Input;

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

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">

              <p>Equipos que se enfrentan</p>
                    <Input name="nameone"
                           style={{margin:"10px 0"}}
                           onChange={this.props.onChangeForm}
                           value={this.props.partido.nameone}
                           prefix={<Icon type="smile-o"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Barcelona" />

                                     <Input name="nametwo"
                                                style={{margin:"10px 0"}}
                                                onChange={this.props.onChangeForm}
                                                value={this.props.partido.nametwo}
                                                prefix={<Icon type="smile-o"
                                                              style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Real Madrid" />
    <p> Tipo de Partido</p>
                <Input name="info"
                          style={{margin:"10px 0"}}
                          value={this.props.partido.info}
                          onChange={this.props.onChangeForm} prefix={<Icon type="copy" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Amistoso/Liga/Campeonato" />

<p>Fecha y horario</p>


<Input name="fecha"
          style={{margin:"10px 0"}}
          value={this.props.partido.fecha}
          onChange={this.props.onChangeForm} prefix={<Icon type="calendar"  style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="12 de Mayo 2018" />

                          <Input name="horario"
                                    style={{margin:"10px 0"}}
                                    value={this.props.partido.horario}
                                    onChange={this.props.onChangeForm} prefix={<Icon type="clock-circle-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="12:00 am" />


                                    <p> Cancha</p>

                                    <Input name="cancha"
                                              style={{margin:"10px 0"}}
                                              value={this.props.partido.cancha}
                                              onChange={this.props.onChangeForm} prefix={<Icon type="tag"   style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Cancha los portales" />


                    <TextArea name="desc"
                              style={{margin:"10px 0"}}
                              value={this.props.partido.desc}
                              onChange={this.props.onChangeForm} prefix={<Icon type="copy" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Descripción" />

                                              <input name="photo"
                                                     style={{margin:"10px 0"}}
                                                         type="file"
                                                         onChange={this.props.onChangeFile}
                                                         hintText="Foto"
                                              />


            </Form>
        );
    }
}

export default PartidosForm;
