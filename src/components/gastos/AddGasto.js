import React, {Component} from 'react';
import InputItem from './InputItem';
import DropDownList from './DropDownList';
import '../login/Login.css';
import firebase from '../../firebase';
import toastr from 'toastr';
import {Row, Col} from 'antd';
import {Prompt} from 'react-router-dom';
import './Gastos.css';




class AddGasto extends Component{
    constructor(props){
        super(props);
        var mesesNombres = [
            'Enero','Febrero','Marzo','Abril', 'Mayo', 'Junio',
            'Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'
        ];
        var date = new Date();
        var mesTemp = date.getMonth() + 1;
        var mes = mesTemp < 10 ? '0' + mesTemp  :  mesTemp + 1;
        var nombreMes = mesesNombres[mesTemp];
        var fechaMaxima = date.getFullYear() + '-' + mes + '-' + date.getDate();
        var dateRam = nombreMes + ' ' + date.getFullYear();
        this.state = {
            userId: '',
            gasto:{
                descripcion: '',
                precio: 0.0,
                fecha: fechaMaxima,
                categoria: '',
                tipoPago: ''
            },
            categoriaLista: [],
            tiposPagoLista: [],
            fechaActual: fechaMaxima,
            dateRama: dateRam ,
            isBlocking: false
        }


        console.log('Fecha: ' + this.state.fechaActual);


    }
    componentDidMount(){
        console.log(this.state.fechaActual);
    }



    componentWillMount(){
        this.recuperarCategorias();
        this.recuperarTiposPago();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({userId:user.uid});
            } else {
                // No user is signed in.
                console.error("No hay usuario activo");
            }
        });

    }


    recuperarCategorias = () => {

        firebase.database().ref('categorias')
            .once('value')
            .then(
                (r) =>{
                    console.log(r.val());
                    const {categoriaLista} = this.state;
                    for (let key in r.val()){
                        console.log(r.val()[key]);
                        categoriaLista.push(r.val()[key]);
                        console.log(categoriaLista);
                    }
                    let gasto = this.state.gasto;
                    gasto['categoria'] = categoriaLista[0].value;
                    this.setState({categoriaLista, gasto});
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );

    }

    recuperarTiposPago = () => {

        firebase.database().ref('tiposPago')
            .once('value')
            .then(
                (r) =>{
                    console.log(r.val());
                    const {tiposPagoLista} = this.state;
                    for (let key in r.val()){
                        console.log(r.val()[key]);
                        tiposPagoLista.push(r.val()[key]);
                        console.log(tiposPagoLista);
                    }
                    let gasto = this.state.gasto;
                    gasto['tipoPago'] = tiposPagoLista[0].value;
                    this.setState({tiposPagoLista,gasto});
                }
            ).catch(
            (error) => {
                console.log(error);
            }
        );

    }

    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let gasto = this.state.gasto;
        gasto[nombre] = valor;
        this.setState({gasto,isBlocking: e.target.value.length > 0});

    }

    validarCampos = (e) => {

        let bandera = true;
        let {gasto} = this.state;

        if(gasto['descripcion'] === ''){
            bandera = false;
            toastr.error('Debe poner una descripción');
        }if (gasto['fecha'] === ''){
            bandera = false;
            toastr.error('Debe poner una fecha');
        }if (gasto['precio'] <= 0 || this.state.gasto.precio.length === 0){
            bandera = false;
            toastr.error('Debe poner un precio');
            console.log(this.state.gasto.precio);
        }

        return bandera;
    }

    guardarIngreso = (gasto) => {

        const rama = firebase.database().ref('products/' + this.state.userId + '/gastos/' + this.state.dateRama);

        rama.push(gasto)
            .then(r=>{
                toastr.success("Se guardó tu gasto con éxito");
                this.props.history.push('/players');
            }).catch(e=>{
                toastr.error('Falló, repite', e);
            });

    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isBlocking:false});
        if(!this.validarCampos()){
            return;
        }
        this.guardarIngreso(this.state.gasto);
        console.log(this.state);
    }

    cancelarTransaccion = (e) => {
        e.preventDefault();
        this.props.history.push('/players');
    }
    render(){
        const center = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"95vw",
            height:"85vh",

        };

        const {categoriaLista, tiposPagoLista, gasto} = this.state;



        const rowStyle = {
            boxSizing: "border-box",
            padding: "0 3%"
        };
        const { isBlocking } = this.state;
        //${location.pathname} esto es para mostrar la ruta
        return(
            <div style={center}>
                <form style={{padding:"3rem 2rem", width:"90vw", position:"relative" }} onSubmit={this.handleSubmit}>
                    <Prompt
                        when={isBlocking}
                        message={location => (
                            `¿Estás seguro que quieres salir? Perderas todos tus datos `
                        )}
                    />





                    <Row >
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle}>
                          <InputItem
                              placeholder="Juan Pérez Sánchez"
                              tipo="text"
                              nombre="name"
                              handleChange={this.handleChange}
                              etiqueta="Nombre Completo del Jugador"
                              className="gastosText"
                          />
                      </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle}>
                            <InputItem
                                placeholder="
                                12/02/1996"
                                tipo="date"
                                nombre="precio"
                                handleChange={this.handleChange}
                                etiqueta="Fecha de Nacimiento del jugador"
                                required="required"
                                min = "0"
                                max = "10000"
                                maxLength = "12"
                            />
                        </Col>
                        <br/>
                        <br/>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle} >
                            <InputItem
                                value={gasto.fecha}
                                tipo="date"
                                nombre="fecha"
                                handleChange={this.handleChange}
                                etiqueta="Día del registro"
                                max={this.state.fechaActual}
                            />
                        </Col>
                    </Row>
                      <br/>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle}>
                            <InputItem
                                placeholder="Ej.Es un buen jugador"
                                tipo="text"
                                nombre="descripcion"
                                handleChange={this.handleChange}
                                etiqueta="Descripción"
                                className="gastosText"
                            />
                        </Col>


                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle} >
                            <DropDownList
                                ref="drop1"
                                data={categoriaLista}
                                nombre="categoria"
                                handleChange={this.handleChange}
                                etiqueta="Categoria"
                            />
                        </Col>
                    </Row>

                      <br/>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle}>
                            <DropDownList
                                ref="drop2"
                                data={tiposPagoLista}
                                nombre="tipoPago"
                                handleChange={this.handleChange}
                                etiqueta="Tipo de pago"
                            />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle}>

                        </Col>
                    </Row>
                      <br/>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle}>
                            <button className="cancelarGasto" onClick={this.cancelarTransaccion}>Cancelar</button>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={rowStyle}>
                            <input className="aceptarGasto" type="submit" label="Submit"/>
                        </Col>
                    </Row>
                </form>

            </div>
        );
    }
}

export default AddGasto;
