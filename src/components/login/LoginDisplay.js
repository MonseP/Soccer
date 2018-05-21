import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Login.css';

export const LoginDisplay = ({mostrar, toggleMostrar, saveInput, onSubmit, error, changeRegistro, loginGoogle, loginFacebook}) => (

<div>


        <div>
          <div className="bienvenido">
            <p> ¡Bienvenido a</p>
            <p>Soccer Master!</p>
            <p>La mejor aplicación</p>
            <p>del fútbol  Amateur</p>




          </div>



    <div className="login">
        <div className="card_login">
            <h3>Iniciar sesión</h3>
            <h1>{error}</h1>
            <br/>
  

            <hr className="line_log"/>
            <div className="log_email">
                <form onSubmit={onSubmit}>
                    <p>Tu email</p>
                      <br/>
                    <input className="input" name="email" onChange={saveInput} type="text" placeholder="admin@gmail.com"/>
                    <br/>  <br/>   <br/>
                    <p>Tu contraseña</p>
                      <br/>
                    <input className="input" name="password" onChange={saveInput} type="password" placeholder="*******"/>
                    <br/> <br/> <br/>

                    <button type="submit" className="btn_login">Iniciar sesión</button>
                </form>
            </div>
            <p className="ayuda"><a onClick={changeRegistro} href="#!">Crea una cuenta</a></p>

        </div>
    </div>
      </div>
    </div>
);
