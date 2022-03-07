import { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";

export default class App extends Component {
  state = {
    LanguagesToolsAndTechnologiesElement: [
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg",
        alt: "HTML5",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-original.svg",
        alt: "CSS3",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg",
        alt: "NodeJS",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original-wordmark.svg",
        alt: "ReactJS",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mysql/mysql-original-wordmark.svg",
        alt: "MySQL",
      },

      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/github/github-original-wordmark.svg",
        alt: "GitHub",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/git/git-original.svg",
        alt: "Git",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/kubernetes/kubernetes-plain-wordmark.svg",
        alt: "Kubernetes",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/docker/docker-original.svg",
        alt: "Docker",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/windows8/windows8-original.svg",
        alt: "Windows",
      },
      {
        imgLink:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/raspberrypi/raspberrypi-original.svg",
        alt: "Raspberry PI",
      },
    ],
    MyProjects: [
      {
        label:
          "Młodzieżowa Orkiestra Dęta Zespołu Szkół Żeglugi Śródlądowej im. Bohaterów Westerplatte",
        url: "http://zegluga1.home.pl/orkiestra/pl/",
      },
      {
        label: "AnitaStyle.pl",
        url: "https://anitastyle.pl",
      },
    ],
    skills: [
      { icon: "", label: "HTML", percent: 80 },
      { icon: "", label: "CSS", percent: 80 },
      { icon: "", label: "JavaScript", percent: 80 },
      { icon: "", label: "PHP", percent: 40 },
      { icon: "", label: "C++", percent: 30 },
      { icon: "", label: "Docker", percent: 40 },
      { icon: "", label: "Kubernetes", percent: 40 },
    ],
    navButtons: [
      { id: "top", label: <FontAwesomeIcon icon={faArrowUp} /> },
      { id: "aboutme", label: "O mnie" },
      { id: "skillbar", label: "Umiejętności" },
      { id: "myprojects", label: "Moje projekty" },
      { id: "contact", label: "Kontakt" },
    ],
  };
  handleGoTo = (id) => {
    console.log(id);
  };
  render() {
    return (
      <>
        <Nav buttons={this.state.navButtons} />
        <Header />
        <Main
          skills={this.state.skills}
          myProjects={this.state.MyProjects}
          ltat={this.state.LanguagesToolsAndTechnologiesElement}
        />
        <Footer />
      </>
    );
  }
}
