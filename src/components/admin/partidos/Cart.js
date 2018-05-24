import React, { Component } from 'react';
import './Cart.css';
import firebase from '../../../firebase';
import {CartDisplay3} from './CartDisplay3';


class Cart extends Component {



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



    state = {
      partidos:[

        ]
    }
    componentWillMount () {
        let partidos = this.state.partidos;
        firebase.database().ref('partidos')
            .on("child_added", s=>{
                let partido = s.val();
                partidos["id"] = s.key;
                partidos.push(partido);
                this.setState({partidos});
            })
    }


    render() {
        return (
          <div className="contenedor">
                <div className="fl">
                    {this.state.partidos.map((p, index)=><CartDisplay3  key={index} {...p}/>)}

                </div>
                </div>

        );
    }
}

export default Cart;
