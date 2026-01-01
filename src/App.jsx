import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainView from './pages/MainView';
import DetailsView from './pages/DetailsView';

function App() {
  const [lang, setLang] = useState('de');
  const [view, setView] = useState('main');

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  function toggleLang() {
    setLang(prev => (prev === 'de' ? 'en' : 'de'));
  }

  function showDetails() {
    setView('details');
  }

  function hideDetails() {
    setView('main');
  }

  function navigateToSection(targetId, e) {
    if (e) e.preventDefault();
    setView('main');
    setTimeout(() => {
      const map = { about: aboutRef, experience: experienceRef, skills: skillsRef, certificates: certificatesRef, contact: footerRef };
      const ref = map[targetId];
      if (ref && ref.current) {
        const offsetTop = ref.current.offsetTop - 150;
        window.scrollTo({ top: offsetTop });
      }
      else window.scrollTo({ top: 0 });
    }, 30);
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang={lang} toggleLang={toggleLang} navigateToSection={navigateToSection}/>
      <div style={{ flex: 1 }}>
        {view === 'main' ? (
          <MainView lang={lang} aboutRef={aboutRef} experienceRef={experienceRef} skillsRef={skillsRef} certificatesRef={certificatesRef} showDetails={() => setView('details')}/>
        ) : (
          <DetailsView lang={lang} hideDetails={() => setView('main')}/>
        )}
      </div>
      <Footer lang={lang} footerRef={footerRef} />
    </div>
  );
}

export default App;