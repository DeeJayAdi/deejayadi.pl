import "./Skill.css";

const Skill = (props) => (
  <div className="skill">
    <div className="skill-circle noselect">
      <div></div>
      <p>{props.percent}%</p>
    </div>
    <p className="name">{props.name}</p>
  </div>
);

export default Skill;
