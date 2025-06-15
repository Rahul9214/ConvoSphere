# 💬 ConvoSphere

ConvoSphere is a **real-time, full-stack chat and social experience platform** built using the **MERN stack**, enhanced with **JWT authentication**, **video calls via Stream**, **theme customization via DaisyUI**, **Zustand-based state management**, and an engaging **friend system** — all crafted with best practices and modern tooling for scalability and performance.

---

## 🚀 Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, TanStack Query, Zustand
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Real-Time Messaging & Video:** Stream Chat SDK + Stream Video SDK
- **State Management:** Zustand + TanStack Query
- **Styling Framework:** Tailwind CSS with DaisyUI Components
- **Deployment Ready:** Vercel (Frontend) + Render (Backend)

---

## ✨ Key Features

- 🔐 **JWT Authentication** for login/signup
- 👤 **Onboarding Flow** with profile avatar and theme preference
- 👫 **Friend System** (search, suggest, send/accept requests)
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
bash
Copy
Edit
cd backend
npm install
npm run dev
Create .env with:

env
Copy
Edit
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
3. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
Customize tailwind.config.js for DaisyUI themes and setup Zustand store in src/store/.

🎯 Deployment
Frontend: Deploy on Vercel

Backend: Deploy using Render

Database: MongoDB Atlas

Video & Chat Infra: Stream.io

💡 Customizations
Tool	Purpose
DaisyUI	32+ Tailwind-compatible themes
Zustand	Lightweight global state store
Stream SDK	Video streaming & messaging

🙌 Credits
Stream SDK

TanStack Query

DaisyUI

Zustand

🔗 Links
🚀 📌 [Live Demo](https://convosphere-3mhi.onrender.com)

⚙️ Backend Repo: /backend

🎨 Frontend Repo: /frontend
