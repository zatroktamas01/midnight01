# MidnightAI – ChatGPT Web Assistant

#### 🎥 Video Demo: [https://youtu.be/SltAwN5gNaw](https://youtu.be/SltAwN5gNaw)  
#### 👤 Author: Zátrok Tamás  
#### 🌍 Location: Budapest, Hungary  
#### 📅 Date: July 2025

---

## 💡 Description

**MidnightAI** is a stylish, modern AI-powered web assistant built using **React** and **Node.js**, with integration to OpenAI's `gpt-3.5-turbo` model. It provides users with a sleek interface to type in questions and receive thoughtful AI-generated responses, styled in a dark, cyberpunk-inspired UI. The app is designed to be simple, fast, and fully mobile responsive.

This project was developed as the final submission for CS50x and showcases full-stack development skills, API usage, and responsive UI design.

---

## 📁 File Structure

### `/client`
- `App.tsx` – Main React component that handles input, sends requests, and displays AI responses.
- `App.css` – Custom CSS styling including animations, dark theme, and responsive layout.
- `index.tsx` – React entry point rendering the App.
- `package.json` – Lists frontend dependencies and scripts.

### `/server`
- `server.js` – Express.js server that connects to the OpenAI API and returns responses.
- `.env` – Stores the OpenAI API key securely (not included in the repo).
- `package.json` – Backend dependencies and configuration.

---

## 🛠 Technologies Used

- **React** with TypeScript — for the frontend UI
- **Node.js** with Express — for the backend server
- **OpenAI API** — to generate chat completions
- **Axios** — for HTTP requests
- **CSS3** — for custom dark theme, animation, and responsiveness

---

## 🧠 Design Decisions

- **Tech stack**: I used React with TypeScript for type safety and better scalability. Node.js with Express was chosen for its simplicity in API creation.
- **Responsiveness**: Mobile-first CSS ensures usability across devices.
- **Feedback UX**: The app includes a "Thinking..." loader while the response is being fetched, improving user feedback.
- **Visual identity**: Inspired by cyberpunk aesthetics and the creator’s personal alias ("Zátrok Crow"), the design reflects a futuristic and unique mood.

---

## 🔧 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/midnightai.git
   ```

2. **Install backend**
   ```bash
   cd server
   npm install
   echo "OPENAI_API_KEY=your_api_key_here" > .env
   node server.js
   ```

3. **Install frontend**
   ```bash
   cd ../client
   npm install
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`

---

## ✅ Features

- Ask any question using a clean UI
- AI-powered answers using OpenAI GPT
- Responsive for mobile and desktop
- Typing animations and smooth transitions
- Custom styling to fit the “MidnightAI” mood

---

## 📌 Notes

- You must have a valid OpenAI API key and sufficient credits.
- The frontend proxy (`"proxy": "http://localhost:5000"`) forwards requests to the backend.

---

## 📚 License

This project is for educational purposes as part of the CS50x final project submission.