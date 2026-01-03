const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { OpenAI } = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 API kulcs .env-ből
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 📩 API endpoint
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error?.response?.data || error.message);
    res.status(500).json({
      error: "Something went wrong with OpenAI request.",
    });
  }
});


// ⛔❗ FONTOS: Vercelen NINCS app.listen()
// Lokálban a Vercel CLI indítja.
// Ehelyett ezt exportáljuk:

module.exports = app;
