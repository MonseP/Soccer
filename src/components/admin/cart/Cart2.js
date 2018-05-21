import React, { Component } from 'react';
import './Cart.css';
import firebase from '../../../firebase';
import {CartDisplay2} from './CartDisplay2';

class Cart2 extends Component {
    state = {
        products:[

        ]
    }
    componentWillMount () {
        let products = this.state.products;
        firebase.database().ref('products')
            .on("child_added", s=>{
                let product = s.val();
                product["id"] = s.key;
                products.push(product);
                this.setState({products});
            })
    }

    render() {
        return (
                <div className="fl">
                    {this.state.products.map((p, index)=><CartDisplay2  key={index} {...p}/>)}
                </div>

        );
    }
}

export default Cart2;
