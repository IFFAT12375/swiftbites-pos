# MERN POS Application

Point of Sale (POS) application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides functionalities for managing sales transactions, including user authentication, order processing, generating bills, and accessing customer details.

## Features

- **User Authentication:** Users can register and login securely to access the POS functionalities.
- **Ordering Food:** Users can select items from a menu, add them to their cart, and place orders.
- **Generating Bills:** The application automatically calculates the total amount due for each order and generates bills/receipts.
- **Customer Details:** Users can view and manage customer details associated with their orders.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router for navigation
  - Redux for state management
  - Material-UI for UI components
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database management
  - JWT (JSON Web Tokens) for user authentication
- **Others:**
  - Axios for handling HTTP requests
  - bcryptjs for password hashing

## Screenshots

## Usage

1. Register a new user account or login with existing credentials.
2. Navigate through the application to explore available features.
3. Place orders, generate bills, and manage customer details as required.

## 🚀 Steps to Run the Application

1️⃣ Clone the Repository
Clone the project repository from GitHub and navigate to the project folder.

2️⃣ Install Dependencies
Install the required dependencies separately for both the backend and frontend.

3️⃣ Set Up Environment Variables
Create a .env file inside the backend folder and add configurations for the database connection, server port, and JWT secret.

4️⃣ Install Concurrently and Start the Application
Install the necessary package for running both frontend and backend simultaneously, then start the application.

5️⃣ Open the Application in Browser
Once the application is running, open http://localhost:3000/ in a web browser to view it.

## 🎯 Notes
Ensure MongoDB is running before starting the backend.
The application runs both backend (port 8080) and frontend (port 3000) concurrently.
Check logs for any errors related to missing dependencies or incorrect .env values.