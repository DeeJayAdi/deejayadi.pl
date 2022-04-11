import "./Nav.css";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = (props) => (
  <nav className="menu">
    <a href="/" className="title">
      deejay adi
    </a>
    <div className="hamburger">
      <GiHamburgerMenu />
    </div>
    <div className="menu">
      <a className="linkBt" href="#" title="Home">
        <AiFillHome />
      </a>
      <a className="linkBt" href="#skills" title="Skills">
        <BsCodeSlash />
      </a>
      <a className="linkBt" href="#portfolio" title="Portfolio">
        <MdWork />
      </a>
      <a className="linkBt" href="#contact" title="Contact">
        <AiOutlineMail />
      </a>
    </div>
  </nav>
);

export default Nav;
