import type { PROJECTS } from '../data';

type ProjectCardProps = typeof PROJECTS[number];

export default function ProjectCard({ emoji, tag, title, desc, links }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-thumb">
        <div className="project-thumb-gradient" />
        <span style={{ fontSize: '2.2rem' }}>{emoji}</span>
      </div>

      <span className="project-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="project-links">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="project-link">
            {l.label} →
          </a>
        ))}
      </div>
    </div>
  );
}