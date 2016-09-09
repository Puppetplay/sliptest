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

        // 그리드 생성
        RealGridJS.setRootContext("/script");
        this.dataProvider = new RealGridJS.LocalDataProvider();
        this.gridView = new RealGridJS.GridView(gridName);
        this.gridView.setDataSource(this.dataProvider);

        // Create Field
        //두 개의 필드를 가진 배열 객체를 생성합니다.
        var fields = [
            {   fieldName: "sq_acctax1" },
            {   fieldName: "da_date" },
            {   fieldName: "no_acct" },
            {   fieldName: "ty_mth" },
            {   fieldName: "ty_mth2" },
            {   fieldName: "nm_good" },
            {   fieldName: "qt_qty" },
            {   fieldName: "unit" },
            {   fieldName: "mn_mnam" },
            {   fieldName: "mn_vat" },
            {   fieldName: "mn_total" },
            {   fieldName: "cd_trade" },
            {   fieldName: "nm_trade" },
            {   fieldName: "no_bisocial" },
            {   fieldName: "ty_bungae" }
        ];
        this.dataProvider.setFields(fields);

        // Create Columns
        var columns = [
            {
                name: "da_date", fieldName: "da_date",
                header: { text: "일자"}, width: 100
            },
            {
                name: "no_acct", fieldName: "no_acct",
                header: { text: "전표번호"}, width: 100
            },
            {
                name: "ty_mth2", fieldName: "ty_mth2",
                header: { text: "과세유형"}, width: 100
            },
            {
                name: "nm_good", fieldName: "nm_good",
                header: { text: "품명"}, width: 100
            },
            {
                name: "qt_qty", fieldName: "qt_qty",
                header: { text: "단가"}, width: 100
            },
            {
                name: "unit", fieldName: "utit",
                header: { text: "수량"}, width: 100
            },
            {
                name: "mn_mnam", fieldName: "mn_mnam",
                header: { text: "공급가액"}, width: 100
            },
            {
                name: "mn_vat", fieldName: "mn_vat",
                header: { text: "부가세"}, width: 100
            },
            {
                name: "mn_total", fieldName: "mn_total",
                header: { text: "합계"}, width: 100
            },
            {
                name: "cd_trade", fieldName: "cd_trade",
                header: { text: "코드"}, width: 100
            },
            {
                name: "nm_trade", fieldName: "cd_trade",
                header: { text: "거래처"}, width: 100
            },
            {
                name: "no_bisocial", fieldName: "no_bisocial",
                header: { text: "사업.주민등록번호"}, width: 100
            },
            {
                name: "ty_bungae", fieldName: "ty_bungae",
                header: { text: "분개"}, width: 100
            }
        ];
        this.gridView.setColumns(columns);

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

