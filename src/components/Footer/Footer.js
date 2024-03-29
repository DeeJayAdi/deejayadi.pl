import "./Footer.css";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; <span>{year} by</span> <a href="/">DeeJay Adi</a>
      </p>
    </footer>
  );
};

export default Footer;
