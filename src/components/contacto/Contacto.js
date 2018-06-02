import React, { Component } from 'react';
import firebase from '../../firebase';
import  './Contacto.css';


class Contacto extends Component {



  // inicializamos nuestro estado inicial
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  // Mostrar una alerta cuando se envia el formulario
  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  // Con esta funcion borramos todos los elementos del formulario
  resetForm() {
    this.refs.contactForm.reset();
  }

  // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();
    
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    };
    
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.name && params.email && params.phone && params.phone && params.message) {
      // enviamos nuestro objeto "params" a firebase database
      firebase.database().ref('form').push(params).then(() => {
        // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error 
        this.showAlert('danger', 'Your message could not be sent');
      });
      // limpiamos nuestro formulario llamando la funcion resetform
      this.resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      this.showAlert('warning', 'Please fill the form');
    };
  }

  render() {
    return (
      <div>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
        <div className='container' style={{ padding: `80px 60px` }}>
          <div className='row'>
            <div className='col-sm-4'>
              <h2 id={"contacto"} style={{ color: `white` }} >Contacto </h2>
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >

                <div className="flex-outer">

                    <li>
                  <label htmlFor='name'>Nombre</label>
                  <input type='text' className='form-control' id='name' 
                    placeholder='Juan Soto Pérez' ref={name => this.inputName = name}
                  />

                    </li>

   <li>
                  <label htmlFor='exampleInputEmail1'>Email</label>
                  <input type='email' className='form-control' id='email' 
                    placeholder='juan@gmail.com' ref={email => this.inputEmail = email}
                  />
   </li>

            <li>
                  <label htmlFor='phone'>Teléfono</label>
                  <input type='number' className='form-control' id='phone' 
                    placeholder='+52 ' ref={phone => this.inputPhone = phone}
                  />
            </li>
           <li>
                  <label htmlFor='Mensaje'>Mensaje</label>
                  <textarea className='form-control' id='message' 
                    rows='3' ref={message => this.textAreaMessage = message}>
                  </textarea>
           </li>
                    <li>
                <button type='submit' className='btn btn-primary'>Enviar</button>
                    </li>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default Contacto;