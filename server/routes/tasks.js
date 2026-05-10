const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

// Get all tasks
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ deadline: 1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Create task
router.post('/', auth, async (req, res) => {
  try {
    const { title, tag, deadline, priority } = req.body;
    const newTask = new Task({
      user: req.user.id,
      title,
      tag,
      deadline,
      priority
    });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update task status
router.put('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
