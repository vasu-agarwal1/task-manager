***
```markdown
# 📋 Team Task Manager

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A full-stack, role-based project management web application built to streamline team collaboration. Users can create projects, assign tasks to team members, and track real-time progress through an interactive dashboard.

🌐 **Live Demo:** [vasuprojects.shop](https://www.vasuprojects.shop)  
📹 **Video Walkthrough:** [Insert Link to your 2-5 min Video Here]

---

## 🚀 Key Features

*   **Role-Based Access Control (RBAC):** Distinct `Admin` and `Member` privileges.
*   **Secure Authentication:** Custom credentials login system with password hashing (bcrypt) and session management via NextAuth.js.
*   **Interactive Dashboard:** Real-time metrics tracking tasks that are `To Do`, `In Progress`, and `Done`.
*   **Task Management:** Admins can create tasks, assign them to specific team members, and set due dates.
*   **Overdue Tracking:** Visual indicators for tasks that have passed their deadline.
*   **Responsive UI:** Clean, modern interface styled completely with Tailwind CSS.

---

## 🛠️ Tech Stack

*   **Framework:** Next.js (App Router)
*   **Database:** MongoDB via Mongoose
*   **Authentication:** NextAuth.js (Auth.js) v4
*   **Styling:** Tailwind CSS
*   **Deployment:** Railway (CI/CD connected to GitHub)

---

## 💻 Getting Started Locally

Follow these steps to set up the project on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
