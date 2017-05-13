import { fromJS, List, Map } from 'immutable';

import constants from './constants';

function getInitialState() {
    return fromJS({})
}

function testFlight(state, action) {
    return state.setIn(["data", "test"], action.payload);
}

function coreReducer(state = getInitialState(), action) {
    let newState;

    switch (action.type) {
        case constants.TEXT_ACTION:
          newState = testFlight(state, action);
          break;
        default:
            newState = state;
    }

    return newState;
}

export default coreReducer;
