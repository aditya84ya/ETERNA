# 🖥️ Login UI Assignment — React + TailwindCSS

This project is a **frontend login screen** built using **React** and **TailwindCSS**, replicating the provided design mock-up as closely as possible.

---

## 🚀 Project Overview

The goal is to implement a modern, responsive login page that matches the given reference image.
It includes:

* Accurate design replication
* Form validation
* Responsive layout (mobile + desktop)
* Accessibility best practices

---

## 🧩 Tech Stack

* **React (Vite)** — for fast development
* **TailwindCSS** — for clean and scalable styling
* **Google Fonts** — Playfair Display & Inter
* **HTML5 & JSX** — semantic structure

---

## 🏗️ Project Setup

### 1️⃣ Clone or create the project

```bash
npm create vite@latest login-ui-assignment
```

Choose → React → JavaScript

### 2️⃣ Install dependencies

```bash
cd login-ui-assignment
npm install
```

### 3️⃣ Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4️⃣ Configure Tailwind

Update `tailwind.config.cjs`:

```js
content: ["./index.html", "./src/**/*.{js,jsx}"]
```

### 5️⃣ Add Fonts

In `index.css`, import:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
```

### 6️⃣ Run the app

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🧠 Features

✅ Accurate recreation of design mock-up
✅ Smooth layout with rounded containers and image overlay
✅ Basic email and password validation
✅ Accessible labels and form fields
✅ Responsive design (desktop → mobile)
✅ “Remember me”, “Forgot Password”, and “Sign in with Google” placeholders

---

## 📂 Folder Structure

```
login-ui-assignment/
├── src/
│   ├── assets/
│   │   └── bg.webp
│   ├── components/
│   │   └── IconEye.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ...
├── package.json
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
└── README.md
```

---

## 📱 Responsiveness

The layout adapts for mobile screens:

* On desktop → two-column split (image + form)
* On mobile → stacked layout (image on top, form below)

---

## 🧩 Validations

* Email must be valid format (`user@example.com`)
* Password minimum length: 6 characters
* Displays inline error messages

---

## ✨ Future Enhancements

* Integrate real authentication (Firebase/Auth0)
* Add animations or transitions
* Replace placeholder logo with SVG
* Improve accessibility with focus management

---

## 🧑‍💻 Author

**Aditya Chaurasiya**
B.E. CSE (AIML) — Sona College of Technology
Frontend Developer (React + Tailwind)