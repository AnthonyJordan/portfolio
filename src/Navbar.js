import {Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return( <div className='navBarDiv'>
        <nav className='navBarNav'>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/projects">Projects</Link></div>
            <div><Link to="/contact">Contact</Link></div>
        </nav>
  </div>)
}

export default Navbar