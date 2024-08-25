import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [selection, setSelection] = useState("");
  return (
    <div className="navBarDiv">
      <nav className="navBarNav">
        <div>
          <Link onClick={() => setSelection("")} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link onClick={() => setSelection("projects")} to="/projects">
            Projects
          </Link>
        </div>
        <div>
          <Link smooth to={`/${selection}#contact`}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
