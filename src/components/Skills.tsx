import { SKILLS, TOOLS } from '../data';
import SkillBar from './SkillBar';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">03 — Skills</div>
      <h2>What I work with</h2>
      <div className="section-divider" />

      <div className="skills-layout">
        {/* Frontend */}
        <div>
          <div className="skill-category-title">Frontend</div>
          {SKILLS.frontend.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>

        {/* Backend + Tools */}
        <div>
          <div className="skill-category-title">Backend &amp; Infra</div>
          {SKILLS.backend.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}

          <div className="skill-category-title" style={{ marginTop: '2rem' }}>
            Tools &amp; Ecosystem
          </div>
          <div className="tech-chips">
            {TOOLS.map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}