import { FOOTER_SOCIALS } from '../data';

export default function Footer() {
  return (
    <footer>
      <span>© 2025 elton.dev — Built with React &amp; TypeScript</span>
      <div className="footer-socials">
        {FOOTER_SOCIALS.map((s) => (
          <a key={s} href="#" className="footer-social">{s}</a>
        ))}
      </div>
    </footer>
  );
}