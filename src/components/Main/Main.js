import { Component } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import MyProjects from "./components/MyProjects/MyProjects";
import "./Main.css";

class Main extends Component {
  state = {
    pl: {
      aboutme: {
        title: "O mnie",
      },
      myProjects: {
        title: "Moje projekty",
      },
      contact: {
        title: "Kontakt",
      },
    },
  };
  render() {
    const data = this.state.pl;
    return (
      <main>
        <AboutMe data={data.aboutme} />
        <MyProjects data={data.myProjects} />
        <Contact data={data.contact} />
      </main>
    );
  }
}

export default Main;
