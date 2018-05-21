import React, { Component } from 'react';
import './Detail.css';
import {TeamListDisplay} from './TeamListDisplay';

class Detail extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div id="product">
               <TeamListDisplay />

            </div>
        );
    }
}

export default Detail;
