import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Login from './components/login/Login';
import ProductDetail from './components/product/ProductDetail';
import Contacto from './components/contacto/Contacto';
import Admin from './components/admin/Admin';
import Partidos from './components/admin/partidos/Partidos';
import TeamDetail from './components/admin/detail/TeamDetail';
import Detail from './components/admin/detail/Detail';
import Perfil from './components/perfil/Perfil';
import Politicas from './components/footer/Politicas';
import CardHome from './components/admin/partidos/CardHome';
import Selection from './components/admin/partidos/Selection';
import EntrenadorDisplay from './components/admin/EntrenadorDisplay';
import NosotrosHome from './components/nosotros/NosotrosHome.js';


export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/catalogo" component={Product}/>
        <Route exact path="/players" component={Detail}/>
        <Route path="/players/:id" component={TeamDetail} />
      <Route path="/partidos" component={Partidos} />
      <Route path="/partidosdetalle" component={CardHome} />
        <Route path="/login" component={Login}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/catalogo/:id" component={ProductDetail} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/entrenador" component={EntrenadorDisplay} />
       <Route  path="/nosotros" component={NosotrosHome} />


       <Route path="/politicas-de-privacidad" component={Politicas}/>


      
        <Route render={() => <h1>En construcción</h1>} />


    </Switch>

);
