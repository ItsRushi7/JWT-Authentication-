# JWT Authentication with Bootstrap, EJS, and MongoDB

## 📌 Overview

This project implements **JWT authentication** using **Node.js, Express, MongoDB**, and **EJS (Embedded JavaScript Templates)**. The frontend is styled with **Bootstrap**.

## 🚀 Features

- User Registration & Login
- JWT-based authentication
- Protected routes
- Session handling using tokens
- Logout functionality
- MongoDB for user data storage
- Bootstrap for styling
- EJS for templating

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, Bootstrap
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)

---

## 📂 Project Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add:

```
DATABASE_URL= mongodb://localhost:27017/AuthJWT_SECRET=your_secret_key

SECRET_KEY= Rushikesh@161298
```

### 4️⃣ Run the Server

```bash
npm start
```

Server will run at: `http://localhost:5000`

---

## 🔑 Authentication Flow

1. **User Registers** → Data stored in MongoDB.
2. **User Logs In** → Server generates JWT token.
3. **Token Stored** → Token saved in client-side storage (HTTP-only cookie or local storage).
4. **Access Protected Routes** → Server verifies token for authentication.
5. **Logout** → Token is removed from storage.

---

## 📌 Folder Structure

```
📦 your-repository
 ┣ 📂 views           # EJS Templates
 ┣ 📂 routes          # Route handlers
 ┣ 📂 models          # Database models (User)
 ┣ 📂 middleware      # Authentication middleware
 ┣ 📜 index.js        # Main server file
 ┣ 📜 .env            # Environment variables
 ┣ 📜 package.json    # Dependencies
```

---

## 📜 API Routes

### **🔹 User Registration**

**POST** `/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### **🔹 User Login**

**POST** `/login`

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

*Response:*

```json
{
  "token": "eyJhbGciOiJI..."
}
```

### **🔹 Protected Route**

**GET** `/dashboard` *(Requires JWT token)*

### **🔹 Logout**

**GET** `/logout`

---

## 📌 UI Preview



---

## 🛡 Security Considerations

✅ Use **HTTP-only cookies** for JWT storage.
✅ Implement **token expiration**.
✅ Secure routes with authentication middleware.
✅ Use **bcrypt** to hash passwords.

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork the repository and submit improvements.

---

## 📃 License

This project is licensed under the MIT License.

---

## 📩 Contact

For questions or suggestions, reach out to me at [your-email@example.com](mailto\:your-email@example.com).

