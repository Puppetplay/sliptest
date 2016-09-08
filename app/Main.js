import React, { Component } from 'react';
import MyGrid from './MyGrid';

class Main extends Component {
    render() {
        return (
            <div>
                <input type="button" value="test"/>
                <MyGrid/>
            </div>
        );
    }
};

export default Main;