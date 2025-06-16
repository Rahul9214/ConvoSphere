# 💬 ConvoSphere

**ConvoSphere** is a full-stack real-time communication platform built with the **MERN stack**, designed for seamless chat, video calling, and social interactions. It features JWT-based authentication, a smart onboarding system, a dynamic friends module, and real-time messaging with **Stream SDK**. With 32+ UI themes, protected routes, and a fully optimized UI using **Tailwind CSS + DaisyUI**, ConvoSphere is a scalable, developer-ready application for production.

---

## 🔗 Live Demo

📌 [Try the Live App Here](https://convosphere-3mhi.onrender.com)

---

## 📸 Snapshot

[ConvoSphere Preview](https://user-images.githubusercontent.com/Video Call.png)  
<sub>*Home, Chat, and Theme Selector Views*</sub>

---

## 🛠 Tech Stack

| Layer      | Technology                                      |
|------------|--------------------------------------------------|
| Frontend   | React.js, Tailwind CSS, DaisyUI, Zustand, TanStack Query |
| Backend    | Node.js, Express.js                              |
| Database   | MongoDB Atlas                                    |
| Auth       | JWT (Login, Signup, Protected Routes)            |
| Realtime   | Stream SDK (Chat & Video Calling)                |
| Deployment | Vercel (Frontend), Render (Backend)              |
| Testing    | Postman                               |

---

## ✨ Key Features

- 🔐 **JWT Authentication** for login/signup
- 👤 **Onboarding Flow** with profile avatar and theme preference
- 👫 **Friend System** (search, suggest, send/accept/reject requests)
- 💬 **Real-Time Chat** using **Stream.io**
- 📹 **Video Calling** using **Stream Video SDK**
- 🎨 **32 UI Themes** powered by DaisyUI
- 🚨 **Protected Routes** via JWT + route guarding
- 🧠 **Global State Management** using Zustand store
- 🛠️ **Custom Hooks** to encapsulate logic & reuse
- 🧪 **REST API Testing** for endpoint validation
- ⚙️ **Optimized Code Structure** for scalability
- 🚀 **Fully Production Ready**
---

## 📁 Project Structure

├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── hooks/ # Custom hooks
│ │ ├── pages/ # Route pages
│ │ ├── store/ # Zustand global state
│ │ ├── routes/ # Protected/Public routes
│ │ └── utils/ # Helper functions
├── backend/ # Node.js + Express backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── config/
├── .env
├── README.md
└── package.json


---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Rahul9214/ConvoSphere.git
cd ConvoSphere

2. Backend Setup
cd backend
npm install
npm run dev

Create .env with:
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

3. Frontend Setup
cd frontend
npm install
npm run dev

Customize tailwind.config.js for DaisyUI themes and setup Zustand store in src/store/.

---

## 🧠 Custom Integrations

| Tool        | Purpose                                |
|-------------|----------------------------------------|
| DaisyUI     | 32+ Tailwind-compatible themes         |
| Zustand     | Lightweight global state store         |
| Stream SDK  | Video streaming & real-time messaging  |
| TanStack Query | API state management & caching     |

---

## 🧪 API Endpoints

| Endpoint                  | Method | Description                  |
|--------------------------|--------|------------------------------|
| `/api/auth/signup`       | POST   | Register new users           |
| `/api/auth/login`        | POST   | Login with credentials       |
| `/api/user/onboarding`   | PUT    | Complete onboarding          |
| `/api/user/friends`      | GET    | Fetch friend list            |
| `/api/user/request`      | POST   | Send friend request          |
| `/api/user/accept`       | PUT    | Accept friend request        |
| `/api/chat/message`      | POST   | Send a chat message          |
| `/api/chat/conversation` | GET    | Fetch chat history           |

---

## 🙌 Credits

- [Stream SDK](https://getstream.io)
- [Zustand](https://zustand-demo.pmnd.rs)
- [TanStack Query](https://tanstack.com/query)
- [DaisyUI](https://daisyui.com)

---

## 📁 Links

📌 [Live Demo](https://convosphere-3mhi.onrender.com)

---

## 🧑‍💼 About the Author

Developed by [Rahul Ranjan](https://github.com/Rahul9214) — passionate about building scalable real-time applications and crafting elegant, user-centric interfaces.

---

> ⭐ If you found this helpful, don't forget to leave a star on the repo!

