import About from "./About";
import Contact from "./Contact";
import ProjectPreview from "./ProjectPreview";
import "./Home.css";

function Home() {
  return (
    <div className="homeDiv">
      <About />
      <ProjectPreview />
      <Contact />
    </div>
  );
}

export default Home;
