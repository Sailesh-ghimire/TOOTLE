Tootle - Ride Sharing App
Overview
Tootle is a ride-sharing application designed for managing drivers, including CRUD operations and an admin dashboard. The project is built using the MERN stack with MySQL for the database. This README provides an overview of the project's setup, features, and how to run it.

Features
Admin Dashboard: Manage drivers with CRUD operations.
User Management: Create, read, update, and delete driver profiles.
Responsive Design: Fully responsive UI that adapts to different screen sizes.
Authentication: Secure login and session management.
Styling: Consistent and appealing UI using TailwindCSS.
Tech Stack
Frontend: React, TailwindCSS
Backend: Node.js, Express
Database: MySQL
Additional Libraries: Zod for form validation, TanStack Table for tables, React-Toastify for notifications, TanStack Query for data fetching
Installation
Prerequisites
Node.js
MySQL
Setup
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/your-repo.git
cd your-repo
Setup Backend

Install Dependencies

bash
Copy code
cd server
npm install
Create a .env File

Create a .env file in the server directory with the following content:

env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=TOOTLE
JWT_SECRET=tootle
PORT=5000
Run the Server

bash
Copy code
npm start
Setup Frontend

Install Dependencies

bash
Copy code
cd client
npm install
Create a .env File

Create a .env file in the client directory with the following content:

env
Copy code
REACT_APP_BASE_URL=http://localhost:5000
Run the Client

bash
Copy code
npm start
Usage
Admin Dashboard: Accessible at /dashboard after logging in.
Create Driver: Use the form at /create to add new drivers.
Driver Management: View and manage drivers at /drivers.
API Endpoints
POST /auth/login: Authenticate users.
GET /drivers: List all drivers.
POST /drivers: Create a new driver.
PUT /drivers/
: Update an existing driver.
DELETE /drivers/
: Delete a driver.
