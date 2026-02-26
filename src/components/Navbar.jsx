import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Navbar({ user, notifications, onLogout }) {
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState(false);

    const handleLogoutClick = () => {
        onLogout();
        navigate("/login");
    };


    return (
        <header className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">
                    SerbiSure
                </Link>
            </div>

            <nav className="navbar-links">
                {user.role === "admin" ? (
                    <>
                        <NavLink to="/admin" className="nav-link-item" end>Admin Panel</NavLink>
                        <NavLink to="/admin/analytics" className="nav-link-item">Analytics</NavLink>
                    </>
                ) : user.role === "homeowner" ? (
                    <>
                        <NavLink to="/dashboard" className="nav-link-item">Feed</NavLink>
                        <NavLink to="/feedback" className="nav-link-item">Feedback</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/dashboard" className="nav-link-item">Feed</NavLink>
                    </>
                )}
                <NavLink to="/profile" className="nav-link-item">Profile</NavLink>
                <NavLink to="/settings" className="nav-link-item">Settings</NavLink>
            </nav>

            <div className="navbar-actions">
                <div style={{ position: "relative" }}>
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="btn-icon"
                        title="Notifications"
                    >
                        <span>🔔</span>
                        {notifications.length > 0 && (
                            <span className="notification-badge">
                                {notifications.length}
                            </span>
                        )}
                    </button>

                    {showNotifications && (
                        <div style={{
                            position: "absolute",
                            right: "0",
                            top: "50px",
                            width: "300px",
                            background: "#1a1a2e",
                            border: "1px solid var(--card-border)",
                            borderRadius: "16px",
                            padding: "15px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                            zIndex: 1100,
                            backdropFilter: "blur(20px)"
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                <h4 style={{ margin: 0, fontSize: "13px", color: "#fff" }}>Recent Activity</h4>
                                <button className="btn-close" onClick={() => setShowNotifications(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px" }}>×</button>
                            </div>
                            <div style={{ maxHeight: "250px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
                                {notifications.length > 0 ? (
                                    notifications.slice().reverse().map(n => (
                                        <div key={n.id} style={{ fontSize: "12px", padding: "10px", background: "rgba(255,255,255,0.03)", borderRadius: "8px", color: "#a0a0c0" }}>
                                            {n.message}
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center" }}>No new notifications</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleLogoutClick}
                    className="nav-link-item"
                    style={{
                        background: "rgba(255, 77, 77, 0.1)",
                        border: "none",
                        color: "#ff4d4d",
                        cursor: "pointer",
                        marginLeft: "10px"
                    }}
                >
                    Sign Out
                </button>
            </div>
        </header>
    );
}

export default Navbar;
