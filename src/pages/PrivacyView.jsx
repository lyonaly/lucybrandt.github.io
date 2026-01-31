export default function PrivacyView({ lang }) {
    return (
        <div className="privacy-view">
            <div className="privacy-container">
                <h1>{lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</h1>
                
                <section>
                    <h2>{lang === 'de' ? '1. Datenschutz auf einen Blick' : '1. Data Protection at a Glance'}</h2>
                    <h3>{lang === 'de' ? 'Allgemeine Hinweise' : 'General Information'}</h3>
                    <p>
                        {lang === 'de' 
                            ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unter diesem Text aufgeführten Datenschutzerklärung.'
                            : 'The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data are all data with which you can be personally identified. For detailed information on the subject of data protection, please refer to privacy policy listed below this text.'}
                    </p>
                </section>

                <section>
                    <h2>{lang === 'de' ? '2. Datenerfassung auf dieser Website' : '2. Data Collection on this Website'}</h2>
                    <h3>{lang === 'de' ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?' : 'Who is responsible for data collection on this website?'}</h3>
                    <p>
                        {lang === 'de'
                            ? 'Verantwortlich für die Verarbeitung von Daten, die Sie mir freiwillig per E-Mail senden, bin ich, Lucy Brandt. Technische Daten wie IP-Adressen, Browsertyp oder Betriebssystem werden automatisch von GitHub Pages erfasst; auf diese Daten habe ich keinen direkten Zugriff. Für diese Daten ist GitHub als Anbieter verantwortlich.'
                            : 'I, Lucy Brandt, am responsible for processing data that you voluntarily send to me via email. Technical data such as IP addresses, browser type, or operating system is automatically collected by GitHub Pages; I have no direct access to this data. GitHub as the provider is responsible for this data.'}
                    </p>
                    
                    <h3>{lang === 'de' ? 'Wie erfassen wir Ihre Daten?' : 'How do we collect your data?'}</h3>
                    <p>
                        {lang === 'de'
                            ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie mir diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie per mail angeben. Es werden keine Kontaktformulare genutzt. Technische Daten werden automatisch durch GitHub Pages gespeichert (z. B. IP-Adresse, Browsertyp, Betriebssystem, Uhrzeit), auf die ich keinen direkten Zugriff habe. Diese Daten dienen ausschließlich der Sicherstellung des Betriebs der Website.'
                            : 'Your data is collected in two ways: first, by you providing it to me. This may include data you provide via email. No contact forms are used. Technical data is automatically stored by GitHub Pages (e.g., IP address, browser type, operating system, time), to which I have no direct access. This data is used solely to ensure the operation of the website.'}
                    </p>
                    <h3>{lang === 'de' ? 'Speicherdauer' : 'Storage Duration'}</h3>
                    <p>
                        {lang === 'de'
                            ? 'Ihre personenbezogenen Daten verbleiben bei mir, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht.'
                            : 'Your personal data will remain with me until the purpose for data processing ceases. If you make a legitimate request for deletion or revoke consent for data processing, your data will be deleted.'}
                    </p>
                </section>

                <section>
                    <h2>{lang === 'de' ? '3. Hosting' : '3. Hosting'}</h2>
                    <p>
                        {lang === 'de'
                            ? 'Diese Website wird extern auf GitHub Pages gehostet. Der Anbieter ist GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.'
                            : 'This website is hosted on GitHub Pages. The external hosting is carried out for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR). The provider is GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.'}
                    </p>
                </section>

                <section>
                    <h2>{lang === 'de' ? '4. Ihre Rechte' : '4. Your Rights'}</h2>
                    {lang === 'de' ? (
                        <>
                            <p>Sofern Sie mir per E-Mail personenbezogene Daten übermitteln, haben Sie jederzeit das Recht auf</p>
                            <ul className="privacy-list">
                                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                                <li>Berichtigung unrichtiger Daten</li>
                                <li>Löschung Ihrer Daten</li>
                                <li>Einschränkung der Verarbeitung</li>
                                <li>Widerruf erteilter Einwilligungen</li>
                            </ul>
                            <p>Anfragen richten Sie bitte per E-Mail an mich.</p>
                        </>
                    ) : (
                        <>
                            <p>If you provide me with personal data via email, you have the right at any time to:</p>
                            <ul className="privacy-list">
                                <li>Information about your stored personal data</li>
                                <li>Correction of incorrect data</li>
                                <li>Deletion of your data</li>
                                <li>Restriction of processing</li>
                                <li>Revocation of given consents</li>
                            </ul>
                            <p>Please direct requests via email to me.</p>
                        </>
                    )}
                </section>

                <section>
                    <h2>{lang === 'de' ? '5. Kontakt' : '5. Contact'}</h2>
                    <p>
                        {lang === 'de'
                            ? 'Bei Fragen zum Datenschutz können Sie sich jederzeit an mich wenden. Die Kontaktdaten finden Sie im Impressum.'
                            : 'If you have any questions about data protection, you can contact me at any time. The contact details can be found in the imprint.'}
                    </p>
                    <p>Lucy Brandt<br />
                    E-Mail: Lucy.brandt.dev@gmail.com</p>
                </section>
            </div>
        </div>
    );
}
