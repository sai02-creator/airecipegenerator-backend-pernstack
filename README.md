# 🍳 AI Recipe Generator – Backend

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-API-black?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)

---

## 🌟 Overview

This is the **backend API** for the AI Recipe Generator. It provides authentication, recipe generation, and data management using a scalable REST API.

---

## 🚀 Features

- 🔐 JWT Authentication
- 🤖 AI Recipe Integration
- 🥫 Pantry APIs
- 📅 Meal Planning APIs
- 🛒 Shopping List APIs

---

## 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL (Neon)
- JWT Authentication
- Docker
- AWS EC2

---

## ⚙️ Environment Variables

Create `.env` file:

```
DATABASE_URL=your_neon_postgresql_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

---

## 💻 Run Locally

```
npm install
npm start
```

---

## 🐳 Docker

### Build:

```
docker build -t ai-recipe-backend .
```

### Run:

```
docker run -d -p 8000:8000 \
-e DATABASE_URL="your_neon_connection_string" \
-e JWT_SECRET="your_secret_key" \
ai-recipe-backend
```

---

## 🌐 API Base URL

```
http://<EC2-IP>:8000/api
```

---

## 📡 Endpoints

| Feature       | Endpoint           |
| ------------- | ------------------ |
| Auth          | /api/auth          |
| Users         | /api/users         |
| Pantry        | /api/pantry        |
| Recipes       | /api/recipes       |
| Meal Plans    | /api/meal-plans    |
| Shopping List | /api/shopping-list |

---

## ☁️ Deployment

- Hosted on AWS EC2
- Containerised using Docker
- Database hosted on Neon PostgreSQL

---

## 👨‍💻 Author

**Sai Chaitanya**
