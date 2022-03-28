import Skills from "./Components/Skills/Skills";

const HomePage = (props) => (
  <div className="homepage box">
    <Skills list={props.skills} />
  </div>
);

export default HomePage;
