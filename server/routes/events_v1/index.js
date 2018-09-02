'use strict'

const routes = require('express').Router({ mergeParams: true });

routes.get('/', require('./get'));

module.exports = routes;