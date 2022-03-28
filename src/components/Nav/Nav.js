import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => (
  <nav className="menu">
    <a className="label" href="/">
      deejay adi
    </a>
    <div className="nav-list">
      <Link title="Home page" className="nav-link" to="/">
        <i className="fa-solid fa-house"></i>
      </Link>
      <Link title="Portfolio" className="nav-link" to="portfolio">
        <i className="fa-solid fa-briefcase"></i>
      </Link>
      <Link title="Contact" className="nav-link" to="contact">
        <i className="fa-solid fa-address-card"></i>
      </Link>
    </div>
  </nav>
);

export default Nav;
