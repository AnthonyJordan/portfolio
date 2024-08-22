import "./About.css";
import config from "../config.json";

function About() {
  return (
    <div className="aboutDiv">
      <h2>Anthony Jordan</h2>
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
