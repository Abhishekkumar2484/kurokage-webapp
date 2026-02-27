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

const users = []; // In-memory store for mock users

// Mock Authentication Routes
app.post("/api/auth/signup", (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = { name, email, password, role, joinedAt: new Date().toISOString() };
  users.push(newUser);

  res.status(201).json({ message: "User created successfully", user: { name, email, role } });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Mock successful login
  res.json({ token: "mock-jwt-token-123", user: { name: user.name, email: user.email, role: user.role } });
});

// Analytics API Route
app.get("/api/analytics", (req, res) => {
  const totalUsers = users.length;
  const totalCreators = users.filter(u => u.role === "creator").length;
  const totalReaders = users.filter(u => u.role === "reader").length;
  const creatorPercent = totalUsers > 0 ? Math.round((totalCreators / totalUsers) * 100) : 0;
  const readerPercent = totalUsers > 0 ? Math.round((totalReaders / totalUsers) * 100) : 0;
  const recentUsers = [...users]
    .sort((a, b) => new Date(b.joinedAt) - new Date(a.joinedAt))
    .slice(0, 5)
    .map(u => ({ name: u.name, email: u.email, role: u.role, joinedAt: u.joinedAt }));

  res.json({ totalUsers, totalCreators, totalReaders, creatorPercent, readerPercent, recentUsers });
});

// Azure uses process.env.PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});