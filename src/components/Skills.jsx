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
                            <img className="logos" src="/src/assets/java.png"/>
                            Java
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/python.png"/>
                            Python
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/javascript.png"/>
                            JavaScript
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/typescript.png"/>
                            TypeScript
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/sql.png"/>
                            SQL
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/react.png"/>
                            React
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/bootstrap.png"/>
                            Bootstrap
                        </li>
                    </ul>
                </section>

                <section className="skills-group">
                    <h3>Design & UI</h3>
                    <div className="divider" />
                    <ul className="skills-list">
                          <li className="skills-item">
                            <img className="logos" src="/src/assets/html.png"/>
                            HTML
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/css.png"/>
                            CSS
                        </li>
                        <li className="skills-item">  
                            <img className="logos" src="/src/assets/rwd.png"/>  
                            Responsive Webdesign
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/figma.png"/>
                            Figma
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/photoshop.png"/>
                            Photoshop
                        </li>
                    </ul>
                </section>

                <section className="skills-group">
                    <h3>Tools & Data</h3>
                    <div className="divider" />
                    <ul className="skills-list">
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/git.png"/>
                            Git
                        </li>
                        <li className="skills-item">
                            <img className="logos" src="/src/assets/powerbi.png"/>
                            Power BI
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
}