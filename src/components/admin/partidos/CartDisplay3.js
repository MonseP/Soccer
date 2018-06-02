import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

const organic = "http://static.wixstatic.com/media/3f632d_b631890f451c35ca71bc1d298a93310f.png_256";

export const CartDisplay3 = ({id, img, nameone, nametwo, cancha, photos, fecha,horario}) => {
    if(!photos) img = organic;
    else img = photos[0];

    return (
      <div className="contenedor"> 
        <div className="cart2">

            <div className="cart_img2 ">
                <img  src={img} alt=""/>
            </div>
            <div className="descripcion">
            <p style={{color:"white"}}  className="name_product2">{id}</p>
            <p style={{color:"white"}}  >  {nameone}</p>
            <p style={{color:"white"}}  >VS</p>
              <p style={{color:"white"}}  >  {nametwo}</p>

              <p style={{color:"white"}} >  En la cancha   {cancha}</p>
            <p style={{color:"white"}}  > El día {fecha}</p>
                <p style={{color:"white"}} > A las {horario}</p>


</div>
        </div>

        </div>
    );
}
