export default function Experience({ lang, experienceRef }) {
    const jobs = [
        {
            icon: 'Frontend.svg',
            featured: true,
            title: {
                de: 'Frontend Entwicklerin',
                en: 'Frontend Engineer',
            },
            organization: {
                de: '',
                en: '',
            },
            period: {
                de: 'Januar 2026 — Heute',
                en: 'January 2026 — Today',
            },
            description: {
                de: 'Als ehrenamtliche Lead-Frontendentwicklerin verantworte ich die technische Umsetzung eines durch die EBZ Business School geförderten Systemmodells zur energetischen Sanierung. In dieser Schlüsselposition trage ich die Hauptverantwortung für die Frontend-Implementierung und stelle durch kontinuierliche Performance-Optimierung sowie strikte Qualitätssicherung eine effiziente und skalierbare Anwendung sicher. ',
                en: 'As a volunteer lead frontend engineer, I am responsible for implementing a system model funded by the EBZ Business School for energy-efficient refurbishment. In this key role, I lead frontend implementation and ensure an efficient, scalable application through continuous performance optimization and strict quality assurance.',
            },
        },
        {
            icon: 'Tutor.svg',
            title: {
                de: 'Tutorin',
                en: 'Tutor',
            },
            organization: {
                de: 'Universitaet Duisburg-Essen',
                en: 'University of Duisburg-Essen',
            },
            period: {
                de: 'Oktober 2024 -  April 2026',
                en: 'October 2024 — April 2026',
            },
            description: {
                de: 'Der Schwerpunkt meiner Arbeit lag in der individuellen Betreuung von Studierenden. Ich förderte gezielt selbststaendiges Arbeiten und Lernen sowie die Strukturierung komplexer Aufgaben. Zudem stärke ich Kommunikations-, Moderations- und Problemlösungsfähigkeiten.',
                en: 'My focus is the individual support of students. I specifically foster independent work and learning as well as structuring complex tasks. I also strengthen communication, moderation, and problem-solving skills.',
            },
        },
        {
            icon: 'cube.svg',
            title: {
                de: 'Dozentin',
                en: 'Lecturer',
            },
            organization: {
                de: 'Junior-Uni Ruhr',
                en: 'Junior-Uni Ruhr',
            },
            period: {
                de: 'April 2022 — Januar 2026',
                en: 'April 2022 — January 2026',
            },
            description: {
                de: 'Mein Fokus lag auf der individuellen Betreuung und Förderung von Lernenden unterschiedlicher Altersgruppen. Ich verfüge über fundierte Erfahrung in der selbstständigen Konzeption und Durchführung praxisorientierter Kurse. Dabei spezialisierte ich mich darauf, komplexe technische Inhalte verständlich aufzubereiten und jungen Zielgruppen zu vermitteln.',
                en: 'My focus is the individual support and promotion of learners of different age groups. I have extensive experience in independently designing and conducting practice-oriented courses. I specialize in preparing complex technical content in an understandable way and conveying it to young audiences.',
            }
        },
        {
            icon: 'robot.svg',
            title: {
                de: 'Kursleitung für Programmierung',
                en: 'Programming Course Instructor',
            },
            organization: {
                de: 'Grundschule am Klostermarkt',
                en: 'Klostermarkt Primary School',
            },
            period: {
                de: '2021 — 2022',
                en: '2021 — 2022',
            },
            description: {
                de: 'Ich konzipierte und leitete Programmier-Workshops mit LEGO Mindstorms EV3 Robotern für Grundschulkinder. Dabei vermittelte ich grundlegende Programmierkonzepte, förderte logisches Denken und begleitete Gruppenprojekte praxisnah.',
                en: 'Designed and led programming workshops using LEGO Mindstorms EV3 for primary school children. I taught fundamental programming concepts, fostered logical thinking, and guided group projects in a practical manner.',
            },
        },
    ];

    return (
        <section className="experience-detail" ref={experienceRef}>
            <h1 className="headingdet">{lang === 'de' ? 'Meine Arbeitserfahrung' : 'My experiences'}</h1>

            <div className="experience-timeline">
                {jobs.map((job) => (
                    <article key={job.title.de} className={`experience-row ${job.featured ? 'is-featured' : ''}`}>
                        <div className="experience-card">
                            <header className="experience-header">
                                <div className="experience-title-wrap">
                                    <h2 className="experience-title">
                                        {job.title[lang]}
                                        <img src={job.icon} alt="" aria-hidden="true" className="experience-icon" />
                                    </h2>
                                    {job.organization[lang] && <p className="experience-org">{job.organization[lang]}</p>}
                                </div>
                                <p className="experience-period">{job.period[lang]}</p>
                            </header>
                            <p className="experience-description">{job.description[lang]}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}