import React, { Component } from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="line ">
                    <div className="footer_data">
                        <h3>Sobre Soccer Master</h3>
                        <div className="fl">
                            <div>
                                <Link to="/nosotros">
                                    <p>Nosotros</p>
                                </Link>
                                <br/>
                                <br/>

                                <Link to="/contacto">
                                    <p>Contacto</p>
                                </Link>
                            </div>
                            <div className="links">
                                  </div>
                        </div>
                    </div>
                    <div className="redes">
                        <h3>Siguenos en </h3>
                        <div className="social">
                            <Link to="https://www.facebook.com/Soccer-Master-178651229621468/" target="blank">
                               <p> <SocialIcon className="icon" network="facebook"  /> </p>
                            </Link>
                            <Link to="https://twitter.com/SoccerMasterOfi" target="blank">
                          <p> <SocialIcon className="icon" network="twitter" /> </p>

                            </Link>


                            <Link to="https://www.instagram.com/appsoccermaster/" target="blank">

                        <p>  <SocialIcon className="icon" network="instagram" /> </p>

                            </Link>

                        </div>
                        <br/>
                        <br/>
                        <span>
                                <Link to="/politicas-de-privacidad">
                                    <span>Politicas de Privacidad</span>
                                </Link>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
