export default function Certificates({ lang, certificatesRef }) {
    return (
        <section id="certificates" className="certificates" ref={certificatesRef}>
            <div className="certificatesContainer">   
                <h1 id="subheading" className="certificates-header">
                    {lang === 'de' ? 'Zertifikate' : 'Certificates'}
                </h1>
                <section className="certificates-group">
                    <div className="certificate1">
                        <img className="certificate-item" src="/src/assets/metawebdev_certi.png" alt="Certificate 1"/>
                        <button className="verify-button" onClick={() =>window.open('https://www.coursera.org/account/accomplishments/specialization/EEVK0BX9GMYF') }>
                            {lang === 'de' ? 'Verifizieren' : 'Verify'}
                        </button>
                    </div>
                </section>
            </div>
        </section>
    );
}