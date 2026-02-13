import { skillCategories } from "../data/skills";

function Registration() {
  return (
    <main>
      <header>
        <h1>SerbiSure Registration</h1>
      </header>
      
      <section>
        <form>
          {/* Key UI Elements from Proposal */}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          
          <label>User Type:</label>
          <select>
            <option>Homeowner</option>
            <option>Service Worker</option>
          </select>

          <label>Skill Category:</label>
          <select>
            {/* Dynamic Rendering of Array */}
            {skillCategories.map((skill, index) => (
              <option key={index} value={skill}>{skill}</option>
            ))}
          </select>

          <div>
            <label>Upload ID & TESDA Certificate</label>
            <input type="file" />
          </div>

          <button type="submit">Register</button>
        </form>
      </section>
      
      <footer>
        <p>© 2026 SerbiSure - Verified Home Services</p>
      </footer>
    </main>
  );
}

export default Registration;