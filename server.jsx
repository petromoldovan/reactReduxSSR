import { resolve } from 'path';
import { readFile } from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
//import App from './app/components/App';
import App from './app/index';
import configureStore from './app/store/configureStore';
import template from './app/template';


var app = express();


app.use(express.static("public"))


app.get("/", function(req, res, next) {
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

    res.send(template({
        body: html,
        title: "awesomo"
    }));


    /*readFile(resolve(__dirname, 'index.html'), 'utf8', function (err, file) {
        if (err) return next(err);

        const document = file.replace('<div id="app"></div>', `<div id="app" class="theBewOne">${html}</div>`)

        res.status(200).send(document);
    })*/
})

const PORT = 3000;
app.listen(PORT, function() {
    console.log("Listening on:", PORT)
})
