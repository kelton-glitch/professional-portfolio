import { PROJECTS } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">02 — Projects</div>
      <h2>Selected work</h2>
      <div className="section-divider" />

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}