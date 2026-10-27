import Experiences from '../components/Experiences';

export default function ExperienceHistoryView({ lang, navigateHome }) {
    return (
        <main className="history-page">
            <button className="subpage-back" onClick={navigateHome}>← {lang === 'de' ? 'Zur Startseite' : 'Back to home'}</button>
            <Experiences lang={lang} showAll />
        </main>
    );
}
