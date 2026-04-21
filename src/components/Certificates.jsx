export default function Certificates({ lang, certificatesRef }) {
    const certificate = {
        title: {
            de: 'Meta Web Development Fundamentals',
            en: 'Meta Web Development Fundamentals',
        },
        description: {
            de: 'Durch die Spezialisierung in Web Development Fundamentals von Meta konnte ich meine IT-Kenntnisse gezielt erweitern. Insbesondere in den Bereichen HTML und CSS habe ich gelernt, über die Grundlagen hinaus komplexe, responsive Layouts und ansprechende Animationen für moderne Benutzeroberflächen umzusetzen. Darüber hinaus habe ich meine Fähigkeiten in der Python-Programmierung sowie der Back-End-Entwicklung vertieft und gelernt Datenbanken sowie professionelle Versionsverwaltung mit Git effizient in den Entwicklungsprozess zu integrieren.',
            en: 'Through Meta\'s Web Development Fundamentals specialization, I significantly expanded my IT skills. Beyond the fundamentals, I built strong practical skills in HTML and CSS, including responsive layouts and polished UI animations for modern user interfaces. I also deepened my knowledge of Python and back-end development, and learned how to integrate databases and professional version control with Git efficiently into real development workflows.',
        },
        verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/EEVK0BX9GMYF',
        image: 'metawebdev_certi.png',
    };

    return (
        <section id="certificates" className="certificates" ref={certificatesRef}>
            <div className="certificatesContainer">
                <h1 id="subheading" className="certificates-header">
                    {lang === 'de' ? 'Zertifikate' : 'Certificates'}
                </h1>
                <section className="certificates-group">
                    <div className="certificate-card">
                        <img className="certificate-item" src={certificate.image} alt={certificate.title[lang]} />

                        <div className="certificate-content">
                            <h2 className="certificate-title">{certificate.title[lang]}</h2>
                            <p className="certificate-description">{certificate.description[lang]}</p>
                            <button
                                className="verify-button"
                                onClick={() => window.open(certificate.verifyUrl, '_blank', 'noopener,noreferrer')}
                            >
                                {lang === 'de' ? 'Verifizieren' : 'Verify'}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}