import About from "./About";
import ProjectPreview from "./ProjectPreview";
import Contact from "./Contact";
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
