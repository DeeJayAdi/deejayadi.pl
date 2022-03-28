import Skill from "./Components/Skill";
import "./Skills.css";

const Skills = (props) => (
  <div className="skills">
    <h2>Skills</h2>
    <div className="skill-list">
      {props.list.map((skill, index) => (
        <Skill key={index} name={skill.label} percent={skill.percent} />
      ))}
    </div>
  </div>
);

export default Skills;
