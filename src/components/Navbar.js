import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [selection, setSelection] = useState("");
  return (
    <div className="navBarDiv">
      <nav className="navBarNav">
        <div className="navLinkDiv">
          <Link className="navLink" onClick={() => setSelection("")} to="/">
            Home
          </Link>
        </div>
        <div className="navLinkDiv">
          <Link
            className="navLink"
            onClick={() => setSelection("projects")}
            to="/projects"
          >
            Projects
          </Link>
        </div>
        <div className="navLinkDiv">
          <Link className="navLink" smooth to={`/${selection}#contact`}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
