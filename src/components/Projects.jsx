const projects = [
    {
        title: {
            de: 'Digitale Haarspange zur Anzeige von Emotionen',
            en: 'Digital Hair Clip for Displaying Emotions',
        },
        description: {
            de: 'Dieses Projekt befindet sich derzeit in Arbeit. Entwickelt wird eine digitale Haarspange, die Emotionen sichtbar machen und über eine passende visuelle Darstellung anzeigen soll.',
            en: 'This project is currently in progress. The goal is to develop a digital hair clip that makes emotions visible through a corresponding visual display. More details about the concept, technology, and implementation will follow as the project progresses.',
        },
        image: '/Hairclip.jpeg',
        imageAlt: {
            de: 'Digitale Haarspange zur Anzeige von Emotionen',
            en: 'Digital hair clip for displaying emotions',
        },
        status: {
            de: 'In Arbeit',
            en: 'In progress',
        },
    },
    {
        title: {
            de: 'SEP-Drive – Carsharing-App (Universitätsprojekt)',
            en: 'SEP-Drive – Carsharing App (University Project)',
        },
        description: {
            de: 'Konzeption des UI/UX-Designs sowie kollaborative Frontend-Implementierung einer Mitfahr-App zur automatisierten Routenplanung und Live-Fahrtverfolgung. Agile Umsetzung der Client-Seite im Team.',
            en: 'Designed the UI/UX and collaboratively implemented the frontend of a carpooling app for automated route planning and live trip tracking. Delivered the client side in an agile team.',
        },
        image: '/sep-drive.png',
        imageAlt: {
            de: 'Vorschau der SEP-Drive-Carsharing-App',
            en: 'Preview of the SEP-Drive carsharing app',
        },
    },
];

export default function Projects({ lang, projectsRef }) {
    return (
        <section id="projects" className="projects-section" ref={projectsRef}>
            <div className="projects-container">
                <h1>{lang === 'de' ? 'Projekte' : 'Projects'}</h1>
                <div className="project-grid">
                    {projects.map((project) => (
                        <article className={`project-card ${project.image ? '' : 'project-card--text-only'}`} key={project.title.de}>
                            {project.image && (
                                <div className="project-media">
                                    <img className="project-image" src={project.image} alt={project.imageAlt[lang]} />
                                </div>
                            )}
                            <div className="project-content">
                                {project.status && <p className="project-status">{project.status[lang]}</p>}
                                <h2>{project.title[lang]}</h2>
                                <p>{project.description[lang]}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
