import React from 'react';
import {Link} from 'react-router-dom';

const organic = "http://static.wixstatic.com/media/3f632d_b631890f451c35ca71bc1d298a93310f.png_256";

export const CardDis = ({name}) => {


    return (
        <div className="cart2">
            <Link >

                <p style={{color:"white"}}  className="name_product2">{name}</p>

            </Link>
        </div>
    );
}