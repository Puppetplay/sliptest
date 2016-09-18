import AppDispatcher from './AppDispatcher';
import constants from './constants'

let Actions = {
    changeSearchInfo(searchState) {
        AppDispatcher.dispatch({
            type: constants.CHANGE_SEARCH_STATE,
            searchState
        });
    }
};

export default Actions;