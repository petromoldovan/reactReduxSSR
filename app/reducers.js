import { fromJS } from 'immutable';

import constants from './constants';


function coreReducer(state = fromJS({}), action) {
    let newState;

    switch (action.type) {

        default:
            newState = state;
    }

    return newState;
}

export default coreReducer;
