import Hero from './components/Hero';
import Projects from './components/Projects';
import Badges from './components/Badges';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Projects />
      <Badges />
      <Footer />
    </div>
  );
}

export default App;

