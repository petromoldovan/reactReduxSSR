import { fromJS } from 'immutable';

import constants from './constants';


function getInitialState() {
    return fromJS({})
}

function testFlight(state, action) {
  return state.setIn(["data", "location"], action.payload);
}

function coreReducer(state = getInitialState(), action) {
    let newState;

    switch (action.type) {
        case constants.LANDING_LOADED:
          newState = testFlight(state, action);
          break;
        case constants.CONTACT_LOADED:
          newState = testFlight(state, action);
          break;
        default:
            newState = state;
    }

    return newState;
}

export default coreReducer;
