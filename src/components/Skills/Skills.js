import Skill from "./Components/Skill";
import "./Skills.css";

const skills = [
  { name: "html", percent: 80 },
  { name: "javascript", percent: 70 },
  { name: "nodejs", percent: 30 },
  { name: "css", percent: 65 },
  { name: "react js", percent: 50 },
  { name: "kubernetes", percent: 30 },
  { name: "docker", percent: 40 },
  { name: "git", percent: 50 },
  { name: "php", percent: 20 },
];

const Skills = (props) => (
  <section className="skills" id="skills">
    <h1>Skills</h1>
    <div className="skill-list">
      {skills.map((s, index) => (
        <Skill key={index} name={s.name} percent={s.percent} />
      ))}
    </div>
  </section>
);

export default Skills;
