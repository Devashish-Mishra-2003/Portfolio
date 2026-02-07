import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
//import InProgress from "./sections/InProgress";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Certificates />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
