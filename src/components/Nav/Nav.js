import GoToId from "./Components/GoToId/GoToId";
import "./Nav.css";

const Nav = (props) => (
  <nav className="menu">
    <a className="label" href="/">
      deejay adi
    </a>
    <div className="nav-list">
      <GoToId
        to="top"
        title="Home page"
        label={<i className="fa-solid fa-house"></i>}
      />
      <GoToId
        to="portfolio"
        title="Portfolio"
        label={<i className="fa-solid fa-briefcase"></i>}
      />
      <GoToId
        to="portfolio"
        title="Contact"
        label={<i className="fa-solid fa-address-card"></i>}
      />
    </div>
  </nav>
);

export default Nav;
