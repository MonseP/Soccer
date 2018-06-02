import React, { Component } from 'react';
import { Table, Button } from 'antd';
import firebase from '../../../firebase';
import toastr from "toastr";


const { Column } = Table;



class Cart extends Component {



    state = {
        file:null,
        errors:null,
        newForm:{

        },

        form: [

        ],
        visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    componentWillMount(){
        let form = this.state.form;
        firebase.database().ref("form")
            .on("child_added", snap=>{
                let nino = snap.val();
                nino["id"] = snap.key;
                form.push(nino);
                this.setState({form});
            });
        firebase.database().ref("forms")
            .on("child_removed", snap =>{
                let id = snap.key;
                form = form.filter(p=>p.id !==id);
                this.setState({form});
            });
    };





    onChangeForm = (e) => {
        let newForm = this.state.newForm;
        const field = e.target.name;
        const value = e.target.value;
        newForm[field] = value;
        this.setState({newForm});
        console.log(newForm);
    };
    onChangeFile = (e) => {
        const file = e.target.files[0];
        this.setState({file});
    };

    validateForm = () => {
        let newForm = this.state.newForm;
        console.log(newForm)
        let errors = this.state.errors;
        let isOk = true;
        return isOk;
    };
    onSave = (e) =>{
        e.preventDefault()
        if(this.validateForm()){
            firebase.database().ref("form")
                .push(this.state.newForm)
                .then(r=>{
                    console.log(r.key)
                    if(this.state.file){
                        let updates = {};
                        firebase.storage()
                            .ref(r.key)
                            .child(this.state.file.name)
                            .put(this.state.file)
                            .then(s=>{
                                const link = s.downloadURL;
                                let newForm = this.state.newForm;
                                newForm["photos"] =[link];
                                updates[`/form/${r.key}`] = newForm;
                                firebase.database().ref().update((updates));

                            });
                    }
                    toastr.success("Si guarde" + r.key)


                })
                .catch(e=>{
                    toastr.error("asi no:", e.message);
                });
        }else{
            alert("no se puede");
        };
        const hideModal = this.setState({
            visible: false,
        });

    };






    render() {


        const {form, errors} = this.state;

        return (

            <div>
                            <Table  style={{background:"white"}}  dataSource={form}>




                                <Column
                                    title="Nombre"
                                    dataIndex="name"
                                    key="name"
                                />

                                <Column
                                    title="Email"
                                    dataIndex="email"
                                    key="email"
                                />

                                <Column
                                    title="Teléfono"
                                    dataIndex="phone"
                                    key="phone"
                                />

                                <Column
                                    title="Mensaje"
                                    dataIndex="message"
                                    key="message"
                                />






                            </Table>

                </div>

        );
    }
}

export default Cart;

