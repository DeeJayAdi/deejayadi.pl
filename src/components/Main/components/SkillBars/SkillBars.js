import { useState } from "react";
import "./SkillBars.css";

const SkillBar = (props) => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    const y = document.getElementById("skillbar").offsetTop;
    if (y >= window.scrollY)
      setTimeout(() => {
        setShow(true);
      }, 500);
  });

  return (
    <div className="skillBar">
      <p className="label">{props.label}</p>
      <div className="bar" style={{ width: `${show && props.percent}%` }}></div>
      <div className="percent">{props.percent}%</div>
    </div>
  );
};

const SkillBars = (props) => (
  <div id="skillbar" className="box box-info skillBars noselect">
    <h1>Umiejętności</h1>
    <div className="skilList">
      {props.skills.map((s, index) => (
        <SkillBar key={index} label={s.label} percent={s.percent} />
      ))}
    </div>
  </div>
);

export default SkillBars;
