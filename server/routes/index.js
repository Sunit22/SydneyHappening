
const router = require('express').Router({ mergeParams: true });

/**
 * split up route handling
 * catch all other routes in * route. * should be placed at bottom of all routes 
 */

router.use('/events', require('./events_v1'));


router.use('*', (req, res) => {
    res.send(path.join(__dirname, '/dist/SydneyHappening/index.html'));
});


module.exports = router;