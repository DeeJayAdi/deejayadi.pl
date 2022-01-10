import "./Footer.css";

const Footer = (props) => {
  const current_year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright &copy; {current_year} by&nbsp;
        <a href="https://deejayadi.pl">DeeJay Adi</a>
      </p>
    </footer>
  );
};

export default Footer;
