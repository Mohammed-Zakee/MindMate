const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini
const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;

router.post('/chat', auth, async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!genAI) {
      // Fallback with supportive mock responses if no key is provided
      const responses = [
        "I'm here for you. Remember to take a deep breath and stay focused.",
        "That sounds like a lot on your plate. Have you tried the Pomodoro technique?",
        "It's completely normal to feel stressed. Your well-being is just as important as your grades.",
        "I believe in your potential! Let's take it one step at a time.",
        "How about a 5-minute mindfulness break to reset your focus?"
      ];
      const reply = responses[Math.floor(Math.random() * responses.length)] + " (Note: Add GEMINI_API_KEY to .env for real AI responses)";
      return res.json({ reply });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `You are MindMate AI, a highly empathetic, supportive, and intelligent wellness companion for students. 
    Your goal is to help them manage stress, improve study habits, and stay motivated.
    Student says: "${message}"
    Provide a helpful, concise, and calming response. Use encouraging language.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const reply = response.text();
    
    res.json({ reply });
  } catch (err) {
    console.error('Gemini Error:', err);
    res.status(500).json({ msg: 'AI assistant is temporarily unavailable' });
  }
});

module.exports = router;
