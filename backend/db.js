const mysql = require("mysql2");

// Using a Pool instead of a single Connection prevents the backend from crashing 
// due to PROTOCOL_CONNECTION_LOST errors after long idle periods.
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "2004", // Tip: In the future, move this to a .env file!
  database: "portfolio_db",
  waitForConnections: true,
  connectionLimit: 10, // Allows up to 10 concurrent connections
  queueLimit: 0
});

// Verifying connection status on startup
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL Database connection failed!");
    console.error("Reason:", err.message);
    return;
  }
  console.log("✅ MySQL Pool Connected successfully!");
  connection.release(); // Releases the connection back to the pool immediately
});

module.exports = db;