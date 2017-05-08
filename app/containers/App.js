import {connect} from 'react-redux';

import App from '../components/App';


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const AppCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default AppCont;
