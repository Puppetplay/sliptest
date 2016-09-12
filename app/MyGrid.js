import React, { Component } from 'react';

let gridStyle = {
            width: '100%',
            height: '800px',
            margin : '5px'
        };

class MyGrid extends Component {


    componentDidMount(){
        this.createGrid('firstGrid');
    }

    // 그리드 생성 초기에 한번만 호출
    createGrid(gridName) {
        RealGridJS.setRootContext("/script");
        this.dataProvider = new RealGridJS.LocalDataProvider();
        this.gridView = new RealGridJS.GridView(gridName);
        this.gridView.setDataSource(this.dataProvider);
    }

    render() {
        return (
            <div>
                <div id="firstGrid" style={gridStyle}></div>
            </div>
        );
    }
};

export default MyGrid;

