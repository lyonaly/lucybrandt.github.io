export default function Experience({ lang, experienceRef, showDetails }) {
	const expContent = {
		de: [
			'Arbeitserfahrung',
			'Tutorin: Universität Duisburg-Essen', 'Oktober 2024 — Heute',
			'Dozentin: Junior-Uni Ruhr ', 'Januar 2022 — Januar 2026',
			'Kursleitung: Grundschule Am Klostermarkt ', '2021 — 2022',
			'mehr infos'
		],
		en: [
			'Experiences',
			'Tutor: University of Duisburg-Essen', 'October 2024 — Today',
			'Lecturer: Junior-Uni Ruhr ', 'January 2022 — January 2026',
			'Course management: Klostermarkt Primary School ', '2021 — 2022',
			'more info'
		]
	};

	return (
		<section id="experience" className="experience" ref={experienceRef}>
			<article className="text-experience">
				<div className="expContainer">
					<h1 id="subheading" className="exp-item">{expContent[lang][0]}</h1>
					<ul className="exp-list">
						<li className="exp-item">
							<h3>{expContent[lang][1]}</h3>
							{expContent[lang][2]}
						</li>
						<li className="exp-item">
							<h3>{expContent[lang][3]}</h3>
							{expContent[lang][4]}
						</li>
						<li className="exp-item">
							<h3>{expContent[lang][5]}</h3>
							{expContent[lang][6]}
						</li>
					</ul>
				</div>
				<button className="exp-item" onClick={showDetails}>
					{lang === 'de' ? 'Mehr infos' : 'More info'}
				</button>
			</article>
		</section>
	);
}
