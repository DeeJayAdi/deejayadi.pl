import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { useState } from "react";

const goTo = (e, id) => {
  if (!document.getElementById(id)) return;
  const h = e.target.offsetHeight;
  const y = document.getElementById(id).offsetTop;

  window.scrollTo({ top: y - h - 100, behavior: "smooth" });
};

const Nav = (props) => {
  const [displayMenu, setDisplayMenu] = useState(!isMobile);
  const changeVisiblity = () => setDisplayMenu(!displayMenu);

  return (
    <nav>
      <div className="showHide" onClick={changeVisiblity}>
        <FontAwesomeIcon icon={displayMenu ? faXmark : faBars} />
      </div>
      <div className="menu" style={{ display: !displayMenu && "none" }}>
        {props.buttons.map((bt, index) => (
          <button
            onClick={(e) => {
              goTo(e, bt.id);
              setDisplayMenu(!isMobile);
            }}
            key={index}
          >
            {bt.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
