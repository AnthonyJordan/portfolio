import About from "./About";
import ProjectPreview from "./ProjectPreview";
import Certifications from "./Certifications";
import "./Home.css";

function Home() {
  return (
    <div className="homeDiv">
      <About />
      <Certifications />
      <ProjectPreview />
    </div>
  );
}

export default Home;
