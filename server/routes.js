const controller = require('./controllers');
const router = require('express').Router();

router.get('/listings/offers', controller.get.offers);
// router.get('/listings/requests', controller.get.requests);
// router.get('/listings/requests', controller.get.requests);
// router.post('/listings/offers', controller.post.offers);
// router.post('/listings/requests', controller.post.requests);

module.exports = router;