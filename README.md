# 🍳 AI Recipe Generator – Backend

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
</p>

<p align="center">
  🚀 Scalable REST API for AI-powered recipe generation with Docker & AWS deployment
</p>

---

## 🌟 Overview

The **AI Recipe Generator Backend** is a production-ready REST API built with Node.js and Express.
It powers a full-stack application that enables users to generate recipes using AI, manage pantry items, plan meals, and maintain shopping lists.

The backend integrates with **Neon PostgreSQL** for persistent storage and uses JWT for secure authentication.

---

## 🏗 Architecture

```text
Frontend (React, S3) → REST API (Node.js, Express, Docker on EC2) → Neon PostgreSQL
```

### 🐳 Docker Deployment Architecture

![Docker Architecture](./screenshots/docker-architecture.png)

> Diagram shows containerised Node.js API running on EC2, connected to Neon PostgreSQL and accessed by S3-hosted frontend.

---

## 🚀 Features

- 🔐 **Authentication & Authorization (JWT-Based)**
  Secure login & signup using JSON Web Tokens.

- 🤖 **AI Recipe Generation (Gemini API)**
  Generate recipes dynamically based on user ingredients.

- 🥫 **Pantry Management APIs (PostgreSQL + REST)**
  Full CRUD operations for pantry items.

- 📅 **Meal Planning System**
  Manage structured meal plans with relational data.

- 🛒 **Shopping List Management**
  Generate shopping lists based on pantry and meals.

- ⚡ **Scalable REST API Architecture**
  Modular structure with routes, controllers, and middleware.

- 🐳 **Dockerised Deployment**
  Backend runs inside a container for consistent environments.

---

## 🛠 Tech Stack

- ⚙️ Backend: Node.js, Express.js
- 🗄️ Database: PostgreSQL (Neon)
- 🔐 Auth: JWT
- ☁️ Cloud: AWS EC2
- 🐳 DevOps: Docker
- 🤖 AI: Gemini API

---

## 📡 API Endpoints

### 🔐 Auth

- POST `/api/auth/register`
- POST `/api/auth/login`

### 🤖 Recipes

- POST `/api/recipes/generate` → Generate recipe using AI
- POST `/api/recipes` → Save recipe
- GET `/api/recipes` → Fetch recipes

### 🥫 Pantry

- GET `/api/pantry`
- POST `/api/pantry`
- PUT `/api/pantry/:id`
- DELETE `/api/pantry/:id`

### 📅 Meal Plans

- GET `/api/meal-plans`
- POST `/api/meal-plans`

### 🛒 Shopping List

- GET `/api/shopping-list`
- POST `/api/shopping-list`

---

## 🔄 API Flow Example

1. User sends ingredients → `/api/recipes/generate`
2. Backend generates recipe using AI
3. User saves recipe → `/api/recipes`
4. Data stored in Neon PostgreSQL
5. User retrieves recipes → `/api/recipes`

---

## 📬 API Testing (Thunder Client)

API endpoints tested using Thunder Client (VS Code extension).

### Example: Generate Recipe

**POST** `/api/recipes/generate`

```json
{
  "ingredients": ["rice", "chicken", "spices"]
}
```

### Example Response

```json
{
  "name": "Spiced Chicken Rice",
  "description": "A flavourful dish made with rice and aromatic spices",
  "ingredients": [...],
  "instructions": [...]
}
```

---

## 🌐 Live API

```bash
http://3.25.50.50:8000
```

---

## ⚙️ Environment Variables

```env
DATABASE_URL=your_neon_postgresql_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
```

---

## 💻 Run Locally

```bash
npm install
npm start
```

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t ai-recipe-backend .
```

### Run Container

```bash
docker run -d -p 8000:8000 \
-e DATABASE_URL="your_neon_connection_string" \
-e JWT_SECRET="your_secret_key" \
-e GEMINI_API_KEY="your_gemini_api_key" \
--name ai-backend \
ai-recipe-backend
```

---

## ☁️ Deployment

- Backend hosted on AWS EC2
- Docker container for deployment
- Neon PostgreSQL for database
- Connected to S3-hosted frontend

---

## 🔮 Future Improvements

- Add rate limiting & API security
- Implement CI/CD pipeline
- Add logging & monitoring
- Improve AI prompt optimisation

---

## 👨‍💻 Author

**Sai Chaitanya**

- 🌐 Sydney, Australia
- 💼 Open to opportunities
- 🔗 LinkedIn: https://www.linkedin.com/in/sai-chaitanya-73b598284/
- 💻 GitHub: https://github.com/sai02-creator

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
