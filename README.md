# Mini-Compete 

This project is a small competitions service built using a monorepo structure with Next.js (frontend) and NestJS (backend). Organizers can create events, and participants can register. It includes a background worker for processing jobs and a scheduled cron job for reminders.

(NOTE: The frontend is still in development and is not linked to the backend server. Any operation regarding it should not be performed.)

## Tech Stack

* **Monorepo:** Standard npm/npx workspace
* **Backend:** NestJS, TypeScript, Prisma, PostgreSQL
* **Frontend:** Next.js, React [in development]
* **Queueing:** BullMQ, Redis
* **Database:** PostgreSQL
* **Containerization:** Docker Compose

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js (v18 or later recommended)

NPM (usually comes with Node.js)

Docker and Docker Compose

## ARCHITECHTURE NOTES

### ⚙️ Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/dhruv-04/mini-compete.git
cd mini-compete/apps/backend
```

#### 2. Install dependencies
Install dependencies for all workspaces from the monorepo root using npm.

```bash
npm install
```

#### 3. Copy Environment Variables
Copy environment variables in root folder i.e. `/mini-compete/`
```bash
cp .env.example .env 
```

Copy environment variables in `/apps/backend/`
```bash
cp apps/backend/.env.example apps/backend/.env
```
**Crucially:** Fill in the required values (Database URL, Redis Host/Port, JWT Secret) in the .env files.

#### 4. Start Docker Containers:
This will start the PostgreSQL database and Redis instance.
```bash
docker-compose up -d
```

#### 5. Run Database Migrations & Seeding:
Apply the Prisma schema to your database and run the seed script using npx from the apps/backend directory.

```bash
npx prisma migrate dev
npx prisma db seed 
```
(**NOTE:** If you encounter issues during migration due to schema changes and existing data, you might need `npx prisma migrate reset` during development to start fresh.)

#### 6. Run the backend server
```bash
npm run start:dev
```

The backend should now be running at `http:localhost:3000`.

### 1. IDEMPOTENCY MECHANISM

The `POST /api/competitions/:id/register` endpoint uses an **idempotency key mechanism** to prevent accidental duplicate registrations when a user retries a request (e.g., due to network issues).

---

### 🔁 Flow

1. **User Action:**  
   The user clicks on the **Register** button.

2. **Client Request:**  
   The client generates a unique **idempotency key** (e.g., a UUID) and includes it in the `Idempotency-Key` header of the API request, along with the **JWT token**.

3. **Authentication & Validation:**  
   When the request reaches the server, the **JWT token** is authenticated, and the **user’s role** is validated.

4. **Redis Check (Before Transaction):**  
   - The `Idempotency-Key` is checked against the **Redis cache**.  
   - **If the key is not found** in Redis:
     - It is **added** with the user’s ID as the value.
     - A **TTL (Time-To-Live)** is set (e.g., **60 seconds**).
     - The **registration process** begins.
   - **If the key is found** in Redis:
     - It means a request with the same key was recently processed or is currently in progress.
     - The server immediately returns a **409 Conflict** response with a message:
       ```
       Request already in progress
       ```
     - This prevents **duplicate processing**.

---

### ⚖️ Tradeoff

This implementation introduces a **dependency on Redis** and an **extra network call** (to check/set the key) before the main database transaction.  
While this adds **minimal latency**, it **significantly enhances robustness** against duplicate requests caused by client retries or network interruptions.

It primarily protects against **identical duplicate requests** within the **TTL window**.

---

### ✅ Summary

| Component | Purpose |
|------------|----------|
| **Idempotency Key** | Uniquely identifies each registration attempt |
| **Redis Cache** | Tracks recent request keys with TTL |
| **409 Conflict** | Prevents re-processing of the same request |
| **TTL (60 seconds)** | Limits how long a request is remembered |

---

### 2. Concurrency Control

The `POST /api/competitions/:id/register` endpoint also implements a **concurrency control mechanism**.  
This ensures that **multiple users registering simultaneously** do not cause **overselling of seats** in a competition.

When hundreds of users try to register at the same time, it's crucial that the **order of incoming requests** is maintained and that **only one request at a time** is processed for each competition.

---

### 🚨 The Problem

If two users try to register for the same competition **simultaneously** and there’s **only one seat left**, both requests could be processed before the database updates the seat count — resulting in **overselling**.

To prevent this, the system uses **row-level locking** in PostgreSQL (implemented via **Prisma**) to ensure that **only one transaction** can modify the competition data at any given time.

---

### 🔄 Flow

1. **Incoming Request:**  
   A registration request is received by the server.

2. **Idempotency Check:**  
   The request’s `Idempotency-Key` is validated to ensure it’s not a duplicate.

3. **Transaction Start:**  
   Once validated, the request proceeds to the database transaction phase.

4. **Sequential Processing:**  
   Only **one request** at a time is allowed to execute the transaction logic.

5. **Row Locking:**  
   The database executes a `SELECT ... FOR UPDATE` query, which **locks the competition row** for the current transaction.  
   Other incoming requests must **wait** until the lock is released.

6. **Unlocking:**  
   Once the transaction **completes or fails**, the **lock is released**, allowing the next waiting request to proceed.

---

### ⚖️ Tradeoff

While this mechanism introduces **some latency** (since other requests must wait for the lock to release),  
it is a **necessary safeguard** to maintain fairness and **prevent overselling** of competition seats.

The slight delay is acceptable compared to the risk of inconsistent or invalid registrations.

---

### ✅ Summary

| Component | Purpose |
|------------|----------|
| **Row Lock (`SELECT ... FOR UPDATE`)** | Ensures only one request modifies competition data at a time |
| **Prisma Transaction** | Executes atomic registration safely |
| **Queue-like Processing** | Requests wait until the previous transaction finishes |
| **Fairness & Data Integrity** | Prevents overselling of competition seats |

---



## API Examples (cURL)

These commands demonstrate the main application flows. Ensure your backend is running on port 3000.

### 1. Sign Up (POST /auth/signup)

```bash
curl -X POST 'http://localhost:3000/auth/signup' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Jane Organizer",
    "email": "jane@organizer.com",
    "password": "securepassword123",
    "role": "organizer"
}'
```
(Save the returned JWT token for the next steps)

### 2. Login (POST /auth/login)
```bash
curl -X POST 'http://localhost:3000/auth/login' \
-H 'Content-Type: application/json' \
-d '{
    "email": "jane@organizer.com",
    "password": "securepassword123"
}'
```
(Save the new JWT token to the $TOKEN variable in your terminal)

### 3. Create Competition (POST /competitions)
```bash
# Set your token variable first:
# export TOKEN="<your_jwt_token_here>"

curl -X POST 'http://localhost:3001/api/competitions' \
-H "Authorization: Bearer $TOKEN" \
-H 'Content-Type: application/json' \
-d '{
    "title": "Spring Code Challenge",
    "description": "Solve three algorithmic problems.",
    "tags": ["Tech", "Hackathon"],
    "capacity": 50,
    "regDeadline": "2025-11-01T23:59:00Z"
}'
```

### 4. Register with Idempotency (POST /competitions/:id/register)
```bash
# Replace <COMP_ID> with the ID from step 3.
# This simulates a client retrying a request using the same unique key.
# export IDEMPOTENCY_KEY="your_unique_uuid_v4"

curl -X POST 'http://localhost:3001/api/competitions/<COMP_ID>/register' \
-H "Authorization: Bearer $PARTICIPANT_TOKEN" \
-H "Idempotency-Key: your_unique_uuid_v4"
```