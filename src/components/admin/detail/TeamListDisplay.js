import React from 'react';
import './Detail.css';
import FontAwesome from 'react-fontawesome';
import Cart2 from '../cart/Cart2';


export const TeamListDisplay = ({products}) => {

    return (
        <div className="product">
            <h2 className="titulo bot">Equipos</h2>
            <h3 style={{color:"white", fontSize:"30px"}}  >Seleccione el equipo para poder ver a los jugadores</h3>
            <Cart2 />
        </div>
    );
}
