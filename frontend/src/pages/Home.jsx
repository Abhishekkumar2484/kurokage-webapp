import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "../style.css";

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <div className="home-container">
            {/* TOP NAVBAR */}
            <header className="top-header">
                <div className="logo d-flex">
                    <span className="logo-kuro">KURO</span><span className="logo-kage">KAGE</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {user ? (
                        <>
                            <span style={{ fontSize: "0.85rem", color: "#e5e5e5" }}>Hi, {user.name}</span>
                            <button onClick={handleLogout} className="btn-outline" style={{ padding: "6px 16px", fontSize: "0.85rem", background: "none" }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn-outline" style={{ padding: "6px 16px", fontSize: "0.85rem" }}>Login</Link>
                            <Link to="/signup" className="btn-primary-pink" style={{ padding: "6px 16px", fontSize: "0.85rem" }}>Sign Up</Link>
                        </>
                    )}
                    <div className="menu-icon" style={{ marginLeft: "8px", display: "flex", flexDirection: "column", gap: "4px", cursor: "pointer" }}>
                        <div className="bar" style={{ width: "24px", height: "2px", backgroundColor: "white" }}></div>
                        <div className="bar" style={{ width: "24px", height: "2px", backgroundColor: "white" }}></div>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <div className="hero-section">
                <div className="hero-fade-top"></div>
                <div className="hero-content-wrapper">
                    <h1 className="hero-title">
                        KUROKAGE:<br />
                        CREATE &<br />
                        READ YOUR<br />
                        SHADOW
                    </h1>
                    <p className="hero-subtitle">
                        Immerse yourself in a world of ink and shadows.<br />
                        The next evolution of manga is here.
                    </p>
                    <div className="hero-actions">
                        <Link to="/library" className="btn-primary-pink">START READING</Link>
                        <Link to="/dashboard" className="btn-outline">START CREATING</Link>
                    </div>
                </div>
                <div className="hero-fade-bottom"></div>
            </div>

            {/* CONTENT SECTION */}
            <div className="main-content">
                {/* TRENDING NOW */}
                <section className="trending-section">
                    <div className="section-header">
                        <h2>TRENDING NOW</h2>
                        <Link to="/trending" className="view-all">VIEW ALL</Link>
                    </div>
                    <div className="horizontal-scroll">
                        {/* Card 1 */}
                        <div className="manga-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1542451313056-b7c8e626645f?w=300&h=400&fit=crop" alt="Shadow Blade" />
                                <span className="chapter-badge">CH. 142</span>
                            </div>
                            <div className="card-info">
                                <h3>SHADOW BLADE</h3>
                                <p>ACTION • DARK FANTASY</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="manga-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1510672465386-77884ff7b713?w=300&h=400&fit=crop" alt="Neon Pulse" />
                                <span className="chapter-badge">CH. 88</span>
                            </div>
                            <div className="card-info">
                                <h3>NEON PULSE</h3>
                                <p>SCI-FI • SEINEN</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="manga-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=400&fit=crop" alt="Void Walker" />
                                <span className="chapter-badge">CH. 12</span>
                            </div>
                            <div className="card-info">
                                <h3>VOID WALKER</h3>
                                <p>HORROR • MYSTERY</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CREATOR PORTAL */}
                <section className="creator-portal-section">
                    <div className="creator-card">
                        <p className="portal-label">CREATOR PORTAL</p>
                        <h3>TURN YOUR SHADOW<br />INTO PANELS</h3>
                        <p className="portal-desc">
                            Access professional-grade tools, panel layouts, and community feedback to launch your manga career.
                        </p>
                        <Link to="/dashboard" className="btn-white">LEARN MORE</Link>
                        <div className="gear-icon-bg">⚙️</div>
                    </div>
                </section>

                {/* EXPLORE REALMS */}
                <section className="explore-section">
                    <h2>EXPLORE REALMS</h2>
                    <div className="realms-grid">
                        <button className="realm-btn">DARK SHONEN <span className="dot"></span></button>
                        <button className="realm-btn">CYBERPUNK <span className="dot"></span></button>
                        <button className="realm-btn">GOTHIC HORROR <span className="dot"></span></button>
                        <button className="realm-btn">SILENT PANELS <span className="dot"></span></button>
                    </div>
                </section>

                <div style={{ height: '100px' }}></div> {/* Spacer for bottom nav */}
            </div>

            <BottomNav type="reader" />
        </div>
    );
}

export default Home;
