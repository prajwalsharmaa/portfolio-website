import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Showcase />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;