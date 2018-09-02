'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require("body-parser");
const port = process.env.PORT || '3000';

const app = express();

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/dist/SydneyHappening/')));

/**
 * initialize routes here
 * anything beginning with "/api" will go into this
 */
app.use('/api', require('./routes'));

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port : ${port}`));