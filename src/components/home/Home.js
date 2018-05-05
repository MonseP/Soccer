import React, { Component } from 'react';
import './Home.css';
import HomeDisplay from './HomeDisplay';
import Login from '../login/Login';

class Home extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Login />

            </div>
        );
    }
}

export default Home;
