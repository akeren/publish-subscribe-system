const express = require('express');
const subscribeEventController = require('../controllers/subscribeEventController');

const router = express.Router();

router.route('/:id').get(subscribeEventController);

module.exports = router;
