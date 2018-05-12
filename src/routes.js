import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Login from './components/login/Login';
import ProductDetail from './components/product/ProductDetail';
import Contacto from './components/contacto/Contacto';
import Admin from './components/admin/Admin';
import HomeCarrito from './components/carro/HomeCarrito';
import Pago from './components/carro/pago/Pago';
import DireccionPago from './components/carro/direccion/DireccionPago';
import Perfil from './components/perfil/Perfil';
import Politicas from './components/footer/Politicas';
import FormasPago from './components/footer/FormasPago';
import BeeContainer from './components/miel/BeeContainer';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/catalogo" component={Product}/>
        <Route path="/login" component={Login}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/preguntas" component={FormasPago}/>
        <Route path="/catalogo/:id" component={ProductDetail} />
        <Route path="/admin" component={Admin} />
        <Route path="/carrito" component={HomeCarrito} />
        <Route path="/direccion" component={DireccionPago} />
        <Route path="/checkout" component={Pago} />
        <Route path="/perfil" component={Perfil} />
       <Route path="/politicas-de-privacidad" component={Politicas}/>
        <Route path="/bee-co" component={BeeContainer} />
        <Route render={() => <h2>En construcción</h2>} />


    </Switch>

);
