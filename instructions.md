# 📋 Build Instructions/Guide – Next-Gen To-Do App (React + Node + Supabase)

This checklist breaks down development into steps.

---

## 🛠️ PHASE 1: Project Initialization & Environment Setup

### ✅ 1. Base Project Setup – React + Node + Bootstrap
> Create a base monorepo project for a full-stack web app using React (frontend), Node.js + Express (backend), and PostgreSQL (via Supabase). Use Vite or Create React App for the frontend, and setup Bootstrap 5 for responsive design. Initialize a basic Express server with CORS and JSON middleware enabled.

---

### ✅ 2. Supabase Integration – Database & Auth
> Integrate Supabase into the project. Create a Supabase project with:
> - A `users` table (Supabase-managed with Google OAuth)
> - A `tasks` table with fields: id (PK), user_id (FK), title, description, due_date, completed, priority, recurrence, reminder_time, created_at
> Enable Google OAuth and row-level security so users can only read/write their own tasks.

---

### ✅ 3. Set Up Environment Config
> Add `.env` files to both frontend and backend to store Supabase URL, anon/public keys, and service role keys. Use `@supabase/supabase-js` on frontend and backend for secure communication. Load and inject the keys properly into the runtime.

---

## 🌐 PHASE 2: UI Scaffolding & Navigation

### ✅ 4. Frontend Routing & Page Structure
> Build a basic React routing structure using React Router. Pages needed:
> - `/` → Home/Task List (for logged-in users)
> - `/login` → Google Sign-In page
> - `/admin` → Admin dashboard (visible only for admin users)
> Set up Bootstrap navigation and layout shell (Header/Navbar/Footer). Protect routes for logged-in users only.

---

### ✅ 5. Google OAuth Login Flow
> Implement Google OAuth login using Supabase Auth. Use `supabase.auth.signInWithOAuth({ provider: 'google' })` on the frontend. After login, redirect users to `/`. Store session in localStorage or Supabase's built-in session handling. Display user's name/email in navbar.

---

## 🧩 PHASE 3: Core To-Do Functionality

### ✅ 6. Add Task: UI + API + DB
> Create a form to add a new task. Fields: title, description, due date, priority, reminder time, recurrence (daily/weekly/none). On submit, call a backend API to insert the task into the Supabase `tasks` table using the user’s ID. Use Bootstrap form components.

---

### ✅ 7. View Tasks (List + Sort)
> Build the task list UI to fetch and display all tasks for the logged-in user. Show tasks sorted by due date and/or priority. Include visual indicators for completed tasks. Use Bootstrap cards or table layout with responsive design.

---

### ✅ 8. Edit & Delete Tasks
> Add edit and delete functionality for each task. Use modal or separate form to edit a task's fields. On update, sync with backend/Supabase. Add a delete button to permanently remove a task from the database.

---

### ✅ 9. Mark Task as Complete
> Add a checkbox or button to mark a task as complete/incomplete. On change, update the `completed` field in Supabase and immediately reflect it in the UI (strikethrough, muted color, etc.).

---

### ✅ 10. Add Recurring Task Logic
> Add logic so that when a task with recurrence is marked complete, a new task instance is automatically created with the same attributes but a new due date based on recurrence type (daily, weekly, etc.). Handle this in backend or via Supabase functions.

---

### ✅ 11. Reminder Notifications
> Set up a background job (cron or Supabase scheduled function) that checks for tasks with upcoming `reminder_time` and sends email or in-app notification. Display a UI toggle to enable/disable reminders per task.

---

## 🔄 PHASE 4: Real-Time & Sync

### ✅ 12. Real-Time Task Sync
> Implement real-time task updates using Supabase’s `channel().on('postgres_changes')` listener. Subscribe to the user’s task changes and update the task list UI when a task is created, updated, or deleted on another device.

---

## 🛡️ PHASE 5: Admin Panel

### ✅ 13. Admin Role Protection
> Add an `is_admin` field to the Supabase `users` table or use metadata/claims. Protect the `/admin` route so only users with admin rights can access it. Redirect non-admins to home.

---

### ✅ 14. Admin Dashboard – View Users
> Create an admin page that shows all registered users with their email, registration date, and total number of tasks. Fetch this data from Supabase using service role key or server-side API.

---

### ✅ 15. Admin Analytics Dashboard
> Add KPI widgets and charts to display:
> - Daily active users (DAU)
> - Tasks created/completed per day
> - Average tasks per user
> - Retention trends (e.g., users who returned after 7 days)
> Use Chart.js or Recharts and aggregate task data in backend API.

---

## ✅ PHASE 6: Testing & Deployment

### ✅ 16. Testing Setup (Optional)
> Set up unit tests using Jest for backend logic and integration tests for the frontend. Add tests for task creation, editing, and real-time updates. Use testing library or Cypress for UI flows.

---

### ✅ 17. Final Performance Optimizations
> Optimize frontend load time (lazy-load components), backend query performance (indexes on user_id, due_date), and Supabase bandwidth. Enable pagination for large task lists.

---

### ✅ 18. Deployment Config
> Add deployment configuration files:
> - Vercel/Netlify for frontend
> - Render/Heroku/Docker for backend
> Ensure environment variables are set securely for both environments.

---

