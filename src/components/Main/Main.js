import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import MyProjects from "./components/MyProjects/MyProjects";
import SkillBars from "./components/SkillBars/SkillBars";
import "./Main.css";

const Main = (props) => (
  <main>
    <AboutMe ltat={props.ltat} />
    <SkillBars skills={props.skills} />
    <MyProjects myProjects={props.myProjects} />
    <Contact />
  </main>
);

export default Main;
