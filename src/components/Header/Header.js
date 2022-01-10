import "./Header.css";

const Button = (props) => (
  <button name={props.name} onClick={props.onClick}>
    {props.label}
  </button>
);

const Nav = (props) => (
  <nav className="menu">
    <Button
      label="Strona główna"
      name="homepage"
      onClick={props.handleChangeActivePage}
    />
    <Button
      label="O mnie"
      name="aboutme"
      onClick={props.handleChangeActivePage}
    />
    <Button
      label="Moje projekty"
      name="myprojects"
      onClick={props.handleChangeActivePage}
    />
    <Button
      label="Kontakt"
      name="contact"
      onClick={props.handleChangeActivePage}
    />
  </nav>
);

const Header = (props) => (
  <header>
    <Nav handleChangeActivePage={props.handleChangeActivePage} />
  </header>
);

export default Header;
