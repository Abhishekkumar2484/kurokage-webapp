import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
            const res = await fetch(`${apiUrl}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Login failed");

            // Mock success logic
            console.log("Logged in successfully", data);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
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
                    <h2 className="auth-title-modern">Welcome Back</h2>
                    <p className="auth-subtitle">Enter your details to access your shadow.</p>
                </div>

                {error && <div className="auth-error-modern">{error}</div>}

                <form className="auth-form-modern" onSubmit={handleLogin}>
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

                    <button type="submit" className="btn-primary-pink auth-btn-full">Sign In</button>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <p className="auth-switch-modern">
                        Don't have an account? <Link to="/signup" className="auth-link-orange">Create account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
