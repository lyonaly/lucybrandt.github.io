export default function DetailsView({ lang, hideDetails }) {

    const UDE = {
        de: ['Individuelle Betreuung von Studierenden',
             'Förderung selbstständigen Arbeitens und Lernens, inkl. Strukturierung von Aufgaben',
             'Stärkung von Kommunikations-,  Moderations- und Problemlösungsfähigkeiten.'
            ],
        en: ['Individual support for students',
             'Fostering independent work and learning, including structuring tasks',
             'Strengthening communication, moderation and problem-solving skills.'
            ]
    };

    const JuniorUni = {
        de: ['Selbständige Konzeption und Durchführung von praxisorientierten Kursen (Kinder und Jugendliche 7 - 14 Jahre)',
             'Vermittlung technischer Inhalte an junge Lernende',
             'Planung und Durchführung praxisorientierter Workshops',
             'Aufbereitung komplexer technischer Konzepte in verständlicher Form',
             'Betreuung kleinerer Projektgruppen und Unterstützung bei technischen Problemen',
             'Problemlösung bei Software- und Hardwarefragen'
            ],
        en: ['Independent conception and implementation of practice-oriented courses (children and young people 7 - 14 years)',
             'Teaching technical content to young learners',
             'Planning and conducting practice-oriented workshops',
             'Preparation of complex technical concepts in an understandable form',
             'Supervision of small project groups and support with technical problems',
             'Problem solving for software and hardware issues'
            ]
    };

    const Klostermarkt = {
        de: ['Konzeption und Leitung von Programmier-Workshops mit LEGO Mindstorms EV3 Roboter (Kinder der ersten Klasse)',
             'Vermittlung grundlegender Programmierkonzepte und Förderung von logischem Denken sowie Problemlösungsfähigkeiten', 
             'Anleitung von Gruppenprojekten'
            ],
        en: ['Conception and management of programming workshops with LEGO Mindstorms EV3 robots (children of the first grade)', 
             'Teaching basic programming concepts and promoting logical thinking and problem-solving skills', 
             'Guidance of group projects'
            ]
    };

    return (
        <div className="details-page">
            <main>
                <section className="experience-detail">
                    <div className="top">
                        <button className="goback" onClick={hideDetails}>
                            <img src="arrow.png" className="arrow" alt="back" />
                        </button>
                        <h1 className="headingdet">{lang === 'de' ? 'Arbeitserfahrung' : 'Experiences'}</h1>
                    </div>
                    <ul className="worklist">
                        <li>
                            <h2>{lang === 'de' ? 'Tutorin: Universität Duisburg-Essen' : 'Tutor: University of Duisburg-Essen'}</h2>
                            <p>{lang === 'de' ? 'Oktober 2024 — Heute' : 'October 2024 — Today'}</p>
                            <ul>
                               {UDE[lang].map((item, index) => (
                                   <li key={index}>{item}</li>
                               ))}
                            </ul>
                        </li>

                        <li>
                            <h2>{lang === 'de' ? 'Dozentin: Junior-Uni Ruhr' : 'Lecturer: Junior-Uni Ruhr'}</h2>
                            <p>{lang === 'de' ? 'Januar 2022 — Januar 2026' : 'January 2022 — January 2026'}</p>
                            <ul>
                               {JuniorUni[lang].map((item, index) => (
                                   <li key={index}>{item}</li>
                               ))}
                            </ul>
                        </li>

                        <li>
                            <h2>{lang === 'de' ? 'Kursleitung: Grundschule Am Klostermarkt' : 'Course management: Klostermarkt Primary School'}</h2>
                            <p>{lang === 'de' ? '2021 — 2022' : '2021 — 2022'}</p>
                            <ul>
                               {Klostermarkt[lang].map((item, index) => (
                                   <li key={index}>{item}</li>
                               ))}
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}