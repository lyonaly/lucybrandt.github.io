import { useState } from 'react';

export default function Navbar({ lang, toggleLang, navigateToSection, activeSection }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionIds = ['about', 'experience', 'skills', 'projects', 'certificates', 'contact'];
    const resumeFile = lang === 'de' ? 'Lebenslauf_Brandt.pdf' : 'CV_Brandt.pdf';

    const navContent = {
        de: [
            { full: 'Über mich', short: 'Über' },
            { full: 'Arbeitserfahrung', short: 'Erfahrung' },
            { full: 'Skills', short: 'Skills' },
            { full: 'Projekte', short: 'Projekte' },
            { full: 'Zertifikate', short: 'Zertifikate' },
            { full: 'Kontakt', short: 'Kontakt' },
        ],
        en: [
            { full: 'About me', short: 'About' },
            { full: 'Experiences', short: 'Work' },
            { full: 'Skills', short: 'Skills' },
            { full: 'Projects', short: 'Projects' },
            { full: 'Certificates', short: 'Certs' },
            { full: 'Contact', short: 'Contact' },
        ],
    };

    const handleNavigation = (section, event) => {
        navigateToSection(section, event);
        setMenuOpen(false);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="#top" onClick={(e) => navigateToSection('top', e)}>&lt;Lucy Brandt&gt;</a>
                </div>
                <div className="navbar-actions">
                    <button
                        className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                    <button onClick={toggleLang} aria-label="Toggle language" className="language-toggle">
                        <img id="lang-switch" src={lang === 'en' ? 'german.svg' : 'english.svg'} className="flag" alt="flag" />
                    </button>
                </div>
                <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
                    {navContent[lang].map((label, i) => (
                        <li key={i}>
                            <a href={`#${sectionIds[i]}`}
                                onClick={(e) => handleNavigation(sectionIds[i], e)}
                                className={activeSection === sectionIds[i] ? 'active' : ''}>
                                <span className="nav-label nav-label--full">{label.full}</span>
                                <span className="nav-label nav-label--short">{label.short}</span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href={`/${resumeFile}`} download={resumeFile} className="cv-download">
                            <svg className="cv-download__icon" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1ZM5 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
                            </svg>
                            <span>{lang === 'de' ? 'Lebenslauf' : 'Resume'}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}