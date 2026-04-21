export default function Navbar({ lang, toggleLang, navigateToSection, activeSection }) {
    const sectionIds = ['about', 'experience', 'skills', 'certificates', 'contact'];

    const navContent = {
        de: [
            { full: 'Über mich', short: 'Über' },
            { full: 'Arbeitserfahrung', short: 'Erfahrung' },
            { full: 'Skills', short: 'Skills' },
            { full: 'Zertifikate', short: 'Zertifikate' },
            { full: 'Kontakt', short: 'Kontakt' },
        ],
        en: [
            { full: 'About me', short: 'About' },
            { full: 'Experiences', short: 'Work' },
            { full: 'Skills', short: 'Skills' },
            { full: 'Certificates', short: 'Certs' },
            { full: 'Contact', short: 'Contact' },
        ],
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="#top" onClick={(e) => navigateToSection('top', e)}>&lt;Lucy Brandt&gt;</a>
                </div>
                <ul className="nav-links">
                    {navContent[lang].map((label, i) => (
                        <li key={i}>
                            <a href={`#${sectionIds[i]}`}
                                onClick={(e) => navigateToSection(sectionIds[i], e)}
                                className={activeSection === sectionIds[i] ? 'active' : ''}>
                                <span className="nav-label nav-label--full">{label.full}</span>
                                <span className="nav-label nav-label--short">{label.short}</span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <button onClick={toggleLang} aria-label="Toggle language">
                            <img id="lang-switch" src={lang === 'en' ? 'german.svg' : 'english.svg'} className="flag" alt="flag" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}