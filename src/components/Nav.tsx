interface NavProps {
    onToggleTheme: () => void;
}

const NAV_LINKS = ['home','about','projects','skills','contact'];

export default function Nav({ onToggleTheme }: NavProps) {
    return (
        <nav>
            <div className="nav-logo">elton<span>.</span>dev</div>
            <ul className="nav-links">
                {NAV_LINKS.map((s) => (
                    <li key={s}>
                        <a href={`#${s}`}>{s}</a>
                    </li>
                ))}
            </ul>
            <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme" />
        </nav>);
}