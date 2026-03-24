import { STATS } from '../data';

export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <h2>Behind the code</h2>
      <div className="section-divider" />

      <div className="about-grid">
        {/* Photo */}
        <div className="about-img-wrap">
          <div className="about-avatar-placeholder">
            <div className="avatar-circle" />
            <span>Your Photo</span>
          </div>
        </div>

        {/* Text */}
        <div className="about-text">
          <p>
            Hi! I'm Elton — a full-stack developer with 5+ years of experience building
            products that sit at the intersection of great engineering and thoughtful design.
            I thrive in collaborative environments and love turning complex problems into
            elegant, maintainable solutions.
          </p>
          <p>
            My toolkit spans React, TypeScript, Node.js and cloud infrastructure, though I
            always pick the right tool for the job rather than the fashionable one. When I'm
            not coding, you'll find me sketching UI concepts or exploring generative art.
          </p>
          <p>Currently open to full-time roles and select freelance projects.</p>

          <div className="about-stats">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="stat-num">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}