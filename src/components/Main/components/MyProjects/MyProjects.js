import "./MyProjects.css";

const MyProjects = (props) => (
  <div id="myprojects" className="box box-info noselect">
    <h1>Moje projekty</h1>
    <div className="list">
      {props.myProjects.map((p, index) => (
        <a key={index} className="listItem" target="blank" href={p.url}>
          {p.label}
        </a>
      ))}
    </div>
  </div>
);

export default MyProjects;
