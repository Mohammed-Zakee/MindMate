const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  tag: { type: String },
  deadline: { type: Date },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  completed: { type: Boolean, default: false },
  focusTime: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
