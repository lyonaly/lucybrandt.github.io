import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainView from './pages/MainView';
import PrivacyView from './pages/PrivacyView';
import './styles/pages/PrivacyView.css';

function App() {
  const [lang, setLang] = useState('de');
  const [view, setView] = useState('main');
  const [activeSection, setActiveSection] = useState('top');

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  useEffect(() => {
    if (view !== 'main') return;

    const sectionMap = [
      ['about', aboutRef],
      ['experience', experienceRef],
      ['skills', skillsRef],
      ['certificates', certificatesRef],
      ['contact', footerRef],
    ];

    const handleScrollPosition = () => {
      if (window.scrollY < 80) {
        setActiveSection('top');
        return;
      }

      const navbarHeight = document.querySelector('nav')?.offsetHeight ?? 80;
      const triggerY = navbarHeight + 28;
      let current = 'about';

      sectionMap.forEach(([id, ref]) => {
        const top = ref.current?.getBoundingClientRect()?.top;
        if (typeof top === 'number' && top <= triggerY) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScrollPosition();
    window.addEventListener('scroll', handleScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, [view, aboutRef, experienceRef, skillsRef, certificatesRef, footerRef]);

  function toggleLang() {
    setLang(prev => (prev === 'de' ? 'en' : 'de'));
  }

  function navigateToSection(targetId, e) {
    if (e) e.preventDefault();
    setView('main');
    setTimeout(() => {
      if (targetId === 'top') {
        setActiveSection('top');
        window.scrollTo({ top: 0 });
        return;
      }

      const map = { about: aboutRef, experience: experienceRef, skills: skillsRef, certificates: certificatesRef, contact: footerRef };
      const ref = map[targetId];
      if (ref && ref.current) {
        const offsets = {
          about: 30,
          experience: 150,
          skills: 150,
          certificates: 150,
          contact: 150,
        };
        const offsetTop = ref.current.offsetTop - (offsets[targetId] ?? 150);
        setActiveSection(targetId);
        window.scrollTo({ top: offsetTop });
      }
      else window.scrollTo({ top: 0 });
    }, 30);
  }

  function navigateToPrivacy() {
    setView('privacy');
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang={lang} toggleLang={toggleLang} navigateToSection={navigateToSection} activeSection={activeSection} />
      <div style={{ flex: 1 }}>
        {view === 'privacy' ? (
          <PrivacyView lang={lang} />
        ) : (
          <MainView lang={lang} aboutRef={aboutRef} experienceRef={experienceRef} skillsRef={skillsRef} certificatesRef={certificatesRef} showDetails={() => setView('details')} />
        )}
      </div>
      <Footer lang={lang} footerRef={footerRef} navigateToPrivacy={navigateToPrivacy} />
    </div>
  );
}

export default App;