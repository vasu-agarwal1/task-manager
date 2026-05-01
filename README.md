# 🚀 Team Task Manager

A full-stack, role-based project management web application designed to streamline team collaboration, task tracking, and productivity monitoring.

---

## 🌐 Live Links

* 🔗 **Live Demo:** https://www.vasuprojects.shop
* 🎥 **Video Walkthrough:** *(Add your 2–5 min demo video here)*

---

## 📌 Overview

**Team Task Manager** is a scalable project management platform where teams can:

* Organize tasks efficiently
* Assign responsibilities
* Track progress in real-time
* Manage workflows based on roles

Built with modern technologies like **Next.js App Router**, **MongoDB**, and **NextAuth**, the app ensures performance, security, and a smooth user experience.

---

## ✨ Key Features

### 🔐 Authentication & Security

* Secure login using **NextAuth.js**
* Password hashing with **bcrypt**
* Session-based authentication
* Protected routes for dashboard access

### 👥 Role-Based Access Control (RBAC)

* **Admin**

  * Create & assign tasks
  * Manage team members
  * Monitor overall progress
* **Member**

  * View assigned tasks
  * Update task status

### 📊 Interactive Dashboard

* Real-time task tracking:

  * 📝 To Do
  * 🚧 In Progress
  * ✅ Done
* Visual indicators for **overdue tasks**

### 🗂 Task Management

* Create, update, delete tasks
* Assign tasks to users
* Set deadlines and priorities

### 📱 Responsive UI

* Fully responsive design
* Built using **Tailwind CSS**
* Clean and modern user interface

---

## 🛠️ Tech Stack

| Category       | Technology               |
| -------------- | ------------------------ |
| Frontend       | Next.js (App Router)     |
| Backend        | Next.js API Routes       |
| Database       | MongoDB (Mongoose)       |
| Authentication | NextAuth.js              |
| Styling        | Tailwind CSS             |
| Deployment     | Railway + GoDaddy Domain |

---

## 📂 Project Structure

```
app/
 ├── api/                # Serverless API routes (Auth, Tasks, Users)
 ├── dashboard/          # Protected UI routes
 ├── login/              # Authentication pages

lib/
 ├── db.js               # Database connection
 ├── models/             # Mongoose schemas

components/              # Reusable UI components
utils/                   # Helper functions
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

---

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser 🚀

---

## 🔐 Demo Credentials (Optional)

```txt
Admin:
email: admin@example.com
password: 123456

Member:
email: user@example.com
password: 123456
```

---

## 🚀 Deployment

* Hosted on **Railway**
* Domain configured via **GoDaddy**
* CI/CD integrated with GitHub

---

## 📈 Future Improvements

* 🔔 Real-time notifications (WebSockets)
* 🤖 AI-based task prioritization
* 📊 Advanced analytics dashboard
* 📎 File attachments in tasks
* 📅 Calendar integration

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/YourFeature

# Commit changes
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/YourFeature
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Vasu Agarwal**

* GitHub: https://github.com/your-username
* LinkedIn: *(Add your profile link)*

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub — it really helps!
