import React, { Component } from 'react';
import Cart from './Cart';

import './Cart.css';

class CardHome extends Component {



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



    render() {
        return (
        <div>
           <Cart/>


        </div>

        );
    }
}

export default CardHome;
