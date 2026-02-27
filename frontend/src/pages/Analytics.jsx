import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "../style.css";

function Analytics() {
    return (
        <div className="analytics-page">
            <header className="analytic-header">
                <Link to="/dashboard" className="btn-back">←</Link>
                <h2>Detailed Analytics</h2>
                <div className="dash-header-icons">
                    <span className="icon-search">🔍</span>
                    <span className="icon-download">⬇️</span>
                </div>
            </header>

            <div className="analytics-content">
                <div className="time-filters">
                    <button className="filter-btn">Last 7 Days</button>
                    <button className="filter-btn active">30 Days</button>
                    <button className="filter-btn">1 Year</button>
                </div>

                <div className="stats-grid-4">
                    <div className="stat-card-a">
                        <div className="stat-label-a">TOTAL READS</div>
                        <div className="stat-value-row">
                            <span className="stat-val">1.2M</span>
                            <span className="stat-trend positive">+12%</span>
                        </div>
                        <div className="progress-bar-mini"><div className="fill orange" style={{ width: '70%' }}></div></div>
                    </div>
                    <div className="stat-card-a">
                        <div className="stat-label-a">AVG READ TIME</div>
                        <div className="stat-value-row">
                            <span className="stat-val">8m 42s</span>
                            <span className="stat-trend negative">-2%</span>
                        </div>
                        <div className="progress-bar-mini"><div className="fill orange" style={{ width: '60%' }}></div></div>
                    </div>
                    <div className="stat-card-a">
                        <div className="stat-label-a">RETENTION</div>
                        <div className="stat-value-row">
                            <span className="stat-val">64%</span>
                            <span className="stat-trend positive">+5%</span>
                        </div>
                        <div className="progress-bar-mini"><div className="fill orange" style={{ width: '64%' }}></div></div>
                    </div>
                    <div className="stat-card-a">
                        <div className="stat-label-a">CONVERSION</div>
                        <div className="stat-value-row">
                            <span className="stat-val">12.5%</span>
                            <span className="stat-trend negative">-1.2%</span>
                        </div>
                        <div className="progress-bar-mini"><div className="fill orange" style={{ width: '30%' }}></div></div>
                    </div>
                </div>

                <div className="section-card">
                    <div className="section-header-a">
                        <h3>Growth Trends</h3>
                        <div className="legend">
                            <span className="leg-item"><span className="dot orange"></span> Views</span>
                            <span className="leg-item"><span className="dot dark-orange"></span> Likes</span>
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="chart-bar-group">
                            <div className="bar-bg"><div className="bar-fill" style={{ height: '40%' }}></div></div>
                            <span className="bar-label">WEEK 1</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="bar-bg"><div className="bar-fill" style={{ height: '60%' }}></div></div>
                            <span className="bar-label">WEEK 2</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="bar-bg"><div className="bar-fill" style={{ height: '80%' }}></div></div>
                            <span className="bar-label">WEEK 3</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="bar-bg"><div className="bar-fill" style={{ height: '75%' }}></div></div>
                            <span className="bar-label">WEEK 4</span>
                        </div>
                    </div>
                </div>

                <div className="section-card">
                    <h3>Top Performing Titles</h3>
                    <div className="top-titles-list">
                        <div className="title-item">
                            <img src="https://images.unsplash.com/photo-1542451313056-b7c8e626645f?w=100&h=100&fit=crop" alt="Shadow of the Ronin" />
                            <div className="title-info">
                                <h4>Shadow of the Ronin</h4>
                                <p>452k reads • +18%</p>
                            </div>
                            <div className="rank rank-1">#1</div>
                        </div>
                        <div className="title-item">
                            <img src="https://images.unsplash.com/photo-1510672465386-77884ff7b713?w=100&h=100&fit=crop" alt="Neon Tokyo 2099" />
                            <div className="title-info">
                                <h4>Neon Tokyo 2099</h4>
                                <p>310k reads • +5%</p>
                            </div>
                            <div className="rank rank-2">#2</div>
                        </div>
                        <div className="title-item">
                            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&h=100&fit=crop" alt="The Last Katana" />
                            <div className="title-info">
                                <h4>The Last Katana</h4>
                                <p>128k reads • -2%</p>
                            </div>
                            <div className="rank rank-3">#3</div>
                        </div>
                    </div>
                </div>

                <div className="section-card">
                    <h3>Audience Demographics</h3>
                    <div className="demo-list">
                        <div className="demo-item">
                            <div className="demo-header">
                                <span>Shonen Fans</span>
                                <span>58%</span>
                            </div>
                            <div className="progress-bar-mini"><div className="fill orange" style={{ width: '58%' }}></div></div>
                        </div>
                        <div className="demo-item">
                            <div className="demo-header">
                                <span>Seinen Fans</span>
                                <span>24%</span>
                            </div>
                            <div className="progress-bar-mini"><div className="fill orange" style={{ width: '24%' }}></div></div>
                        </div>
                        <div className="demo-item">
                            <div className="demo-header">
                                <span>Shojo Fans</span>
                                <span>12%</span>
                            </div>
                            <div className="progress-bar-mini"><div className="fill orange" style={{ width: '12%' }}></div></div>
                        </div>
                        <div className="demo-item">
                            <div className="demo-header">
                                <span>Others</span>
                                <span>6%</span>
                            </div>
                            <div className="progress-bar-mini"><div className="fill dark-orange" style={{ width: '6%' }}></div></div>
                        </div>
                    </div>
                </div>

                <div className="section-card">
                    <h3>Reader Engagement</h3>
                    <div className="engage-list">
                        <div className="engage-item">
                            <div className="engage-icon-box">💬</div>
                            <div className="engage-info">
                                <h4>24.5k</h4>
                                <p>COMMENTS</p>
                            </div>
                        </div>
                        <div className="engage-item">
                            <div className="engage-icon-box">🔗</div>
                            <div className="engage-info">
                                <h4>12.8k</h4>
                                <p>SHARES</p>
                            </div>
                        </div>
                        <div className="engage-item">
                            <div className="engage-icon-box">🔖</div>
                            <div className="engage-info">
                                <h4>89.2k</h4>
                                <p>BOOKMARKS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '100px' }}></div>
            </div>

            <BottomNav type="creator" />
        </div>
    );
}

export default Analytics;
