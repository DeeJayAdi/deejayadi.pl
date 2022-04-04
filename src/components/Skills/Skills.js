import "./Skills.css";

const Skill = (props) => (
  <div className="skill">
    <div className="skill-circle">
      <p>{props.percent}%</p>
    </div>
    <p>{props.name}</p>
  </div>
);

const Skills = (props) => (
  <section className="skills" id="skills">
    <h1>Skills</h1>
    <div className="skill-list">
      <Skill name="html" percent={75} />
      <Skill name="javascript" percent={60} />
      <Skill name="css" percent={70} />
    </div>
  </section>
);

export default Skills;
