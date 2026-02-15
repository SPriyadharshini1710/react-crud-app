# React CRUD App

A simple **React-based CRUD (Create, Read, Update, Delete)** application to manage user data.
Built with scalability in mind — new fields can be added with minimal code changes.

---

## 🚀 Live Demo

👉 https://spriyadharshini1710.github.io/react-crud-app/

---

## 📌 Features

✅ Create, Read, Update, Delete users
✅ Form validation with required fields
✅ Duplicate email & phone prevention
✅ Config-driven form (easy extensibility)
✅ Loading indicators & clean UI
✅ Toast notifications for actions
✅ Responsive Material UI design

---

## 🛠 Tech Stack

* React (Vite)
* Material UI
* React Hook Form
* Axios
* JSON Server (mock API)
* React Hot Toast
* GitHub Pages (deployment)

---

## ⚙️ Project Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/SPriyadharshini1710/react-crud-app.git
cd react-crud-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Required Libraries

```bash
npm install axios react-hook-form @mui/material @emotion/react @emotion/styled
npm install react-hot-toast
npm install json-server
```

---

## 🗄 Mock Backend Setup (JSON Server)

Create a file:

### db.json

```json
{
  "users": []
}
```

Run backend:

```bash
npx json-server --watch db.json --port 3000
```

API will run at:

👉 http://localhost:3000/users

---

## ▶️ Run React App

```bash
npm run dev
```

Open:

👉 http://localhost:5173

---

## 🧩 Form Fields Configuration

Form fields are defined in:

```
src/utils/formFields.js
```

Example:

```js
export const userFields = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true, maxLength: 10 },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "age", label: "Age", type: "number" }
];
```

---

## ➕ How to Add New Fields (Extensibility)

To add a new field like **Date of Birth**:

### Step 1 — Update formFields.js

```js
{ name: "dob", label: "Date of Birth", type: "date" }
```

### Step 2 — Update table columns (UserList.jsx)

```jsx
<TableCell>{user.dob}</TableCell>
```

No changes required in form logic ✅

---

## 🔐 Validation Features

* Required field enforcement
* Email format validation
* Phone length restriction
* Duplicate email & phone prevention

---

## 🔄 API Integration

All API calls are handled in:

```
src/api/userApi.js
```

Functions:

* getUsers()
* createUser()
* updateUser()
* deleteUser()

Axios is used for async requests and error handling.

---

## 🌐 Deployment (GitHub Pages)

### Step 1 — Install gh-pages

```bash
npm install gh-pages --save-dev
```

### Step 2 — Update vite.config.js

```js
base: "/react-crud-app/"
```

### Step 3 — Update package.json

```json
"homepage": "https://spriyadharshini1710.github.io/react-crud-app",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Step 4 — Deploy

```bash
npm run deploy
```

---

## 📁 Project Structure

```
src/
 ├── api/
 ├── components/
 │     ├── UserForm.jsx
 │     └── UserList.jsx
 ├── utils/
 │     └── formFields.js
 ├── App.jsx
 └── main.jsx
```

---

## 🎯 Design Decisions

✔ Config-driven form for scalability
✔ Reusable API layer
✔ Clean component structure
✔ Toast notifications for UX
✔ Material UI for professional interface

---

## 📌 Assumptions

* JSON Server used as mock API
* Email & phone must be unique
* Age field is optional

---

## 🙌 Author 
**Priyadharshini S**
Full Stack Developer
