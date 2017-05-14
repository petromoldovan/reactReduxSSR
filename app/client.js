import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import coreReducer from './reducers';
import Landing from './containers/Landing';
import Contact from './containers/Contact';

const loggerMiddleware = createLogger({
    stateTransformer: state => state.toJS()
});

const store = compose(applyMiddleware(thunk, loggerMiddleware))(createStore)(coreReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app'));
