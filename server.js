const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const anime = [
  {
    id: 1,
    title: "Naruto",
    genre: "Action",
    rating: 9.0,
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
  },
  {
    id: 2,
    title: "Attack on Titan",
    genre: "Dark Fantasy",
    rating: 9.5,
    image: "https://upload.wikimedia.org/wikipedia/en/7/70/Attack_on_Titan_cover.jpg"
  }
];

app.get("/api/anime", (req, res) => {
  res.json(anime);
});

app.listen(5000, () => {
  console.log("API running on 5000");
});
