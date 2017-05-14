import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {loadLandingTest} from '../actions/state';
import Landing from '../components/Landing';


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        loadLandingTest: () => dispatch(loadLandingTest())
    };
}

const LandingCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);


export default withRouter(LandingCont);
