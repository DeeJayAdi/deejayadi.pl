import React from "react";
import Aboutme from "./Components/Aboutme";
import Contact from "./Components/Contact";
import MyWorks from "./Components/MyWorks";
import SocialMedia from "./Components/SocialMedia";
import "./style.scss";

const Main = (props) => {
  return (
    <main>
      <Aboutme />
      <MyWorks />
      <SocialMedia />
      <Contact />
    </main>
  );
};

export default Main;
