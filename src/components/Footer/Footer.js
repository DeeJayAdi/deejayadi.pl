import "./Footer.css";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        Copyright &copy; {year} by <a href="/">DeeJay Adi</a>
      </p>
    </footer>
  );
};

export default Footer;
