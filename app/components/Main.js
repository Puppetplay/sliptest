import React, { Component } from 'react';
import Page1 from './page1/Page1';

class Main extends Component {

    // 메뉴가 처음 열릴때 실행됩니다.
    constructor() {
        super(...arguments);
    }

    // 메뉴의 컨트롤을 구현합니다.
    render() {
        return (
            <div>
                <Page1></Page1>
            </div>
        );
    }
}


export default Main;