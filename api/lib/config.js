require("dotenv").config();

const config = {
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "guniguni",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "operaciones",
  dbPort: process.env.DB_PORT || "3306",
  port: process.env.API_PORT || "3001",
  host: process.env.API_host || "localhost",
  cors: process.env.CORS || "localhost:3000",
};

module.exports = config;
