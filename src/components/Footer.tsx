import { FOOTER_SOCIALS } from '../data';

export default function Footer() {
  return (
    <footer>
      <span>© 2026 elton.dev — Built with React &amp; TypeScript</span>
      <div className="footer-socials">
        {FOOTER_SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}