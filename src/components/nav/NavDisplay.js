import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import FontAwesome from 'react-fontawesome';

export const NavDisplay = ({isLogged, signOut, photoURL}) => {

    return (
        <div id="navbar" className="nav-bar ? nav-bar ">
            <div className="logo">

                <Link to="/">
                    <img className="logo_fix" src={logo} alt="logo"/>
                </Link>
            </div>

            <div className="pestanas">

               <Link to="/entrenador">
                    <span className="less">Entrenador</span>
                </Link>

                           <hr className="divider"/>


                <Link to="/Admin">
                    <span className="less">Administración</span>
                </Link>

                <hr className="divider"/>

                {!isLogged ?
                    <div className="log">
                        <Link to="/login" >
                            
                        </Link></div>:
                    <div className="dropdown" style={{display:"flex", alignItems:"center"}}>
                        <button className="dropbtn"><img className="userphoto" src={photoURL ? photoURL : user} alt=""/></button>
                        <div className="dropdown-content">

                            <span><Link  to="/catalogo">Equipos</Link></span>
                            <span><Link to="/players">Jugadores</Link></span>
                            <span><Link to="/Admin">Administración</Link></span>
                            <span><Link onClick={signOut} to="/">Cerrar sesión</Link></span>
                        </div>

                        {/*<button  className="close" >Cerrar sesion</button>*/}

                    </div>}
            </div>
        </div>
    );
};
