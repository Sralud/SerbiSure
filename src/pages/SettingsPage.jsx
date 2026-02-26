import { useState } from "react";

function SettingsPage() {
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState("English");
    const [email, setEmail] = useState("user@example.com");
    const [password, setPassword] = useState("********");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <div className="page-wrapper" style={{ maxWidth: "700px", width: "100%" }}>
            <div className="glass-card" style={{ padding: "40px" }}>
                <h2 className="form-title">Settings</h2>
                <p className="form-subtitle">Update your account and app preferences</p>

                <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "25px" }}>

                    {/* Profile Picture Section */}
                    <div style={{ padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "12px" }}>
                        <h3 style={{ fontSize: "16px", marginBottom: "15px", color: "#fff" }}>Profile Picture</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "30px" }}>
                                👤
                            </div>
                            <button className="btn-primary" style={{ width: "auto", padding: "10px 20px" }}>
                                Change Picture
                            </button>
                        </div>
                    </div>

                    {/* Account Section */}
                    <div style={{ padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "12px" }}>
                        <h3 style={{ fontSize: "16px", marginBottom: "15px", color: "#fff" }}>Account Information</h3>
                        <div className="form-row" style={{ marginBottom: "15px" }}>
                            <label>Email Address</label>
                            <input type="email" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="form-row">
                            <label>New Password</label>
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter new password" />
                        </div>
                    </div>

                    {/* App Preferences */}
                    <div style={{ padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "12px" }}>
                        <h3 style={{ fontSize: "16px", marginBottom: "15px", color: "#fff" }}>App Preferences</h3>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                            <span>Appearance</span>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <span style={{ fontSize: "12px", color: darkMode ? "var(--accent)" : "var(--muted)" }}>{darkMode ? "Dark" : "Light"}</span>
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                    style={{ width: "40px", height: "20px", cursor: "pointer" }}
                                />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
                            <span>Language</span>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                style={{ width: "150px" }}
                            >
                                <option value="English">English</option>
                                <option value="Tagalog">Tagalog (Limited)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <button className="btn-primary" onClick={() => alert("Settings saved (locally)")}>
                        Save All Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;

