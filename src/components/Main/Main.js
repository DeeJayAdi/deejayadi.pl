import "./Main.css";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import Contact from "./components/Contact/Contact";

const Main = (props) => (
  <main>
    <AboutMe
      LanguagesToolsAndTechnologiesElement={
        props.LanguagesToolsAndTechnologiesElement
      }
    />
    <MyProjects MyProjects={props.MyProjects} />
    <Contact />
  </main>
);

export default Main;
