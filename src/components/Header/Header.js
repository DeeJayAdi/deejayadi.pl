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
      onClick={props.handleGoToElement}
    />
    <Button label="O mnie" name="aboutme" onClick={props.handleGoToElement} />
    <Button
      label="Moje projekty"
      name="myprojects"
      onClick={props.handleGoToElement}
    />
    <Button label="Kontakt" name="contact" onClick={props.handleGoToElement} />
  </nav>
);

const Header = (props) => (
  <>
    <header id="homepage"></header>
    <Nav handleGoToElement={props.handleGoToElement} />
  </>
);
export default Header;
