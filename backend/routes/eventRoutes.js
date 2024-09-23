const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventController');

const router = express.Router();

router.route('/').get(getEvents).post(createEvent);

module.exports = router;
