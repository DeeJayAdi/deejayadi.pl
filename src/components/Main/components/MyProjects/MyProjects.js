import "./MyProjects.css";

const Project = (props) => (
  <a className="project" href={props.link} target="blank">
    {props.projectName}
  </a>
);

const MyProjects = (props) => (
  <div className="box">
    <h1>My Projects</h1>
    <div className="container projectsList">
      {props.MyProjects.map((p, index) => (
        <Project key={index} link={p.link} projectName={p.projectName} />
      ))}
    </div>
  </div>
);

export default MyProjects;
