import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "../style.css";

function Dashboard() {
    return (
        <div className="dashboard-page">
            <header className="dash-header">
                <div className="dash-logo-area">
                    <span className="logo-icon orange-icon">✨</span>
                    <span className="logo-kuro">KuroKage</span> <span className="logo-creator">Creator</span>
                </div>
                <div className="dash-header-icons">
                    <span className="icon-bell">🔔</span>
                    <div className="avatar">👤</div>
                </div>
            </header>

            <div className="dash-content">
                <div className="welcome-section">
                    <h1>Welcome back, Kuro!</h1>
                    <p>Your community is waiting for new updates.</p>
                    <button className="btn-orange-large">
                        <span className="plus-icon">+</span> Upload New Manga
                    </button>
                </div>

                <div className="stats-grid-creator">
                    <div className="stat-card-c">
                        <div className="stat-header">
                            <span className="stat-title">Total Views</span>
                            <span className="stat-icon orange">👁️</span>
                        </div>
                        <div className="stat-value-c">1.2M</div>
                        <div className="stat-trend positive">↗ +12% this month</div>
                    </div>
                    <div className="stat-card-c">
                        <div className="stat-header">
                            <span className="stat-title">Likes</span>
                            <span className="stat-icon orange">❤️</span>
                        </div>
                        <div className="stat-value-c">85.4K</div>
                        <div className="stat-trend positive">↗ +5.2% this month</div>
                    </div>
                    <div className="stat-card-c">
                        <div className="stat-header">
                            <span className="stat-title">New Followers</span>
                            <span className="stat-icon orange">👥</span>
                        </div>
                        <div className="stat-value-c">12,402</div>
                        <div className="stat-trend positive">↗ +8% this month</div>
                    </div>
                </div>

                <div className="section-header-c">
                    <h2>Your Manga Works</h2>
                    <Link to="/works" className="view-all-c">View All</Link>
                </div>

                <div className="works-list">
                    {/* Item 1 */}
                    <div className="work-item">
                        <img src="https://images.unsplash.com/photo-1542451313056-b7c8e626645f?w=100&h=100&fit=crop" alt="Shadow Ronin" className="work-img" />
                        <div className="work-details">
                            <h4>Shadow R...</h4>
                            <p>Last updated: 2 days ago • Vol. 12</p>
                        </div>
                        <div className="work-actions">
                            <button className="btn-icon">✏️</button>
                            <button className="btn-add-chapter">+ Chapter</button>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="work-item">
                        <img src="https://images.unsplash.com/photo-1510672465386-77884ff7b713?w=100&h=100&fit=crop" alt="Neon Samurai" className="work-img" />
                        <div className="work-details">
                            <h4>Neon Sam...</h4>
                            <p>Last updated: 1 week ago • Vol. 4</p>
                        </div>
                        <div className="work-actions">
                            <button className="btn-icon">✏️</button>
                            <button className="btn-add-chapter">+ Chapter</button>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="work-item">
                        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&h=100&fit=crop" alt="Silent Echo" className="work-img" />
                        <div className="work-details">
                            <h4>Silent Ech...</h4>
                            <p>Last updated: 3 hours ago • Vol. 1</p>
                        </div>
                        <div className="work-actions">
                            <button className="btn-icon">✏️</button>
                            <button className="btn-add-chapter">+ Chapter</button>
                        </div>
                    </div>
                </div>

                <div className="section-header-c" style={{ marginTop: '30px' }}>
                    <h2>Fan Feedback</h2>
                </div>

                <div className="feedback-list">
                    <div className="feedback-item">
                        <div className="feedback-user">
                            <div className="fb-avatar c1"></div>
                            <span className="fb-name">MangaLover99</span>
                            <span className="fb-time">2h ago</span>
                        </div>
                        <p className="fb-text">"The plot twist in Chapter 42 was absolutely insane! Can't wait for more."</p>
                        <div className="fb-actions">
                            <button className="btn-text orange">REPLY</button>
                            <button className="btn-text gray">HIDE</button>
                        </div>
                    </div>
                    <div className="feedback-item">
                        <div className="feedback-user">
                            <div className="fb-avatar c2"></div>
                            <span className="fb-name">ArtGeek</span>
                            <span className="fb-time">5h ago</span>
                        </div>
                        <p className="fb-text">"Your shading technique has improved so much. This series is beautiful."</p>
                        <div className="fb-actions">
                            <button className="btn-text orange">REPLY</button>
                            <button className="btn-text gray">HIDE</button>
                        </div>
                    </div>
                    <div className="feedback-item">
                        <div className="feedback-user">
                            <div className="fb-avatar c3"></div>
                            <span className="fb-name">KuroFan_1</span>
                            <span className="fb-time">Yesterday</span>
                        </div>
                        <p className="fb-text">"Is there going to be a physical release soon? I want this on my shelf!"</p>
                        <div className="fb-actions">
                            <button className="btn-text orange">REPLY</button>
                            <button className="btn-text gray">HIDE</button>
                        </div>
                    </div>
                </div>

                <div style={{ height: '100px' }}></div>
            </div>

            <BottomNav type="creator" />
        </div>
    );
}

export default Dashboard;
