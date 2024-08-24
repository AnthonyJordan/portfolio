import "./ProjectCard.css";

function ProjectCard({ id, title, ssLocs, brief }) {
  const screenShots = ssLocs.map((ssLoc, index) => (
    <img
      className="projectPreviewSS"
      key={"Project " + id + " screenshot " + index}
      src={ssLoc["ss" + index]}
      alt={"Project " + id + " screenshot " + index}
    />
  ));
  return (
    <div className="projectCardDiv">
      <h3>{title}</h3>
      <p>{brief}</p>
      <div className="projectSSDiv">{screenShots}</div>
    </div>
  );
}

export default ProjectCard;
