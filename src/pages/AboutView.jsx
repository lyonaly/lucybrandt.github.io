export default function AboutView({ lang, navigateHome }) {
    return (
        <main className="subpage">
            <button className="subpage-back" onClick={navigateHome}>← {lang === 'de' ? 'Zur Startseite' : 'Back to home'}</button>
            <section className="subpage-content about-page">
                <p className="subpage-eyebrow">{lang === 'de' ? 'Persönliches Profil' : 'Personal profile'}</p>
                <h1>{lang === 'de' ? 'Über mich' : 'About me'}</h1>
                <p className="subpage-intro">
                    {lang === 'de'
                        ? 'Ich verbinde Software Engineering mit meiner kreativen und vielseitigen Persönlichkeit. Hier bekommst du einen persönlichen Einblick in meine Charaktereigenschaften, Hobbys und Interessen.'
                        : 'I combine software engineering with my creative and versatile personality. Here you can get a personal insight into my character, hobbies, and interests.'}
                </p>
                <div className="about-topic-grid">
                    {(lang === 'de'
                        ? [
                            ['Hobbys', 'In meiner Freizeit gehe ich gerne tanzen oder entspanne unterwegs beim Lesen von Romantic Thrillern. Wenn ich zuhause bin, zocke ich jedoch gerne.'],
                            ['Was ich mag', 'Neben meiner großen Leidenschaft fürs Reisen und für Katzen kennt man mich im Büro vor allem für meine Liebe zu der Farbe Rosa.'],
                            ['Meine Freunde beschreiben mich', 'Meine Freunde beschreiben mich als fröhlich, unkompliziert und extrem leicht zu begeistern. Ich bringe eigentlich immer gute Laune mit, lache viel und bin für jeden Spaß zu haben.'],
                            ['Interessen', 'Neben meinen Hobbys interessiere ich mich für digitale Projekte, Gestaltung und neue Technologien. Es macht mir Spaß, Ideen auszuprobieren und ihnen eine eigene, sichtbare Form zu geben.'],
                        ]
                        : [
                            ['Hobbies', 'In my free time, I enjoy going dancing or relaxing while reading romantic thrillers when I am out and about. When I am at home, I enjoy gaming.'],
                            ['Things I like', 'Alongside my passion for travelling and cats, I am especially known at the office for my love of the color pink.'],
                            ['My friends would describe me as', 'My friends describe me as cheerful, easygoing, and extremely easy to excite. I usually bring a good mood with me, laugh a lot, and am always up for having fun.'],
                            ['Interests', 'Alongside my hobbies, I am interested in digital projects, design, and new technologies. I enjoy experimenting with ideas and giving them a form that can be seen and shared.'],
                        ]).map(([title, description]) => (
                            <article className="about-topic" key={title}>
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </article>
                        ))}
                </div>
            </section>
        </main>
    );
}
