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
    const className =
      Math.floor(project.id / 2) || project.id === 0
        ? "projectDiv style1"
        : "projectDiv style2";
    return (
      <div className={className} key={project.id} id={"project" + project.id}>
        <h2>{project.title}</h2>
        <div className="projectDesc">{project.description}</div>
        <h4>Challenges/Lessons Learned:</h4>
        <div className="projectChallenges">{project.challenges}</div>
        <h4>Technologies Used:</h4>
        <div className="projectTech">{project.tech}</div>
        <div className="projectSSDiv">{screenShots}</div>
        <div className="githubDiv">{githubLinks}</div>
      </div>
    );
  });
  return (
    <div className="projectPage">
      <div className="introDiv">
        <h3 className="projectsIntro">Intro</h3>
      </div>
      {projects}
    </div>
  );
}

export default Projects;
