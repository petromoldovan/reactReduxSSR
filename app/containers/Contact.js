import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {loadContactTest} from '../actions/state';
import Contact from '../components/Contact';


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        loadContactTest: () => dispatch(loadContactTest())
    };
}

const ContactCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);


export default withRouter(ContactCont);
