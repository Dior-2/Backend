const controller = require('./controllers');
const router = require('express').Router();

router.get('/listings/offers', controller.get.offers);
router.post('/listings/offers', controller.post.offers);

router.get('/listings/requests', controller.get.requests);
router.post('/listings/requests', controller.post.requests);

router.get('/profile', controller.get.profile);
router.post('/profile', controller.post.profile);
router.put('/profile', controller.put.profile);

module.exports = router;