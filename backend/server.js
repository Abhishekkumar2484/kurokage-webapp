const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/anime", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Naruto",
      genre: "Action",
      rating: 8.5,
      image: "https://via.placeholder.com/200"
    }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
