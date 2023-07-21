import React, { useState } from "react";
import Hamburger from "./Components/Hamburger";
import List from "./Components/List";
import "./style.scss";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <header className="main">
      <Hamburger show={show} handleShow={handleShow} />
      <a className="logo" href="/">
        DeeJay Adi
      </a>
      <List show={show} handleShow={handleShow} />
    </header>
  );
};

export default Header;
