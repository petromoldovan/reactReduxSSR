import constants from '../constants';


export function loadLandingTest() {
    return {
        type: constants.LANDING_LOADED,
        payload: "landing"
    }
}

export function loadContactTest() {
    return {
        type: constants.CONTACT_LOADED,
        payload: "contact"
    }
}
