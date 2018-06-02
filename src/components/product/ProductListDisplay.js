import React from 'react';
import './Product.css';
import FontAwesome from 'react-fontawesome';
import Cart from '../card/Cart';
import Nav from '../nav/NavDisplay';

export const ProductListDisplay = ({products}) => {

    return (
        <div className="productos">
            <h2 className="titulo bot">Equipos</h2>
            <Cart  />
        </div>
    );
}
