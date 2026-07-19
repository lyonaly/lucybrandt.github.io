export default function Experience({ lang, experienceRef }) {
    const jobs = [
        {
            icon: 'code-laptop.svg',
            featured: true,
            title: {
                de: 'Werkstudentin Web- und Softwareentwicklung',
                en: 'Working Student Web and Software Development',
            },
            organization: {
                de: 'CAND VISION GmbH',
                en: 'CAND VISION GmbH',
            },
            period: {
                de: 'Juni 2026 — Heute',
                en: 'June 2026 – Today',
            },
            description: {
                de: 'Neben der kontinuierlichen Konzeption, Gestaltung und Weiterentwicklung moderner Internetseiten entwerfe und setze ich maßgeschneiderte Softwarelösungen für komplexe Geschäftsprozesse um. Zudem bin ich verantwortlich für die Implementierung von Softwarelösungen, die den spezifischen Anforderungen des Unternehmens gerecht werden und die Effizienz der Arbeitsabläufe verbessern.',
                en: 'In addition to the continuous conception, design, and further development of modern websites, I design and implement customized software solutions for complex business processes. I am also responsible for implementing software solutions that meet the specific requirements of the company and improve the efficiency of workflows.',
            },
        },
        {
            icon: 'website.svg',
            featured: true,
            title: {
                de: 'Frontend Entwicklerin',
                en: 'Frontend Engineer',
            },
            organization: {
                de: 'Öko²',
                en: 'Öko²',
            },
            period: {
                de: 'Januar 2026 — Heute',
                en: 'January 2026 — Today',
            },
            description: {
                de: 'Als Lead-Frontendentwicklerin verantworte ich die technische Umsetzung für die Webseite <a href="https://www.Öko2.com" target="_blank" rel="noopener noreferrer">öko2.com</a>. Dabei handelt es sich um ein von der EBZ Business School gefördertes Systemmodell zur Dämmung von Gebäuden. In dieser Schlüsselposition trage ich die Hauptverantwortung für die Frontend-Implementierung und stelle durch kontinuierliche Performance-Optimierung sowie strikte Qualitätssicherung eine effiziente und sichere Anwendung sicher. ',
                en: 'As a lead frontend developer, I am responsible for the technical implementation of the website <a href="https://www.Öko2.com" target="_blank" rel="noopener noreferrer">öko2.com</a>. This is a system model for insulating buildings funded by the EBZ Business School. In this key position, I bear the primary responsibility for frontend implementation and ensure an efficient and secure application through continuous performance optimization and strict quality assurance.',
            },
        },
        {
            icon: 'Tutor.svg',
            title: {
                de: 'Tutorin',
                en: 'Tutor',
            },
            organization: {
                de: 'Universität Duisburg-Essen',
                en: 'University of Duisburg-Essen',
            },
            period: {
                de: 'Oktober 2024 —  April 2026',
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
                de: 'Mein Fokus lag auf der individuellen Betreuung und Förderung von Lernenden unterschiedlicher Altersgruppen. Ich verfüge über fundierte Erfahrung in der selbstständigen Konzeption und Durchführung praxisorientierter 3D-Druck Kursen. Dabei spezialisierte ich mich darauf, komplexe technische Inhalte verständlich aufzubereiten und jungen Zielgruppen zu vermitteln.',
                en: 'My focus has been on providing individualized support and guidance to learners of various age groups. I have extensive experience in independently designing and conducting hands-on 3D printing courses. In doing so, I have specialized in presenting complex technical concepts in an accessible way and conveying them to young audiences.'

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
            <div className="experience-heading-row">
                <h1 className="headingdet">{lang === 'de' ? 'Meine Arbeitserfahrung' : 'My experiences'}</h1>
                <a href="/CV_Brandt.pdf" download="CV_Brandt.pdf" className="experience-download-btn">
                    <svg className="experience-download-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1ZM5 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
                    </svg>
                    <span>{lang === 'de' ? 'Lebenslauf' : 'Resume'}</span>
                </a>
            </div>

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
                            <p className="experience-description" dangerouslySetInnerHTML={{ __html: job.description[lang] }}></p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}