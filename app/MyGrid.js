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

        // 기본 그리드 생성
        RealGridJS.setRootContext("/script");
        this.dataProvider = new RealGridJS.LocalDataProvider();
        this.gridView = new RealGridJS.GridView(gridName);
        this.gridView.setDataSource(this.dataProvider);

        //필드 정의
        var fields = [
            { fieldName: "sq_acctax1" },
            { fieldName: "da_date" },
            { fieldName: "no_acct" },
            { fieldName: "ty_mth2" },
            { fieldName: "nm_good" },
            { fieldName: "qt_qty" },
            { fieldName: "unit" },
            { fieldName: "nm_mnam" },
            { fieldName: "mn_vat" },
            { fieldName: "da_date" },
            { fieldName: "da_date" },
        ];


        // 그리드 컬럼 생성
        var columns = [
            {
                header : {
                    text: "컬럼1"
                },
                width: 300
            }
            ];
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

