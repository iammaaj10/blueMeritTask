A full-stack User Management System built using the MERN stack, featuring secure authentication, role-based access control (RBAC), admin dashboards, and user profile management.
This project demonstrates clean architecture, secure design decisions, and production-ready deployment.
----------------------------------------------------------------------
📌 Features
🔐 Authentication & Authorization

User registration and login using JWT

Secure password hashing with bcrypt

Protected routes on both frontend and backend

Role-Based Access Control (RBAC): user and admin
------------------------------------------------------------
👤 User Features

View and update profile (name & email)

Change password securely

Logout functionality

Default role assigned as user on signup
-------------------------------------------------------------------
🛠️ Admin Features

Admin-only dashboard

View all registered users with pagination

Activate / Deactivate user accounts

Role enforcement at API and UI level
---------------------------------------------------------------------
🌐 Deployment

Backend deployed on Render

Frontend deployed on Vercel

MongoDB hosted on MongoDB Atlas
----------------------------------------------------------------------------
🧱 Tech Stack
Frontend

React (Vite)

React Router DOM

Axios

Context API

Tailwind CSS

Backend

Node.js

Express.js

MongoDB & Mongoose

JSON Web Tokens (JWT)

bcryptjs

DevOps / Tools

MongoDB Atlas

Render (Backend)

Vercel (Frontend)

Postman (API testing)
-----------------------------------------------------------------------------
🧠 Design Decisions (Important)

Single authentication flow for both users and admins

Users cannot choose or change roles during signup (security best practice)

Admin access is enforced via:

JWT payload

Backend middleware

Frontend protected routes

A bootstrap admin account is used for demonstration purposes
--------------------------------------------------------------------------------
🔑 Demo Admin Credentials

Use the following account to test admin features:

Email: admin@demo.com
Password: Admin@123

---------------------------------------------------------------------------------
⚠️ Note:

All new users register with the default user role

End users cannot elevate privileges

The admin account is pre-configured for demonstration/testing only

🔗 Live Deployment Links

Frontend: https://<your-vercel-url>.vercel.app

Backend API: https://<your-render-url>.onrender.com
---------------------------------------------------------------------------
📂 Project Structure (Monorepo)
Root
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middlewares
│   ├── config
│   └── server.js
│
└── frontend
    ├── src
    │   ├── api
    │   ├── auth
    │   ├── components
    │   ├── pages
    │   └── App.jsx
    └── main.jsx

⚙️ Environment Variables
Backend (Render)
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
PORT=5000

Frontend (Vercel)
VITE_API_URL=https://your-render-backend-url/api

🧪 API Testing (Postman)
Register User
POST /api/auth/register

Login User
POST /api/auth/login

Get Current User
GET /api/auth/me
Authorization: Bearer <JWT>

Admin – Get All Users
GET /api/admin/users
Authorization: Bearer <Admin JWT>

📽️ Walkthrough (Suggested Flow)

Visit /

Login as user

View and update profile

Logout

Login as admin

Access admin dashboard

Activate / deactivate users
------------------------------------------------------------------------------
🔒 Security Considerations

No role selection at signup

JWT-based authentication

Passwords never stored in plain text

Admin APIs protected via middleware

Production-safe environment variable handling

🏁 Conclusion

This project demonstrates:

Clean MERN architecture

Secure authentication & authorization

Practical role-based access control

Real-world deployment workflow

It is production-oriented, reviewer-friendly, and designed with security in mind.
-----------------------------------------------------------------------------------------------
👤 Author

Maaj
Final-year Computer Science student
Passionate about Full-Stack Development & System Design
