const controller = require('./controllers');
const router = require('express').Router();

router.get('/listings/offers', controller.get.offers);
// router.post('/listings/offers', controller.post.offers);
router.get('/profile', controller.get.profile);
// router.get('/listings/requests', controller.get.requests);
router.post('/listings/requests/post', controller.post.requests);

module.exports = router;