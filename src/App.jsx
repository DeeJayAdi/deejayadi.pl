import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import LangDetector from "./Helper/LangDetector";
import store from "./Storage/Store";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <LangDetector />
        <Header />
        <Main />
        <Footer />
      </Provider>
    );
  }
}

export default App;
