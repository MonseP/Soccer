import React, { Component } from 'react';
import './Admin.css';
import PartidosDisplay from './PartidosDisplay';

class Partidos extends Component {
  state = {
      isLogged:false,
      user: null
  };

  componentWillMount() {
      let user = localStorage.getItem("user");
      // user = JSON.parse(user);
      if (user) {
          // console.log("si")
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