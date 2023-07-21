import React from "react";
import LangSelector from "../LangSelector";
import "./style.scss";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="main">
      <LangSelector />
      <div className="content">
        Copyright &copy; {year} by <a href="/">DeeJay Adi</a>
      </div>
    </footer>
  );
};

export default Footer;
