import "./ProjectPreview.css";
import config from "../config";
import ProjectCard from "./ProjectCard";

function ProjectPreview() {
  const projects = config.projects;

  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.id}
      id={project.id}
      ssLocs={project.ssLocs}
      brief={project.brief}
      title={project.title}
    />
  ));
  return (
    <div className="projectPreviewDiv">
      <div className="carousel">
        <div className="carousel-track">{projectCards}</div>
      </div>
    </div>
  );
}

export default ProjectPreview;
