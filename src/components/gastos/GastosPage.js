import React, {Component} from 'react';
import GraficaGastos from './GraficaGastos';
import TablaGastos from './TablaGastos';
import {Button} from 'antd';
import {NavLink} from 'react-router-dom';
import firebase from '../../firebase';
import toast from 'toastr';
import {Row, Col} from 'antd';


class GastosPage extends Component{
    constructor(props){
        super(props);
        var mesesNombres = [
            'Enero','Febrero','Marzo','Abril', 'Mayo', 'Junio',
            'Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'
        ];
        var date = new Date();
        var mesTemp = date.getMonth() + 1;
        var nombreMes = mesesNombres[mesTemp];
        var dateRam = nombreMes + ' ' + date.getFullYear();
        this.state = {
            userId: '',
            listaGastos: [],
            dateRama: dateRam,
            categoriaLista: [],
            dataGraficaGastos: []
        };
        this.recuperarCategorias();


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
                var usuario = user.uid;
                this.setState({userId:usuario});
                this.recuperarGastos();
            } else {
                // No user is signed in.
                console.error("No hay usuario activo");
                toast.error('No ha iniciado sesión');
                this.props.history.push("/loginpage");
            }
        });
    }

    generarDatosGrafica = () => {
        var claveValor = [];
        this.state.categoriaLista.forEach( (categoria) => {
            var cantidad = 0.0;
            this.state.listaGastos.forEach((gasto) => {
                if( categoria === gasto.categoria){
                    cantidad += parseFloat(gasto.precio);
                }
            });
            claveValor.push({categoria: categoria, cantidad: cantidad})
        });
        console.log(claveValor);
        var dataGraficaGastos = [];


        var i = 0;
        claveValor.forEach( (cv) => {
            var paletaColores = [
              '#A3B50B',
              '#7A8233',
              '#6181EB',
              '#E8C726',
              '#005AB5',
              '#46B56B',
              '#33824E',
              '#CC61EB',
              '#5DE826',
              '#1DCBF5',
              '#5B00B5'
            ];
            //var number = Math.floor(4719190 + Math.random() * 12269014 );
            //var colorPrimary = this.generarColorPrimario(number);
            var colorPrimary = '';
            colorPrimary = paletaColores[i];
            i += 1;
            //var colorSecondary = this.generarColorSecundario(number);
            dataGraficaGastos.push({
                value: cv.cantidad,
                color: colorPrimary,
                highlight: colorPrimary,
                label: cv.categoria
            });
        });
        let dataGraficaGasto = this.state.dataGraficaGastos;
        dataGraficaGasto = dataGraficaGastos;
        this.setState({dataGraficaGastos:dataGraficaGasto});
    }

    generarColorPrimario = (number) => {
        var hexString = this.decimalToHexadecimal(number);
        return hexString;
    }

    generarColorSecundario = (number) => {
        number -= parseInt(number) - 81414;
        var hexString = this.decimalToHexadecimal(number);
        return hexString;
    }

    decimalToHexadecimal = (number) =>{
        var hexString = number.toString(16);
        hexString = hexString.toUpperCase();
        return hexString;
    }

    recuperarCategorias = () => {

        firebase.database().ref('categorias')
            .once('value')
            .then(
                (r) => {
                    const {categoriaLista} = this.state;
                    for (let key in r.val()) {
                        categoriaLista.push(r.val()[key].value);
                    }
                    this.setState({categoriaLista});
                }
            ).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    recuperarGastos = () => {
        firebase.database().ref( 'products/' + this.state.userId + '/products/' + this.state.dateRama )
            .once('value')
            .then( (r) =>  {
                const {listaGastos} = this.state;
                for (let key in r.val() ){
                    listaGastos.push(r.val()[key]);
                }
                this.setState({listaGastos});
                this.generarDatosGrafica();
                //console.log(this.state.listaGastos[0].descripcion);
        }).catch( (e) => {
            toast.error("No lo pude cargar" );
            toast.error(e.message);
        });
    }
    render(){
        const padre = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh"
        };

        const hijo = {
            width: "100vw"
        };

        const {dataGraficaGastos, listaGastos} = this.state;
        var medida = listaGastos.length > 0 ? 10 : 20 ;

        return(
            <div>
                <Row>
                    <Col xs={24} sm={24} md={4} lg={4} xl={4}>

                    </Col>
                    {listaGastos.length > 0 &&
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>

                    </Col>
                    }
                    <Col xs={24} sm={24} md={medida} lg={medida} xl={medida}>
                        <div>
                            <TablaGastos datos={this.state.listaGastos} />
                            <NavLink to="/newplayer" >
                                <Button id="buton-gasto" style={{margin:"10px"}} type="primary" icon="plus"> Agregar </Button>
                            </NavLink>

                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default GastosPage;
