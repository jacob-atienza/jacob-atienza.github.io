import "./App.css";
import Navbar from "./Components/Navbar";
import Jacob from "./Components/Jacob";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div className="bg-neutral-800">
      <Analytics />
      <Navbar />
      <Jacob />
      <About />
      <Work />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
