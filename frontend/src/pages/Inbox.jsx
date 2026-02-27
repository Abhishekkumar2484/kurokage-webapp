import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "../style.css";

function Inbox() {
    return (
        <div className="inbox-page">
            <header className="inbox-header">
                <Link to="/dashboard" className="btn-back">←</Link>
                <h2>Messages</h2>
                <button className="btn-compose">📝</button>
            </header>

            <div className="inbox-search-container">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search creators & collaborators" />
                </div>
            </div>

            <div className="inbox-tabs">
                <button className="tab-btn active">All Chats</button>
                <button className="tab-btn">Requests</button>
                <button className="tab-btn">Groups</button>
            </div>

            <div className="inbox-list">
                {/* Chat 1 */}
                <div className="chat-item unread">
                    <div className="chat-avatar-wrapper">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Takeshi Inoue" className="chat-avatar" />
                        <span className="status-dot online"></span>
                    </div>
                    <div className="chat-content">
                        <div className="chat-top-row">
                            <h4 className="chat-name">Takeshi Inoue</h4>
                            <span className="chat-time unread-time">2m</span>
                        </div>
                        <p className="chat-preview unread-text">The sketch for Chapter 5 is ready! Check...</p>
                    </div>
                </div>

                {/* Chat 2 */}
                <div className="chat-item">
                    <div className="chat-avatar-wrapper">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Yuki Tanaka" className="chat-avatar" />
                    </div>
                    <div className="chat-content">
                        <div className="chat-top-row">
                            <h4 className="chat-name">Yuki Tanaka</h4>
                            <span className="chat-time">1h</span>
                        </div>
                        <p className="chat-preview"><span className="check-icon">✓✓</span> Sent a panel sketch</p>
                    </div>
                </div>

                {/* Chat 3 */}
                <div className="chat-item">
                    <div className="chat-avatar-wrapper">
                        <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop" alt="Hiroshi Sato" className="chat-avatar" />
                    </div>
                    <div className="chat-content">
                        <div className="chat-top-row">
                            <h4 className="chat-name">Hiroshi Sato (Editor)</h4>
                            <span className="chat-time">4h</span>
                        </div>
                        <p className="chat-preview">The layout looks great for the cover page.</p>
                    </div>
                </div>
            </div>

            <div className="compose-bar-wrapper">
                <div className="compose-bar">
                    <button className="compose-action-btn">⊕</button>
                    <button className="compose-action-btn">🖼️</button>
                    <input type="text" placeholder="Share a sketch..." className="compose-input" />
                    <button className="btn-send">➤</button>
                </div>
            </div>

            <BottomNav type="creator" />
        </div>
    );
}

export default Inbox;
