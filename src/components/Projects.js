import config from "../config";
import { useState } from "react";
import "./Projects.css";
import ImageModal from "./ImageModal";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSelection, setImageSelection] = useState("");
  function onImageClick(image) {
    setImageSelection({ image: image });
    setModalOpen(true);
  }
  let ImageModalHolder = modalOpen ? (
    <ImageModal
      description={imageSelection.src}
      src={imageSelection.image}
      closeModal={() => setModalOpen(false)}
    />
  ) : null;
  const projects = config.projects.map((project) => {
    const screenShots = project.ssLocs.map((ssLoc, index) => {
      return (
        <img
          className="projectSS"
          key={"Project " + project.id + " screenshot " + index}
          src={ssLoc["ss" + index]}
          alt={"Project " + project.id + " screenshot " + index}
          onClick={() => onImageClick(ssLoc["ss" + index])}
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
        <p className="projectsIntro">{config.projectsIntro}</p>
      </div>
      {projects}
      {ImageModalHolder}
    </div>
  );
}

export default Projects;
