import { useState } from "react";
import "./Skill.css";

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const Skill = (props) => {
  const [percent, setPercent] = useState(0);

  const check = () => {
    const e = document.getElementById(props.name);

    if (isInViewport(e)) {
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
