import './App.css';
import Navbar from './Components/Navbar';
import Jacob from './Components/Jacob';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Work from './Components/Work';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="bg-neutral-800">
      <Navbar />
      <Jacob />
      <About />
      <Projects />
      <Education />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
