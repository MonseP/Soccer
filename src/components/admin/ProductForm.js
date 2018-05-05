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
                                         style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Precio" />
                    <Input name="cant"
                           type="number"
                           style={{margin:"10px 0"}}
                           value={this.props.product.cant}
                           onChange={this.props.onChangeForm}
                           prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Cantidad" />
                <Input name="info"
                          style={{margin:"10px 0"}}
                          value={this.props.product.info}
                          onChange={this.props.onChangeForm} prefix={<Icon type="copy" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Etiqueta" />
                    <TextArea name="desc"
                              style={{margin:"10px 0"}}
                              value={this.props.product.desc}
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

export default ProductForm;