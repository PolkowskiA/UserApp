# User Form App (React + Carbon Design System)

This is a single-page application (SPA) built with **React**, **TypeScript**, and the **Carbon Design System**. It features a modular user form with validation and a profile view, integrated with a REST API for saving and retrieving user data. The app is deployed on **Vercel** with continuous deployment from **GitLab**.

## 🚀 Features

* Responsive form with validation using `react-hook-form`
* UI based on Carbon Design System components
* Image upload with preview (avatar)
* API integration via `fetch` (with suggestion to switch to `axios` or `TanStack Query`)
* Profile view with locally stored and fetched user data
* Navigation toggle for mobile using React Context
* Modular file structure and SCSS modules

---

## 📁 Project Structure

```
src/
├── assets/           # Aplication assets (logo.svg)
├── components/       # Reusable UI components (Navigation, Header, etc.)
├── contexts/         # Global context (e.g., SideNav toggle)
├── pages/            # Application pages (UserForm, UserProfile)
├── services/         # API methods (fetch wrapper)
│   └── api.ts
├── App.tsx
└── main.tsx
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone <your-gitlab-repo-url>
cd UserApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

App will be available at: `http://localhost:5173`

---

## 🌐 Deployment

* The project is deployed on **Vercel**
* Connected to a **GitLab** repository with CI/CD enabled

---

## 🧑‍💻 Author

* Created by \[Arkadiusz Polkowski], 2025