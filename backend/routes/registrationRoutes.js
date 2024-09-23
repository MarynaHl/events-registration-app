const express = require('express');
const Registration = require('../models/Registration');
const router = express.Router();

// POST /api/register - Register for an event
router.post('/', async (req, res) => {
  const { eventId, fullName, email, dateOfBirth, heardFrom } = req.body;

  if (!eventId || !fullName || !email || !dateOfBirth || !heardFrom) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }

  try {
    const newRegistration = new Registration({
      eventId,
      fullName,
      email,
      dateOfBirth,
      heardFrom
    });

    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
