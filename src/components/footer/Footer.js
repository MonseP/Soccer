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
                            <Link to="  " target="blank">
                               <p> <SocialIcon className="icon" network="facebook"  /> </p>
                            </Link>
                            <Link to="" target="blank">
                          <p> <SocialIcon className="icon" network="twitter" /> </p>

                            </Link>


                            <Link to="https://www.google.com/search?q=padding+margin&safe=active&client=firefox-b-ab&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi51I6-yOzaAhWF71MKHT82B4wQ_AUICigB&biw=1280&bih=632#imgrc=2JfQ4Fk2wmqSKM:" target="blank">

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
