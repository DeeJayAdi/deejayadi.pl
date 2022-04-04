import { useState } from "react";
import "./Skill.css";

const Skill = (props) => {
  const [percent, setPercent] = useState(0);

  const check = () => {
    const e = document.getElementById(props.name);

    if (window.scrollY > e.offsetTop - 200) {
      setTimeout(() => {
        setPercent(props.percent);
      }, 300);
    }
  };

  window.addEventListener("scroll", check);

  return (
    <div className="skill" onClick={check} id={props.name}>
      <div className="skill-circle">
        <div className="block" style={{ height: `${percent}%` }}></div>
        <div className="inner center"></div>
        <p className="center">{props.percent}%</p>
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Skill;
