import { useState } from 'react';

export default function Experience({ lang, experienceRef }) {

    const [selectedJob, setSelectedJob] = useState('UDE');

    const jobs = {
        UDE: {
            title: {
                de: 'Tutorin: Universität Duisburg-Essen',
                en: 'Tutor: University of Duisburg-Essen'
            },
            period: {
                de: 'Oktober 2024 — Heute',
                en: 'October 2024 — Today'
            },
            tasks: {
                de: ['Individuelle Betreuung von Studierenden',
                     'Förderung selbstständigen Arbeitens und Lernens, inkl. Strukturierung von Aufgaben',
                     'Stärkung von Kommunikations-,  Moderations- und Problemlösungsfähigkeiten.'
                    ],
                en: ['Individual support for students',
                     'Fostering independent work and learning, including structuring tasks',
                     'Strengthening communication, moderation and problem-solving skills.'
                    ]
            }
        },
        JuniorUni: {
            title: {
                de: 'Dozentin: Junior-Uni Ruhr',
                en: 'Lecturer: Junior-Uni Ruhr'
            },
            period: {
                de: 'Januar 2022 — Januar 2026',
                en: 'January 2022 — January 2026'
            },
            tasks: {
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
            }
        },
        Klostermarkt: {
            title: {
                de: 'Kursleitung: Grundschule Am Klostermarkt',
                en: 'Instructor: Klostermarkt Primary School'
            },
            period: {
                de: '2021 — 2022',
                en: '2021 — 2022'
            },
            tasks: {
                de: ['Konzeption und Leitung von Programmier-Workshops mit LEGO Mindstorms EV3 Roboter (Kinder der ersten Klasse)',
                     'Vermittlung grundlegender Programmierkonzepte und Förderung von logischem Denken sowie Problemlösungsfähigkeiten', 
                     'Anleitung von Gruppenprojekten'
                    ],
                en: ['Conception and management of programming workshops with LEGO Mindstorms EV3 robots (children of the first grade)', 
                     'Teaching basic programming concepts and promoting logical thinking and problem-solving skills', 
                     'Guidance of group projects'
                    ]
            }
        }
    };

    return (
        <div className="details-page">
            <main>
                <section className="experience-detail" ref={experienceRef}>
                    <div className="top">
                        <h1 className="headingdet">{lang === 'de' ? 'Arbeitserfahrung' : 'Experiences'}</h1>
                    </div>
                    <ul className="worklist">
                        <li key="UDE">
                            <button onClick={() => setSelectedJob('UDE')} className={selectedJob === 'UDE' ? 'active' : ''}>
                                {lang === 'de' ? 'Universitäts Tutorin' : 'University Tutor'}
                            </button>
                        </li>
                        <li key="JuniorUni">
                            <button onClick={() => setSelectedJob('JuniorUni')} className={selectedJob === 'JuniorUni' ? 'active' : ''}>
                                {lang === 'de' ? '3D-Druck Dozentin' : '3D-Printing Lecturer'}
                            </button>
                        </li>
                        <li key="Klostermarkt">
                            <button onClick={() => setSelectedJob('Klostermarkt')} className={selectedJob === 'Klostermarkt' ? 'active' : ''}>
                                {lang === 'de' ? 'Robotik Kursleitung' : 'Robotics Instructor'}
                            </button>
                        </li>
                    </ul>

                    <div className="job-details">
                        <h3>{jobs[selectedJob].title[lang]}</h3>
                        <p className="period">{jobs[selectedJob].period[lang]}</p>
                        <ul className="tasks">
                            {selectedJob === 'UDE' && (
                                <>
                                    <li>{jobs.UDE.tasks[lang][0]}</li>
                                    <li>{jobs.UDE.tasks[lang][1]}</li>
                                    <li>{jobs.UDE.tasks[lang][2]}</li>
                                </>
                            )}
                            {selectedJob === 'JuniorUni' && (
                                <>
                                    <li>{jobs.JuniorUni.tasks[lang][0]}</li>
                                    <li>{jobs.JuniorUni.tasks[lang][1]}</li>
                                    <li>{jobs.JuniorUni.tasks[lang][2]}</li>
                                    <li>{jobs.JuniorUni.tasks[lang][3]}</li>
                                    <li>{jobs.JuniorUni.tasks[lang][4]}</li>
                                    <li>{jobs.JuniorUni.tasks[lang][5]}</li>
                                </>
                            )}
                            {selectedJob === 'Klostermarkt' && (
                                <>
                                    <li>{jobs.Klostermarkt.tasks[lang][0]}</li>
                                    <li>{jobs.Klostermarkt.tasks[lang][1]}</li>
                                    <li>{jobs.Klostermarkt.tasks[lang][2]}</li>
                                </>
                            )}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}