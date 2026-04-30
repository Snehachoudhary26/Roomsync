<div align="center">

<img src="https://as2.ftcdn.net/v2/jpg/08/11/37/75/1000_F_811377538_L7bFrMzwQbjp9gCzmAkUb5pww3vBoSSN.jpg" width="92%" height="260px" style="object-fit:cover;border-radius:16px;" alt="RoomSync Banner"/>

<br/><br/>

# 🏠 RoomSync
### *Find a roommate you actually vibe with.*

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live%20✅-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel"/>
  <img src="https://img.shields.io/badge/Backend-Railway-purple?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Made%20in-India%20🇮🇳-orange?style=for-the-badge"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Gemini%20AI-4285F4?style=flat-square&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/>
</p>

<br/>

> **RoomSync** is an AI-powered roommate matching platform for Indian students and working professionals. Built because finding a good roommate from a random WhatsApp group is basically a nightmare. 😅

<br/>

**[🌐 Live Demo](https://roomsync-delta.vercel.app)** &nbsp;·&nbsp; **[🚀 Get Matched](https://roomsync-delta.vercel.app/signup.html)** &nbsp;·&nbsp; **[💬 Chat Feature](https://roomsync-delta.vercel.app/chat.html)** &nbsp;·&nbsp; **[📝 Take Quiz](https://roomsync-delta.vercel.app/quiz.html)**

</div>

---

## 😂 The Origin Story

> *"I'm a hosteler. Finding a roommate in India means posting in a WhatsApp group, getting 47 'bhai available hai?' messages, picking someone randomly, and spending 6 months regretting it."*

So I did what any reasonable sleep-deprived student would do.

**I built an app.**

- Week 1 → "I'll just build a simple website"
- Week 2 → "Okay I need a backend too"
- Week 3 → "Wait what is MongoDB"
- Week 4 → "Why is localhost:5000 showing 403??"
- Week 5 → Deployed. Cried. Deployed again. ✅

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **AI Compatibility Scoring** | 4-vector algorithm — Sleep, Social, Cleanliness, Work style |
| 📝 **12-Question Lifestyle Quiz** | Under 3 minutes, builds your full personality profile |
| 💑 **Smart Matches Page** | Filter by city, budget, role, verified, online status |
| 💬 **Per-Person Chat** | Every conversation is separate — finally fixed after 3 days 😅 |
| 🤖 **Gemini AI Chat Panel** | Real AI gives roommate advice inside the chat |
| 🔒 **Privacy Protection** | Contact details hidden until BOTH users agree to share |
| ✅ **Verified Profiles** | College ID verification system |
| 🔐 **JWT Authentication** | Secure signup & login with bcrypt password hashing |
| 📍 **28 Indian Cities** | Bangalore, Mumbai, Pune, Delhi, Hyderabad, Indore & more |
| 🚀 **Fully Deployed** | Live on Vercel + Railway + MongoDB Atlas |

---

## 🗺️ Pages

| Page | URL | Description |
|---|---|---|
| 🏠 Home | `/index.html` | Landing page with animations, gallery, profiles |
| 🔐 Auth | `/signup.html` | Signup & Login with JWT |
| 📝 Quiz | `/quiz.html` | 12-question lifestyle questionnaire |
| 💑 Matches | `/matches.html` | Ranked, filtered roommate cards |
| 💬 Chat | `/chat.html` | AI-powered messaging with per-person history |

---

## ⚙️ Tech Stack

### Frontend
- **HTML5 + CSS3 + Vanilla JavaScript** — No frameworks, pure skill 💪
- **Google Fonts** — Playfair Display + DM Sans
- **CSS Animations** — Scroll triggers, marquee, fade-ins
- **Fetch API** — Connecting to backend

### Backend
- **Node.js + Express.js** — REST API server
- **MongoDB Atlas** — Cloud database (free tier)
- **Mongoose** — ODM for MongoDB
- **bcryptjs** — Password hashing
- **jsonwebtoken** — JWT authentication
- **@google/generative-ai** — Gemini AI integration
- **cors + dotenv** — Security & config

### Deployment
- **Vercel** — Frontend (free, forever)
- **Railway** — Backend ($5/month free credits)
- **MongoDB Atlas** — Database (free M0 cluster)

---

## 🧠 How the Matching Algorithm Works

```
User answers 12 lifestyle questions
            ↓
4 compatibility vectors calculated:
  😴 Sleep       (30%) — bedtime, wake time
  🎉 Social      (25%) — guests, noise tolerance
  🧹 Cleanliness (25%) — cleaning habits
  💻 Work Style  (20%) — WFH, focus needs
            ↓
Weighted similarity score between two users
            ↓
  85%+ → 🟢 Great Match
  60–85% → 🟡 Good Match
  <60%  → 🔴 Poor Match
```

---

## 🚀 Getting Started Locally

```bash
# Clone the repo
git clone https://github.com/Snehachoudhary26/Roomsync.git
cd Roomsync

# Install dependencies
npm install

# Create .env file
PORT=3000
MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_secret_here
GEMINI_API_KEY=your_gemini_key_here

# Start server
node server.js

# Open in browser → http://127.0.0.1:3000/index.html
```

---

## 🔌 API Reference

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login existing user |
| `POST` | `/api/auth/ai-chat` | Gemini AI roommate advice |

---

## 📁 Project Structure

```
RoomSync/
├── 📄 index.html       ← Landing page
├── 📄 signup.html      ← Auth page
├── 📄 quiz.html        ← Lifestyle quiz
├── 📄 matches.html     ← Roommate matches
├── 📄 chat.html        ← AI-powered chat
├── ⚙️  server.js       ← Express server
├── 📁 models/
│   └── User.js         ← MongoDB schema
├── 📁 routes/
│   └── auth.js         ← API routes + Gemini AI
├── 📄 vercel.json      ← Vercel config
└── 📄 .env             ← Environment variables
```

---

## 🎓 What I Learned

- Port 5000 is blocked by Chrome on Mac. This destroyed 3 days of my life.
- MongoDB URI without the database name at the end will ruin your entire week.
- "It works on localhost" means absolutely nothing in production.
- Deploying a full-stack app feels like parallel parking for the first time — terrifying but satisfying.
- Sleep is important. Ironic that I built a sleep-compatibility app while sleeping 4 hours a night.

---

## 🔮 Future Plans

- [ ] 📱 React Native mobile app
- [ ] 🔴 Real-time chat with Socket.io
- [ ] 🔑 Google OAuth login
- [ ] 📸 Profile photo upload
- [ ] 🗺️ Google Maps room locations
- [ ] ⭐ Roommate review system
- [ ] 🌐 Hindi language support

---

## 📞 Contact & Support

| | |
|---|---|
| 🌐 **Live Site** | [roomsync-delta.vercel.app](https://roomsync-delta.vercel.app) |
| 📞 **Helpline** | +91 88000 01234 |
| ✉️ **Support** | support@roomsync.in |
| 💼 **Business** | hello@roomsync.in |
| 🐙 **GitHub** | [Snehachoudhary26/Roomsync](https://github.com/Snehachoudhary26/Roomsync) |

---

<div align="center">

*Built from a hostel room · With bad WiFi · At 2 AM · Because the problem was too real* 😅

**⭐ Star this repo if you've ever had a bad roommate!**

© 2026 RoomSync · Made with ❤️ in India 🇮🇳

</div>
