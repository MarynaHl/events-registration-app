const Event = require('../models/eventModel');

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  const { title, description, eventDate, organizer } = req.body;

  if (!title || !description || !eventDate || !organizer) {
    res.status(400).json({ message: 'Please fill all fields' });
    return;
  }

  try {
    const newEvent = new Event({ title, description, eventDate, organizer });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEvents,
  createEvent,
};
