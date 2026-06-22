# Task-3-Srihitha
# Student Management Dashboard

## Project Overview

Student Management Dashboard is a Full Stack Web Application developed as part of DecodeLabs Full Stack Development Project 3 (Database Integration).

The application allows users to manage student records using a MySQL database and perform CRUD (Create, Read, Update, Delete) operations through a modern and responsive dashboard interface.

---

## Features

* Add New Students
* View All Students
* Delete Student Records
* MySQL Database Integration
* REST API Backend
* Responsive Dashboard UI
* Live Student Counter
* Search Students
* Modern Glassmorphism Design
* Real-Time Database Updates

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools

* VS Code
* MySQL Workbench
* Git
* GitHub

---

## Project Structure

student-management-system/

├── public/

│ ├── index.html

│ ├── style.css

│ └── script.js

├── db.js

├── server.js

├── package.json

└── README.md

---

## Database Setup

Create a database named:

studentdb

Run the following SQL commands:

CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
course VARCHAR(100) NOT NULL
);

---

## Installation

Clone the repository:

git clone <repository-url>

Navigate to project folder:

cd student-management-system

Install dependencies:

npm install

---

## Configure Database

Open db.js and update your MySQL credentials:

host: "localhost"

user: "root"

password: "YOUR_PASSWORD"

database: "studentdb"

---

## Run the Project

Start the server:

node server.js

You should see:

MySQL Connected Successfully

Server Running at http://localhost:3000

Open browser:

http://localhost:3000

---

## CRUD Operations

### Create

Add new student details through the dashboard.

### Read

Display all student records from the database.

### Update

Can be extended to edit student information.

### Delete

Remove student records from the database.

---

## Screenshots

### Dashboard

(Add Screenshot Here)

### Student Records

(Add Screenshot Here)

### MySQL Database

(Add Screenshot Here)

### GitHub Repository

(Add Screenshot Here)

---

## Learning Outcomes

* Database Integration
* MySQL CRUD Operations
* Backend Development with Express.js
* REST API Development
* Full Stack Application Development
* Git and GitHub Workflow

---

## Project Status

Completed Successfully

---

## Author

Srihitha

DecodeLabs Full Stack Development Internship

Batch 2026

