import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';

class SearchStateStore extends ReduceStore {
    getInitialState() {
        return [ {aa: 'aa'}];
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.CHANGE_SEARCH_STATE:
                return state;
            default:
                return state;
        }
    }
}

export default new SearchStateStore(AppDispatcher);