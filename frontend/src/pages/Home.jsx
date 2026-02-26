import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Home() {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // ⚠️ Setup API URL via Environment Variables
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/anime";
        fetch(apiUrl)
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
            <div className="hero">
                {/* NAVIGATION BAR OVERLAY */}
                <nav style={{ position: 'absolute', top: 0, right: 0, padding: '20px', display: 'flex', justifyContent: 'flex-end', gap: '15px', width: '100%' }}>
                    <Link to="/login" className="auth-button" style={{ textDecoration: 'none', padding: '10px 20px', borderRadius: '5px' }}>Login</Link>
                    <Link to="/signup" className="auth-button" style={{ textDecoration: 'none', padding: '10px 20px', borderRadius: '5px', backgroundColor: 'transparent', border: '1px solid #ff4757' }}>Sign Up</Link>
                </nav>

                <h1>KuroKage</h1>
                <p>Stream Your Shadow</p>
            </div>

            {/* CONTENT SECTION */}
            <div className="content">
                {loading && <p style={{ padding: '20px' }}>Loading...</p>}
                {error && <p style={{ color: "red", padding: '20px' }}>{error}</p>}

                {!loading && !error && (
                    <div className="grid">
                        {anime.map((a) => (
                            <div key={a.id} className="card">
                                <img src={a.image} alt={a.title} />
                                <div style={{ padding: '15px', textAlign: 'center' }}>
                                    <h3>{a.title}</h3>
                                    <p>{a.genre}</p>
                                    <p>⭐ {a.rating}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
