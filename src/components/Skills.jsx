export default function Skills({ lang, skillsRef }) {
    return (
        <section id="skills" className="skills" ref={skillsRef}>
            <div className="skillsContainer">   
                <h1 id="subheading" className="skills-header">
                    {lang === 'de' ? 'Fähigkeiten' : 'Skills'}
                </h1>
                <section className="skills-group">
                    <h3>{lang === 'de' ? 'Programmierung' : 'Programming'}</h3>
                    <div className="divider" />
                    <ul className="skills-list">
                        <li className="skills-item">
                            <img className="logos" src="java.png"/>
                            Java
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="python.png"/>
                            Python
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="javascript.png"/>
                            JavaScript
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="typescript.png"/>
                            TypeScript
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="sql.png"/>
                            SQL
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="react.png"/>
                            React
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="bootstrap.png"/>
                            Bootstrap
                        </li>
                    </ul>
                </section>

                <section className="skills-group">
                    <h3>Design & UI</h3>
                    <div className="divider" />
                    <ul className="skills-list">
                          <li className="skills-item">
                            <img className="logos" src="html.png"/>
                            HTML
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="css.png"/>
                            CSS
                        </li>
                        <li className="skills-item responsive-item">  
                            <img className="logos" src="rwd.png"/>  
                            Responsive Webdesign
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="figma.png"/>
                            Figma
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="photoshop.png"/>
                            Photoshop
                        </li>
                    </ul>
                </section>

                <section className="skills-group">
                    <h3>Tools & Data</h3>
                    <div className="divider" />
                    <ul className="skills-list">
                        <li className="skills-item">
                            <img className="logos" src="git.png"/>
                            Git
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="powerbi.png"/>
                            Power BI
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
}