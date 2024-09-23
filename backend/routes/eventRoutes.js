const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// GET /api/events - Fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
