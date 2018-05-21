import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

const organic = "http://www.skepticink.com/avant-garde/files/2015/09/organic.jpg";

export const CartDisplay = ({id, img, name, desc, photos, cant, text, info}) => {
    if(!photos) img = organic;
    else img = photos[0];

    return (
        <div className="cart ">
            <Link to={`/catalogo/${id}`} style={{color:"inherit"}}>
            <div className="cart_img ">
                <img  src={img} alt=""/>
            </div>
            <p style={{color:"white"}}  className="name_product">{name}</p>
                <div className="apear">
                    <p  style={{color:"white"}} className="pes">{info}</p>
                    <p  style={{color:"white"}}  className="pes"> {cant} Copas ha ganado</p>
                </div>
            </Link>
        </div>
    );
}
