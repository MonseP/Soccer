import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

const organic = "http://static.wixstatic.com/media/3f632d_b631890f451c35ca71bc1d298a93310f.png_256";

export const CartDisplay2 = ({id, img, name, desc, photos, price, text, info}) => {
    if(!photos) img = organic;
    else img = photos[0];

    return (
        <div className="cart2">
            <Link to={`/players/${id}`} style={{color:"inherit"}}>
            <div className="cart_img2 ">
                <img  src={img} alt=""/>
            </div>
            <p style={{color:"white"}}  className="name_product2">{name}</p>

            </Link>
        </div>
    );
}
