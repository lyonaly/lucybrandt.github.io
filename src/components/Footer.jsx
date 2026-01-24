export default function Footer({ lang, footerRef, navigateToPrivacy }) {
    return (
        <footer ref={footerRef}>
            <div className="footer-content">
                <div className="footcontainer">
                    <h2>{lang === 'de' ? 'Kontakt & Impressum' : 'Contact & Imprint'}</h2>
                    <p>E-mail: Lucy.brandt.dev@gmail.com</p>
                    <p>Linkedin:
                        <a className="footer-link" href="https://www.linkedin.com/in/lucy-brandt-dev/" target="_blank" rel="noreferrer"> https://www.linkedin.com/in/lucy-brandt-dev/</a>
                    </p>
                    <p>{lang === 'de' ? 'Anschrift: ' : 'Address: '}Lucy Brandt, Luxemburger Allee 38, 45481 Mülheim an der Ruhr, Deutschland</p>
                    <p>{lang === 'de' ? 'Telefon: ' : 'Phone: '}+49 157 56313807</p>
                    <div className="footer-links">
                    <a href="#privacy" onClick={(e) => { e.preventDefault(); navigateToPrivacy(); }} className="dark-link">
                        {lang === 'de' ? 'Datenschutz' : 'Privacy Policy'}
                    </a>
                </div>
                </div>
                <p className="copyright">{lang === 'de' ? '© 2025 Lucy Brandt. Alle Rechte vorbehalten.' : '© 2025 Lucy Brandt. All rights reserved.'}</p>
            </div>
        </footer>
    );
}
