import { resolve } from 'path';
import { readFile } from 'fs';
var router = require('express').Router();
import React from 'react';
import { renderToString } from 'react-dom/server'
import App from '../index';
import configureStore from '../store/configureStore';

import Landing from '../components/Landing';
import Contact from '../components/Contact';

import { matchPath } from 'react-router-dom'


//config object with all possible routes
const routes = [
    {
        path: '/',
        component: Landing,
    },
    {
        path: '/contact',
        component: Contact,
    }
]


router.get("*", function(req, res, next) {
    const initialState = {};
    const store = configureStore(initialState);
    const context = {};

    const html = renderToString(
        <App
            store={store}
            location={req.url}
            context={context}
        />
    )

    readFile(resolve(__dirname, '../../index.html'), 'utf8', function (err, file) {
        if (err) return res.status(500).send({error: err});

        const document = file.replace('<div id="app"></div>', `<div id="app">${html}</div>`)

        res.status(200).send(document);
    })

    /*const promises = []

    routes.some(route => {
        // use `matchPath` here
        const match = matchPath(req.url, route)
        if (match)
            promises.push(route.loadData(match))
        return match
    })

    Promise.all(promises).then(data => {
        // do something w/ the data so the client
        // can access it then render the app
    })*/
})

module.exports = router;
