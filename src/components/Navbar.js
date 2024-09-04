import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [selection, setSelection] = useState("");
  return (
    <div className="navBarDiv">
      <nav className="navBarNav">
        <Link className="navLink" onClick={() => setSelection("")} to="/">
          <div className="navLinkDiv">Home</div>
        </Link>

        <Link
          className="navLink"
          onClick={() => setSelection("projects")}
          to="/projects"
        >
          <div className="navLinkDiv">Projects</div>
        </Link>
        <Link className="navLink" smooth to={`/${selection}#contact`}>
          <div className="navLinkDiv">Contact</div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
