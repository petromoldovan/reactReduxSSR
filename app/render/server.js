import React from 'react';
import {Provider} from 'react-redux';
import { StaticRouter, Route, Switch  } from 'react-router-dom';
import Landing from '../containers/Landing';
import Contact from '../containers/Contact';


const routes = [
    {
        path:"/",
        component: Landing
    },
    {
        path:"/contact",
        component: Contact
    },
]

export default ({location, context, store}) => {
    return (
        <Provider store={store}>
            <StaticRouter
                location={location}
                context={context}
            >
                <div>
                    <Switch>
                        {routes.map(route => (
                            <Route {...route} key={route.path} />
                        ))}
                    </Switch>
                </div>
            </StaticRouter>
        </Provider>
    )
}
