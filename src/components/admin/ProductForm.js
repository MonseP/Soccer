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


class ProductForm extends Component {

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                    <Input name="name"
                           style={{margin:"10px 0"}}
                           onChange={this.props.onChangeForm}
                           value={this.props.product.name}
                           prefix={<Icon type="user"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Nombre" />
                    <Input name="price"
                           type="number"
                           style={{margin:"10px 0"}}
                           value={this.props.product.price}
                           onChange={this.props.onChangeForm}
                           prefix={<Icon type="tag-o"
                                         style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Número de títulos" />
                    <Input name="cant"
                           type="number"
                           style={{margin:"10px 0"}}
                           value={this.props.product.cant}
                           onChange={this.props.onChangeForm}
                           prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Número de copas actualmente" />
                <Input name="info"
                          style={{margin:"10px 0"}}
                          value={this.props.product.info}
                          onChange={this.props.onChangeForm} prefix={<Icon type="copy" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ciudad y Estado" />

                    <TextArea name="desc"
                              style={{margin:"10px 0"}}
                              value={this.props.product.desc}
                              onChange={this.props.onChangeForm} prefix={<Icon type="copy" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Descripción" />

                              <p> Jugadores </p>

                              <Input
                                  title="Nombre del jugador y posición"
                                  name="uno"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.uno}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Arquero" />

                                  <Input
                                  name="dos"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.dos}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Defensa" />

                                  <Input
                                  name="tres"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.tres}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Defensa" />

                                  <Input
                                  name="cuatro"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.cuatro}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Defensa" />

                                  <Input
                                  name="cinco"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.cinco}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Defensa" />

                                  <Input
                                  name="seis"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.seis}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Volante" />

                                  <Input
                                  name="siete"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.siete}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Volante" />

                                  <Input
                                  name="ocho"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.ocho}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Volante" />

                                  <Input
                                  name="nueve"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.nueve}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Volante" />

                                  <Input
                                  name="diez"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.diez}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Delantero" />

                                  <Input
                                  name="once"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.once}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Delantero" />

                                  <Input
                                  name="doce"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.doce}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Banca" />

                                  <Input
                                  name="trece"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.trece}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Banca" />

                                  <Input
                                  name="catorce"
                                  style={{margin:"5px 0"}}
                                  value={this.props.product.catorce}
                                  onChange={this.props.onChangeForm} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  placeholder="Juan Pérez Montiel/Banca" />









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

export default ProductForm;
