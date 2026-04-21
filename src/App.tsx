import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import CursorGlow from './components/CursorGlow';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingStartExit = () => {
    setShowContent(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <CursorGlow />
      <Loading onStartExit={handleLoadingStartExit} onComplete={handleLoadingComplete} />
      <div className={`${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;