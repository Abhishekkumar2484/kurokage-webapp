const express = require("express");
const cors = require("cors");

const app = express();

// Allow frontend to access backend
app.use(cors());
app.use(express.json());

// Root route (optional test route)
app.get("/", (req, res) => {
  res.send("KuroKage Backend is running 🚀");
});

// Anime API route
app.get("/api/anime", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Naruto",
      genre: "Action",
      rating: 8.5,
      image: "/images/naruto_poster.png"
    },
    {
      id: 2,
      title: "Attack on Titan",
      genre: "Dark Fantasy",
      rating: 9.0,
      image: "/images/aot_poster.png"
    },
    {
      id: 3,
      title: "One Piece",
      genre: "Adventure",
      rating: 9.5,
      image: "/images/one_piece_poster.png"
    }
  ]);
});

// Mock Authentication Routes
app.post("/api/auth/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  res.status(201).json({ message: "User created successfully" });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  // Mock successful login
  res.json({ token: "mock-jwt-token-123", user: { email } });
});

// Azure uses process.env.PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});