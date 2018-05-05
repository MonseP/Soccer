import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import Editar from './Editar.js';




class ModalEdit extends React.Component {
  state = {
    ModalText:   <Editar/>,
    visible: false,
    confirmLoading: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
    <a> <p  onClick={this.showModal}>Modificar datos <Icon type="edit" /> </p> </a>
        <Modal title="Edita tus datos"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          okText="Aceptar"
          cancelText="Cancelar"
        >
          <p>{ModalText}</p>
        </Modal>
      </div>

          );
        }
      }

      export default ModalEdit;
