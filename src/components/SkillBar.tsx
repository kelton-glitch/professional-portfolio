import { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../data';

type SkillBarProps = typeof SKILLS.frontend[number];

export default function SkillBar({ name, pct }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: filled ? `${pct}%` : '0%' }} />
      </div>
    </div>
  );
}