# TaskPlus

This project provides users with a platform to easily manage their to-do tasks. Users can create, edit, delete, and mark tasks as completed. Additionally, users can sign up and log in to the site, allowing them to track their tasks personally.

## Features
### Backend Implementation (Spring Boot)
- Implements CRUD operations for managing todo tasks.
- Utilizes Spring Security to secure the RESTful APIs.
- Develops REST APIs for user registration and login functionality.
- Implements JSON Web Token (JWT) based authentication for securing APIs.
- Uses MySQL database for storing todo tasks and user information.

### Frontend Implementation (React JS)
- Implements frontend interfaces for managing todo tasks.
- Develops user interfaces for user registration and login functionality.
- Styles web pages using the Bootstrap CSS framework for a responsive and visually appealing UI.

## Tools and Technologies Used
### Server-side :
Java 17+, Spring Boot 3+, Spring Data JPA (Hibernate), Maven, IntelliJ IDEA, MySQL database, Postman

### Client-side :
React JS 18+, React Hooks, React Router, Axios, Bootstrap, CSS, Visual Studio Code IDE, Node JS

## Requirements
- Java Development Kit (JDK) 17 or higher
- Node.js and NPM
- MySQL database

## Installation
1- Clone the project:
   ```sh
   git clone https://github.com/haktanonur/TaskPlus.git
   ```
2- Create the database:

Configure to your database settings from application.properties file and Connect MySQL client and create a new database:

  ```sh
  CREATE DATABASE todo_app;
  ```
3- For the backend, navigate to the backend directory and start the Spring Boot application:
  ```sh
   cd todo-backend
   mvn spring-boot:run
  ```

4- For the frontend, navigate to the frontend directory, install the necessary dependencies, and start the React application:
   ```sh
   cd todo-ui
   npm install
   npm run dev
   ```

5- Visit http://localhost:3000 in your browser to view the application.