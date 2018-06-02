import React, { Component } from 'react';
import './Admin.css';
import Entrenador from './Entrenador';

class EntrenadorDisplay extends Component {
  componentDidMount () {
      window.scroll(0, 0)
  }


    render() {
        return (

          <div className="back-admin"> 

            <Entrenador />


            </div>

        );
    }
}

export default EntrenadorDisplay;