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

The backend integrates with **Neon PostgreSQL** for persistent storage and supports secure authentication using JWT.

---

## 🏗 Architecture

```text
Frontend (React, S3) → REST API (Node.js, Express, Docker on EC2) → Neon PostgreSQL
```

---

## 🚀 Features

- 🔐 **Authentication & Authorization (JWT-Based)**
  Secure login & signup using JSON Web Tokens for stateless authentication.

- 🤖 **AI Recipe Generation (Gemini API)**
  Generate recipes dynamically based on user ingredients.

- 🥫 **Pantry Management APIs (PostgreSQL + REST)**
  Full CRUD operations for managing pantry items.

- 📅 **Meal Planning System (Relational Data)**
  Organise and manage meals with structured backend logic.

- 🛒 **Shopping List Management (Derived Data)**
  Automatically generate shopping lists based on pantry and meal plans.

- ⚡ **Scalable REST API Architecture**
  Modular structure with routes, controllers, and middleware.

- 🐳 **Containerised Deployment (Docker)**
  Ensures consistent environments across development and production.

---

## 🛠 Tech Stack

- ⚙️ **Backend:** Node.js, Express.js
- 🗄️ **Database:** PostgreSQL (Neon)
- 🔐 **Authentication:** JWT
- ☁️ **Cloud:** AWS EC2
- 🐳 **DevOps:** Docker
- 🤖 **AI Integration:** Gemini API

---

## 📡 API Endpoints

### 🔐 Auth

- POST `/api/auth/register`
- POST `/api/auth/login`

### 🤖 Recipes

- POST `/api/recipes/generate`
- POST `/api/recipes`
- GET `/api/recipes`

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

## 📬 API Testing (Thunder Client)

API endpoints were tested using **Thunder Client (VS Code Extension)**.

### Example: Create Recipe

**POST** `/api/recipes`

```json
{
  "name": "Simple Tomato Pasta",
  "description": "Quick and delicious pasta made with fresh tomatoes and garlic",
  "cuisine_type": "Italian",
  "difficulty": "easy",
  "metadata": {
    "prep_time": 10,
    "cook_time": 20,
    "total_time": 30,
    "servings": 2
  },
  "ingredients": [
    {
      "name": "Pasta",
      "quantity": 200,
      "unit": "grams",
      "category": "Grains"
    }
  ]
}
```

### Example: Generate Recipe (AI)

**POST** `/api/recipes/generate`

```json
{
  "ingredients": ["rice", "chicken", "spices"]
}
```

---

## 🌐 Live API

```bash
http://3.25.50.50:8000
```

---

## ⚙️ Environment Variables

Create a `.env` file:

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

### 🔨 Build Image

```bash
docker build -t ai-recipe-backend .
```

### ▶️ Run Container

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

- 🚀 Backend hosted on AWS EC2
- 🐳 Containerised using Docker
- 🗄 Database hosted on Neon PostgreSQL
- 🔗 Integrated with S3-hosted frontend

---

## 🔮 Future Improvements

- 🔒 Add rate limiting & API security enhancements
- 🌍 Use API Gateway / CloudFront
- 🔁 Implement CI/CD (GitHub Actions)
- 📊 Add logging & monitoring
- 🧠 Improve AI prompt optimisation

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
