# Apex Gym Hub & SaaS CRM

A premium, full-stack operational core and interactive member dashboard for modern fitness centers, clubs, and personal training coaches.

---

## 🚀 Key Features

* **SaaS CRM Operator Console:**
  - Automated Leads Logger capturing prospect interest forms.
  - Workspace pricing tier updates.
  - Graphical User & Role Manager (register new accounts, edit tiers/roles inline, delete user accounts with full database cleanup cascade).
* **Premium Client Dashboard:**
  - Interactive group fitness class booking (Spin, Powerlifting, Yoga).
  - 1-on-1 private coach reservation calendar.
  - Hydration tracker & streak scoring metrics.
  - Workout logging utility.
* **Backend Security:** Native JWT Authentication with token signature checks.
* **Cloud Database Integration:** PostgreSQL (Supabase) with seamless migration queries, falling back to local JSON files automatically during offline development.
* **Stripe Payments:** Dynamic Checkout sessions handling class registrations, slots reservation, and receipts.
* **Automated Operational Emails:** Dispatches welcome letters, invoice confirmations, and contact thank-you messages.

---

## 📂 Project Structure

This repository is split into two main sections:
* `frontend/`: Standalone Vite, React 19, and TypeScript client portal.
* `backend/`: Dedicated Next.js 16.2.9 API and routing server.

---

## 🛠️ Local Development Setup

### 1. Backend Server Setup
1. Open your terminal in the `backend/` directory:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env.local` file inside `backend/` with the following variables:
   ```env
   DATABASE_URL="your_supabase_postgresql_connection_string"
   JWT_SECRET="your_secure_random_jwt_secret"
   STRIPE_SECRET_KEY="your_stripe_test_secret_key"
   ```
3. Run the backend development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Client Setup
1. Open a separate terminal in the `frontend/` directory:
   ```bash
   cd frontend
   npm install
   ```
2. Run the client development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser to view the client dashboard.
