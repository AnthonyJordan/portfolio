import "./ProjectCard.css";

function ProjectCard({ id, ssLocs, brief }) {
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
      <p>{brief}</p>
      <div className="projectSSDiv">{screenShots}</div>
    </div>
  );
}

export default ProjectCard;
