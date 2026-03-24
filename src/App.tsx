import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

export default function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Nav onToggleTheme={toggleTheme} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}