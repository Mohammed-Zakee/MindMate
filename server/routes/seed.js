const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Task = require('../models/Task');
const Mood = require('../models/Mood');

router.get('/seed', async (req, res) => {
  try {
    // Clear existing
    await User.deleteMany({});
    await Task.deleteMany({});
    await Mood.deleteMany({});

    // Create Test User
    const user = new User({
      name: 'Alex Johnson',
      email: 'alex@example.com',
      password: 'password123',
      productivityScore: 85,
      streak: 12,
      xp: 1250,
      level: 5
    });
    await user.save();

    // Create Tasks
    const tasks = [
      { user: user._id, title: 'Advanced Calculus Assignment', tag: 'Academic', priority: 'high', deadline: new Date(Date.now() + 7200000) },
      { user: user._id, title: 'User Research Project', tag: 'Project', priority: 'medium', deadline: new Date(Date.now() + 86400000) },
      { user: user._id, title: 'Daily Meditation', tag: 'Wellness', priority: 'low', completed: true }
    ];
    await Task.insertMany(tasks);

    // Create Mood
    await Mood.create({ user: user._id, mood: 'Calm', intensity: 8, note: 'Feeling focused today.' });

    const payload = { user: { id: user.id } };
    const jwt = require('jsonwebtoken');
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ msg: 'Database seeded successfully', token, user: { email: 'alex@example.com', password: 'password123' } });
  } catch (err) {
    res.status(500).send('Seed error');
  }
});

module.exports = router;
