import { skillCategories } from "../data/skills";
import { appName, systemInfo, userRoles } from "../data/system";

function Registration() {
  return (
    <main className="page-wrapper">
      {/* Variable — rendered using template expression */}
      <header>
        <h1 className="hero-brand">{appName}</h1>
      </header>

      <section>
        <form>
          <h2 className="form-title">Registration</h2>
          {/* Object — accessing properties via template expression */}
          <p className="form-subtitle">Join {systemInfo.totalWorkers}+ verified workers in {systemInfo.region}</p>

          {/* Key UI Elements from Proposal */}
          <div className="form-row">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>

          <div className="form-row">
            <label>User Type:</label>
            <select>
              {/* Array — dynamically rendered using .map() */}
              {userRoles.map((role, index) => (
                <option key={index}>{role}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label>Skill Category:</label>
            <select>
              {/* Array — dynamically rendered using .map() */}
              {skillCategories.map((skill, index) => (
                <option key={index} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label>Upload ID &amp; TESDA Certificate</label>
            <div className="file-input">
              <input type="file" />
            </div>
          </div>

          <button type="submit" className="btn-primary">Register</button>
        </form>
      </section>

      {/* Object — accessing properties via template expression */}
      <footer>
        <p className="muted-footer" style={{ textAlign: "center" }}>
          © 2026 {systemInfo.name} — {systemInfo.tagline} | v{systemInfo.version}
        </p>
      </footer>
    </main>
  );
}

export default Registration;