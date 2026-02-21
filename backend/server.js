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
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "Attack on Titan",
      genre: "Dark Fantasy",
      rating: 9.0,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      title: "Demon Slayer",
      genre: "Adventure",
      rating: 8.7,
      image: "https://via.placeholder.com/300"
    }
  ]);
});

// Azure uses process.env.PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});