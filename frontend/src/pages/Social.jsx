import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "../style.css";

function Social() {
    return (
        <div className="social-page">
            <header className="analytic-header">
                <Link to="/dashboard" className="btn-back">←</Link>
                <h2>Audience Feedback</h2>
                <div className="dash-header-icons">
                    <span className="icon-bell">🔔</span>
                    <div className="avatar sm-avatar">👤</div>
                </div>
            </header>

            <div className="social-content">
                <div className="social-stats-grid">
                    <div className="stat-card-s">
                        <div className="stat-header">
                            <span className="stat-title">Total Feedback</span>
                            <span className="stat-icon orange">💬</span>
                        </div>
                        <div className="stat-value-c">1.2k</div>
                        <div className="stat-trend positive">↗ +12% this week</div>
                    </div>

                    <div className="stat-card-s">
                        <div className="stat-header">
                            <span className="stat-title">Positive Ratio</span>
                            <span className="stat-icon green">😊</span>
                        </div>
                        <div className="stat-value-c green-text">85%</div>
                        <div className="stat-trend positive">↑ +5.2%</div>
                    </div>

                    <div className="stat-card-s">
                        <div className="stat-header">
                            <span className="stat-title">Response Rate</span>
                            <span className="stat-icon orange">⚡</span>
                        </div>
                        <div className="stat-value-c orange-text">64%</div>
                        <div className="stat-trend neutral">Avg 2h response time</div>
                    </div>
                </div>

                <div className="section-header-c social-section">
                    <h2>Recent Comments</h2>
                    <Link to="/comments" className="view-all-c">View All ›</Link>
                </div>

                <div className="comments-list">
                    {/* Comment 1 */}
                    <div className="feedback-card">
                        <div className="feedback-user">
                            <div className="fb-avatar" style={{ background: '#fde68a' }}></div>
                            <div className="fb-user-info">
                                <span className="fb-name">ShadowNinja99</span>
                                <span className="fb-time">Ch. 42: The Final Stand • 2h ago</span>
                            </div>
                            <div className="stars">★★★★★</div>
                        </div>
                        <p className="fb-text">
                            The art in the latest spread was absolutely breathtaking! The way the ink flows on the panel with the dragon is pure genius. Can't wait for the next volume!
                        </p>
                        <div className="fb-actions-row">
                            <button className="btn-orange-solid">Reply</button>
                            <button className="btn-icon">👁️‍🗨️</button>
                            <button className="btn-icon">♥</button>
                        </div>
                    </div>

                    {/* Comment 2 */}
                    <div className="feedback-card">
                        <div className="feedback-user">
                            <div className="fb-avatar" style={{ background: '#fed7aa' }}></div>
                            <div className="fb-user-info">
                                <span className="fb-name">MangaReader_X</span>
                                <span className="fb-time">Ch. 41: Calm Before • 5h ago</span>
                            </div>
                            <div className="stars">★★★★☆</div>
                        </div>
                        <p className="fb-text">
                            Pacing was a bit slow in this chapter compared to the last arc. Hope the action picks up soon. Still loving the character development though!
                        </p>
                        <div className="fb-actions-row">
                            <button className="btn-orange-solid">Reply</button>
                            <button className="btn-icon">👁️‍🗨️</button>
                            <button className="btn-icon">♥</button>
                        </div>
                        <div className="reply-box">
                            <span className="reply-label">Your Reply:</span>
                            <p className="reply-text">Thanks for the feedback! Ch. 43 is going to be packed with action, I promise!</p>
                        </div>
                    </div>
                </div>

                <div className="section-card sentiment-card">
                    <div className="sentiment-header">
                        <span className="sentiment-icon">📊</span>
                        <h2>Reader Sentiment</h2>
                    </div>

                    <div className="sentiment-bars">
                        <div className="sent-row">
                            <div className="sent-labels"><span>POSITIVE</span><span className="sent-val green-text">85%</span></div>
                            <div className="progress-bar-mini"><div className="fill" style={{ width: '85%', background: '#10b981' }}></div></div>
                        </div>
                        <div className="sent-row">
                            <div className="sent-labels"><span>NEUTRAL</span><span className="sent-val">10%</span></div>
                            <div className="progress-bar-mini"><div className="fill" style={{ width: '10%', background: '#94a3b8' }}></div></div>
                        </div>
                        <div className="sent-row">
                            <div className="sent-labels"><span>NEGATIVE</span><span className="sent-val red-text">5%</span></div>
                            <div className="progress-bar-mini"><div className="fill" style={{ width: '5%', background: '#ef4444' }}></div></div>
                        </div>
                    </div>
                    <p className="sentiment-footer">BASED ON LAST 3,241 INTERACTIONS</p>
                </div>

                <div className="section-card reviewers-card">
                    <div className="sentiment-header">
                        <span className="sentiment-icon">🏆</span>
                        <h2>Top Reviewers</h2>
                    </div>
                    <div className="reviewers-list">
                        <div className="reviewer-item">
                            <div className="rev-avatar">A</div>
                            <div className="rev-info">
                                <span className="rev-name">Aoi_Sora</span>
                                <span className="rev-badge">LEGENDARY CRITIC</span>
                            </div>
                            <span className="rev-count">142 reviews</span>
                        </div>
                        <div className="reviewer-item">
                            <div className="rev-avatar" style={{ background: '#064e3b' }}>J</div>
                            <div className="rev-info">
                                <span className="rev-name">Jin_K</span>
                                <span className="rev-badge">VERIFIED FAN</span>
                            </div>
                            <span className="rev-count">98 reviews</span>
                        </div>
                        <div className="reviewer-item">
                            <div className="rev-avatar" style={{ background: '#1e3a8a' }}>T</div>
                            <div className="rev-info">
                                <span className="rev-name">Tanaka_San</span>
                                <span className="rev-badge">EARLY ADOPTER</span>
                            </div>
                            <span className="rev-count">75 reviews</span>
                        </div>
                    </div>
                </div>

                <div style={{ height: '100px' }}></div>
            </div>

            <BottomNav type="creator" />
        </div>
    );
}

export default Social;
