import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Experiences from '../components/Experiences';
import Heading from '../components/Heading';
import Projects from '../components/Projects';

export default function MainView({ lang, aboutRef, experienceRef, skillsRef, projectsRef, certificatesRef, showAbout, showExperienceHistory }) {

    const birthDate = new Date(2004, 3);

    const getAge = date => {
        const today = new Date();
        let age = today.getFullYear() - date.getFullYear();
        if (today.getMonth() < date.getMonth()) age--;
        return age;
    };

    const age = getAge(birthDate);

    const heading = {
        de: 'Lass uns gemeinsam\n etwas erschaffen',
        en: 'Let’s create something together'
    };

    const texts = {
        de: `Ich bin ${age} Jahre alt und studiere Software Engineering in Essen. Mich begeistert die Frontend-Entwicklung, da sie technisches Denken mit kreativem Gestalten verbindet, insbesondere die Umsetzung performanter, moderner und intuitiver Nutzeroberflächen. Auf dieser Seite erfährst du mehr über mich und meine technischen Schwerpunkte.`,
        en: `I am ${age} years old and currently studying software engineering in Essen. I am passionate about frontend development because it combines technical thinking with creative design, especially the implementation of performant, modern, and intuitive user interfaces. On this site, you can learn more about me and my technical focus areas.`
    };

    return (
        <main>
            <section className="hero-zone">
                <Heading lang={lang} />
            </section>
            <section id="about" className="aboutme" ref={aboutRef}>
                <img src="photo.png" className="photo" alt="Lucy" />
                <article className="text-aboutme">
                    <h1 id="heading">{heading[lang]}</h1>
                    <p id="description" className="descr">{texts[lang]}</p>
                    <button className="section-button about-button" onClick={showAbout}>
                        {lang === 'de' ? 'Mehr über mich erfahren' : 'Learn more about me'}
                    </button>
                </article>
            </section>
            <Experiences lang={lang} experienceRef={experienceRef} showExperienceHistory={showExperienceHistory} />
            <Skills lang={lang} skillsRef={skillsRef} />
            <Projects lang={lang} projectsRef={projectsRef} />
            <Certificates lang={lang} certificatesRef={certificatesRef} />
        </main>
    );
}