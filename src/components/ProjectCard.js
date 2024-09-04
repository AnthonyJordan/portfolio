import "./ProjectCard.css";
import { HashLink as Link } from "react-router-hash-link";

function ProjectCard({ id, title, ssLocs, brief }) {
  const screenShots = ssLocs.map((ssLoc, index) => {
    if (index < 3) {
      return (
        <img
          className="projectPreviewSS"
          key={"Project " + id + " screenshot " + index}
          src={ssLoc["ss" + index]}
          alt={"Project " + id + " screenshot " + index}
        />
      );
    }
    return null;
  });
  return (
    <div className="projectCardDiv">
      <h3>{title}</h3>
      <p>{brief}</p>
      <Link className="projectLink" smooth to={`/projects#project${id}`}>
        <div className="projectCardSSDiv">{screenShots}</div>
      </Link>
    </div>
  );
}

export default ProjectCard;
