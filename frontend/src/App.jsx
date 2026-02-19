import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/anime")
      .then(res => res.json())
      .then(data => setAnime(data));
  }, []);

  return (
    <div>
      <div className="hero">
        <h1>KuroKage</h1>
        <p>Stream Your Shadow</p>
      </div>

      <div className="grid">
        {anime.map(a => (
          <div key={a.id} className="card">
            <img src={a.image} alt={a.title} />
            <div className="card-info">
              <h3>{a.title}</h3>
              <p>{a.genre}</p>
              <span>⭐ {a.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
