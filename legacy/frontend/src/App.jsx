import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Admin Panel States (Initialized safely as empty arrays)
  const [messages, setMessages] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", { name, email, message });
      alert("Message Sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      if (showAdmin) fetchMessages(); 
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Make sure the backend server is running.");
    }
  };

  // Fetch submitted contact form messages from backend
  const fetchMessages = () => {
    axios
      .get("http://localhost:5000/api/messages")
      .then((res) => {
        // Ensures we only set state if data is an array
        setMessages(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
      });
  };

  // Fetch initial projects lists
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  // Fetch messages automatically when admin dashboard opens
  useEffect(() => {
    if (showAdmin) {
      fetchMessages();
    }
  }, [showAdmin]);

  return (
    <div className="container">
      {/* 1. Hero Section */}
      <section className="hero">
        <h1>Neerav Jain</h1>
        <h3>Software Developer & AI / ML Engineering</h3>
        <p>
          BTech AI-ML engineer at ABESEC with a production-proven track record: 
          shipped 3 live IoT prototypes, cut road-survey effort by 60%, and achieved 
          sub-200 ms response latency in real-time embedded systems.
        </p>
      </section>

      {/* 2. Experience Section */}
      <section>
        <h2>Experience</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
          <div className="skill-card" style={{ textAlign: "left", padding: "20px" }}>
            <h4>Front-end Development Intern — Cognifyz IT Solutions Pvt. Ltd.</h4>
            <small style={{ color: "#38bdf8" }}>Apr 2026</small>
            <p style={{ marginTop: "10px" }}>Crafted responsive layouts and implemented interactive UI features for data-intelligence platforms within an agile environment.</p>
          </div>
          <div className="skill-card" style={{ textAlign: "left", padding: "20px" }}>
            <h4>IoT Engineering Trainee — Rajendra Gears, Ghaziabad</h4>
            <small style={{ color: "#38bdf8" }}>Aug – Sep 2024</small>
            <p style={{ marginTop: "10px" }}>Delivered 3 production-ready IoT prototypes integrating NodeMCU, Raspberry Pi 4, and Arduino into live machinery, reducing monitoring effort by ~40%.</p>
          </div>
        </div>
      </section>

      {/* 3. Technical Skills Section */}
      <section>
        <h2>Technical Skills</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
          <div className="skill-card">
            <h4>Languages</h4>
            <p style={{ color: "#38bdf8", marginTop: "5px" }}>Python | C</p>
          </div>
          <div className="skill-card">
            <h4>AI / ML</h4>
            <p style={{ color: "#38bdf8", marginTop: "5px" }}>Computer Vision | ML Pipelines | Preprocessing</p>
          </div>
          <div className="skill-card">
            <h4>IoT & Hardware</h4>
            <p style={{ color: "#38bdf8", marginTop: "5px" }}>Arduino | NodeMCU | Raspberry Pi 4</p>
          </div>
          <div className="skill-card">
            <h4>Tools & Databases</h4>
            <p style={{ color: "#38bdf8", marginTop: "5px" }}>Git | MySQL | VS Code</p>
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section>
        <h2>Key Projects</h2>
        <div className="skills-grid"> 
          {(projects || []).map((project) => (
            <div className="skill-card" key={project.id}>
              <h3>{project.title}</h3>
              <p style={{ fontSize: "14px", margin: "10px 0" }}>{project.description}</p>
              {project.tags && (
                <p style={{ color: "#38bdf8", fontSize: "12px", fontWeight: "bold" }}>
                  Tools: {project.tags}
                </p>
              )}
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ display: "inline-block", textDecoration: "none", marginTop: "15px", width: "auto", padding: "8px 20px" }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Education Section */}
      <section>
        <h2>Education</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <p>🎓 <strong>B.Tech – CSE (AI-ML), 2nd Year</strong> | ABES Engineering College (2025 – 2029)</p>
          <p>📜 <strong>Diploma – Electronics Engineering</strong> | Government Polytechnic, Ghaziabad (2022 – 2025)</p>
        </div>
      </section>

      {/* 6. Contact Me Section */}
      <section>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>

        {/* Toggle Inbox Button */}
        <button 
          onClick={() => setShowAdmin(!showAdmin)} 
          className="btn" 
          style={{ background: "#475569", marginTop: "30px", width: "auto" }}
        >
          {showAdmin ? "Hide Inbox" : "View Received Messages (Admin Only)"}
        </button>
      </section>

      {/* 7. Admin Panel Content Block */}
      {showAdmin && (
        <section style={{ borderTop: "2px dashed #334155", marginTop: "40px" }}>
          <h2>📥 Inbox Admin Panel</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
            {messages.length === 0 ? (
              <p>No messages received yet.</p>
            ) : (
              messages.map((msg) => (
                <div className="skill-card" key={msg.id} style={{ textAlign: "left", padding: "20px" }}>
                  <h4 style={{ color: "#38bdf8" }}>From: {msg.name} ({msg.email})</h4>
                  <p style={{ marginTop: "10px", fontStyle: "italic" }}>"{msg.message}"</p>
                  <small style={{ color: "#64748b", display: "block", marginTop: "10px" }}>
                    Received on: {new Date(msg.created_at).toLocaleString()}
                  </small>
                </div>
              ))
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;