import React, { Component } from 'react';
import './Admin.css';
import firebase from '../../../firebase';
import PartidosDisplay from './PartidosDisplay';

class Partidos extends Component {
  state = {
      isLogged:false,
      email: null,
      user: null
  };

  
  componentWillMount() {
      let user = localStorage.getItem("user");
     user = JSON.parse(user);
      if (user) {
          console.log("no")
          this.setState({isLogged:true, user})
      }else{
          this.setState({isLogged:false})
          this.props.history.push("/login");
      }
  }

  componentDidMount () {
      window.scroll(0, 0)
  }


    render() {
        return (

            <PartidosDisplay />

        );
    }
}

export default Partidos;
