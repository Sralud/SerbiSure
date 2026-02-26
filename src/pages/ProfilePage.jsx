import { useState } from "react";

function ProfilePage({ user, onUpdateProfile }) {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        about: user.about || "Hello! I am a " + (user.role === "worker" ? "Service Worker" : "Homeowner") + " on SerbiSure.",
        skills: user.skills || (user.role === "worker" ? "Plumbing, Electrical, Carpentry" : ""),
        location: user.location || "Manila, Philippines"
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateProfile({
            ...user,
            name: formData.name,
            email: formData.email,
            about: formData.about,
            skills: formData.skills,
            location: formData.location
        });
        setIsEditing(false);
    };

    return (
        <div className="page-wrapper" style={{ maxWidth: "800px", width: "100%" }}>
            <div className="glass-card" style={{ padding: "40px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                    <div>
                        <h2 className="form-title" style={{ margin: 0 }}>My Profile</h2>
                        <p className="form-subtitle">Personal information for the SerbiSure community</p>
                    </div>
                    {!isEditing && (
                        <button onClick={() => setIsEditing(true)} className="btn-primary" style={{ width: "auto", padding: "10px 20px" }}>
                            Edit Profile
                        </button>
                    )}
                </div>

                <div style={{ display: "flex", gap: "40px", flexDirection: window.innerWidth < 768 ? "column" : "row" }}>
                    {/* Left Column: Avatar & Role */}
                    <div style={{ flex: "0 0 200px", textAlign: "center" }}>
                        <div style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                            margin: "0 auto 20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "60px",
                            boxShadow: "0 10px 30px rgba(99, 140, 255, 0.3)"
                        }}>
                            👤
                        </div>
                        <span style={{
                            padding: "6px 15px",
                            borderRadius: "20px",
                            background: "rgba(99, 140, 255, 0.15)",
                            color: "var(--accent)",
                            fontSize: "12px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}>
                            {user.role === "worker" ? "Service Provider" : "Homeowner"}
                        </span>
                    </div>

                    {/* Right Column: Details */}
                    <div style={{ flex: 1 }}>
                        {isEditing ? (
                            <form onSubmit={handleSubmit} style={{ padding: 0, background: "none", border: "none", backdropFilter: "none", boxShadow: "none", gap: "15px" }}>
                                <div className="form-row">
                                    <label>Full Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <label>Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <label>Location</label>
                                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                                </div>
                                <div className="form-row">
                                    <label>About Me</label>
                                    <textarea name="about" value={formData.about} onChange={handleChange} rows="4" style={{ borderRadius: "10px", padding: "12px", background: "var(--input-bg)", color: "#fff", border: "1px solid var(--input-border)" }} />
                                </div>
                                {user.role === "worker" && (
                                    <div className="form-row">
                                        <label>Skills / Services Offered</label>
                                        <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. Plumbing, Electrical" />
                                    </div>
                                )}
                                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                    <button type="submit" className="btn-primary" style={{ flex: 1 }}>Save Changes</button>
                                    <button type="button" onClick={() => setIsEditing(false)} className="btn-primary" style={{ flex: 1, background: "rgba(255,255,255,0.05)", color: "#fff" }}>Cancel</button>
                                </div>
                            </form>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                                <div className="profile-section">
                                    <label style={{ display: "block", marginBottom: "5px" }}>Full Name</label>
                                    <p style={{ fontSize: "20px", fontWeight: "600", color: "#fff", margin: 0 }}>{user.name}</p>
                                </div>
                                <div className="profile-section">
                                    <label style={{ display: "block", marginBottom: "5px" }}>Email Address</label>
                                    <p style={{ fontSize: "16px", color: "#a0a0c0", margin: 0 }}>{user.email}</p>
                                </div>
                                <div className="profile-section">
                                    <label style={{ display: "block", marginBottom: "5px" }}>Location</label>
                                    <p style={{ fontSize: "16px", color: "#a0a0c0", margin: 0 }}>{formData.location}</p>
                                </div>
                                <div className="profile-section">
                                    <label style={{ display: "block", marginBottom: "5px" }}>About Me</label>
                                    <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#d0d0e0", margin: 0 }}>{formData.about}</p>
                                </div>
                                {user.role === "worker" && (
                                    <div className="profile-section">
                                        <label style={{ display: "block", marginBottom: "5px" }}>Skills & Services</label>
                                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "5px" }}>
                                            {formData.skills.split(",").map((skill, i) => (
                                                <span key={i} style={{ padding: "5px 12px", background: "rgba(255,255,255,0.05)", borderRadius: "15px", fontSize: "13px", color: "#fff" }}>
                                                    {skill.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;

