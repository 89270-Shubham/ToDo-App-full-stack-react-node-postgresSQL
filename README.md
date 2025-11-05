
# 📝 Next-Gen To-Do Application

A modern, full-featured to-do list application built with **React.js**, **Node.js**, **Supabase (PostgreSQL)**, and **Bootstrap**. This project offers Google OAuth authentication, real-time sync across devices, recurring tasks, reminders, prioritization, and a responsive user experience — along with an admin dashboard featuring analytics and user management.

---

## 🚀 Features

### ✅ User-Facing

- **Google OAuth** authentication via Supabase
- **Task Management**: Create, Read, Update, Delete (CRUD)
- **Task Completion** with visual indication
- **Recurring Tasks** (daily/weekly/custom intervals)
- **Reminders & Notifications** (email or in-app)
- **Task Prioritization** (Low, Medium, High)
- **Real-Time Sync** across multiple devices using Supabase Realtime
- **Responsive UI** built with Bootstrap for mobile, tablet, and desktop

### 🛠️ Admin Panel

- View all registered users
- Deactivate/remove users
- Task statistics per user
- **KPI Dashboard**:
  - Daily/weekly active users
  - Tasks created/completed per day
  - Average tasks per user
  - Retention metrics

---

## 🧱 Tech Stack

| Layer        | Technology                     |
|--------------|-------------------------------|
| Frontend     | React.js + Bootstrap (CSS)    |
| Backend      | Node.js (Express.js)          |
| Auth         | Google OAuth via Supabase     |
| Database     | PostgreSQL (managed by Supabase) |
| Realtime     | Supabase Realtime             |
| Notifications| Email (via cron job or 3rd-party API) |
| Hosting      | Vercel / Netlify / Heroku / Docker |
| Charts       | Chart.js / Recharts           |

---
