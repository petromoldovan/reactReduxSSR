import React from 'react';
import {Provider} from 'react-redux';
import { StaticRouter, Route, Switch  } from 'react-router-dom';
import Landing from '../containers/Landing';
import Contact from '../containers/Contact';


export default ({location, context, store}) => {
    return (
        <Provider store={store}>
            <StaticRouter
                location={location}
                context={context}
            >
                <div>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </StaticRouter>
        </Provider>
    )
}