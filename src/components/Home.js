import About from "./About";
import ProjectPreview from "./ProjectPreview";
import Contact from "./Contact";
import Certifications from "./Certifications";
import "./Home.css";

function Home() {
  return (
    <div className="homeDiv">
      <About />
      <Certifications />
      <ProjectPreview />
      <Contact />
    </div>
  );
}

export default Home;
