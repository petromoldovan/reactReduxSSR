import { resolve } from 'path';
import { readFile } from 'fs';
var router = require('express').Router();
import React from 'react';
import { renderToString } from 'react-dom/server'
import App from '../index';
import configureStore from '../store/configureStore';


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
})

module.exports = router;
