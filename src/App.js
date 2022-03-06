import { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import data from "./data.json";

export default class App extends Component {
  state = data;
  handleGoTo = (id) => {
    console.log(id);
  };
  render() {
    return (
      <>
        <Nav handleGoTo={this.handleGoTo} />
        <Header />
        <Main
          LanguagesToolsAndTechnologiesElement={
            this.state.LanguagesToolsAndTechnologiesElement
          }
          MyProjects={this.state.MyProjects}
        />
        <Footer />
      </>
    );
  }
}
