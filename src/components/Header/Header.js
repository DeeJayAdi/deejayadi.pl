import "./Header.css";

const Header = (props) => (
  <section className="header noselect">
    <h1>Hi, I'm</h1>
    <svg viewBox="0 0 1000 200">
      <text x="50%" y="50%" dy=".15em" textAnchor="middle">
        deejay adi
      </text>
    </svg>
  </section>
);

export default Header;
