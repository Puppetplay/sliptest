import React, { Component } from 'react';

let gridStyle = {
            width: '100%',
            height: '800px',
            margin : '5px'
        };

class SOGrid extends Component {

    componentDidMount() {
        console.log('SOGridDidMount');
        this.createGrid(this.props.gridSetting.name);
    }

    bindData(data) {
        this.dataProvider.fillJsonData(data.data.data, { fillMode: "set" });
        var selection = {
            style: "block",
            startItem: 0,
            endItem: 0,
            startColumn: this.props.gridSetting.columns[0].name,
            endColumn: this.props.gridSetting.columns[0].name,
        }
        this.gridView.setSelection(selection);
        this.gridView.scrollPage(-200);
    }


    // 그리드 생성 초기에 한번만 호출
    createGrid(gridName) {

        // 그리드 생성
        RealGridJS.setRootContext("/script");
        this.dataProvider = new RealGridJS.LocalDataProvider();
        this.gridView = new RealGridJS.GridView(gridName);
        this.gridView.setDataSource(this.dataProvider);

        this.dataProvider.setFields(this.props.gridSetting.fields);

        // Create Columns
        this.gridView.setColumns(this.props.gridSetting.columns);
    }

    getGridView() {
        return this.gridView;
    }

    render() {
        return (
            <div>
                <div id={this.props.gridSetting.name} style={gridStyle}></div>
            </div>
        );
    }
};

export default SOGrid;

