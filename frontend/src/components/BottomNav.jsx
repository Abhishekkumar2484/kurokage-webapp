import { Link, useLocation } from "react-router-dom";
import "../style.css";

const BottomNav = ({ type = "reader" }) => {
    const location = useLocation();

    if (type === "reader") {
        return (
            <div className="bottom-nav">
                <div className="bottom-nav-inner">
                    <Link to="/" className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <span className="icon">🏠</span>
                        <span className="text">HOME</span>
                    </Link>
                    <Link to="/library" className={`bottom-nav-item ${location.pathname === '/library' ? 'active' : ''}`}>
                        <span className="icon">📖</span>
                        <span className="text">LIBRARY</span>
                    </Link>
                    <div className="bottom-nav-center">
                        <button className="fab-btn">+</button>
                    </div>
                    <Link to="/community" className={`bottom-nav-item ${location.pathname === '/community' ? 'active' : ''}`}>
                        <span className="icon">👥</span>
                        <span className="text">COMMUNITY</span>
                    </Link>
                    <Link to="/search" className={`bottom-nav-item ${location.pathname === '/search' ? 'active' : ''}`}>
                        <span className="icon">🔍</span>
                        <span className="text">SEARCH</span>
                    </Link>
                </div>
            </div>
        );
    } else if (type === "creator") {
        return (
            <div className="bottom-nav creator-nav">
                <div className="bottom-nav-inner">
                    <Link to="/dashboard" className={`bottom-nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                        <span className="icon">🏠</span>
                        <span className="text">HOME</span>
                    </Link>
                    <Link to="/analytics" className={`bottom-nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
                        <span className="icon">📊</span>
                        <span className="text">ANALYTICS</span>
                    </Link>
                    <Link to="/uploads" className={`bottom-nav-item ${location.pathname === '/uploads' ? 'active' : ''}`}>
                        <span className="icon">☁️</span>
                        <span className="text">UPLOADS</span>
                    </Link>
                    <Link to="/setup" className={`bottom-nav-item ${location.pathname === '/setup' ? 'active' : ''}`}>
                        <span className="icon">⚙️</span>
                        <span className="text">SETTINGS</span>
                    </Link>
                </div>
            </div>
        )
    }

    return null;
};

export default BottomNav;
