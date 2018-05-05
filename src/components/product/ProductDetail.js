import React , {Component} from 'react';
import {ProductDetailDisplay} from './ProductDetailDisplay';
import firebase from '../../firebase';

class ProductDetail extends Component{
    state= {
        product: {

        }
    }
    componentDidMount () {
        window.scroll(0, 0)
    };
    componentWillMount () {
        console.log(this.props.match.params.id);
        firebase.database().ref("products").child(this.props.match.params.id)
            .on("value", s=>{
                this.setState({product:s.val()})
            })
    }

    render(){
        const {product} = this.state;

        return(
            <div>
                <ProductDetailDisplay
                    {...product}
                />
            </div>
        );
    }
}

export default ProductDetail;
