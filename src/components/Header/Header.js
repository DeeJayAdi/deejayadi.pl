import "./Header.css";

const Header = (props) => (
  <section className="header">
    <h1 className="title">Hi, I'm</h1>
    <svg viewBox="0 0 1000 200">
      <text x="50%" y="50%" dy=".15em" textAnchor="middle">
        deejay adi
      </text>
    </svg>
  </section>
);

export default Header;
