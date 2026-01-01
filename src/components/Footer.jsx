export default function Footer({ lang, footerRef }) {
    return (
        <footer ref={footerRef}>
            <div className="footer-content">
                <div className="footcontainer">
                    <h2>{lang === 'de' ? 'Kontakt' : 'Contact'}</h2>
                    <p>Email: Lucy.brandt.dev@gmail.com</p>
                    <p>Linkedin:
                        <a className="footer-link" href="https://www.linkedin.com/in/lucy-brandt-dev/" target="_blank" rel="noreferrer"> https://www.linkedin.com/in/lucy-brandt-dev/</a>
                    </p>
                </div>
                <p className="copyright">{lang === 'de' ? '© 2025 Lucy Brandt. Alle Rechte vorbehalten.' : '© 2025 Lucy Brandt. All rights reserved.'}</p>
            </div>
        </footer>
    );
}
