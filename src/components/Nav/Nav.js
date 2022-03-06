import "./Nav.css";

const Button = (props) => (
  <button onClick={() => props.onClick(props.id)}>{props.label}</button>
);

const id_list = [
  { id: "home", label: "Home page" },
  { id: "aboutme", label: "About me" },
  { id: "myprojects", label: "My projects" },
  { id: "contact", label: "Contact" },
];

const Nav = (props) => (
  <nav>
    {id_list.map((e, index) => (
      <Button
        key={index}
        onClick={props.handleGoTo}
        label={e.label}
        id={e.id}
      />
    ))}
  </nav>
);

export default Nav;
