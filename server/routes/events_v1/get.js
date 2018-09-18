'use strict';

const getEvents = require('./logic/events');

module.exports = (req, res, next) => {
    return getEvents()
        .then((result) => res.status(200).send(result))
        .catch(next);
}
