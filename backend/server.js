const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =====================
// BASIC TEST ROUTE
// =====================
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

// =====================
// GET PROJECTS
// =====================
app.get("/api/projects", (req, res) => {
  console.log("API HIT: Fetching projects...");

  db.query("SELECT * FROM projects", (err, result) => {
    if (err) {
      console.error("Database Error:", err.message);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to retrieve projects from database." 
      });
    }

    console.log("RESULT:", result);
    res.json(result);
  });
});

// =====================
// CONTACT FORM API
// =====================
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation block to make sure empty data doesn't get inserted
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "All fields (name, email, message) are required." 
    });
  }

  const sql = "INSERT INTO contacts(name, email, message) VALUES(?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("❌ Database Error on POST /api/contact:", err.message);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to save contact information." 
      });
    }

    console.log("✅ Message saved to database from:", name);
    res.json({
      success: true,
      message: "Contact saved successfully!",
    });
  });
});

// =====================
// GET CONTACT MESSAGES (Admin View)
// =====================
// Moved safely above app.listen()
app.get("/api/messages", (req, res) => {
  console.log("API HIT: Fetching admin messages...");

  db.query("SELECT * FROM contacts ORDER BY created_at DESC", (err, result) => {
    if (err) {
      console.error("❌ Database Error on GET /api/messages:", err.message);
      return res.status(500).json({ success: false, error: "Failed to fetch messages." });
    }
    res.json(result);
  });
});

// =====================
// SERVER START (Always at the absolute bottom)
// =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});