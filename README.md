# 📓 iNotebook

A **MERN Stack** based Notes Taking Web Application where users can securely **Create, Read, Update, and Delete (CRUD)** their personal notes. It also includes authentication (signup/login) so that every user can keep notes private.

---

## 🚀 Features

- 🔐 **User Authentication** (JWT based)
- ✏️ **Add, Edit, and Delete Notes**
- 📑 **View all notes in one place**
- 👤 **Separate notes for each user**
- ⚡ **Responsive UI** with React
- 🌍 **REST API** with Express & MongoDB

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, React Router, Context API |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT (JSON Web Token) |

---

## 📂 Project Structure

```
iNotebook/
│
├── backend/              # Express + MongoDB backend
│   ├── db.js            # Database connection
│   ├── index.js         # Entry point
│   ├── routes/          # API routes
│   │   ├── auth.js      # Authentication routes
│   │   └── notes.js     # Notes CRUD routes
│   ├── models/          # Mongoose schemas
│   │   ├── User.js
│   │   └── Notes.js
│   └── middleware/      # Custom middleware (auth, etc.)
│
├── frontend/             # React frontend
│   ├── public/
│   └── src/
│       ├── components/   # React components
│       ├── context/      # Context API for state management
│       ├── App.js        # Main App component
│       └── index.js      # Entry point
│
├── .gitignore
├── README.md
└── package.json
```

## 📡 API Routes

### 🔑 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/createuser` | Register new user |
| `POST` | `/api/auth/login` | Login user |
| `POST` | `/api/auth/getuser` | Get logged-in user details (requires auth token) |

### 📝 Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes/fetchallnotes` | Get all notes of logged-in user |
| `POST` | `/api/notes/addnote` | Add new note |
| `PUT` | `/api/notes/updatenote/:id` | Update existing note |
| `DELETE` | `/api/notes/deletenote/:id` | Delete note |

**Note:** All notes routes require authentication token in headers.

---

## 📧 Contact

For any queries or suggestions, feel free to reach out:

- **GitHub**: (https://github.com/rahull2509)
- **Email**: rahulgangwar2625@gmail.com

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  
### ⭐ If you like this project, don't forget to give it a star! ⭐

</div>
