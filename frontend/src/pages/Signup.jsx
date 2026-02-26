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
        <div className="auth-container signup-bg">
            <div className="auth-card glass-effect">
                <h2 className="auth-title">Join <span className="highlight-text">KuroKage</span></h2>
                {error && <p className="auth-error">{error}</p>}
                <form className="auth-form" onSubmit={handleSignup}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Role</label>
                        <div style={{ display: "flex", gap: "15px", color: "white" }}>
                            <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                                <input type="radio" value="reader" checked={role === "reader"} onChange={(e) => setRole(e.target.value)} />
                                Reader
                            </label>
                            <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                                <input type="radio" value="creator" checked={role === "creator"} onChange={(e) => setRole(e.target.value)} />
                                Creator
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
                <p className="auth-switch">
                    Already have an account? <Link to="/login" className="auth-link">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
