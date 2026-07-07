# Multi-Container Fibonacci Calculator

This project was developed for educational purposes to understand microservices/distributed systems architecture and the communication between multiple containers using **Docker**, **Nginx**, **React**, **Express API**, **Redis**, and **PostgreSQL**.

The application calculates the Fibonacci sequence asynchronously to demonstrate how to isolate heavy CPU-bound processes and ensure system scalability.

---

## 🏗️ System Architecture and Data Flow

The application is designed to completely separate responsibilities, preventing processing bottlenecks. The mechanism works as follows:

1. **Nginx:** Acts as the entry point (reverse proxy), receiving all internet requests and routing them to either the frontend (React) or the backend (Express).
2. **React App:** The user interface where Fibonacci indices are requested and results are displayed.
3. **Express Server (API):** The backend server that receives requests, saves indices simultaneously to both permanent and temporary databases, and sends responses back to Nginx.
4. **PostgreSQL:** A relational database that permanently stores the historical record of all numbers entered by the user.
5. **Redis:** An in-memory database that temporarily stores key-value pairs (indices and calculated results) and acts as the message channel for the Worker.
6. **Worker:** An isolated background Node.js process that acts as the "mathematical brain", watching the Redis queue, performing heavy Fibonacci calculations, and sending the results back to the cache.

---

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/) (Express & Worker)
* [React](https://react.dev/)
* [Redis](https://redis.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Nginx](https://www.nginx.com/)
* [Docker](https://www.docker.com/)

---

## 📂 Project Structure

```text
multi_container/
├── worker/
│   ├── index.js          # Worker logic and Fibonacci calculation
│   ├── keys.js           # Redis environment variable management
│   └── package.json      # Worker dependencies (Nodemon, Redis Client)
└── README.md             # Project documentation