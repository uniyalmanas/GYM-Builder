# Apex Gym Hub & SaaS CRM

A premium, full-stack operational core and interactive member dashboard for modern fitness centers, clubs, and personal training coaches.

---

## 🚀 Key Features

* **SaaS CRM Operator Console:**
* <img width="565" height="727" alt="image" src="https://github.com/user-attachments/assets/09077f24-11cc-48c6-accf-ce8192daffd8" />

  - Automated Leads Logger capturing prospect interest forms.
  - <img width="1660" height="997" alt="image" src="https://github.com/user-attachments/assets/d4fc49a7-b2ba-4bdf-a0c6-fe4f0ed5cb88" />

  - Workspace pricing tier updates.
  - Graphical User & Role Manager (register new accounts, edit tiers/roles inline, delete user accounts with full database cleanup cascade).
* **Premium Client Dashboard:**
* <img width="1699" height="1018" alt="image" src="https://github.com/user-attachments/assets/7436157e-6f88-455a-9877-df250c7b3884" />

  - Interactive group fitness class booking (Spin, Powerlifting, Yoga).
  - 
  - 1-on-1 private coach reservation calendar.
  - <img width="1648" height="973" alt="image" src="https://github.com/user-attachments/assets/20dc0657-bae6-45e9-a9aa-d388d8f2579f" />

  - Hydration tracker & streak scoring metrics.
  - <img width="1617" height="859" alt="image" src="https://github.com/user-attachments/assets/31d97c0a-81e8-48bc-92c8-e13fca93e14f" />

  - Workout logging utility.
  - <img width="1662" height="922" alt="image" src="https://github.com/user-attachments/assets/b3bb3f5b-c1a4-44b7-988d-4c93d3403d4d" />

* **Backend Security:** Native JWT Authentication with token signature checks.
* <img width="1693" height="949" alt="image" src="https://github.com/user-attachments/assets/04efceb9-bb48-47df-9388-a901f61f0099" />

* **Cloud Database Integration:** PostgreSQL (Supabase) with seamless migration queries, falling back to local JSON files automatically during offline development.
* <img width="1669" height="886" alt="image" src="https://github.com/user-attachments/assets/b0d4682c-b4e6-439c-864a-a5b064862255" />

* **Stripe Payments:** Dynamic Checkout sessions handling class registrations, slots reservation, and receipts.
* <img width="1660" height="939" alt="image" src="https://github.com/user-attachments/assets/d5e4fc29-932b-49a4-8e7d-0390e8c8baa3" />

* **Automated Operational Emails:** Dispatches welcome letters, invoice confirmations, and contact thank-you messages.
* 

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
