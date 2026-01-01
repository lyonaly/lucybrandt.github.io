export default function Navbar({ lang, toggleLang, navigateToSection }) {
    const navContent = {
        de: ['Über mich', 'Arbeitserfahrung', 'Skills', 'Zertifikate', 'Kontakt'],
        en: ['About me', 'Experiences', 'Skills', 'Certificates', 'Contact']
    };

    const sectionIds = ['about', 'experience', 'skills', 'certificates', 'contact'];

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="#about" onClick={(e) => navigateToSection('about', e)}>&lt;Lucy Brandt&gt;</a>
                </div>
                <ul className="nav-links">
                    {navContent[lang].map((label, i) => (
                        <li key={i}>
                            <a href={`#${['about', 'experience', 'skills', 'certificates', 'contact'][i]}`}
                                onClick={(e) => navigateToSection(['about', 'experience', 'skills', 'certificates', 'contact'][i], e)}>
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button onClick={toggleLang} aria-label="Toggle language">
                            <img id="lang-switch" src={lang === 'en' ? '/src/assets/german.svg' : '/src/assets/english.svg'} className="flag" alt="flag"/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}