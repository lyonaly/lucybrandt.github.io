import '../styles/components/Heading.css';

export default function Heading({ lang }) {
    const intro = {
        de: 'Software Engineering Studentin und Frontend-Entwicklerin',
        en: 'Software engineering student and frontend developer'
    };

    const summary = {
        de: 'Willkommen auf meinem Portfolio',
        en: 'Welcome to my portfolio'
    };

    return (
        <section className="hero-heading" aria-label="Einleitung">
            <div className="hero-heading__content">
                <p className="hero-heading__eyebrow">{summary[lang]}</p>
                <h1 className="hero-heading__title">Lucy Brandt</h1>
                <p className="hero-heading__subtitle">{intro[lang]}</p>
            </div>
        </section>
    );
}
