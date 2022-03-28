import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="top"></div>
        <Nav />
      </BrowserRouter>
    );
  }
}

export default App;
