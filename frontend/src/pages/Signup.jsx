import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("reader");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
            const res = await fetch(`${apiUrl}/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, role }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Signup failed");

            // Mock success logic
            console.log("Signed up successfully", data);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-page-wrapper">
            <Link to="/" className="auth-logo">
                <span className="logo-kuro">KURO</span><span className="logo-kage">KAGE</span>
            </Link>
            <div className="auth-card-modern">
                <div className="auth-header-modern">
                    <h2 className="auth-title-modern">Create Account</h2>
                    <p className="auth-subtitle">Join the next evolution of manga.</p>
                </div>

                {error && <div className="auth-error-modern">{error}</div>}

                <form className="auth-form-modern" onSubmit={handleSignup}>
                    <div className="input-group-modern">
                        <label>Display Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="auth-input-modern"
                        />
                    </div>
                    <div className="input-group-modern">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@kurokage.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="auth-input-modern"
                        />
                    </div>
                    <div className="input-group-modern">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="auth-input-modern"
                        />
                    </div>

                    <div className="input-group-modern">
                        <label>I want to...</label>
                        <div className="role-selector">
                            <button
                                type="button"
                                className={`role-btn ${role === 'reader' ? 'active-reader' : ''}`}
                                onClick={() => setRole('reader')}
                            >
                                <span className="role-icon">📖</span> Read Manga
                            </button>
                            <button
                                type="button"
                                className={`role-btn ${role === 'creator' ? 'active-creator' : ''}`}
                                onClick={() => setRole('creator')}
                            >
                                <span className="role-icon">✍️</span> Create Manga
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary-pink auth-btn-full">Sign Up</button>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <p className="auth-switch-modern">
                        Already have an account? <Link to="/login" className="auth-link-orange">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
