import "./ProjectPreview.css";

function ProjectPreview() {
  return (
    <div className="projectPreviewDiv">
      <div className="carousel">
        <div className="carousel-track">
          <img src={require("../images/projectImages/ph1.png")} alt="Image 1" />
          <img src={require("../images/projectImages/ph2.png")} alt="Image 2" />
          <img src={require("../images/projectImages/ph3.jpg")} alt="Image 3" />
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
