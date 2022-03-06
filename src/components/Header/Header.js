import { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const [opacity, setOpacity] = useState(0);

  setTimeout(() => {
    setOpacity(1);
  }, 2000);

  return (
    <header>
      <h1 style={{ opacity: opacity }}>Welcome!</h1>
    </header>
  );
};

export default Header;
