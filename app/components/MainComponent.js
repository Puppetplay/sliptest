import React, { Component } from 'react';
import PageMain from './pageMain/Main';
import { Container } from 'flux/utils';
import SearchStateStore from '../stores/SearchStateStore'

class MainComponent extends Component {

    // 메뉴가 처음 열릴때 실행됩니다.
    constructor() {
        super(...arguments);
    }

    // 메뉴의 컨트롤을 구현합니다.
    render() {
        return (
            <div>
                <PageMain searchState={this.state.searchState}></PageMain>
            </div>
        );
    }
}

MainComponent.getStores = () => ([SearchStateStore]);
MainComponent.calculateState = (prevState) => ({
    searchState: SearchStateStore.getState(),
});

const MainContainer = Container.create(MainComponent);
export default MainContainer;