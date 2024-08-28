import "./Certifications.css";
import config from "../config";

function Certifications() {
  const certs = config.certifications.map((certification) => (
    <img
      className="certImg"
      src={certification.image}
      alt={certification.name}
    />
  ));
  return <div className="certDiv">{certs}</div>;
}

export default Certifications;
