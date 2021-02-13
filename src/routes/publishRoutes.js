const express = require('express');
const publishEventController = require('../controllers/publishEventController');

const router = express.Router();

router.route('/:id').post(publishEventController);

module.exports = router;
