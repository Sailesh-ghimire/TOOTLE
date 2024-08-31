# Tootle - Ride Sharing App

## Overview

Tootle is a ride-sharing application designed for managing drivers, including CRUD operations and an admin dashboard. The project is built using the MERN stack with MySQL for the database. This README provides an overview of the project's setup, features, and how to run it.

## Features

- **Admin Dashboard**: Manage drivers with CRUD operations.
- **User Management**: Register and Login to access the Admin Page.
- **Responsive Design**: Fully responsive UI that adapts to different screen sizes.
- **Authentication**: Secure login and session management using JWT Token.
- **Styling**: Consistent and appealing UI using TailwindCSS.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Additional Libraries**: Zod for form validation, TanStack Table for tables, React-Toastify for notifications, TanStack Query for data fetching.

## Installation

### Prerequisites

- **Node.js**
- **MySQL**

### Clone the Repository

```sh
git clone https://github.com/Sailesh-ghimire/Tootle.git
cd Tootle
```

### Installation

### Setup Backend

1. **Install dependencies**:

```sh
cd server
npm install
```

2. **Create a .env File**:
   Create a .env file in the server directory with the following content:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=TOOTLE
   JWT_SECRET=tootle
   PORT=5000

3. **Run the server**:

```sh
nodemon app
```

### Setup Frontend

1. **Install dependencies**:

```sh
cd client
npm install
```

2. **Create a .env File**:
   Create a .env file in the client directory with the following content:
   REACT_APP_BASE_URL=http://localhost:5000

3. **Run the client**:

```sh
npm start
```

## Usage

1. Admin Dashboard: Accessible at / after logging in.
2. Create Driver: Use the form at /create to add new drivers.
3. Driver Management: View and manage drivers at /drivers.

## API Endpoints

1. POST /auth/login :Authenticate users.
2. GET /drivers :List all drivers.
3. POST /drivers :Create a new driver.
4. PUT /drivers/:id :Update an existing driver.
5. DELETE /drivers/:id :Delete a driver.
