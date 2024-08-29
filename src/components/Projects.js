import config from "../config";
import "./Projects.css";

function Projects() {
  const projects = config.projects.map((project) => {
    const screenShots = project.ssLocs.map((ssLoc, index) => {
      return (
        <img
          className="projectSS"
          key={"Project " + project.id + " screenshot " + index}
          src={ssLoc["ss" + index]}
          alt={"Project " + project.id + " screenshot " + index}
        />
      );
    });
    const githubLinks = project.github.map((link) => (
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    ));
    return (
      <div className="projectDiv" key={project.id} id={"project" + project.id}>
        <h2>{project.title}</h2>
        <div className="projectDesc">{project.description}</div>
        <div className="projectChallenges">{project.challenges}</div>
        <div className="projectTech">{project.tech}</div>
        <div className="projectSSDiv">{screenShots}</div>
        <div className="githubDiv">{githubLinks}</div>
      </div>
    );
  });
  return (
    <div className="projectPage">
      <h3 className="projectsIntro">Intro</h3>
      {projects}
    </div>
  );
}

export default Projects;
