import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Home() {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        // ⚠️ Setup API URL via Environment Variables
        const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        fetch(`${baseUrl}/api/anime`)
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
                <nav className="navbar">
                    <div className="nav-logo">
                        <span style={{ color: '#ff2052', fontWeight: 'bold', fontSize: '1.5rem' }}>KuroKage</span>
                    </div>
                    <div className="nav-links">
                        <a href="#">HOME</a>
                        <a href="#">BROWSE</a>
                        <a href="#">PRICING</a>
                    </div>
                    <div className="nav-auth">
                        {user ? (
                            <>
                                <span style={{ color: 'white', fontWeight: 'bold' }}>Welcome, {user.name}</span>
                                {user.role === 'creator' && (
                                    <button className="nav-btn">Upload Manga</button>
                                )}
                                <button onClick={() => { localStorage.removeItem("user"); setUser(null); }} className="nav-btn">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" className="nav-btn">LOGIN</Link>
                        )}
                    </div>
                </nav>

                <div className="hero-content">
                    <h1><span style={{ color: '#ff2052' }}>KuroKage</span><br />Stream Your Shadow</h1>
                    <p className="hero-description">
                        The next generation of anime streaming. High fidelity visuals, exclusive titles, and an atmospheric community waiting for you.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Start Your Journey</button>
                        <button className="btn-secondary">Watch Trailer</button>
                    </div>
                </div>
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
