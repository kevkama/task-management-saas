# 📝 Task Management SaaS

[![CI/CD](https://github.com/kevekama/task-management-saas/actions/workflows/deploy.yml/badge.svg)](https://github.com/kevkama/task-management-saas/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/kevkama/task-management-saas.svg)](https://github.com/kevkama/task-management-saas/graphs/contributors)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-green.svg)](https://kevkama.github.io/task-management-saas/)

## 🚀 Overview

**Task Management SaaS** is a full-stack web application that allows users to **create, assign, and track tasks in real-time**. It is built using **TypeScript, Node.js, AWS Lambda, Angular/Vue, and Firebase/MongoDB**. The app demonstrates **end-to-end software development**, **authentication**, **database integration**, and **cloud deployment**.

### 🎯 **Features**
✅ **User Authentication** (Google, Email/Password via Firebase Auth)  
✅ **Task CRUD Operations** (Create, Read, Update, Delete tasks)  
✅ **Real-time Updates** (Live task status updates with Firebase Firestore)  
✅ **Role-based Access Control** (Admins manage all tasks, users manage their own)  
✅ **CI/CD Pipeline** (Automated AWS Lambda + GitHub Pages deployment)  

---

## 🛠 **Tech Stack**
| Technology      | Purpose |
|---------------|---------|
| **TypeScript** | Backend and Frontend development |
| **Node.js + AWS Lambda** | Serverless backend APIs |
| **Angular/Vue** | Frontend UI |
| **Firebase Auth** | User authentication |
| **MongoDB/Firebase Firestore** | Database |
| **GitHub Actions** | CI/CD deployment |

---

## 📂 **Project Structure**
task-management-saas/ │── backend/ │ ├── src/ │ │ ├── handlers/ │ │ │ ├── auth.ts │ │ │ ├── tasks.ts │ │ ├── utils/ │ │ │ ├── db.ts │ ├── samconfig.toml │ ├── template.yaml │ ├── package.json │ ├── tsconfig.json │── frontend/ │ ├── src/ │ │ ├── app/ │ │ │ ├── auth/ │ │ │ ├── task-board/ │ ├── assets/ │ ├── package.json │── .github/workflows/deploy.yml │── README.md │── LICENSE │── .gitignore

---

## ⚙️ **Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/kevkama/task-management-saas.git
cd task-management-saas

### **2️⃣ Backend Setup** 
```sh
cd backend
npm install

#### **Set Up Firebase Credentials:**

Create a Firebase project → Enable Firestore & Authentication
Generate Admin SDK credentials & save in .env
```sh
FIREBASE_CREDENTIALS='{"type":"service_account","project_id":"your-project","private_key":"..."}'

### **3️⃣ Deploy Backend to AWS**
```sh
sam build
sam deploy --guided

### **4️⃣ Frontend Setup**
```sh
cd ../frontend
npm install

#### ** for angular**
```sh
ng serve

#### ** for vue**
```sh
npm run dev

##📡 API Endpoints
Method	Endpoint	Description
POST	/auth/login	Logs in a user
POST	/tasks	Creates a new task
GET	/tasks	Fetches all tasks
PUT	/tasks/:id	Updates a task
DELETE	/tasks/:id	Deletes a task

## 🚀 Deployment
Frontend Deployment (GitHub Pages)
Build the app:
```sh
npm run build
Deploy to GitHub Pages:
```sh
npm run deploy
Visit: kevkama.github.io/task-management-saas

# ✨ Contact & Support
If you have any questions, feel free to reach out! 🚀
📧 Email: your.kamaukn21@gmail.com
