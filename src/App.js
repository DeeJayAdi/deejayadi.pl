import { Component } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

export default class App extends Component {
  state = {
    activePage: "",
  };
  handleChangeActivePage = (e) => {
    this.setState({ activePage: e.target.name });
  };
  render() {
    return (
      <>
        <Header handleChangeActivePage={this.handleChangeActivePage} />
        <Main />
        <Footer />
      </>
    );
  }
}
