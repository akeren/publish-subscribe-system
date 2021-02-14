const express = require('express');
const subscribeOneEventController = require('../controllers/subscribeOneEventController');
const subscribeTwoEventController = require('../controllers/subcribeTwoEventController');

const router = express.Router();

router
  .route('/:id')
  .get(subscribeOneEventController)
  .get(subscribeTwoEventController);

module.exports = router;
