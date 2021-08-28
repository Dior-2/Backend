const controller = require('./controllers');
const router = require('express').Router();

router.get('/profile', controller.get.profile)
router.get('/posts', controller.get.posts)