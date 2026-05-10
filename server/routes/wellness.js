const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Mood = require('../models/Mood');

// Log Mood
router.post('/mood', auth, async (req, res) => {
  try {
    const { mood, intensity, note } = req.body;
    const newMood = new Mood({
      user: req.user.id,
      mood,
      intensity,
      note
    });
    const savedMood = await newMood.save();
    res.json(savedMood);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get Mood History
router.get('/mood', auth, async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user.id }).sort({ date: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
