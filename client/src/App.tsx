import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReply("Thinking...");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message,
      });
      setReply(res.data.reply);
    } catch (err) {
      setReply("Something went wrong.");
    }
  };

  return (
    <div className="App">
      <div className="header-image"></div>
      <h1>MidnightAI</h1>
      <p className="subtitle">by Zatrok Crow</p>

      <div className="chat-container">
        <form onSubmit={handleSubmit} className="input-row">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
            required
          />
          <button type="submit">Send</button>
        </form>

        {reply && (
          <div className="response fade-in">
            <strong>Response:</strong>
            <p>{reply}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
