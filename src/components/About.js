import "./About.css";
import config from "../config";

function About() {
  return (
    <div className="aboutDiv">
      <h2 className="">Anthony Jordan</h2>
      <img
        className="headshotImg"
        src={require("../images/headshot.jpg")}
        alt="facial headshot"
      />
      <p className="aboutMeP">{config.aboutMe}</p>
    </div>
  );
}
export default About;
