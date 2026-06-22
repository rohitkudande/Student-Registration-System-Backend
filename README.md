# Student Registration System

A RESTful API built with Node.js, Express.js, MySQL, Sequelize ORM, and JWT Authentication for managing student records.

## Features

* User Registration and Login
* JWT Authentication
* Role-Based Authorization (Admin, Teacher, Student)
* Student CRUD Operations
* Input Validation using Express Validator
* MySQL Database Integration
* Sequelize ORM
* Swagger API Documentation
* Error Handling Middleware

## Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT (JSON Web Token)
* bcryptjs
* Express Validator
* Swagger UI

## Project Structure

```
student_registration_system/
│
├── server.js
├── package.json
├── src/
│   ├── app.js
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd student_registration_system
```

### Install Dependencies

```bash
npm install
```

### Create MySQL Database

```sql
CREATE DATABASE student_db;
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_db
JWT_SECRET=your_secret_key
```

### Run Project

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register User    |
| POST   | /api/auth/login    | Login User       |
| GET    | /api/auth/me       | Get Current User |

### Students

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/students     | Get All Students  |
| GET    | /api/students/:id | Get Student By ID |
| POST   | /api/students     | Create Student    |
| PUT    | /api/students/:id | Update Student    |
| DELETE | /api/students/:id | Delete Student    |

## API Documentation

Swagger Documentation:

```bash
http://localhost:3000/api/docs
```

## Database Tables

### Users

* id
* username
* email
* password
* role

### Students

* id
* firstName
* lastName
* email
* phone
* course
* status

## Author

**Rohit Kudande**

M.Sc. Computer Science Student

Backend Developer | Node.js | Express.js | MySQL
