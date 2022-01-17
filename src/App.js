import { Component } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

export default class App extends Component {
  handleGoToElement = (e) => {
    const y = document.querySelector("nav").offsetHeight * 2;
    window.scrollTo(0, document.getElementById(e.target.name).offsetTop - y);
  };
  render() {
    return (
      <>
        <Header handleGoToElement={this.handleGoToElement} />
        <Main />
        <Footer />
      </>
    );
  }
}
