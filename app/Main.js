import React, { Component } from 'react';
import MyGrid from './MyGrid';
import 'whatwg-fetch'

const API_URL = 'http://localhost:8000/slip';
const API_HEADER = {
}

class Main extends Component {


    selectSlip() {
        console.log("Start Select");
        this.fetchSlip();
    }

    fetchSlip() {
        fetch(API_URL + '/20130101~20160101', {headers: API_HEADER})
            .then((response) => response.json())
            .then((responseData) => {
                this.refs["MyGrid"].bindData(responseData);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }

    render() {
        return (
            <div>
                <input type="button" value="test" onClick={this.selectSlip.bind(this)}/>
                <MyGrid ref="MyGrid"/>
            </div>
        );
    }
}



export default Main;