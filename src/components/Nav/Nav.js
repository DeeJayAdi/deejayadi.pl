import "./Nav.css";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

const Nav = (props) => (
  <nav className="menu">
    <a className="linkBt" href="#" title="Home">
      <AiFillHome />
    </a>
    <a className="linkBt" href="#aboutme" title="About me">
      <IoMdContact />
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
  </nav>
);

export default Nav;
