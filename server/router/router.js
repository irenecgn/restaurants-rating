const Express = require('express');
const router = Express.Router();
const controller = require('../controller/controller');

router.get('/restaurants', controller.getAllRestaurants);

module.exports = router;
