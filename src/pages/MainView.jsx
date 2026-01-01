import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certificates from '../components/certificates';

export default function MainView({ lang, aboutRef, experienceRef, skillsRef, certificatesRef, showDetails }) {
    const heding = {
        de: 'Hi, ich bin',
        en: 'Hi, I am'
    };

    const texts = {
        de: "Ich bin 21 Jahre alt und studiere Software Engineering in Essen. Mich begeistert die Frontend-Entwicklung, da sie technisches Denken mit kreativem Gestalten verbindet, insbesondere die Umsetzung performanter, moderner und intuitiver Nutzeroberflächen. Auf dieser Seite erhältst du einen Einblick in meinen Werdegang sowie meine technischen Schwerpunkte.",
        en: "I'm 21 years old and studying software engineering in Essen. I'm particularly passionate about frontend development, as it combines technical thinking with creative design, especially the implementation of high-performance, modern, and intuitive user interfaces. On this page, you will find a detailed overview of my background as well as my technical focus."
    };

    return (
        <main>
            <section id="about" className="aboutme" ref={aboutRef}>
                <img src="/src/assets/photo.png" className="photo" alt="Lucy" />
                <article className="text-aboutme">
                    <h1 id="heading">{heding[lang]}</h1>
                    <h1>Lucy Brandt</h1>
                    <p id="description" className="descr">{texts[lang]}</p>
                </article>
            </section>
            <Experience lang={lang} experienceRef={experienceRef} showDetails={showDetails} />
            <Skills lang={lang} skillsRef={skillsRef} />
            <Certificates lang={lang}  certificatesRef={certificatesRef} />
        </main>
    );
}