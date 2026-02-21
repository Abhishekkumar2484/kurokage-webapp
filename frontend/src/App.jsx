import { useEffect, useState } from "react";
import "./style.css";
import bg from "./assets/bg.jpg";   // 👈 make sure bg.jpg src/assets me ho

function App() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // ⚠️ Yaha apna Azure backend URL daalo
    fetch("https://YOUR-BACKEND-NAME.azurewebsites.net/api/anime")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setAnime(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Backend not connected");
        setLoading(false);
      });
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "60px",
          color: "white"
        }}
      >
        <h1 style={{ fontSize: "60px", color: "red" }}>KuroKage</h1>
        <p style={{ fontSize: "20px" }}>Stream Your Shadow</p>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "40px", background: "black", color: "white" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
          {anime.map((a) => (
            <div
              key={a.id}
              style={{
                background: "#111",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <img
                src={a.image}
                alt={a.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{a.title}</h3>
              <p>{a.genre}</p>
              <p>⭐ {a.rating}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
