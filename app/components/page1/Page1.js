import React, { Component } from 'react';
import APIs from '../../api/SlipApi';
import SOGrid from '../../common/SOGrid'
import GridInfo from '../GridInfo';

class Page1 extends Component {

    // 페이지가 처음 생성될때 호출됩니다.
    constructor() {
        super(...arguments);
        // 그리드설정을 불러옵니다.
        this.gridSetting1 = GridInfo.getGridInfo('mainGrid');
    }

    // 컴포넌트가 렌더링 된 후 호출 된다
    componentDidMount(){
        this.grid1 = this.refs["grid1"];
        this.gridView1 = this.grid1.getGridView();
        this.grid1.onCurrentRowChanged = this.onCurrentRowChanged;
    }

    onCurrentRowChanged(grid, oldRow, newRow) {
        console.log("test2");
    }

    // 렌더링을 정의합니다.
    render() {
        return (
            <div>
                <input type="button" value="test" onClick={this.selectSlip.bind(this)}/>
                <SOGrid ref="grid1" gridSetting={this.gridSetting1} />
                <SOGrid ref="grid2" gridSetting={this.gridSetting1} />
            </div>
        );
    }

    // 전표데이터 불러오기
    selectSlip() {
        let promise = APIs.selectSlip('/20130101~20160101')
            promise.then((responseData) => {
                this.grid1.bindData(responseData);
        })
    }
}


export default Page1;